const TRANSFORMERS_CDN = 'https://cdn.jsdelivr.net/npm/@huggingface/transformers@4';

const DEFAULT_MODEL = 'onnx-community/gemma-4-E2B-it-ONNX';
const DEFAULT_EMBEDDING_MODEL = 'onnx-community/all-MiniLM-L6-v2';
const DEFAULT_BROWSER_LLM_DTYPE = 'q4f16';

export class BrowserAIProvider {
    constructor (baseUrl = null) {
        this.model = DEFAULT_MODEL;
        this.embeddingModel = DEFAULT_EMBEDDING_MODEL;
        this.browserLLMDtype = DEFAULT_BROWSER_LLM_DTYPE;
        this.baseUrl = baseUrl;
        this._pipe = null;
        this._embeddingPipe = null;
        this._pastKeyValues = null;
        this._lastMessages = null;
        this.onProgress = null;
    }

    _parseModelId (modelId) {
        if (!modelId) return {name: '', dtype: null};
        const knownDtypes = ['auto', 'q4f16', 'q4', 'q2f16', 'q2', 'q8', 'fp16', 'fp32'];
        const lastUnderscore = modelId.lastIndexOf('_');
        if (lastUnderscore !== -1) {
            const potentialDtype = modelId.substring(lastUnderscore + 1);
            if (knownDtypes.includes(potentialDtype)) {
                return {
                    name: modelId.substring(0, lastUnderscore),
                    dtype: potentialDtype
                };
            }
        }
        return {name: modelId, dtype: null};
    }

    setModel (modelId) {
        if (modelId) {
            const parsed = this._parseModelId(modelId);
            if (parsed.name !== this.model || (parsed.dtype && parsed.dtype !== this.browserLLMDtype)) {
                this.model = parsed.name;
                if (parsed.dtype) {
                    this.browserLLMDtype = parsed.dtype;
                }
                this._pipe = null;
                this._pastKeyValues = null;
            }
        }
    }

    setEmbeddingModel (modelId) {
        if (modelId) {
            const parsed = this._parseModelId(modelId);
            if (parsed.name !== this.embeddingModel || (parsed.dtype && parsed.dtype !== this.browserLLMDtype)) {
                this.embeddingModel = parsed.name;
                if (parsed.dtype) {
                    this.browserLLMDtype = parsed.dtype;
                }
                this._embeddingPipe = null;
            }
        }
    }

    setBrowserLLMDtype (browserLLMDtype) {
        if (browserLLMDtype && browserLLMDtype !== this.browserLLMDtype) {
            this.browserLLMDtype = browserLLMDtype;
            this._pipe = null;
            this._embeddingPipe = null;
            this._pastKeyValues = null;
        }
    }

    getBrowserLLMDtype () {
        return this.browserLLMDtype;
    }

    resetCache () {
        this._pastKeyValues = null;
        this._lastMessages = null;
    }

    async _getPipeline (allowDownload = false) {
        if (this._pipe) return this._pipe;
        console.log(
            `[BrowserAI] Loading pipeline for model: ${this.model},` +
            ` dtype: ${this.browserLLMDtype}, allowDownload: ${allowDownload}`
        );
        const {pipeline, env, ModelRegistry} = await import(TRANSFORMERS_CDN);
        env.allowRemoteModels = allowDownload;
        env.allowLocalModels = true;
        env.logLevel = 'info';
        if (this.baseUrl) {
            let host = this.baseUrl;
            if (!host.endsWith('/')) {
                host += '/';
            }
            env.remoteHost = host;
            console.log(`[BrowserAI] Custom baseUrl applied: ${host}`);
        }

        let targetDtype = this.browserLLMDtype;
        let availableDtypes = [];
        try {
            availableDtypes = await ModelRegistry.get_available_dtypes(this.model);
            console.log(`[BrowserAI] Available dtypes for ${this.model}:`, availableDtypes);
        } catch (e) {
            console.warn(`[BrowserAI] Failed to fetch available dtypes:`, e);
        }

        if (availableDtypes.length > 0) {
            if (targetDtype === 'auto' || !availableDtypes.includes(targetDtype)) {
                const preferredDtypes = ['q4f16', 'q4', 'q2f16', 'q2', 'q8', 'fp16', 'fp32'];
                let selectedDtype = null;
                for (const dtype of preferredDtypes) {
                    if (availableDtypes.includes(dtype)) {
                        selectedDtype = dtype;
                        break;
                    }
                }
                if (!selectedDtype) {
                    selectedDtype = availableDtypes[0];
                }
                console.log(
                    `[BrowserAI] Selected dtype for pipeline: ${selectedDtype}` +
                    ` (original requested: ${targetDtype})`
                );
                targetDtype = selectedDtype;
            }
        }

        // Retry loop as a second safety net if loading fails (e.g. file not found, WebGPU session limits)
        const preferredDtypes = ['q4f16', 'q4', 'q2f16', 'q2', 'q8', 'fp16', 'fp32'];
        let dtypesToTry = [targetDtype];
        const index = preferredDtypes.indexOf(targetDtype);
        if (index === -1) {
            dtypesToTry = dtypesToTry.concat(preferredDtypes);
        } else {
            dtypesToTry = dtypesToTry.concat(preferredDtypes.slice(index + 1));
        }
        dtypesToTry = Array.from(new Set(dtypesToTry));

        const devicesToTry = ['webgpu', 'wasm'];
        let lastError = null;
        let loaded = false;

        for (const device of devicesToTry) {
            if (loaded) break;

            for (const dtype of dtypesToTry) {
                try {
                    console.log(`[BrowserAI] Loading text-generation pipeline with device: ${device}, dtype: ${dtype}`);
                    this._pipe = await pipeline('text-generation', this.model, {
                        device: device,
                        dtype: dtype,
                        ...(this.onProgress && {progress_callback: this.onProgress})
                    });
                    console.log(`[BrowserAI] Pipeline loaded successfully with device: ${device}, dtype: ${dtype}`);
                    lastError = null;
                    loaded = true;
                    break;
                } catch (err) {
                    console.warn(
                        `[BrowserAI] Failed to load pipeline with device: ${device}, dtype: ${dtype}. Error:`, err
                    );
                    lastError = err;

                    const isFileNotFound = err.message && (
                        err.message.includes('Could not locate file') ||
                        err.message.includes('404') ||
                        err.message.includes('not found')
                    );

                    const isSessionError = err.message && (
                        err.message.includes("Can't create a session") ||
                        err.message.includes('session') ||
                        err.message.includes('GatherBlockQuantized')
                    );

                    if (isFileNotFound) {
                        if (!allowDownload) {
                            throw new Error('MODEL_NOT_DOWNLOADED');
                        }
                        continue;
                    } else if (isSessionError && device === 'webgpu') {
                        console.warn(`[BrowserAI] WebGPU session creation failed. Will fallback to wasm.`);
                        break; // exit dtype loop to try wasm device
                    } else {
                        continue;
                    }
                }
            }
        }

        if (lastError) {
            console.error(`[BrowserAI] All device/dtype attempts failed for model: ${this.model}`);
            const isDownloadRequired = !allowDownload && lastError.message && (
                lastError.message.includes('Could not locate file') ||
                lastError.message.includes('404') ||
                lastError.message.includes('not found')
            );
            if (isDownloadRequired) {
                throw new Error('MODEL_NOT_DOWNLOADED');
            }
            throw lastError;
        }

        return this._pipe;
    }

    async _getEmbeddingPipeline (allowDownload = false) {
        if (this._embeddingPipe) return this._embeddingPipe;
        console.log(
            `[BrowserAI] Loading embedding pipeline for model: ${this.embeddingModel},` +
            ` dtype: ${this.browserLLMDtype}, allowDownload: ${allowDownload}`
        );
        const {pipeline, env, ModelRegistry} = await import(TRANSFORMERS_CDN);
        env.allowRemoteModels = allowDownload;
        env.allowLocalModels = true;
        if (this.baseUrl) {
            let host = this.baseUrl;
            if (!host.endsWith('/')) {
                host += '/';
            }
            env.remoteHost = host;
        }

        let targetDtype = this.browserLLMDtype;
        let availableDtypes = [];
        try {
            availableDtypes = await ModelRegistry.get_available_dtypes(this.embeddingModel);
            console.log(`[BrowserAI] Available embedding dtypes for ${this.embeddingModel}:`, availableDtypes);
        } catch (e) {
            console.warn(`[BrowserAI] Failed to fetch available embedding dtypes:`, e);
        }

        if (availableDtypes.length > 0) {
            if (targetDtype === 'auto' || !availableDtypes.includes(targetDtype)) {
                const preferredDtypes = ['q4f16', 'q4', 'q8', 'fp16', 'fp32'];
                let selectedDtype = null;
                for (const dtype of preferredDtypes) {
                    if (availableDtypes.includes(dtype)) {
                        selectedDtype = dtype;
                        break;
                    }
                }
                if (!selectedDtype) {
                    selectedDtype = availableDtypes[0];
                }
                console.log(
                    `[BrowserAI] Selected dtype for embedding: ${selectedDtype}` +
                    ` (original requested: ${targetDtype})`
                );
                targetDtype = selectedDtype;
            }
        }

        // Retry loop as a second safety net if loading fails (e.g. file not found, WebGPU session limits)
        const preferredEmbeddingDtypes = ['q4f16', 'q4', 'q8', 'fp16', 'fp32'];
        let embeddingDtypesToTry = [targetDtype];
        const embeddingIndex = preferredEmbeddingDtypes.indexOf(targetDtype);
        if (embeddingIndex === -1) {
            embeddingDtypesToTry = embeddingDtypesToTry.concat(preferredEmbeddingDtypes);
        } else {
            embeddingDtypesToTry = embeddingDtypesToTry.concat(preferredEmbeddingDtypes.slice(embeddingIndex + 1));
        }
        embeddingDtypesToTry = Array.from(new Set(embeddingDtypesToTry));

        const devicesToTry = ['webgpu', 'wasm'];
        let lastError = null;
        let loaded = false;

        for (const device of devicesToTry) {
            if (loaded) break;

            for (const dtype of embeddingDtypesToTry) {
                try {
                    console.log(`[BrowserAI] Loading embedding pipeline with device: ${device}, dtype: ${dtype}`);
                    this._embeddingPipe = await pipeline('feature-extraction', this.embeddingModel, {
                        device: device,
                        dtype: dtype,
                        ...(this.onProgress && {progress_callback: this.onProgress})
                    });
                    console.log(
                        `[BrowserAI] Embedding pipeline loaded successfully with device: ${device}, dtype: ${dtype}`
                    );
                    lastError = null;
                    loaded = true;
                    break;
                } catch (err) {
                    console.warn(
                        `[BrowserAI] Failed to load embedding pipeline` +
                        ` with device: ${device}, dtype: ${dtype}. Error:`, err
                    );
                    lastError = err;

                    const isFileNotFound = err.message && (
                        err.message.includes('Could not locate file') ||
                        err.message.includes('404') ||
                        err.message.includes('not found')
                    );

                    const isSessionError = err.message && (
                        err.message.includes("Can't create a session") ||
                        err.message.includes('session') ||
                        err.message.includes('GatherBlockQuantized')
                    );

                    if (isFileNotFound) {
                        if (!allowDownload) {
                            throw new Error('MODEL_NOT_DOWNLOADED');
                        }
                        continue;
                    } else if (isSessionError && device === 'webgpu') {
                        console.warn(`[BrowserAI] WebGPU embedding session creation failed. Will fallback to wasm.`);
                        break; // exit dtype loop to try wasm device
                    } else {
                        continue;
                    }
                }
            }
        }

        if (lastError) {
            console.error(`[BrowserAI] All device/dtype attempts failed for embedding model: ${this.embeddingModel}`);
            const isDownloadRequired = !allowDownload && lastError.message && (
                lastError.message.includes('Could not locate file') ||
                lastError.message.includes('404') ||
                lastError.message.includes('not found')
            );
            if (isDownloadRequired) {
                throw new Error('MODEL_NOT_DOWNLOADED');
            }
            throw lastError;
        }

        return this._embeddingPipe;
    }

    async generate (messages, options = {}) {
        console.log(`[BrowserAI] Starting generate. Messages:`, messages, `Options:`, options);
        const {DynamicCache, TextStreamer} = await import(TRANSFORMERS_CDN);
        console.log(`[BrowserAI] Getting pipeline...`);
        const pipe = await this._getPipeline(false);

        const useCache = options.useCache !== false;
        
        let isContextContinued = false;
        if (useCache && this._pastKeyValues && this._lastMessages) {
            if (messages.length >= this._lastMessages.length) {
                isContextContinued = this._lastMessages.every(
                    (msg, idx) => msg.role === messages[idx].role && msg.content === messages[idx].content
                );
            }
        }

        if (useCache) {
            if (!isContextContinued || !this._pastKeyValues) {
                console.log(`[BrowserAI] Conversation context changed or empty cache. Resetting KV cache.`);
                this._pastKeyValues = new DynamicCache();
            }
            this._lastMessages = messages;
        } else {
            this._pastKeyValues = null;
            this._lastMessages = null;
        }

        const useStreaming = typeof options.onToken === 'function';
        console.log(`[BrowserAI] useCache: ${useCache}, useStreaming: ${useStreaming}`);
        const streamer = useStreaming ?
            new TextStreamer(pipe.tokenizer, {
                skip_prompt: true,
                skip_special_tokens: false,
                callback_function: token => {
                    console.log(`[BrowserAI] Token received: ${JSON.stringify(token)}`);
                    options.onToken(token);
                }
            }) :
            null;

        const doSample = typeof options.temperature === 'number' && options.temperature > 0;

        try {
            const output = await pipe(messages, {
                add_generation_prompt: true,
                ...(useCache && {past_key_values: this._pastKeyValues}),
                max_new_tokens: options.maxOutputTokens || 256,
                do_sample: doSample,
                ...(doSample && {temperature: options.temperature}),
                ...(streamer && {streamer})
            });
            console.log(`[BrowserAI] Pipeline execution completed. Raw output:`, output);

            if (Array.isArray(output) && output.length > 0) {
                const generated = output[0].generated_text;
                console.log(`[BrowserAI] Generated content:`, generated);
                if (Array.isArray(generated)) {
                    const last = generated[generated.length - 1];
                    return last && last.content ? last.content : String(last);
                }
                return String(generated);
            }
            return '';
        } catch (err) {
            console.error(`[BrowserAI] Error during pipeline inference:`, err);
            throw err;
        }
    }

    async embed (text) {
        const pipe = await this._getEmbeddingPipeline(false);
        const output = await pipe(text, {pooling: 'mean', normalize: true});
        return Array.from(output.data);
    }
}

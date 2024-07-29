// dynamic import
let GoogleGenerativeAI;
(async () => {
    ({GoogleGenerativeAI} = await import(
        /* webpackIgnore: true */
        'https://esm.run/@google/generative-ai'
    ));
})();

export const HarmCategory = {
    HARM_CATEGORY_UNSPECIFIED: 'HARM_CATEGORY_UNSPECIFIED',
    HARM_CATEGORY_HATE_SPEECH: 'HARM_CATEGORY_HATE_SPEECH',
    HARM_CATEGORY_SEXUALLY_EXPLICIT: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
    HARM_CATEGORY_HARASSMENT: 'HARM_CATEGORY_HARASSMENT',
    HARM_CATEGORY_DANGEROUS_CONTENT: 'HARM_CATEGORY_DANGEROUS_CONTENT'
};

export const HarmBlockThreshold = {
    HARM_BLOCK_THRESHOLD_UNSPECIFIED: 'HARM_BLOCK_THRESHOLD_UNSPECIFIED',
    BLOCK_LOW_AND_ABOVE: 'BLOCK_LOW_AND_ABOVE',
    BLOCK_MEDIUM_AND_ABOVE: 'BLOCK_MEDIUM_AND_ABOVE',
    BLOCK_ONLY_HIGH: 'BLOCK_ONLY_HIGH',
    BLOCK_NONE: 'BLOCK_NONE'
};

export const EmbeddingTaskType = {
    TASK_TYPE_UNSPECIFIED: 'TASK_TYPE_UNSPECIFIED',
    RETRIEVAL_QUERY: 'RETRIEVAL_QUERY',
    RETRIEVAL_DOCUMENT: 'RETRIEVAL_DOCUMENT',
    SEMANTIC_SIMILARITY: 'SEMANTIC_SIMILARITY',
    CLASSIFICATION: 'CLASSIFICATION',
    CLUSTERING: 'CLUSTERING'
};

const GEMINI_ADAPTERS = {};

export class GeminiAdapter {

    /**
     * Get models.
     * @returns {object} - models with target.id as key
     * @static
     */
    static get ADAPTERS () {
        return GEMINI_ADAPTERS;
    }

    /**
     * Get model code for data type.
     * @returns {object} model code for data type
     */
    static modelCode = {
        generative: 'gemini-1.5-flash',
        embedding: 'text-embedding-004'
    };

    /**
     * Check if Gemini AI exists for target.
     * @param {Target} target - target to check
     * @returns {boolean} - whether Gemini AI exists for target
     * @static
     * @public
     */
    static existsForTarget (target) {
        return !!GeminiAdapter.ADAPTERS[target.id];
    }

    /**
     * Get Gemini AI for target. Initialize if not exists.
     * @param {Target} target - target to get Gemini AI
     * @returns {GeminiAdapter} - Gemini AI
     */
    static getForTarget (target) {
        const ai = GeminiAdapter.ADAPTERS[target.id];
        if (ai) {
            return ai;
        }
        return new GeminiAdapter(target);
    }

    /**
     * Remove Gemini AI for target.
     * @param {Target} target - target to remove Gemini AI
     * @returns {void}
     */
    static removeForTarget (target) {
        delete GeminiAdapter.ADAPTERS[target.id];
    }

    /**
     * Remove all Gemini Adapter.
     */
    static removeAllAdapter () {
        Object.keys(GeminiAdapter.ADAPTERS).forEach(key => {
            delete GeminiAdapter.ADAPTERS[key];
        });
    }

    /**
     * Get API key.
     * @returns {string} - API key
     */
    static getApiKey () {
        return GoogleGenerativeAI.apiKey;
    }

    /**
     * Set API key.
     * @param {string} key - API key
     * @returns {void}
     */
    static setApiKey (key) {
        GoogleGenerativeAI.apiKey = key;
    }


    constructor (target) {
        this.target = target;
        GeminiAdapter.ADAPTERS[target.id] = this;
        this.sdk = null;
        this.modelCode = Object.assign({}, GeminiAdapter.modelCode);
        this.models = {};
        this.modelParams = {
            generationConfig: {},
            safetySettings: []
        };
        this.chatSession = null;
        this.lastResponse = null;
        this.lastPartialResponse = null;
        this.requesting = false;
    }

    /**
     * Get SDK. Initialize if not exists.
     * @returns {GoogleGenerativeAI} - SDK
     */
    getSDK () {
        if (!this.sdk) {
            this.sdk = new GoogleGenerativeAI(GeminiAdapter.getApiKey());
        }
        return this.sdk;
    }

    /**
     * Get model for data type.
     * @param {string} type - type of model ['generative' | 'embedding' | 'qa']
     * @returns {GenerativeModel} - model
     */
    getModelFor (type) {
        const modelParams = this.getModelParams();
        const model = this.getSDK().getGenerativeModel({
            model: this.modelCode[type],
            generationConfig: modelParams.generationConfig,
            safetySettings: modelParams.safetySettings
        });
        return model;
    }

    /**
     * Get model parameters.
     * @returns {object} - model parameters
     */
    getModelParams () {
        return this.modelParams;
    }

    /**
     * Count tokens by model.
     * @param {Array.<string | object>} content - content to AI
     * @param {string} requestType - type of request {'generate' | 'chat'}
     * @returns {Promise<number>} - a Promise that resolves when the tokens are counted
     */
    async countTokensAs (content, requestType) {
        const model = this.getModelFor('generative');
        let result;
        if (requestType === 'generate') {
            result = await model.countTokens(content);
        } else if (requestType === 'chat') {
            const history = await this.getChatHistory();
            const messageContent = {
                role: 'user',
                parts: [{text: content[0]}] // chat message is always a string at API v1
            };
            const contents = [...history, messageContent];
            result = await model.countTokens({contents});
        }
        return result.totalTokens;
    }

    /**
     * Get chat history.
     * @returns {Promise<Content[]>} - a Promise that resolves when the history is received
     */
    getChatHistory () {
        if (!this.chatSession) {
            return Promise.resolve([]);
        }
        return this.chatSession.getHistory();
    }

    /**
     * Check if target is requesting to AI.
     * @returns {boolean} - whether target is requesting to AI
     */
    isRequesting () {
        return this.requesting;
    }

    /**
     * Set whether target is requesting to AI.
     * @param {boolean} requesting - whether target is requesting to AI
     * @returns {void}
     */
    setRequesting (requesting) {
        this.requesting = requesting;
    }

    /**
     * Get last response from AI.
     * @returns {GenerateContentResponse} - last response
     */
    getLastResponse () {
        return this.lastResponse;
    }

    /**
     * Set last response from AI.
     * @param {GenerateContentResponse} response - last response
     * @returns {void}
     */
    setLastResponse (response) {
        this.lastResponse = response;
    }

    /**
     * Set last partial response from AI.
     * @param {EnhancedGenerateContentResponse} response - last partial response
     * @returns {void}
     */
    setLastPartialResponse (response) {
        this.lastPartialResponse = response;
    }

    /**
     * Get last partial response from AI.
     * @returns {EnhancedGenerateContentResponse} - last partial response
     */
    getLastPartialResponse () {
        return this.lastPartialResponse;
    }

    /**
     * Convert content parts to Gemini AI format.
     * @param {Array.<string | object>} contentParts - content to convert
     * @returns {Array.<string | object>} - content to Gemini AI
     */
    convertContentParts (contentParts) {
        return contentParts.map(p => {
            if (p.type === 'text') {
                return {text: p.data};
            } else if (p.type === 'dataURL') {
                return {
                    inlineData:
                    {
                        data: (p.data.split(',')[1]),
                        mimeType: p.data.substring(p.data.indexOf(':') + 1, p.data.indexOf(';'))
                    }
                };
            }
            return p;
        });
    }

    /**
     * Send generator type prompt to AI.
     * @param {Array.<string | object>} contentParts - prompt to AI
     * @param {boolean} isStreaming - whether to get stream
     * @returns {Promise<GenerateContentResult>} - a Promise that resolves when the prompt is sent
     */
    requestGenerate (contentParts, isStreaming) {
        const model = this.getModelFor('generative');
        const geminiContentParts = this.convertContentParts(contentParts);
        if (isStreaming) {
            return model.generateContentStream(geminiContentParts);
        }
        return model.generateContent(geminiContentParts);
    }

    /**
     * Start chat.
     * @param {Array.<string>} history - history of chat
     * @returns {void}
     */
    startChat (history) {
        const model = this.getModelFor('generative');
        this.chatSession = model.startChat({history, ...this.getModelParams()});
    }

    /**
     * Send chat message to AI.
     * @param {string} contentParts - message to AI
     * @param {boolean} isStreaming - whether to get stream
     * @returns {Promise<GenerateContentResult>} - a Promise that resolves when the message is sent
     */
    requestChat (contentParts, isStreaming) {
        if (!this.chatSession) {
            this.startChat([]);
        }
        const geminiContentParts = this.convertContentParts(contentParts);
        if (isStreaming) {
            return this.chatSession.sendMessageStream(geminiContentParts);
        }
        return this.chatSession.sendMessage(geminiContentParts);
    }

    /**
     * Request embedding of content.
     * @param {Array.<string> | string} contentParts - content to AI
     * @param {string} taskType - type of task {EmbeddingTaskType}
     * @returns {Promise<Array<number>>} - a Promise that resolves when the embedding is received
     */
    async requestEmbedding (contentParts, taskType) {
        if (!contentParts || !contentParts.length) {
            return [];
        }
        const toEmbed = contentParts.reduce((acc, p) => {
            if (p.type === 'text') {
                return acc + p.data;
            }
            // ignore non-text content
            return acc;
        }, '');
        if (!this.embeddingCache) {
            this.embeddingCache = {};
        }
        if (!this.embeddingCache[taskType]) {
            this.embeddingCache[taskType] = {};
        }
        const cache = this.embeddingCache[taskType];
        const key = toEmbed;
        if (cache[key]) {
            return cache[key];
        }
        const model = this.getModelFor('embedding');
        const result = await model.embedContent(toEmbed, taskType);
        cache[key] = result.embedding.values;
        return result.embedding.values;
    }
}

import OpenAI from 'openai';

class FunctionCall {
    constructor (call, requestType, generateParameters) {
        this.call = call;
        this.requestType = requestType;
        this.generateParameters = generateParameters;
        this.status = 'PENDING';
        this.thread = null; // thread to run function
    }
    /**
     * Get function call name.
     * @returns {string} - function call name
     */
    get name () {
        return this.call.function.name;
    }

    /**
     * Get function call arguments.
     * @returns {object} - function call arguments
     */
    get args () {
        try {
            return JSON.parse(this.call.function.arguments);
        } catch (error) {
            return {};
        }
    }

    /**
     * Whether function call is finished.
     * @returns {boolean} - true if function call is finished, false otherwise
     */
    isFinished () {
        return this.status === 'COMPLETED' ||
               this.status === 'FAILED';
    }
}

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
    BLOCK_NONE: 'BLOCK_NONE',
    OFF: 'OFF'
};

export const EmbeddingTaskType = {
    TASK_TYPE_UNSPECIFIED: 'TASK_TYPE_UNSPECIFIED',
    SEMANTIC_SIMILARITY: 'SEMANTIC_SIMILARITY',
    CLASSIFICATION: 'CLASSIFICATION',
    CLUSTERING: 'CLUSTERING',
    RETRIEVAL_DOCUMENT: 'RETRIEVAL_DOCUMENT',
    RETRIEVAL_QUERY: 'RETRIEVAL_QUERY',
    QUESTION_ANSWERING: 'QUESTION_ANSWERING',
    FACT_VERIFICATION: 'FACT_VERIFICATION',
    CODE_RETRIEVAL_QUERY: 'CODE_RETRIEVAL_QUERY'
};

const OPENAI_ADAPTERS = {};

export class OpenAIAdapter {

    /**
     * Get models.
     * @returns {object} - models with target.id as key
     * @static
     */
    static get ADAPTERS () {
        return OPENAI_ADAPTERS;
    }

    /**
     * Default model code for each data type.
     * @returns {object} model code for data type
     */
    static MODEL_CODE = {
        generative: 'gpt-4o-mini',
        embedding: 'text-embedding-3-small'
    };

    /**
     * API key for OpenAI.
     * @type {string}
     */
    static apiKey = null;

    /**
     * Get text of the first candidate from response.
     * @param {object} responses - response from OpenAI
     * @return {?string} response text
     * @static
     */
    static getTextFromResponse (responses) {
        if (!responses) {
            return '';
        }
        if (!Array.isArray(responses)) {
            responses = [responses];
        }
        let contentText = '';
        responses.forEach(aResponse => {
            if (typeof aResponse === 'string') {
                contentText += aResponse;
                return;
            }
            if (aResponse.name?.includes('Error')) {
                contentText += aResponse.message || aResponse.name;
                return;
            }
            if (aResponse.choices && Array.isArray(aResponse.choices)) {
                aResponse.choices.forEach(choice => {
                    if (choice.message && choice.message.content) {
                        contentText += choice.message.content;
                    }
                    if (choice.delta && choice.delta.content) {
                        contentText += choice.delta.content;
                    }
                });
            }
        });
        return contentText;
    }

    /**
     * Check if OpenAI exists for target.
     * @param {Target} target - target to check
     * @returns {boolean} - whether OpenAI exists for target
     * @static
     * @public
     */
    static existsForTarget (target) {
        return !!OpenAIAdapter.ADAPTERS[target.id];
    }

    /**
     * Get OpenAI for target. Initialize if not exists.
     * @param {Target} target - target to get OpenAI
     * @returns {OpenAIAdapter} - OpenAI
     */
    static getForTarget (target) {
        const ai = OpenAIAdapter.ADAPTERS[target.id];
        if (ai) {
            return ai;
        }
        return new OpenAIAdapter(target);
    }

    /**
     * Remove OpenAI for target.
     * @param {Target} target - target to remove OpenAI
     * @returns {void}
     */
    static removeForTarget (target) {
        delete OpenAIAdapter.ADAPTERS[target.id];
    }

    /**
     * Remove all OpenAI Adapter.
     */
    static removeAllAdapter () {
        Object.keys(OpenAIAdapter.ADAPTERS).forEach(key => {
            delete OpenAIAdapter.ADAPTERS[key];
        });
    }

    /**
     * Get API key.
     * @returns {string} - API key
     */
    static getApiKey () {
        return OpenAIAdapter.apiKey;
    }

    /**
     * Set API key.
     * @param {string} key - API key
     * @returns {void}
     */
    static setApiKey (key) {
        OpenAIAdapter.apiKey = key;
    }

    /**
     * Base URL for OpenAI.
     * @type {string}
     */
    static baseUrl = 'https://api.openai.com/v1';

    /**
     * Request types for AI operations.
     * @returns {object} request types
     */
    static REQUEST_TYPE = {
        GENERATE: 'generate',
        CHAT: 'chat',
        EMBEDDING: 'embedding'
    };

    /**
     * Function calling modes for AI operations.
     * @returns {object} function calling modes
     */
    static FUNCTION_CALLING_NONE = 'none';
    static FUNCTION_CALLING_AUTO = 'auto';
    static FUNCTION_CALLING_ANY = 'required';

    constructor (target) {
        this.target = target;
        OpenAIAdapter.ADAPTERS[target.id] = this;
        this.sdk = null;
        this.modelCode = Object.assign({}, OpenAIAdapter.MODEL_CODE);
        this.models = {};
        /**
         * safety settings (not used in OpenAI)
         * @type {Array.<{category: string, blockThreshold: string}>}
         */
        this.safetySettings = [];
        /**
         * generation config
         * @type {object}
         */
        this.generationConfig = {};
        this.chatSession = null;
        this.lastResponse = null;
        this.lastPartialResponse = null;
        this.functionRegistry = {};
        this.functionCallTool = null;
        this.functionIndex = 0; // index for function names
        this.functionArgPrefix = 'arg_';
        this.functionNamePrefix = 'func_';
        this.functionCallingMode = OpenAIAdapter.FUNCTION_CALLING_AUTO; // default mode
        this.chatHistory = []; // Store chat history manually
    }

    /**
     * Get SDK. Initialize if not exists.
     * @returns {OpenAI} - SDK
     */
    getSDK () {
        if (!this.sdk) {
            this.sdk = new OpenAI({
                apiKey: OpenAIAdapter.getApiKey(),
                baseURL: OpenAIAdapter.baseUrl,
                dangerouslyAllowBrowser: true
            });
        }
        return this.sdk;
    }

    /**
     * Get models list.
     * @returns {Promise<Array.<object>>} - a Promise that resolves when the models are loaded
     */
    async getModels () {
        if (this.models && this.models.length) {
            return this.models;
        }
        try {
            const response = await this.getSDK().models.list();
            this.models = response.data || [];
            return this.models;
        } catch (error) {
            // If API doesn't support models.list, return default models
            this.models = [
                {id: 'gpt-4o', object: 'model', created: Date.now(), owned_by: 'openai'},
                {id: 'gpt-4o-mini', object: 'model', created: Date.now(), owned_by: 'openai'},
                {id: 'gpt-4-turbo', object: 'model', created: Date.now(), owned_by: 'openai'},
                {id: 'gpt-3.5-turbo', object: 'model', created: Date.now(), owned_by: 'openai'},
                {id: 'text-embedding-3-large', object: 'model', created: Date.now(), owned_by: 'openai'},
                {id: 'text-embedding-3-small', object: 'model', created: Date.now(), owned_by: 'openai'},
                {id: 'text-embedding-ada-002', object: 'model', created: Date.now(), owned_by: 'openai'}
            ];
            return this.models;
        }
    }

    /**
     * Get list of generative model IDs.
     * @returns {Promise<Array.<string>>} - a Promise that resolves when the model IDs are loaded
     */
    getGenerativeModelList () {
        return this.getModels()
            .then(models =>
                models.filter(model =>
                    model.id.startsWith('gpt-') &&
                    !model.id.includes('embedding')
                )
                    .map(model => model.id));
    }

    /**
     * Get generative model ID by index.
     * @param {number} modelIndex - index of the model
     * @returns {Promise<string>} - a Promise that resolves when the model ID is loaded
     */
    getGenerativeModelID (modelIndex) {
        return this.getGenerativeModelList()
            .then(modelList => modelList[modelIndex]);
    }
    
    /**
     * Get the number of generative models.
     * @returns {Promise<number>} - a Promise that resolves when the number of models is loaded
     */
    getMaxGenerativeModelNumber () {
        return this.getGenerativeModelList()
            .then(modelList => modelList.length);
    }

    /**
     * Get list of embedding model IDs.
     * @returns {Promise<Array.<string>>} - a Promise that resolves when the model IDs are loaded
     */
    getEmbeddingModelList () {
        return this.getModels()
            .then(models =>
                models.filter(model => model.id.includes('embedding'))
                    .map(model => model.id));
    }

    /**
     * Get embedding model ID by index.
     * @param {number} modelIndex - index of the model
     * @returns {Promise<string>} - a Promise that resolves when the model ID is loaded
     */
    getEmbeddingModelID (modelIndex) {
        return this.getEmbeddingModelList()
            .then(modelList => modelList[modelIndex]);
    }

    /**
     * Get the number of embedding models.
     * @returns {Promise<number>} - a Promise that resolves when the number of models is loaded
     */
    getMaxEmbeddingModelNumber () {
        return this.getEmbeddingModelList()
            .then(modelList => modelList.length);
    }

    /**
     * Count tokens by model.
     * @param {Array.<string | object>} contentParts - content to AI
     * @returns {Promise<number>} - a Promise that resolves when the tokens are counted
     */
    countTokensAs (contentParts) {
        // OpenAI doesn't have a direct token counting API in this context
        // Approximate token count (rough estimation: 1 token ≈ 4 characters for English)
        const text = contentParts.map(part => {
            if (typeof part === 'string') return part;
            if (part.type === 'text') return part.data;
            return '';
        }).join('');
        
        return Promise.resolve(Math.ceil(text.length / 4));
    }

    /**
     * Get chat history.
     * @returns {Array} - history of chat
     */
    getChatHistory () {
        return this.chatHistory;
    }

    /**
     * Get last response object from AI.
     * @returns {object} - last response
     */
    getLastResponse () {
        return this.lastResponse;
    }

    /**
     * Set last response from AI.
     * @param {object} response - last response
     * @returns {void}
     */
    setLastResponse (response) {
        this.lastResponse = response;
    }

    /**
     * Set last partial response from AI.
     * @param {object} response - last partial response
     * @returns {void}
     */
    setLastPartialResponse (response) {
        this.lastPartialResponse = response;
    }

    /**
     * Get last partial response from AI.
     * @returns {object} - last partial response
     */
    getLastPartialResponse () {
        return this.lastPartialResponse;
    }

    /**
     * Update function declarations in generation config according to registered functions.
     * @returns {void}
     */
    updateFunctionCallTool () {
        const tools = Object.values(this.functionRegistry).map(func => ({
            type: 'function',
            function: func.declaration
        }));
        this.functionCallTool = tools.length > 0 ? tools : null;
    }

    /**
     * Set function calling mode for AI generation.
     * @param {string} mode - function calling mode ('none', 'auto', 'required')
     * @returns {void}
     */
    setFunctionCallingMode (mode) {
        this.functionCallingMode = mode;
    }

    /**
     * Update tool config in generation config to include function calling mode.
     * @returns {void}
     */
    updateToolConfig () {
        // OpenAI doesn't use a separate tool config like Gemini
        // Function calling mode is handled directly in the API call
    }

    /**
     * Get function specification by procedure code.
     * @param {string} procedureCode - code of the procedure to get specification for
     * @returns {object|null} - function specification or null if not found
     */
    getFunctionSpec (procedureCode) {
        return Object.values(this.functionRegistry).find(func => func.procedureCode === procedureCode);
    }

    /**
     * Register a function for the generation.
     * @param {string} procedureCode - code of the procedure to register
     * @param {string} functionDescription - description of the function
     * @param {Array.<{type: string, description: string, code: string}>} procedureArguments
     *  - arguments of the procedure
     * @returns {void}
     */
    registerFunction (procedureCode, functionDescription, procedureArguments) {
        let functionName;
        const existingSpec = this.getFunctionSpec(procedureCode);
        if (existingSpec) {
            // If function already exists, update it
            functionName = existingSpec.declaration.name;
        } else {
            this.functionIndex = this.functionIndex + 1;
            functionName = `${this.functionNamePrefix}${this.functionIndex}`;
        }
        const functionDeclaration = {
            name: functionName,
            description: functionDescription
        };
        const argumentDict = {};
        if (procedureArguments && procedureArguments.length > 0) {
            const parameters = {
                type: 'object',
                properties: {},
                required: []
            };
            procedureArguments.forEach((argSpec, index) => {
                const paramName = `${this.functionArgPrefix}${index}`;
                parameters.properties[paramName] = {
                    type: argSpec.type,
                    description: argSpec.description
                };
                parameters.required.push(paramName);
                argumentDict[paramName] = argSpec.code;
            });
            functionDeclaration.parameters = parameters;
        }
        this.functionRegistry[functionName] = {
            procedureCode: procedureCode,
            argumentDict: argumentDict,
            declaration: functionDeclaration
        };
        this.updateFunctionCallTool();
    }

    /**
     * Erase a function from registered functions.
     * @param {string} procedureCode - code of the procedure to erase
     * @returns {void}
     */
    unregisterFunction (procedureCode) {
        const functionSpec = this.getFunctionSpec(procedureCode);
        if (functionSpec) {
            delete this.functionRegistry[functionSpec.declaration.name];
            this.updateFunctionCallTool();
        }
    }

    /**
     * Unregister all functions.
     * This will clear all registered functions and update the function call tool.
     * @returns {void}
     */
    clearRegisteredFunctions () {
        // Clear all registered functions
        Object.keys(this.functionRegistry).forEach(key => {
            delete this.functionRegistry[key];
        });
        this.functionIndex = 0; // Reset function index
        this.updateFunctionCallTool();
    }

    /**
     * Return function result to AI.
     * @param {object} functionCall - function call to return result for
     * @returns {Promise<[object, Array.<object>]>} - a Promise that resolves
     *  to an array with response and function calls
     */
    returnFunctionResult (functionCall) {
        const toolMessage = {
            role: 'tool',
            tool_call_id: functionCall.call.id,
            content: JSON.stringify(functionCall.result)
        };

        if (functionCall.requestType === OpenAIAdapter.REQUEST_TYPE.GENERATE) {
            // For generate requests, continue the conversation
            const messages = [
                ...functionCall.generateParameters.messages,
                {
                    role: 'assistant',
                    tool_calls: [functionCall.call]
                },
                toolMessage
            ];
            
            const genParam = {
                ...functionCall.generateParameters,
                messages: messages
            };
            return this.generateForContent(genParam);
        }

        if (functionCall.requestType === OpenAIAdapter.REQUEST_TYPE.CHAT) {
            // Add tool message to chat history
            this.chatHistory.push({
                role: 'assistant',
                tool_calls: [functionCall.call]
            });
            this.chatHistory.push(toolMessage);
            
            const messages = [...this.chatHistory];
            const chatParam = {
                model: this.modelCode.generative,
                messages: messages,
                tools: this.functionCallTool,
                tool_choice: this.functionCallingMode === OpenAIAdapter.FUNCTION_CALLING_NONE ?
                    'none' : this.functionCallingMode
            };
            const promise = this.getSDK().chat.completions.create(chatParam);
            return this._handleResponse(promise, OpenAIAdapter.REQUEST_TYPE.CHAT, chatParam);
        }
    }

    /**
     * Process function calls from the response.
     * @param {object} response - The response from the AI model.
     * @param {string} requestType - The type of the request ('generate' or 'chat').
     * @param {object} requestParam - The parameters used for the request.
     * @returns {Array<FunctionCall>} An array of FunctionCall objects.
     * @private
     */
    _createFunctionCalls (response, requestType, requestParam) {
        const functionCalls = [];
        if (response.choices && response.choices.length > 0) {
            const choice = response.choices[0];
            if (choice.message && choice.message.tool_calls) {
                choice.message.tool_calls.forEach(call => {
                    if (call.type === 'function') {
                        functionCalls.push(new FunctionCall(call, requestType, requestParam));
                    }
                });
            }
        }
        return functionCalls;
    }

    /**
     * Handles the response from a non-streaming API call.
     * @param {Promise<object>} promise - The promise returned by the API call.
     * @param {string} requestType - The type of the request.
     * @param {object} requestParam - The parameters for the request.
     * @returns {Promise<[object, Array.<object>]>} A promise that resolves to the response and
     * function calls.
     * @private
     */
    _handleResponse (promise, requestType, requestParam) {
        return promise
            .then(response => {
                const functionCalls = this._createFunctionCalls(response, requestType, requestParam);
                if (!response.text && response.choices[0]?.message.content) {
                    response.text = response.choices[0].message.content;
                }
                this.setLastPartialResponse(null);
                this.setLastResponse(response);
                return [response, functionCalls];
            })
            .catch(error => {
                this.setLastResponse(error);
                return Promise.reject(error);
            });
    }

    /**
     * Handles the response from a streaming API call.
     * @param {Promise<AsyncIterable>} streamingPromise
     *  - The promise for the streaming result.
     * @param {string} requestType - The type of the request.
     * @param {object} requestParam - The parameters for the request.
     * @param {function} partialResponseHandler - The handler for partial responses.
     * @returns {Promise<[Array<object>, Array.<object>]>} A promise that resolves to the
     * responses and function calls.
     * @private
     */
    async _handleStreamResponse (streamingPromise, requestType, requestParam, partialResponseHandler) {
        try {
            const streamingResult = await streamingPromise;
            const wholeResponses = [];
            let functionCalls = [];
            for await (const partialResponse of streamingResult) {
                this.setLastPartialResponse(partialResponse);
                if (partialResponseHandler) {
                    partialResponseHandler(partialResponse);
                }
                wholeResponses.push(partialResponse);
                const partialFunctionCalls = this._createFunctionCalls(partialResponse, requestType, requestParam);
                functionCalls = functionCalls.concat(partialFunctionCalls);
            }
            this.setLastResponse(wholeResponses);
            return [wholeResponses, functionCalls];
        } catch (error) {
            this.setLastResponse(error);
            throw error;
        }
    }

    /**
     * Convert content parts to OpenAI format.
     * @param {Array.<string | object>} contentParts - content to convert
     * @returns {Array.<object>} - content in OpenAI format
     */
    convertContentParts (contentParts) {
        const content = [];
        contentParts.forEach(p => {
            if (typeof p === 'string') {
                content.push({
                    type: 'text',
                    text: p
                });
            } else if (p.type === 'text') {
                content.push({
                    type: 'text',
                    text: p.data
                });
            } else if (p.type === 'dataURL') {
                const mimeType = p.data.substring(p.data.indexOf(':') + 1, p.data.indexOf(';'));
                if (mimeType.startsWith('image/')) {
                    content.push({
                        type: 'image_url',
                        image_url: {
                            url: p.data
                        }
                    });
                }
            }
        });
        return content;
    }

    /**
     * Generate content for AI.
     * @param {object} genParam - generation parameters
     * @returns {Promise<[object, Array.<object>]>} - a Promise that resolves
     *  to an array with response and function calls
     */
    generateForContent (genParam) {
        const promise = this.getSDK().chat.completions.create(genParam);
        return this._handleResponse(promise, OpenAIAdapter.REQUEST_TYPE.GENERATE, genParam);
    }

    /**
     * Send generator type prompt to AI.
     * @param {Array.<string | object>} prompt - the original prompt to AI
     * @returns {Promise<[object, Array.<object>]>} - a Promise that resolves
     *  to an array with response and function calls
     */
    requestGenerate (prompt) {
        const messages = [{
            role: 'user',
            content: this.convertContentParts(prompt)
        }];

        const genParam = {
            model: this.modelCode.generative,
            messages: messages,
            ...this.generationConfig
        };

        if (this.functionCallTool && this.functionCallTool.length > 0) {
            genParam.tools = this.functionCallTool;
            if (this.functionCallingMode !== OpenAIAdapter.FUNCTION_CALLING_NONE) {
                genParam.tool_choice = this.functionCallingMode;
            }
        }

        return this.generateForContent(genParam);
    }

    /**
     * Send generator type prompt to AI and get a streaming response.
     * @param {Array.<string|object>} prompt - The prompt to send to the AI.
     * @param {function} partialResponseHandler - A function to handle partial responses.
     * @returns {Promise<[Array<object>, Array.<object>]>} A promise that resolves to the full
     * response and any function calls.
     */
    requestGenerateStream (prompt, partialResponseHandler) {
        const messages = [{
            role: 'user',
            content: this.convertContentParts(prompt)
        }];

        const genParam = {
            model: this.modelCode.generative,
            messages: messages,
            stream: true,
            ...this.generationConfig
        };

        if (this.functionCallTool && this.functionCallTool.length > 0) {
            genParam.tools = this.functionCallTool;
            if (this.functionCallingMode !== OpenAIAdapter.FUNCTION_CALLING_NONE) {
                genParam.tool_choice = this.functionCallingMode;
            }
        }

        const streamingPromise = this.getSDK().chat.completions.create(genParam);
        return this._handleStreamResponse(
            streamingPromise, OpenAIAdapter.REQUEST_TYPE.GENERATE, genParam, partialResponseHandler
        );
    }

    /**
     * Start chat.
     * @param {Array.<object>} history - history of chat
     * @returns {void}
     */
    startChat (history) {
        this.chatHistory = history || [];
        this.chatSession = true; // Just a flag to indicate chat is started
    }

    /**
     * Send chat message to AI.
     * @param {Array.<string | object>} prompt - message to AI
     * @returns {Promise<[object, Array.<object>]>} - a Promise that resolves
     *  to an array with response and function calls
     */
    requestChat (prompt) {
        if (!this.chatSession) {
            this.startChat([]);
        }

        const userMessage = {
            role: 'user',
            content: this.convertContentParts(prompt)
        };

        this.chatHistory.push(userMessage);

        const chatParam = {
            model: this.modelCode.generative,
            messages: [...this.chatHistory],
            ...this.generationConfig
        };

        if (this.functionCallTool && this.functionCallTool.length > 0) {
            chatParam.tools = this.functionCallTool;
            if (this.functionCallingMode !== OpenAIAdapter.FUNCTION_CALLING_NONE) {
                chatParam.tool_choice = this.functionCallingMode;
            }
        }

        const promise = this.getSDK().chat.completions.create(chatParam);
        return this._handleResponse(promise, OpenAIAdapter.REQUEST_TYPE.CHAT, chatParam)
            .then(([response, functionCalls]) => {
                // Add assistant's response to chat history
                if (response.choices && response.choices.length > 0) {
                    this.chatHistory.push(response.choices[0].message);
                }
                return [response, functionCalls];
            });
    }

    /**
     * Send chat message to AI and get a streaming response.
     * @param {Array.<string | object>} prompt - message to AI
     * @param {function} partialResponseHandler - A function to handle partial responses.
     * @returns {Promise<[Array<object>, Array.<object>]>} A promise that resolves to the full
     * response and any function calls.
     */
    requestChatStream (prompt, partialResponseHandler) {
        if (!this.chatSession) {
            this.startChat([]);
        }

        const userMessage = {
            role: 'user',
            content: this.convertContentParts(prompt)
        };

        this.chatHistory.push(userMessage);

        const chatParam = {
            model: this.modelCode.generative,
            messages: [...this.chatHistory],
            stream: true,
            ...this.generationConfig
        };

        if (this.functionCallTool && this.functionCallTool.length > 0) {
            chatParam.tools = this.functionCallTool;
            if (this.functionCallingMode !== OpenAIAdapter.FUNCTION_CALLING_NONE) {
                chatParam.tool_choice = this.functionCallingMode;
            }
        }

        const streamingPromise = this.getSDK().chat.completions.create(chatParam);
        return this._handleStreamResponse(
            streamingPromise, OpenAIAdapter.REQUEST_TYPE.CHAT, chatParam, partialResponseHandler
        );
    }

    /**
     * Request embedding of content.
     * @param {Array.<string> | string} contentParts - content to AI
     * @param {string} taskType - type of task (not used in OpenAI)
     * @returns {Promise<Array<number>>} - a Promise that resolves when the embedding is received
     */
    async requestEmbedding (contentParts, taskType) {
        if (!contentParts || !contentParts.length) {
            return [];
        }
        const toEmbed = contentParts.reduce((acc, p) => {
            if (typeof p === 'string') {
                return acc + p;
            }
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

        const result = await this.getSDK().embeddings.create({
            model: this.modelCode.embedding,
            input: toEmbed
        });
        
        const embeddingValues = result.data[0].embedding;
        cache[key] = embeddingValues;
        return embeddingValues;
    }

    /**
     * Validate API key by testing access to models list (doesn't consume tokens).
     * @param {string} apiKey - API key to validate
     * @returns {Promise<object>} A promise that resolves to an object with validation results
     * @returns {boolean} Promise.valid - Whether the API key is valid
     * @returns {string} [Promise.error] - Error message if validation failed
     * @static
     */
    static async validateApiKey (apiKey) {
        if (!apiKey || !apiKey.trim()) {
            return {valid: false, error: 'API key is empty'};
        }

        try {
            const testSDK = new OpenAI({
                apiKey: apiKey.trim(),
                baseURL: OpenAIAdapter.baseUrl,
                dangerouslyAllowBrowser: true
            });
            const list = await testSDK.models.list();
            const availableModels = list.data || [];

            if (availableModels.length === 0) {
                return {valid: false, error: 'No models available with this API key'};
            }
            
            return {valid: true};
        } catch (error) {
            let errorMessage = 'Invalid API key';
            if (error.message) {
                if (error.message.includes('401') || error.message.includes('Unauthorized')) {
                    errorMessage = 'API key is invalid';
                } else if (error.message.includes('403') || error.message.includes('permission')) {
                    errorMessage = 'API key lacks required permissions';
                } else if (error.message.includes('quota') || error.message.includes('limit')) {
                    errorMessage = 'API quota exceeded';
                } else {
                    errorMessage = `API error: ${error.message}`;
                }
            }
            return {valid: false, error: errorMessage};
        }
    }

    /**
     * Set and validate model code for specific model type.
     * @param {string} modelCode - model code to set
     * @param {string} modelType - type of model ('generative' | 'embedding')
     * @returns {Promise<string>} A promise that resolves to success message or error message
     */
    async setModel (modelCode, modelType) {
        if (!modelCode || !modelCode.trim()) {
            return 'Model code is empty';
        }
        if (!['generative', 'embedding'].includes(modelType)) {
            return 'Invalid model type. Must be "generative" or "embedding"';
        }
        if (!OpenAIAdapter.getApiKey()) {
            return 'API key is not set';
        }
        try {
            const models = await this.getModels();
            const availableModel = models.find(model => model.id === modelCode);
            if (!availableModel) {
                this.modelCode[modelType] = 'model-not-found';
                const availableModels = models
                    .filter(model => {
                        if (modelType === 'generative') {
                            return model.id.startsWith('gpt-') && !model.id.includes('embedding');
                        }
                        return model.id.includes('embedding');
                    })
                    .map(model => model.id);
                return `Model "${modelCode}" not found. ` +
                       `Available models: ${availableModels.join(', ')}`;
            }

            this.modelCode[modelType] = modelCode;
            return `Model "${modelCode}" set successfully for ${modelType}`;
        } catch (error) {
            return `Error validating model: ${error.message}`;
        }
    }

    /**
     * Set generative model code.
     * @param {string} modelCode - model code to set
     * @returns {Promise<string>} A promise that resolves to success message or error message
     */
    setGenerativeModel (modelCode) {
        return this.setModel(modelCode, 'generative');
    }

    /**
     * Set embedding model code.
     * @param {string} modelCode - model code to set
     * @returns {Promise<string>} A promise that resolves to success message or error message
     */
    setEmbeddingModel (modelCode) {
        return this.setModel(modelCode, 'embedding');
    }
}

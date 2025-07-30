import {
    GoogleGenAI,
    createPartFromBase64,
    createPartFromText,
    createUserContent,
    createModelContent,
    FunctionCallingConfigMode
} from '@google/genai';

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
        return this.call.name;
    }

    /**
     * Get function call arguments.
     * @returns {Array} - function call arguments
     */
    get args () {
        return this.call.args;
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

/**
 * Get text of the first candidate from response.
 * @param {object} responses - response from generative ai
 * @param {number} candidateIndex - index of the candidate
 * @return {?string} response text
 */
export const getTextFromResponse = function (responses, candidateIndex = 0) {
    if (!responses) {
        return '';
    }
    if (!Array.isArray(responses)) {
        responses = [responses];
    }
    let contentText = '';
    responses.forEach(aResponse => {
        if (typeof aResponse === 'string') {
            return aResponse;
        }
        if (aResponse.name?.includes('Error')) {
            contentText += aResponse.message || aResponse.name;
            return contentText;
        }
        if (aResponse.promptFeedback) {
            if (aResponse.promptFeedback.blockReason === 'SAFETY') {
                const safetyRatings = aResponse.promptFeedback.safetyRatings;
                let blockedMessages = '';
                safetyRatings.forEach(safetyRating => {
                    if (safetyRating.blocked) {
                        blockedMessages += `\nBlocked: ${safetyRating.category} is (${safetyRating.probability})`;
                    }
                });
                contentText += blockedMessages;
                return;
            }
            contentText += aResponse.promptFeedback.blockReason;
            return;
        }
        if (!aResponse.candidates || !Array.isArray(aResponse.candidates)) {
            // sometimes response is empty
            return;
        }
        if (aResponse.candidates.length === 0) {
            // sometimes candidates are empty
            return;
        }
        if (aResponse.candidates.length <= candidateIndex) {
            return;
        }
        const candidate = aResponse.candidates[candidateIndex];
        if (!candidate || !candidate.content || !candidate.content.parts) {
            // sometimes content is empty
            return;
        }
        for (const part of candidate.content.parts) {
            if (part.text) {
                contentText += part.text;
            }
            if (part.executableCode) {
                contentText += (
                    `\n\`\`\`python\n${part.executableCode.code}\n\`\`\`\n`
                );
            }
            if (part.codeExecutionResult) {
                contentText += (
                    `\n\`\`\`\n${part.codeExecutionResult.output}\n\`\`\`\n`
                );
            }
        }
    });
    return contentText;
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
     * Default model code for each data type.
     * @returns {object} model code for data type
     */
    static MODEL_CODE = {
        generative: 'gemini-2.5-flash',
        embedding: 'gemini-embedding-001'
    };

    /**
     * API key for Gemini AI.
     * @type {string}
     */
    static apiKey = null;

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
        return GeminiAdapter.apiKey;
    }

    /**
     * Set API key.
     * @param {string} key - API key
     * @returns {void}
     */
    static setApiKey (key) {
        GeminiAdapter.apiKey = key;
    }

    /**
     * Base URL for Gemini AI.
     * @type {string}
     */
    static baseUrl = 'https://generativelanguage.googleapis.com';

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
    static FUNCTION_CALLING_NONE = FunctionCallingConfigMode.NONE;
    static FUNCTION_CALLING_AUTO = FunctionCallingConfigMode.AUTO;
    static FUNCTION_CALLING_ANY = FunctionCallingConfigMode.ANY;

    constructor (target) {
        this.target = target;
        GeminiAdapter.ADAPTERS[target.id] = this;
        this.sdk = null;
        this.modelCode = Object.assign({}, GeminiAdapter.MODEL_CODE);
        this.models = {};
        /**
         * safety settings
         * @type {Array.<{category__/: string, blockThreshold: string}>}
         */
        this.safetySettings = [];
        /**
         * generation config
         * @type {import('@google/genai').GenerateContentConfig}
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
        this.functionCallingMode = GeminiAdapter.FUNCTION_CALLING_AUTO; // default mode
    }

    /**
     * Get SDK. Initialize if not exists.
     * @returns {GoogleGenAI} - SDK
     */
    getSDK () {
        if (!this.sdk) {
            this.sdk = new GoogleGenAI({
                apiKey: GeminiAdapter.getApiKey(),
                baseUrl: GeminiAdapter.baseUrl
            });
        }
        return this.sdk;
    }

    /**
     * Get models list.
     * @returns {Promise<Array.<Model>>} - a Promise that resolves when the models are loaded
     */
    async getModels () {
        if (this.models && this.models.length) {
            return this.models;
        }
        const pager = await this.getSDK().models.list();
        this.models = [];
        for await (const aModel of pager) {
            this.models.push(aModel);
        }
        return this.models;
    }

    /**
     * Get list of generative model IDs.
     * @returns {Promise<Array.<string>>} - a Promise that resolves when the model IDs are loaded
     */
    getGenerativeModelList () {
        return this.getModels()
            .then(models =>
                models.filter(model => model.supportedActions.includes('generateContent'))
                    .map(model => model.name));
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
                models.filter(model => model.supportedActions.includes('embedContent'))
                    .map(model => model.name));
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
     * @param {string} requestType - type of request {'generate' | 'chat'}
     * @returns {Promise<number>} - a Promise that resolves when the tokens are counted
     */
    async countTokensAs (contentParts, requestType) {
        const models = this.getSDK().models;
        let result;
        const geminiContentParts = this.convertContentParts(contentParts);
        if (requestType === 'generate') {
            result = await models.countTokens({
                model: this.modelCode.generative,
                contents: createUserContent(geminiContentParts),
                config: {
                    systemInstruction: this.generationConfig.systemInstruction,
                    tools: this.generationConfig.tools
                }
            });
        } else if (requestType === 'chat') {
            const history = this.getChatHistory();
            const contents = [...history, createUserContent(geminiContentParts)];
            result = await models.countTokens({
                model: this.modelCode.generative,
                contents: contents,
                config: {
                    systemInstruction: this.generationConfig.systemInstruction,
                    tools: this.generationConfig.tools
                }
            });
        }
        return result.totalTokens;
    }

    /**
     * Get chat history.
     * @returns {Content[]} - history of chat
     */
    getChatHistory () {
        if (!this.chatSession) {
            return [];
        }
        return this.chatSession.getHistory();
    }

    /**
     * Get last response object from AI.
     * @returns {GenerateContentResponse} - last response
     */
    getLastResponse () {
        return this.lastResponse;
    }

    /**
     * Set last response from AI.
     * @param {GenerateContentResponse|GenericContentResponse[]} response - last response
     * @param {object} prompt - the requested prompt of the response
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
     * Update function declarations in generation config according to registered functions.
     * @returns {void}
     */
    updateFunctionCallTool () {
        const declarations = Object.values(this.functionRegistry).map(func => func.declaration);
        if (!this.generationConfig.tools) {
            this.generationConfig.tools = [];
        }
        if (this.functionCallTool) {
            this.functionCallTool.functionDeclarations = declarations;
        } else {
            const functionCallTool = {functionDeclarations: declarations};
            this.generationConfig.tools.push(functionCallTool);
            this.functionCallTool = functionCallTool;
        }
        // Update tool config to include function calling mode
        this.updateToolConfig();
    }

    /**
     * Set function calling mode for AI generation.
     * @param {string} mode - function calling mode ('NONE', 'AUTO', 'ANY')
     * @returns {void}
     */
    setFunctionCallingMode (mode) {
        this.functionCallingMode = mode;
        // Update toolConfig in generationConfig when function calling mode is set
        this.updateToolConfig();
    }

    /**
     * Update tool config in generation config to include function calling mode.
     * @returns {void}
     */
    updateToolConfig () {
        if (!this.generationConfig.toolConfig) {
            this.generationConfig.toolConfig = {};
        }
        if (!this.generationConfig.toolConfig.functionCallingConfig) {
            this.generationConfig.toolConfig.functionCallingConfig = {};
        }
        this.generationConfig.toolConfig.functionCallingConfig.mode = this.functionCallingMode;
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
            const parameters = {};
            procedureArguments.forEach((argSpec, index) => {
                const paramName = `${this.functionArgPrefix}${index}`;
                parameters[paramName] = {
                    type: argSpec.type,
                    description: argSpec.description
                };
                argumentDict[paramName] = argSpec.code;
            });
            functionDeclaration.parameters = {
                type: 'object',
                properties: parameters
            };
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
     * @returns {Promise<[GenerateContentResponse, Array.<object>]>} - a Promise that resolves
     *  to an array with response and function calls
     */
    returnFunctionResult (functionCall) {
        const functionResponseContent = createUserContent([{
            functionResponse: {
                name: functionCall.name,
                response: {
                    result: functionCall.result
                }
            }
        }]);

        if (functionCall.requestType === GeminiAdapter.REQUEST_TYPE.GENERATE) {
            const functionRequestContent = createModelContent([{
                functionCall: {
                    name: functionCall.name,
                    args: functionCall.args
                }
            }]);
            const contents = [
                functionCall.generateParameters.contents,
                functionRequestContent,
                functionResponseContent
            ];
            const genParam = {
                ...functionCall.generateParameters,
                contents: contents
            };
            return this.generateForContent(genParam);
        }

        if (functionCall.requestType === GeminiAdapter.REQUEST_TYPE.CHAT) {
            const chatParam = {
                config: {...this.generationConfig},
                message: functionResponseContent
            };
            const promise = this.chatSession.sendMessage(chatParam);
            return this._handleResponse(promise, GeminiAdapter.REQUEST_TYPE.CHAT, chatParam);
        }
    }

    /**
     * Process function calls from the response.
     * @param {GenerateContentResponse} response - The response from the AI model.
     * @param {string} requestType - The type of the request ('generate' or 'chat').
     * @param {object} requestParam - The parameters used for the request.
     * @returns {Array<FunctionCall>} An array of FunctionCall objects.
     * @private
     */
    _createFunctionCalls (response, requestType, requestParam) {
        const functionCalls = [];
        if (response.functionCalls) {
            response.functionCalls.forEach(call => {
                functionCalls.push(new FunctionCall(call, requestType, requestParam));
            });
        }
        return functionCalls;
    }

    /**
     * Handles the response from a non-streaming API call.
     * @param {Promise<GenerateContentResponse>} promise - The promise returned by the API call.
     * @param {string} requestType - The type of the request.
     * @param {object} requestParam - The parameters for the request.
     * @returns {Promise<[GenerateContentResponse, Array.<object>]>} A promise that resolves to the response and
     * function calls.
     * @private
     */
    _handleResponse (promise, requestType, requestParam) {
        return promise
            .then(response => {
                const functionCalls = this._createFunctionCalls(response, requestType, requestParam);
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
     * @param {Promise<AsyncGenerator<EnhancedGenerateContentResponse>>} streamingPromise
     *  - The promise for the streaming result.
     * @param {string} requestType - The type of the request.
     * @param {object} requestParam - The parameters for the request.
     * @param {function} partialResponseHandler - The handler for partial responses.
     * @returns {Promise<[Array<EnhancedGenerateContentResponse>, Array.<object>]>} A promise that resolves to the
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
                functionCalls = functionCalls.concat(
                    this._createFunctionCalls(partialResponse, requestType, requestParam)
                );
            }
            this.setLastResponse(wholeResponses);
            return [wholeResponses, functionCalls];
        } catch (error) {
            this.setLastResponse(error);
            throw error;
        }
    }

    /**
     * Convert content parts to Gemini AI format.
     * @param {Array.<string | object>} contentParts - content to convert
     * @returns {Array.<string | object>} - content to Gemini AI
     */
    convertContentParts (contentParts) {
        return contentParts.map(p => {
            if (p.type === 'text') {
                return createPartFromText(p.data);
            } else if (p.type === 'dataURL') {
                const base64 = p.data.split(',')[1];
                const mimeType = p.data.substring(p.data.indexOf(':') + 1, p.data.indexOf(';'));
                return createPartFromBase64(base64, mimeType);
            }
            return p;
        });
    }

    /**
     * Generate content for AI.
     * @param {object} genParam - generation parameters
     * @returns {Promise<[GenerateContentResponse, Array.<object>]>} - a Promise that resolves
     *  to an array with response and function calls
     */
    generateForContent (genParam) {
        const models = this.getSDK().models;
        const promise = models.generateContent(genParam);
        return this._handleResponse(promise, GeminiAdapter.REQUEST_TYPE.GENERATE, genParam);
    }

    /**
     * Send generator type prompt to AI.
     * @param {Array.<string | object>} prompt - the original prompt to AI
     * @returns {Promise<[GenerateContentResponse, Array.<object>]>} - a Promise that resolves
     *  to an array with response and function calls
     */
    requestGenerate (prompt) {
        const genParam = {
            model: this.modelCode.generative,
            contents: createUserContent(this.convertContentParts(prompt)),
            safetySettings: {...this.safetySettings},
            config: {...this.generationConfig}
        };
        return this.generateForContent(genParam);
    }

    /**
     * Send generator type prompt to AI and get a streaming response.
     * @param {Array.<string|object>} prompt - The prompt to send to the AI.
     * @param {function} partialResponseHandler - A function to handle partial responses.
     * @returns {Promise<[Array<EnhancedGenerateContentResponse>, Array.<object>]>} A promise that resolves to the full
     * response and any function calls.
     */
    requestGenerateStream (prompt, partialResponseHandler) {
        const models = this.getSDK().models;
        const config = {...this.generationConfig, candidateCount: 1};
        const genParam = {
            model: this.modelCode.generative,
            contents: createUserContent(this.convertContentParts(prompt)),
            safetySettings: {...this.safetySettings},
            config: config
        };
        const streamingPromise = models.generateContentStream(genParam);
        return this._handleStreamResponse(
            streamingPromise, GeminiAdapter.REQUEST_TYPE.GENERATE, genParam, partialResponseHandler
        );
    }

    /**
     * Start chat.
     * @param {Array.<string>} history - history of chat
     * @returns {void}
     */
    startChat (history) {
        this.chatSession = this.getSDK().chats.create({
            model: this.modelCode.generative,
            history: history,
            safetySettings: this.safetySettings,
            config: this.generationConfig
        });
    }

    /**
     * Send chat message to AI.
     * @param {string} prompt - message to AI
     * @returns {Promise<[GenerateContentResponse, Array.<object>]>} - a Promise that resolves
     *  to an array with response and function calls
     */
    requestChat (prompt) {
        if (!this.chatSession) {
            this.startChat([]);
        }
        const chatParam = {
            config: {...this.generationConfig},
            message: createUserContent(this.convertContentParts(prompt))
        };
        const promise = this.chatSession.sendMessage(chatParam);
        return this._handleResponse(promise, GeminiAdapter.REQUEST_TYPE.CHAT, chatParam);
    }

    /**
     * Send chat message to AI and get a streaming response.
     * @param {string} prompt - message to AI
     * @param {function} partialResponseHandler - A function to handle partial responses.
     * @returns {Promise<[Array<EnhancedGenerateContentResponse>, Array.<object>]>} A promise that resolves to the full
     * response and any function calls.
     */
    requestChatStream (prompt, partialResponseHandler) {
        if (!this.chatSession) {
            this.startChat([]);
        }
        const config = {...this.generationConfig, candidateCount: 1};
        const chatParam = {
            config: config,
            message: createUserContent(this.convertContentParts(prompt))
        };
        const streamingPromise = this.chatSession.sendMessageStream(chatParam);
        return this._handleStreamResponse(
            streamingPromise, GeminiAdapter.REQUEST_TYPE.CHAT, chatParam, partialResponseHandler
        );
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
        const result = await this.getSDK().models.embedContent({
            model: this.modelCode.embedding,
            contents: toEmbed,
            config: {
                taskType: taskType
            }
        });
        const embeddingValues = result.embeddings[0].values;
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
            const testSDK = new GoogleGenAI({
                apiKey: apiKey.trim(),
                baseUrl: GeminiAdapter.baseUrl
            });
            
            // Test API key by listing models (this doesn't consume tokens)
            const pager = await testSDK.models.list();
            // Try to get at least one model to confirm access
            const iterator = pager[Symbol.asyncIterator]();
            const firstModel = await iterator.next();
            
            if (firstModel.done) {
                return {valid: false, error: 'No models available with this API key'};
            }
            
            return {valid: true};
        } catch (error) {
            let errorMessage = 'Invalid API key';
            if (error.message) {
                if (error.message.includes('API_KEY_INVALID')) {
                    errorMessage = 'API key is invalid';
                } else if (error.message.includes('permission')) {
                    errorMessage = 'API key lacks required permissions';
                } else if (error.message.includes('quota')) {
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
        if (!GeminiAdapter.getApiKey()) {
            return 'API key is not set';
        }
        try {
            if (!modelCode.startsWith('models/')) {
                modelCode = `models/${modelCode}`;
            }
            const models = await this.getModels();
            const requiredAction = modelType === 'generative' ? 'generateContent' : 'embedContent';
            const availableModel = models.find(model =>
                model.name === modelCode && model.supportedActions.includes(requiredAction)
            );
            if (!availableModel) {
                this.modelCode[modelType] = 'model-not-found';
                const availableModels = models
                    .filter(model => model.supportedActions.includes(requiredAction))
                    .map(model => model.name);
                return `Model "${modelCode}" not found or doesn't support ${requiredAction}. ` +
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

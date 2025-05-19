import {
    GoogleGenAI,
    createPartFromBase64,
    createPartFromText,
    createUserContent
} from '@google/genai';

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
        generative: 'gemini-2.5-flash-preview-04-17',
        embedding: 'gemini-embedding-exp-03-07'
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

    constructor (target) {
        this.target = target;
        GeminiAdapter.ADAPTERS[target.id] = this;
        this.sdk = null;
        this.modelCode = Object.assign({}, GeminiAdapter.MODEL_CODE);
        this.models = {};
        /**
         * safety settings
         * @type {Array.<{category: string, blockThreshold: string}>}
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
        this.requesting = false;
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
     * Get last response object from AI.
     * @returns {GenerateContentResponse} - last response
     */
    getLastResponse () {
        return this.lastResponse;
    }

    /**
     * Set last response from AI.
     * @param {GenerateContentResponse|GenericContentResponse[]} response - last response
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
     * Send generator type prompt to AI.
     * @param {Array.<string | object>} contentParts - prompt to AI
     * @returns {Promise<string>} - a Promise that resolves text from AI
     */
    requestGenerate (contentParts) {
        const models = this.getSDK().models;
        const geminiContentParts = this.convertContentParts(contentParts);
        return models.generateContent({
            model: this.modelCode.generative,
            contents: createUserContent(geminiContentParts),
            safetySettings: this.safetySettings,
            config: this.generationConfig
        })
            .then(response => {
                this.setLastResponse(response);
            })
            .catch(error => {
                this.setLastResponse(error);
            });
    }

    async requestGenerateStream (contentParts, partialResponseHandler) {
        const models = this.getSDK().models;
        const geminiContentParts = this.convertContentParts(contentParts);
        const config = {...this.generationConfig};
        config.candidateCount = 1; // only one candidate for streaming
        try {
            const streamingResult = await models.generateContentStream({
                model: this.modelCode.generative,
                contents: createUserContent(geminiContentParts),
                safetySettings: this.safetySettings,
                config: config
            });
            const wholeResponses = [];
            for await (const lastPartialResponse of streamingResult) {
            // Process each partial response
                this.setLastPartialResponse(lastPartialResponse);
                partialResponseHandler(lastPartialResponse);
                wholeResponses.push(lastPartialResponse);
            }
            this.setLastResponse(wholeResponses);
        } catch (error) {
            this.setLastResponse(error);
        }
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
     * @param {string} contentParts - message to AI
     * @returns {Promise<GenerateContentResult>} - a Promise that resolves when the message is sent
     */
    requestChat (contentParts) {
        if (!this.chatSession) {
            this.startChat([]);
        }
        const geminiContentParts = this.convertContentParts(contentParts);
        return this.chatSession.sendMessage({
            config: this.generationConfig,
            message: createUserContent(geminiContentParts)
        })
            .then(response => {
                this.setLastResponse(response);
            })
            .catch(error => {
                this.setLastResponse(error);
            });
    }

    async requestChatStream (contentParts, partialResponseHandler) {
        if (!this.chatSession) {
            this.startChat([]);
        }
        const geminiContentParts = this.convertContentParts(contentParts);
        const config = {...this.generationConfig};
        config.candidateCount = 1; // only one candidate for streaming
        try {
            const streamingResult = await this.chatSession.sendMessageStream({
                config: config,
                message: createUserContent(geminiContentParts)
            });
            const wholeResponses = [];
            for await (const lastPartialResponse of streamingResult) {
                // Process each partial response
                this.setLastPartialResponse(lastPartialResponse);
                partialResponseHandler(lastPartialResponse);
                wholeResponses.push(lastPartialResponse);
            }
            this.setLastResponse(wholeResponses);
        } catch (error) {
            this.setLastResponse(error);
        }
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
}

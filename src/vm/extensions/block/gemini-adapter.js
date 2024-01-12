// dynamic import
let GoogleGenerativeAI;
(async () => {
    ({GoogleGenerativeAI} = await import(
        /* webpackIgnore: true */
        'https://esm.run/@google/generative-ai'
    ));
})();

export default class GeminiAdapter {

    static get CUSTOM_STATE_AI () {
        return 'Gemini.ai';
    }

    /**
     * Check if Gemini AI exists for target.
     * @param {Target} target - target to check
     * @returns {boolean} - whether Gemini AI exists for target
     * @static
     * @public
     */
    static existsForTarget (target) {
        return !!target.getCustomState(GeminiAdapter.CUSTOM_STATE_AI);
    }

    /**
     * Get Gemini AI for target. Initialize if not exists.
     * @param {Target} target - target to get Gemini AI
     * @returns {GeminiAdapter} - Gemini AI
     */
    static getForTarget (target) {
        const ai = target.getCustomState(GeminiAdapter.CUSTOM_STATE_AI);
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
        target.setCustomState(GeminiAdapter.CUSTOM_STATE_AI, null);
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
        target.setCustomState(GeminiAdapter.CUSTOM_STATE_AI, this);
        this.sdk = null;
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
     * Get model. Initialize if not exists.
     * @param {string} type - type of model
     * @returns {GenerativeModel} - model
     */
    getModel (type) {
        const modelParams = this.getModelParams();
        const model = this.getSDK().getGenerativeModel({
            model: type,
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
     * @param {Array.<string | object>} prompt - prompt to AI
     * @returns {Promise<number>} - a Promise that resolves when the tokens are counted
     */
    async countTokens (prompt) {
        let model;
        if (prompt.contents) {
            // prompt is a chat history
            model = this.getModel('gemini-pro');
        } else if (typeof prompt === 'string') {
            // prompt is a string
            model = this.getModel('gemini-pro');
        } else if (prompt.every(p => typeof p === 'string')) {
            // prompt is a list of strings
            model = this.getModel('gemini-pro');
        } else {
            // prompt is multimodal
            model = this.getModel('gemini-pro-vision');
        }
        const {totalTokens} = await model.countTokens(prompt);
        return totalTokens;
    }

    /**
     * Get chat history.
     * @returns {string[]} - chat history
     */
    getChatHistory () {
        if (!this.chatSession) {
            return [];
        }
        return this.chatSession.getChatHistory();
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
     * Set streaming object from AI.
     * @param {object} streaming - streaming object
     * @returns {void}
     */
    setStreaming (streaming) {
        this.streaming = streaming;
    }

    /**
     * Check if streaming object exists.
     * @returns {boolean} - whether streaming object exists
     */
    isStreaming () {
        return !!this.streaming;
    }

    /**
     * Get streaming object from AI.
     * @returns {object} - streaming object
     * @returns {AsyncGenerator<EnhancedGenerateContentResponse>} result.stream - stream of responses
     * @returns {Promise<EnhancedGenerateContentResponse>}
     *         result.response - a Promise that resolves when the all responses are received
     */
    getStreaming () {
        return this.streaming;
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
     * Send generator type prompt to AI and get stream.
     * @param {Array.<string | object>} prompt - prompt to AI
     * @returns {object} result - a Promise that resolves when the prompt is sent
     * @returns {AsyncGenerator<EnhancedGenerateContentResponse>} result.stream - stream of responses
     * @returns {Promise<EnhancedGenerateContentResponse>}
     *          result.response - a Promise that resolves when the all responses are received
     */
    requestGeneratorStream (prompt) {
        let type = '';
        if (typeof prompt === 'string') {
            // prompt is a string
            type = 'gemini-pro';
        } else if (prompt.every(p => typeof p === 'string')) {
            // prompt is a list of strings
            type = 'gemini-pro';
        } else {
            // prompt is multimodal
            type = 'gemini-pro-vision';
        }
        const model = this.getModel(type);
        return model.generateContentStream(prompt);
    }

    /**
     * Send chat type prompt to AI and get stream.
     * @param {Array.<string | object>} prompt - prompt to AI
     * @returns {AsyncGenerator<EnhancedGenerateContentResponse>} - stream of responses
     * @returns {Promise<EnhancedGenerateContentResponse>} - a Promise that resolves when the all responses are received
     * @async
     */
    requestChatStream (prompt) {
        if (!this.chatSession) {
            this.startChat([]);
        }
        return this.chatSession.sendMessageStream(prompt);
    }

    /**
     * Send generator type prompt to AI.
     * @param {Array.<string | object>} prompt - prompt to AI
     * @returns {Promise<GenerateContentResult>} - a Promise that resolves when the prompt is sent
     */
    requestGenerate (prompt) {
        let type = '';
        if (typeof prompt === 'string') {
            // prompt is a string
            type = 'gemini-pro';
        } else if (prompt.every(p => typeof p === 'string')) {
            // prompt is a list of strings
            type = 'gemini-pro';
        } else {
            // prompt is multimodal
            type = 'gemini-pro-vision';
        }
        const model = this.getModel(type);
        return model.generateContent(prompt);
    }

    /**
     * Start chat.
     * @param {Array.<string>} history - history of chat
     * @returns {void}
     */
    startChat (history) {
        const model = this.getModel('gemini-pro');
        this.chatSession = model.startChat(history);
    }

    /**
     * Send chat message to AI.
     * @param {string} message - message to AI
     * @returns {Promise<GenerateContentResult>} - a Promise that resolves when the message is sent
     */
    requestChat (message) {
        if (!this.chatSession) {
            this.startChat([]);
        }
        return this.chatSession.sendMessage(message);
    }
}

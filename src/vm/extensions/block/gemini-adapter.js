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
     * Send prompt to AI.
     * @param {Array.<string | object>} prompt - prompt to AI
     * @returns {Promise<GenerateContentResult>} - a Promise that resolves when the prompt is sent
     */
    async requestPrompt (prompt) {
        let result = null;
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
        result = await model.generateContent(prompt);
        this.setLastResponse(result.response);
        return result;
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
    async requestChat (message) {
        if (!this.chatSession) {
            this.startChat([]);
        }
        const result = await this.chatSession.sendMessage(message);
        this.setLastResponse(result.response);
        return result;
    }
}

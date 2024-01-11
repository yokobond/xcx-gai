import BlockType from '../../extension-support/block-type';
import ArgumentType from '../../extension-support/argument-type';
import Cast from '../../util/cast';
import log from '../../util/log';
import translations from './translations.json';
import blockIcon from './block-icon.png';

import {DEBUG, checkDebugMode} from './dev-util.js';
import GeminiAdapter from './gemini-adapter.js';
import {parseContentPartsText, interpretContentPartDirectives} from './gemini-directive.js';


const HarmCategory = {
    HARM_CATEGORY_UNSPECIFIED: 'HARM_CATEGORY_UNSPECIFIED',
    HARM_CATEGORY_HATE_SPEECH: 'HARM_CATEGORY_HATE_SPEECH',
    HARM_CATEGORY_SEXUALLY_EXPLICIT: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
    HARM_CATEGORY_HARASSMENT: 'HARM_CATEGORY_HARASSMENT',
    HARM_CATEGORY_DANGEROUS_CONTENT: 'HARM_CATEGORY_DANGEROUS_CONTENT'
};

const HarmBlockThreshold = {
    HARM_BLOCK_THRESHOLD_UNSPECIFIED: 'HARM_BLOCK_THRESHOLD_UNSPECIFIED',
    BLOCK_LOW_AND_ABOVE: 'BLOCK_LOW_AND_ABOVE',
    BLOCK_MEDIUM_AND_ABOVE: 'BLOCK_MEDIUM_AND_ABOVE',
    BLOCK_ONLY_HIGH: 'BLOCK_ONLY_HIGH',
    BLOCK_NONE: 'BLOCK_NONE'
};

/**
 * Formatter which is used for translation.
 * This will be replaced which is used in the runtime.
 * @param {object} messageData - format-message object
 * @returns {string} - message for the locale
 */
let formatMessage = messageData => messageData.default;

/**
 * Setup format-message for this extension.
 */
const setupTranslations = () => {
    const localeSetup = formatMessage.setup();
    if (localeSetup && localeSetup.translations[localeSetup.locale]) {
        Object.assign(
            localeSetup.translations[localeSetup.locale],
            translations[localeSetup.locale]
        );
    }
};

const EXTENSION_ID = 'gai';

/**
 * URL to get this extension as a module.
 * When it was loaded as a module, 'extensionURL' will be replaced a URL which is retrieved from.
 * @type {string}
 */
let extensionURL = 'https://yokobond.github.io/xcx-gai/dist/gai.mjs';

/**
 * Scratch 3.0 blocks for example of Xcratch.
 */
class GeminiBlocks {
    /**
     * A translation object which is used in this class.
     * @param {FormatObject} formatter - translation object
     */
    static set formatMessage (formatter) {
        formatMessage = formatter;
        if (formatMessage) setupTranslations();
    }

    /**
     * @return {string} - the name of this extension.
     */
    static get EXTENSION_NAME () {
        return formatMessage({
            id: 'gai.name',
            default: 'GAI',
            description: 'name of google generative AI extension'
        });
    }

    /**
     * @return {string} - the ID of this extension.
     */
    static get EXTENSION_ID () {
        return EXTENSION_ID;
    }

    /**
     * URL to get this extension.
     * @type {string}
     */
    static get extensionURL () {
        return extensionURL;
    }

    /**
     * Set URL to get this extension.
     * The extensionURL will be changed to the URL of the loading server.
     * @param {string} url - URL
     */
    static set extensionURL (url) {
        extensionURL = url;
    }

    /**
     * Construct a set of blocks for Gemini.
     * @param {Runtime} runtime - the Scratch 3.0 runtime.
     */
    constructor (runtime) {
        /**
         * The Scratch 3.0 runtime.
         * @type {Runtime}
         */
        this.runtime = runtime;

        if (runtime.formatMessage) {
            // Replace 'formatMessage' to a formatter which is used in the runtime.
            formatMessage = runtime.formatMessage;
        }

        runtime.on('EXTENSION_ADDED', this.onExtensionAdded.bind(this));
    }

    onExtensionAdded (extensionInfo) {
        if (extensionInfo.id === 'gai') {
            checkDebugMode();
        }
    }

    /**
     * @returns {object} metadata for this extension and its blocks.
     */
    getInfo () {
        setupTranslations();
        return {
            id: GeminiBlocks.EXTENSION_ID,
            name: GeminiBlocks.EXTENSION_NAME,
            extensionURL: GeminiBlocks.extensionURL,
            blockIconURI: blockIcon,
            showStatusButton: false,
            blocks: [
                {
                    opcode: 'prompt',
                    blockType: BlockType.COMMAND,
                    text: formatMessage({
                        id: 'gai.prompt',
                        default: 'prompt [PROMPT]',
                        description: 'prompt block text of GAI'
                    }),
                    func: 'prompt',
                    arguments: {
                        PROMPT: {
                            type: ArgumentType.STRING,
                            defaultValue: formatMessage({
                                id: 'gai.promptDefault',
                                default: 'The position of [costume:Sprite1:costume1] in [snapshot]?',
                                description: 'default prompt for Gemini'
                            })
                        }
                    }
                },
                {
                    opcode: 'chat',
                    blockType: BlockType.COMMAND,
                    text: formatMessage({
                        id: 'gai.chat',
                        default: 'chat [MESSAGE]',
                        description: 'chat block text of GAI'
                    }),
                    func: 'chat',
                    arguments: {
                        MESSAGE: {
                            type: ArgumentType.STRING,
                            defaultValue: formatMessage({
                                id: 'gai.chatDefault',
                                default: 'Hello Gemini!',
                                description: 'default chat message for GAI'
                            })
                        }
                    }
                },
                '---',
                {
                    opcode: 'responseText',
                    blockType: BlockType.REPORTER,
                    text: formatMessage({
                        id: 'gai.responseText',
                        default: 'response draft #[CANDIDATE_INDEX]',
                        description: 'last result of Gemini'
                    }),
                    disableMonitor: true,
                    func: 'responseText',
                    arguments: {
                        CANDIDATE_INDEX: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 1
                        }
                    }
                },
                {
                    opcode: 'responseSafetyRating',
                    blockType: BlockType.REPORTER,
                    text: formatMessage({
                        id: 'gai.responseSafetyRating',
                        default: 'response #[CANDIDATE_INDEX] safety rating [HARM_CATEGORY]',
                        description: 'last result text for Gemini'
                    }),
                    disableMonitor: true,
                    func: 'responseSafetyRating',
                    arguments: {
                        CANDIDATE_INDEX: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 1
                        },
                        HARM_CATEGORY: {
                            type: ArgumentType.STRING,
                            menu: 'harmCategoryMenu'
                        }
                    }
                },
                '---',
                {
                    opcode: 'setSafetyRating',
                    blockType: BlockType.COMMAND,
                    text: formatMessage({
                        id: 'gai.setSafetyRating',
                        default: 'set [HARM_CATEGORY] to [BLOCK_THRESHOLD]',
                        description: 'set safety rating for Gemini'
                    }),
                    disableMonitor: true,
                    func: 'setSafetyRating',
                    arguments: {
                        HARM_CATEGORY: {
                            type: ArgumentType.STRING,
                            menu: 'harmCategorySettingMenu'
                        },
                        BLOCK_THRESHOLD: {
                            type: ArgumentType.STRING,
                            menu: 'harmBlockThresholdMenu'
                        }
                    }
                },
                {
                    opcode: 'setGenerationConfig',
                    blockType: BlockType.COMMAND,
                    text: formatMessage({
                        id: 'gai.setGenerationConfig',
                        default: 'set generation [CONFIG] to [VALUE]',
                        description: 'set generation config block text for Gemini'
                    }),
                    func: 'setGenerationConfig',
                    arguments: {
                        CONFIG: {
                            type: ArgumentType.STRING,
                            menu: 'generationConfigMenu'
                        },
                        VALUE: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 1
                        }
                    }
                },
                {
                    opcode: 'generationConfig',
                    blockType: BlockType.REPORTER,
                    disableMonitor: true,
                    text: formatMessage({
                        id: 'gai.generationConfig',
                        default: 'generation [CONFIG]',
                        description: 'generation config block text for Gemini'
                    }),
                    func: 'generationConfig',
                    arguments: {
                        CONFIG: {
                            type: ArgumentType.STRING,
                            menu: 'generationConfigMenu'
                        }
                    }
                },
                {
                    opcode: 'setApiKey',
                    blockType: BlockType.COMMAND,
                    text: formatMessage({
                        id: 'gai.setApiKey',
                        default: 'set API key to [KEY]',
                        description: 'set API key for Gemini'
                    }),
                    func: 'setApiKey',
                    arguments: {
                        KEY: {
                            type: ArgumentType.STRING,
                            defaultValue: ' ',
                            description: 'API key for Gemini'
                        }
                    }
                },
                {
                    opcode: 'startChat',
                    blockType: BlockType.COMMAND,
                    text: formatMessage({
                        id: 'gai.startChat',
                        default: 'start chat with history [HISTORY]',
                        description: 'start chat for Gemini'
                    }),
                    func: 'startChat',
                    arguments: {
                        HISTORY: {
                            type: ArgumentType.STRING,
                            defaultValue: ' '
                        }
                    }
                },
                '---',
                {
                    opcode: 'countPromptTokens',
                    blockType: BlockType.REPORTER,
                    text: formatMessage({
                        id: 'gai.countPromptTokens',
                        default: 'count tokens as prompt [PROMPT]',
                        description: 'count tokens as prompt for Gemini'
                    }),
                    func: 'countPromptTokens',
                    arguments: {
                        PROMPT: {
                            type: ArgumentType.STRING,
                            defaultValue: ' '
                        }
                    }
                },
                {
                    opcode: 'countChatTokens',
                    blockType: BlockType.REPORTER,
                    text: formatMessage({
                        id: 'gai.countChatTokens',
                        default: 'count tokens as chat [MESSAGE]',
                        description: 'count tokens as chat for Gemini'
                    }),
                    func: 'countChatTokens',
                    arguments: {
                        MESSAGE: {
                            type: ArgumentType.STRING,
                            defaultValue: ' '
                        }
                    }
                }
            ],
            menus: {
                harmCategorySettingMenu: {
                    acceptReporters: false,
                    items: 'getHarmCategorySettingMenu'
                },
                harmCategoryMenu: {
                    acceptReporters: false,
                    items: 'getHarmCategoryMenu'
                },
                harmBlockThresholdMenu: {
                    acceptReporters: false,
                    items: 'getHarmBlockThresholdMenu'
                },
                generationConfigMenu: {
                    acceptReporters: false,
                    items: 'getGenerationConfigMenu'
                }
            }
        };
    }

    getHarmCategoryMenu () {
        const menu = [
            {
                text: formatMessage({
                    id: 'gai.harmCategoryMenu.hateSpeech',
                    default: 'Hate Speech',
                    description: 'harm category menu item for hate speech in Gemini'
                }),
                value: HarmCategory.HARM_CATEGORY_HATE_SPEECH
            },
            {
                text: formatMessage({
                    id: 'gai.harmCategoryMenu.sexuallyExplicit',
                    default: 'Sexually Explicit',
                    description: 'harm category menu item for sexually explicit in Gemini'
                }),
                value: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT
            },
            {
                text: formatMessage({
                    id: 'gai.harmCategoryMenu.harassment',
                    default: 'Harassment',
                    description: 'harm category menu item for harassment in Gemini'
                }),
                value: HarmCategory.HARM_CATEGORY_HARASSMENT
            },
            {
                text: formatMessage({
                    id: 'gai.harmCategoryMenu.dangerousContent',
                    default: 'Dangerous Content',
                    description: 'harm category menu item for dangerous content in Gemini'
                }),
                value: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT
            }
        ];
        return menu;
    }

    getHarmCategorySettingMenu () {
        const menu = this.getHarmCategoryMenu();
        menu.unshift({
            text: formatMessage({
                id: 'gai.harmCategorySettingMenu.all',
                default: 'All Harm Categories',
                description: 'harm category menu item for all in Gemini'
            }),
            value: 'ALL'
        });
        return menu;
    }

    getHarmBlockThresholdMenu () {
        const menu = [
            {
                text: formatMessage({
                    id: 'gai.harmBlockThresholdMenu.unspecified',
                    default: 'Unspecified',
                    description: 'harm block threshold menu item for unspecified in Gemini'
                }),
                value: HarmBlockThreshold.HARM_BLOCK_THRESHOLD_UNSPECIFIED
            },
            {
                text: formatMessage({
                    id: 'gai.harmBlockThresholdMenu.blockMost',
                    default: 'Block most',
                    description: 'harm block threshold menu item for block most in Gemini'
                }),
                value: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE
            },
            {
                text: formatMessage({
                    id: 'gai.harmBlockThresholdMenu.blockSome',
                    default: 'Block some',
                    description: 'harm block threshold menu item for block some in Gemini'
                }),
                value: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE
            },
            {
                text: formatMessage({
                    id: 'gai.harmBlockThresholdMenu.blockFew',
                    default: 'Block few',
                    description: 'harm block threshold menu item for block few in Gemini'
                }),
                value: HarmBlockThreshold.BLOCK_ONLY_HIGH
            },
            {
                text: formatMessage({
                    id: 'gai.harmBlockThresholdMenu.blockNone',
                    default: 'Block None',
                    description: 'harm block threshold menu item for block none in Gemini'
                }),
                value: HarmBlockThreshold.BLOCK_NONE
            }
        ];
        return menu;
    }

    getGenerationConfigMenu () {
        const menu = [
            {
                text: formatMessage({
                    id: 'gai.generationConfigMenu.temperature',
                    default: 'Temperature',
                    description: 'generation config menu item for temperature in Gemini'
                }),
                value: 'temperature'
            },
            {
                text: formatMessage({
                    id: 'gai.generationConfigMenu.topP',
                    default: 'Top P',
                    description: 'generation config menu item for top P in Gemini'
                }),
                value: 'topP'
            },
            {
                text: formatMessage({
                    id: 'gai.generationConfigMenu.topK',
                    default: 'Top K',
                    description: 'generation config menu item for top K in Gemini'
                }),
                value: 'topK'
            },
            {
                text: formatMessage({
                    id: 'gai.generationConfigMenu.maxOutputTokens',
                    default: 'Max Output Tokens',
                    description: 'generation config menu item for max output tokens in Gemini'
                }),
                value: 'maxOutputTokens'
            },
            {
                text: formatMessage({
                    id: 'gai.generationConfigMenu.candidateCount',
                    default: 'Candidate Count',
                    description: 'generation config menu item for candidate count in Gemini'
                }),
                value: 'candidateCount'
            },
            {
                text: formatMessage({
                    id: 'gai.generationConfigMenu.stopSequences',
                    default: 'Stop Sequences',
                    description: 'generation config menu item for stop sequences in Gemini'
                }),
                value: 'stopSequences'
            }
        ];
        return menu;
    }


    /**
     * @param {Target} target - the target to get the AI
     * @return {GeminiAdapter} - the AI for the target
     */
    getAI (target) {
        return GeminiAdapter.getForTarget(target);
    }


    /**
     * Prompt to AI.
     * @param {object} args - the block's arguments.
     * @param {string} args.PROMPT - prompt to AI
     * @param {object} util - utility object provided by the runtime.
     * @returns {Promise<string>} - a Promise that resolves response text
     */
    async prompt (args, util) {
        if (!GeminiAdapter.getApiKey()) {
            return 'API key is not set.';
        }
        const target = util.target;
        const runtime = this.runtime;
        const ai = this.getAI(target);
        if (ai.isRequesting()) {
            util.yield();
            return;
        }
        try {
            ai.setRequesting(true);
            const promptText = Cast.toString(args.PROMPT);
            const promptDirectives = parseContentPartsText(promptText);
            const prompt = await interpretContentPartDirectives(promptDirectives, target, runtime);
            const result = await ai.requestPrompt(prompt);
            const response = result.response;
            const text = response.text();
            if (DEBUG) log.log(text);
            return text;
        } catch (error) {
            return error.message;
        } finally {
            if (ai) ai.setRequesting(false);
        }
    }

    /**
     * Chat to AI. Start chat if not started.
     * @param {object} args - the block's arguments.
     * @param {string} args.MESSAGE - message to AI
     * @param {object} util - utility object provided by the runtime.
     * @returns {Promise<string>} - a Promise that resolves response text
     */
    async chat (args, util) {
        if (!GeminiAdapter.getApiKey()) {
            return 'API key is not set.';
        }
        const target = util.target;
        const runtime = this.runtime;
        const ai = this.getAI(target);
        if (ai.isRequesting()) {
            util.yield();
            return;
        }
        try {
            ai.setRequesting(true);
            const messageText = Cast.toString(args.MESSAGE);
            const contentDirectives = parseContentPartsText(messageText);
            const message = await interpretContentPartDirectives(contentDirectives, target, runtime);
            const result = await ai.requestChat(message);
            const response = result.response;
            const text = response.text();
            if (DEBUG) log.log(text);
            return text;
        } catch (error) {
            return error.message;
        } finally {
            if (ai) ai.setRequesting(false);
        }
    }

    /**
     * Start chat with history.
     * @param {object} args - the block's arguments.
     * @param {string} args.HISTORY - contents of the history of chat
     * @param {object} util - utility object provided by the runtime.
     * @returns {Promise<void>} - a Promise that resolves when the chat is started
     */
    async startChat (args, util) {
        const target = util.target;
        const runtime = this.runtime;
        const textHistory = JSON.parse(`[${String(args.HISTORY)}]`);
        const interpretedHistory = textHistory.map(async contentText => {
            if (contentText.parts) {
                const contentDirectives = parseContentPartsText(contentText.parts);
                const contentParts = await interpretContentPartDirectives(contentDirectives, target, runtime);
                return {role: contentText.role, parts: contentParts};
            }
            return contentText;
        });
        const history = await Promise.all(interpretedHistory);
        this.getAI(target).startChat(history);
    }

    /**
     * Get response text from last result.
     * @param {object} args - the block's arguments.
     * @param {string} args.CANDIDATE_INDEX - index of candidate
     * @param {object} util - utility object provided by the runtime.
     * @returns {string} - response text
     */
    responseText (args, util) {
        const target = util.target;
        if (!GeminiAdapter.existsForTarget(target)) {
            return '';
        }
        const ai = GeminiAdapter.getForTarget(target);
        const response = ai.getLastResponse(target);
        if (!response) {
            return '';
        }
        const candidateIndex = parseInt(args.CANDIDATE_INDEX, 10);
        const candidate = response.candidates[candidateIndex - 1];
        if (!candidate) {
            return `no candidate #${candidateIndex}`;
        }
        return candidate.content.parts[0].text;
    }

    /**
     * Get response safety rating from last result.
     * @param {object} args - the block's arguments.
     * @param {string} args.CANDIDATE_INDEX - index of candidate
     * @param {string} args.HARM_CATEGORY - harm category
     * @param {object} util - utility object provided by the runtime.
     * @returns {string} - response safety rating
     */
    responseSafetyRating (args, util) {
        const target = util.target;
        if (!GeminiAdapter.existsForTarget(target)) {
            return '';
        }
        const ai = GeminiAdapter.getForTarget(target);
        const response = ai.getLastResponse();
        if (!response) {
            return '';
        }
        const candidateIndex = parseInt(args.CANDIDATE_INDEX, 10);
        const candidate = response.candidates[candidateIndex - 1];
        if (!candidate) {
            return `no candidate #${candidateIndex}`;
        }
        const category = args.HARM_CATEGORY;
        const rating = candidate.safetyRatings.find(r => r.category === category);
        if (!rating) {
            return ``;
        }
        let probability = rating.probability;
        switch (probability) {
        case 'HARM_PROBABILITY_UNSPECIFIED':
            probability = 'Unspecified';
            break;
        case 'NEGLIGIBLE':
            probability = 'Negligible';
            break;
        case 'LOW':
            probability = 'Low';
            break;
        case 'MEDIUM':
            probability = 'Medium';
            break;
        case 'HIGH':
            probability = 'High';
            break;
        default:
            break;
        }
        return probability;
    }

    /**
     * Set safety rating.
     * @param {object} args - the block's arguments.
     * @param {string} args.HARM_CATEGORY - harm category
     * @param {string} args.BLOCK_THRESHOLD - block threshold
     * @param {object} util - utility object provided by the runtime.
     * @returns {void}
     */
    setSafetyRating (args, util) {
        try {
            const target = util.target;
            const ai = this.getAI(target);
            const modelParams = ai.getModelParams();
            const harmCategory = args.HARM_CATEGORY;
            const harmBlockThreshold = args.BLOCK_THRESHOLD;
            const setParams = (category, threshold) => {
                const safetyRating = {
                    category: category,
                    threshold: threshold
                };
                const index = modelParams.safetySettings.findIndex(r => r.category === category);
                if (index >= 0) {
                    modelParams.safetySettings[index] = safetyRating;
                } else {
                    modelParams.safetySettings.push(safetyRating);
                }
            };
            if (harmCategory === 'ALL') {
                Object.keys(HarmCategory)
                    .forEach(category => {
                        if (category === 'HARM_CATEGORY_UNSPECIFIED') return;
                        setParams(category, harmBlockThreshold);
                    });
            } else {
                setParams(harmCategory, harmBlockThreshold);
            }
        } catch (error) {
            log.error(error);
            return error.message;
        }
    }

    /**
     * Set generation config.
     * @param {object} args - the block's arguments.
     * @param {string} args.CONFIG - config key
     * @param {string} args.VALUE - config value
     * @param {object} util - utility object provided by the runtime.
     * @returns {void}
     */
    setGenerationConfig (args, util) {
        try {
            const target = util.target;
            const ai = this.getAI(target);
            const modelParams = ai.getModelParams();
            const configKey = args.CONFIG;
            let configValue = args.VALUE;
            switch (configKey) {
            case 'maxOutputTokens':
                configValue = Math.max(1, parseInt(configValue, 10));
                break;
            case 'candidateCount':
                configValue = Math.max(1, parseInt(configValue, 10));
                break;
            case 'stopSequences':
                configValue = String(configValue).split(',')
                    .map(s => s.trim());
                break;
            case 'temperature':
                configValue = Math.max(0.0, Math.min(1.0, configValue));
                break;
            case 'topP':
                configValue = Math.max(0.0, Math.min(1.0, configValue));
                break;
            case 'topK':
                configValue = Math.max(1, parseInt(configValue, 10));
                break;
            default:
                throw new Error(`unknown config key: ${configKey}`);
            }
            if (configValue === '') {
                delete modelParams.generationConfig[configKey];
                return;
            }
            modelParams.generationConfig[configKey] = configValue;
        } catch (error) {
            log.error(error);
            return error.message;
        }
    }

    /**
     * Get generation config.
     * @param {object} args - the block's arguments.
     * @param {string} args.CONFIG - config key
     * @param {object} util - utility object provided by the runtime.
     * @returns {string} - config value
     */
    generationConfig (args, util) {
        try {
            const target = util.target;
            const ai = this.getAI(target);
            const modelParams = ai.getModelParams();
            const configKey = args.CONFIG;
            const configValue = modelParams.generationConfig[configKey];
            if (typeof configValue === 'undefined') {
                return '';
            }
            return configValue;
        } catch (error) {
            log.error(error);
            return error.message;
        }
    }

    /**
     * Set API key and reset AI.
     * @param {object} args - the block's arguments.
     * @param {string} args.KEY - API key
     * @param {object} util - utility object provided by the runtime.
     * @returns {void}
     */
    setApiKey (args, util) {
        const target = util.target;
        const apiKey = Cast.toString(args.KEY).trim();
        GeminiAdapter.setApiKey(apiKey);
        if (GeminiAdapter.existsForTarget(target)) {
            GeminiAdapter.removeForTarget(target);
        }
    }

    /**
     * Count tokens of prompt.
     * @param {object} args - the block's arguments.
     * @param {string} args.PROMPT - prompt
     * @param {object} util - utility object provided by the runtime.
     * @returns {number} - count of tokens
     */
    async countPromptTokens (args, util) {
        if (!GeminiAdapter.getApiKey()) {
            return 'API key is not set.';
        }
        const target = util.target;
        const runtime = this.runtime;
        const ai = this.getAI(target);
        if (ai.isRequesting()) {
            util.yield();
            return;
        }
        try {
            ai.setRequesting(true);
            const promptText = Cast.toString(args.PROMPT);
            const promptDirectives = parseContentPartsText(promptText);
            const prompt = await interpretContentPartDirectives(promptDirectives, target, runtime);
            const result = await ai.countTokens(prompt);
            return result;
        } catch (error) {
            return error.message;
        } finally {
            if (ai) ai.setRequesting(false);
        }
    }

    /**
     * Count tokens of chat.
     * @param {object} args - the block's arguments.
     * @param {string} args.MESSAGE - message
     * @param {object} util - utility object provided by the runtime.
     * @returns {number} - count of tokens
     */
    async countChatTokens (args, util) {
        if (!GeminiAdapter.getApiKey()) {
            return 'API key is not set.';
        }
        const target = util.target;
        const ai = this.getAI(target);
        if (ai.isRequesting()) {
            util.yield();
            return;
        }
        try {
            ai.setRequesting(true);
            const messageText = Cast.toString(args.MESSAGE);
            const history = await ai.getChatHistory();
            const messageContent = {role: 'user', parts: [{text: messageText}]};
            const contents = [...history, messageContent];
            const result = await ai.countTokens({contents});
            return result;
        } catch (error) {
            return error.message;
        } finally {
            if (ai) ai.setRequesting(false);
        }
    }
}

export {GeminiBlocks as default, GeminiBlocks as blockClass};

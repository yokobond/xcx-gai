import BlockType from '../../extension-support/block-type';
import ArgumentType from '../../extension-support/argument-type';
import Cast from '../../util/cast';
import translations from './translations.json';
import blockIcon from './block-icon.png';

import {DEBUG, checkDebugMode} from './dev-util.js';
import {
    GeminiAdapter,
    HarmCategory, HarmBlockThreshold, EmbeddingTaskType,
    getTextFromResponse
} from './gemini-adapter.js';
import {getCostumeByNameOrNumber, costumeToDataURL, addImageAsCostume} from './costume-util.js';
import {interpretContentPartsText} from './content-directive.js';
import {dotProduct, euclideanDistance} from './math-util.js';

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
 * Xcratch blocks for Gemini Generative AI (GAI).
 * This class provides blocks to interact with Gemini API.
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

        this.runtime.on('PROJECT_STOP_ALL', () => {
            this.stopListening();
        });

        this.functionNamePrefix = 'func_';
        this.functionArgPrefix = 'arg_';
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
                    opcode: 'generate',
                    blockType: BlockType.COMMAND,
                    text: formatMessage({
                        id: 'gai.generate',
                        default: 'generate [PROMPT]',
                        description: 'generate block text of GAI'
                    }),
                    func: 'generate',
                    arguments: {
                        PROMPT: {
                            type: ArgumentType.STRING,
                            defaultValue: formatMessage({
                                id: 'gai.generateDefault',
                                default: 'What is AI?',
                                description: 'default generate prompt for Gemini'
                            })
                        }
                    }
                },
                {
                    opcode: 'chat',
                    blockType: BlockType.COMMAND,
                    text: formatMessage({
                        id: 'gai.chat',
                        default: 'chat [PROMPT]',
                        description: 'chat block text of GAI'
                    }),
                    func: 'chat',
                    arguments: {
                        PROMPT: {
                            type: ArgumentType.STRING,
                            defaultValue: formatMessage({
                                id: 'gai.chatDefault',
                                default: 'Hello Gemini!',
                                description: 'default chat prompt for GAI'
                            })
                        }
                    }
                },
                {
                    opcode: 'chatHistory',
                    blockType: BlockType.REPORTER,
                    text: formatMessage({
                        id: 'gai.chatHistory',
                        default: 'chat history',
                        description: 'chat history block text for Gemini'
                    }),
                    disableMonitor: true,
                    func: 'chatHistory',
                    arguments: {
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
                    opcode: 'whenResponseReceived',
                    blockType: BlockType.EVENT,
                    text: formatMessage({
                        id: 'gai.whenResponseReceived',
                        default: 'when response received',
                        description: 'when response received for Gemini'
                    }),
                    isEdgeActivated: false,
                    shouldRestartExistingThreads: true
                },
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
                            menu: 'responseCandidateIndexMenu'
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
                            menu: 'responseCandidateIndexMenu'
                        },
                        HARM_CATEGORY: {
                            type: ArgumentType.STRING,
                            menu: 'harmCategoryMenu'
                        }
                    }
                },
                {
                    opcode: 'whenPartialResponseReceived',
                    blockType: BlockType.EVENT,
                    text: formatMessage({
                        id: 'gai.whenPartialResponseReceived',
                        default: 'when partial response received',
                        description: 'when partial response received for Gemini'
                    }),
                    isEdgeActivated: false,
                    shouldRestartExistingThreads: true
                },
                {
                    opcode: 'partialResponseText',
                    blockType: BlockType.REPORTER,
                    text: formatMessage({
                        id: 'gai.partialResponseText',
                        default: 'partial response text',
                        description: 'partial response text of Gemini'
                    }),
                    disableMonitor: true,
                    func: 'partialResponseText',
                    arguments: {
                    }
                },
                '---',
                {
                    opcode: 'costumeData',
                    blockType: BlockType.REPORTER,
                    disableMonitor: true,
                    text: formatMessage({
                        id: 'gai.costumeData',
                        default: 'costume data [COSTUME]'
                    }),
                    func: 'costumeData',
                    arguments: {
                        COSTUME: {
                            type: ArgumentType.STRING,
                            menu: 'costumeMenu'
                        }
                    }
                },
                {
                    opcode: 'backdropData',
                    blockType: BlockType.REPORTER,
                    disableMonitor: true,
                    text: formatMessage({
                        id: 'gai.backdropData',
                        default: 'backdrop data [BACKDROP]'
                    }),
                    func: 'backdropData',
                    arguments: {
                        BACKDROP: {
                            type: ArgumentType.STRING,
                            menu: 'backdropMenu'
                        }
                    }
                },
                {
                    opcode: 'snapshotData',
                    blockType: BlockType.REPORTER,
                    disableMonitor: true,
                    text: formatMessage({
                        id: 'gai.snapshotData',
                        default: 'snapshot data',
                        description: 'snapshotData block text for Gemini'
                    }),
                    func: 'snapshotData',
                    arguments: {
                    }
                },
                {
                    opcode: 'soundData',
                    blockType: BlockType.REPORTER,
                    disableMonitor: true,
                    text: formatMessage({
                        id: 'gai.soundData',
                        default: 'sound data [SOUND]',
                        description: 'soundData block text for Gemini'
                    }),
                    func: 'soundData',
                    arguments: {
                        SOUND: {
                            type: ArgumentType.STRING,
                            menu: 'soundMenu'
                        }
                    }
                },
                {
                    opcode: 'startListening',
                    blockType: BlockType.COMMAND,
                    text: formatMessage({
                        id: 'gai.startListening',
                        default: 'start listening',
                        description: 'startListening block text for Gemini'
                    }),
                    func: 'startListening',
                    arguments: {
                    }
                },
                {
                    opcode: 'stopListening',
                    blockType: BlockType.COMMAND,
                    text: formatMessage({
                        id: 'gai.stopListening',
                        default: 'stop listening',
                        description: 'stopListening block text for Gemini'
                    }),
                    func: 'stopListening',
                    arguments: {
                    }
                },
                {
                    opcode: 'listenedData',
                    blockType: BlockType.REPORTER,
                    disableMonitor: true,
                    text: formatMessage({
                        id: 'gai.listenedData',
                        default: 'listened data',
                        description: 'listenedData block text for Gemini'
                    }),
                    func: 'listenedData',
                    arguments: {
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
                            type: ArgumentType.STRING,
                            defaultValue: '1'
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
                '---',
                {
                    opcode: 'setFunctionCallingMode',
                    blockType: BlockType.COMMAND,
                    text: formatMessage({
                        id: 'gai.setFunctionCallingMode',
                        default: 'set function calling mode [MODE]',
                        description: 'set function calling mode block text for Gemini'
                    }),
                    func: 'setFunctionCallingMode',
                    arguments: {
                        MODE: {
                            type: ArgumentType.STRING,
                            menu: 'functionCallingModeMenu'
                        }
                    }
                },
                {
                    opcode: 'returnResultToAI',
                    blockType: BlockType.COMMAND,
                    isTerminal: true,
                    text: formatMessage({
                        id: 'gai.returnResultToAI',
                        default: 'return [RESULT] to AI',
                        description: 'return result to AI block text for Gemini'
                    }),
                    arguments: {
                        RESULT: {
                            type: ArgumentType.STRING,
                            defaultValue: ' '
                        }
                    }
                },
                '---',
                {
                    opcode: 'countTokensAs',
                    blockType: BlockType.REPORTER,
                    text: formatMessage({
                        id: 'gai.countTokensAs',
                        default: 'count tokens [CONTENT] as [REQUEST_TYPE]',
                        description: 'count tokens block text for Gemini'
                    }),
                    func: 'countTokensAs',
                    arguments: {
                        CONTENT: {
                            type: ArgumentType.STRING,
                            defaultValue: ' '
                        },
                        REQUEST_TYPE: {
                            type: ArgumentType.STRING,
                            menu: 'countTokensRequestTypeMenu'
                        }
                    }
                },
                {
                    opcode: 'setGenerativeModel',
                    blockType: BlockType.COMMAND,
                    text: formatMessage({
                        id: 'gai.setGenerativeModel',
                        default: 'use model [MODEL_CODE] for generative',
                        description: 'generative model code setting block for Gemini'
                    }),
                    func: 'setGenerativeModel',
                    arguments: {
                        MODEL_CODE: {
                            type: ArgumentType.STRING,
                            defaultValue: GeminiAdapter.MODEL_CODE.generative
                        }
                    }
                },
                {
                    opcode: 'getGenerativeModel',
                    blockType: BlockType.REPORTER,
                    disableMonitor: true,
                    text: formatMessage({
                        id: 'gai.getGenerativeModel',
                        default: 'generative model',
                        description: 'generative model block text for Gemini'
                    }),
                    func: 'getGenerativeModel',
                    arguments: {
                    }
                },
                {
                    opcode: 'getGenerativeModelID',
                    blockType: BlockType.REPORTER,
                    disableMonitor: true,
                    text: formatMessage({
                        id: 'gai.getGenerativeModelID',
                        default: 'generative model ID at [MODEL_INDEX]',
                        description: 'generative model ID block text for Gemini'
                    }),
                    func: 'getGenerativeModelID',
                    arguments: {
                        MODEL_INDEX: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 1
                        }
                    }
                },
                {
                    opcode: 'getMaxGenerativeModelNumber',
                    blockType: BlockType.REPORTER,
                    disableMonitor: true,
                    text: formatMessage({
                        id: 'gai.getMaxGenerativeModelNumber',
                        default: 'max generative model number',
                        description: 'max generative model number block text for Gemini'
                    }),
                    func: 'getMaxGenerativeModelNumber',
                    arguments: {
                    }
                },
                '---',
                {
                    opcode: 'getValueFromJson',
                    blockType: BlockType.REPORTER,
                    text: formatMessage({
                        id: 'gai.getValueFromJson',
                        default: 'get [PATH] from JSON [JSON]',
                        description: 'get value from JSON block text for Gemini'
                    }),
                    func: 'getValueFromJson',
                    arguments: {
                        PATH: {
                            type: ArgumentType.STRING,
                            defaultValue: 'key1.key2'
                        },
                        JSON: {
                            type: ArgumentType.STRING,
                            defaultValue: '{"key1":{"key2":"value"}}'
                        }
                    }
                },
                {
                    opcode: 'getItemOfJsonArray',
                    blockType: BlockType.REPORTER,
                    text: formatMessage({
                        id: 'gai.getItemOfJsonArray',
                        default: 'item [INDEX] of JSON array [JSON]',
                        description: 'get value from JSON array block text for Gemini'
                    }),
                    func: 'getItemOfJsonArray',
                    arguments: {
                        INDEX: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 1
                        },
                        JSON: {
                            type: ArgumentType.STRING,
                            defaultValue: '[1,2,3]'
                        }
                    }
                },
                {
                    opcode: 'lengthOfJsonArray',
                    blockType: BlockType.REPORTER,
                    text: formatMessage({
                        id: 'gai.lengthOfJsonArray',
                        default: 'length of JSON array [JSON]',
                        description: 'length of JSON array block text for Gemini'
                    }),
                    func: 'lengthOfJsonArray',
                    arguments: {
                        JSON: {
                            type: ArgumentType.STRING,
                            defaultValue: '[1,2,3]'
                        }
                    }
                },
                '---',
                {
                    opcode: 'embeddingFor',
                    blockType: BlockType.REPORTER,
                    text: formatMessage({
                        id: 'gai.embeddingFor',
                        default: 'embedding of [CONTENT] for [TASK_TYPE]',
                        description: 'embed block text for Gemini'
                    }),
                    func: 'embeddingFor',
                    arguments: {
                        CONTENT: {
                            type: ArgumentType.STRING,
                            defaultValue: ' '
                        },
                        TASK_TYPE: {
                            type: ArgumentType.STRING,
                            menu: 'embeddingTaskTypeMenu'
                        }
                    }
                },
                {
                    opcode: 'embeddingDistanceOf',
                    blockType: BlockType.REPORTER,
                    text: formatMessage({
                        id: 'gai.embeddingDistanceOf',
                        default: '[METRIC] of [VECTOR_A] and [VECTOR_B]',
                        description: 'vector distance block text for Gemini'
                    }),
                    func: 'embeddingDistanceOf',
                    arguments: {
                        METRIC: {
                            type: ArgumentType.STRING,
                            menu: 'distanceMetricMenu'
                        },
                        VECTOR_A: {
                            type: ArgumentType.STRING,
                            defaultValue: '1,1,1'
                        },
                        VECTOR_B: {
                            type: ArgumentType.STRING,
                            defaultValue: '1,2,3'
                        }
                    }
                },
                '---',
                {
                    opcode: 'setEmbeddingModel',
                    blockType: BlockType.COMMAND,
                    text: formatMessage({
                        id: 'gai.setEmbeddingModel',
                        default: 'use model [MODEL_CODE] for embedding',
                        description: 'embedding model code setting block for Gemini'
                    }),
                    func: 'setEmbeddingModel',
                    arguments: {
                        MODEL_CODE: {
                            type: ArgumentType.STRING,
                            defaultValue: GeminiAdapter.MODEL_CODE.embedding
                        }
                    }
                },
                {
                    opcode: 'getEmbeddingModel',
                    blockType: BlockType.REPORTER,
                    disableMonitor: true,
                    text: formatMessage({
                        id: 'gai.getEmbeddingModel',
                        default: 'embedding model',
                        description: 'embedding model block text for Gemini'
                    }),
                    func: 'getEmbeddingModel',
                    arguments: {
                    }
                },
                {
                    opcode: 'getEmbeddingModelID',
                    blockType: BlockType.REPORTER,
                    disableMonitor: true,
                    text: formatMessage({
                        id: 'gai.getEmbeddingModelID',
                        default: 'embedding model ID at [MODEL_INDEX]',
                        description: 'embedding model ID block text for Gemini'
                    }),
                    func: 'getEmbeddingModelID',
                    arguments: {
                        MODEL_INDEX: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 1
                        }
                    }
                },
                {
                    opcode: 'getMaxEmbeddingModelNumber',
                    blockType: BlockType.REPORTER,
                    disableMonitor: true,
                    text: formatMessage({
                        id: 'gai.getMaxEmbeddingModelNumber',
                        default: 'max embedding model number',
                        description: 'max embedding model number block text for Gemini'
                    }),
                    func: 'getMaxEmbeddingModelNumber',
                    arguments: {
                    }
                },
                '---',
                {
                    opcode: 'askApiKey',
                    blockType: BlockType.COMMAND,
                    blockAllThreads: true,
                    text: formatMessage({
                        id: 'gai.askApiKey',
                        default: 'ask API key',
                        description: 'ask API key for Gemini'
                    }),
                    func: 'askApiKey',
                    arguments: {
                    }
                },
                {
                    opcode: 'apiKey',
                    blockType: BlockType.REPORTER,
                    disableMonitor: true,
                    text: formatMessage({
                        id: 'gai.apiKey',
                        default: 'API key',
                        description: 'API key for Gemini'
                    }),
                    func: 'apiKey',
                    arguments: {
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
                    opcode: 'setBaseUrl',
                    blockType: BlockType.COMMAND,
                    text: formatMessage({
                        id: 'gai.setBaseUrl',
                        default: 'set base URL to [URL]',
                        description: 'set base URL for Gemini'
                    }),
                    func: 'setBaseUrl',
                    arguments: {
                        URL: {
                            type: ArgumentType.STRING,
                            defaultValue: GeminiAdapter.baseUrl,
                            description: 'default base URL for Gemini'
                        }
                    }
                },
                {
                    opcode: 'baseUrl',
                    blockType: BlockType.REPORTER,
                    disableMonitor: true,
                    text: formatMessage({
                        id: 'gai.baseUrl',
                        default: 'base URL',
                        description: 'base URL for Gemini'
                    }),
                    func: 'baseUrl',
                    arguments: {
                    }
                }
            ],
            menus: {
                costumeMenu: {
                    acceptReporters: true,
                    items: 'getCostumeMenu'
                },
                backdropMenu: {
                    acceptReporters: true,
                    items: 'getBackdropMenu'
                },
                soundMenu: {
                    acceptReporters: true,
                    items: 'getSoundMenu'
                },
                responseCandidateIndexMenu: {
                    acceptReporters: true,
                    items: 'getResponseCandidateIndexMenu'
                },
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
                },
                functionCallingModeMenu: {
                    acceptReporters: false,
                    items: 'getFunctionCallingModeMenu'
                },
                countTokensRequestTypeMenu: {
                    acceptReporters: false,
                    items: 'getCountTokensRequestTypeMenu'
                },
                distanceMetricMenu: {
                    acceptReporters: false,
                    items: 'getEmbeddingDistanceMetricMenu'
                },
                embeddingTaskTypeMenu: {
                    acceptReporters: false,
                    items: 'getEmbeddingTaskTypeMenu'
                }
            }
        };
    }

    getCostumeMenu () {
        const menu = [];
        const target = this.runtime.getEditingTarget();
        if (!target) {
            return menu;
        }
        const costumes = target.sprite.costumes;
        for (let i = 0; i < costumes.length; i++) {
            menu.push({
                text: costumes[i].name,
                value: costumes[i].name
            });
        }
        return menu;
    }

    getBackdropMenu () {
        const menu = [];
        const target = this.runtime.getTargetForStage();
        const backdrops = target.sprite.costumes;
        for (let i = 0; i < backdrops.length; i++) {
            menu.push({
                text: backdrops[i].name,
                value: backdrops[i].name
            });
        }
        return menu;
    }

    getSoundMenu () {
        const menu = [];
        const target = this.runtime.getEditingTarget();
        if (!target) {
            return [''];
        }
        const sounds = target.sprite.sounds;
        for (let i = 0; i < sounds.length; i++) {
            menu.push({
                text: sounds[i].name,
                value: sounds[i].name
            });
        }
        if (sounds.length === 0) {
            return [''];
        }
        return menu;
    }

    getResponseCandidateIndexMenu () {
        const menu = [{text: '1', value: '1'}];
        const target = this.runtime.getEditingTarget();
        if (!target) {
            return menu;
        }
        const ai = this.getAI(target);
        const candidateCount = ai.generationConfig.candidateCount;
        if (!candidateCount) {
            return menu;
        }
        for (let i = 1; i < candidateCount; i++) {
            menu.push({
                text: String(i + 1),
                value: String(i + 1)
            });
        }
        return menu;
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
            },
            {
                text: formatMessage({
                    id: 'gai.generationConfigMenu.systemInstruction',
                    default: 'System Instruction',
                    description: 'generation config menu item for system instruction in Gemini'
                }),
                value: 'systemInstruction'
            },
            {
                text: formatMessage({
                    id: 'gai.generationConfigMenu.responseSchema',
                    default: 'Response Schema',
                    description: 'generation config menu item for response schema in Gemini'
                }),
                value: 'responseSchema'
            }
        ];
        return menu;
    }

    getFunctionCallingModeMenu () {
        const menu = [
            {
                text: formatMessage({
                    id: 'gai.functionCallingModeMenu.auto',
                    default: 'Auto',
                    description: 'function calling mode menu item for auto in Gemini'
                }),
                value: 'AUTO'
            },
            {
                text: formatMessage({
                    id: 'gai.functionCallingModeMenu.any',
                    default: 'Any',
                    description: 'function calling mode menu item for function calling mode in Gemini'
                }),
                value: 'ANY'
            },
            {
                text: formatMessage({
                    id: 'gai.functionCallingModeMenu.none',
                    default: 'None',
                    description: 'function calling mode menu item for none in Gemini'
                }),
                value: 'NONE'
            }
        ];
        return menu;
    }

    getCountTokensRequestTypeMenu () {
        const menu = [
            {
                text: formatMessage({
                    id: 'gai.countTokensRequestTypeMenu.generate',
                    default: 'Generate',
                    description: 'count tokens request type menu item for generate in Gemini'
                }),
                value: 'generate'
            },
            {
                text: formatMessage({
                    id: 'gai.countTokensRequestTypeMenu.chat',
                    default: 'Chat',
                    description: 'count tokens request type menu item for chat in Gemini'
                }),
                value: 'chat'
            }
        ];
        return menu;
    }

    getEmbeddingDistanceMetricMenu () {
        const menu = [
            {
                text: formatMessage({
                    id: 'gai.distanceMetricMenu.dotProduct',
                    default: 'Dot Product',
                    description: 'distance metric menu item for dot product in Gemini'
                }),
                value: 'dotProduct'
            },
            {
                text: formatMessage({
                    id: 'gai.distanceMetricMenu.euclidean',
                    default: 'Euclidean Distance',
                    description: 'distance metric menu item for euclidean in Gemini'
                }),
                value: 'euclidean'
            }
        ];
        return menu;
    }

    getEmbeddingTaskTypeMenu () {
        const menu = [
            {
                text: formatMessage({
                    id: 'gai.embeddingTaskTypeMenu.semanticSimilarity',
                    default: 'Semantic Similarity',
                    description: 'embedding task type menu item in Gemini'
                }),
                value: EmbeddingTaskType.SEMANTIC_SIMILARITY
            },
            {
                text: formatMessage({
                    id: 'gai.embeddingTaskTypeMenu.classification',
                    default: 'Classification',
                    description: 'embedding task type menu item in Gemini'
                }),
                value: EmbeddingTaskType.CLASSIFICATION
            },
            {
                text: formatMessage({
                    id: 'gai.embeddingTaskTypeMenu.clustering',
                    default: 'Clustering',
                    description: 'embedding task type menu item in Gemini'
                }),
                value: EmbeddingTaskType.CLUSTERING
            },
            {
                text: formatMessage({
                    id: 'gai.embeddingTaskTypeMenu.retrievalDocument',
                    default: 'Retrieval Document',
                    description: 'embedding task type menu item in Gemini'
                }),
                value: EmbeddingTaskType.RETRIEVAL_DOCUMENT
            },
            {
                text: formatMessage({
                    id: 'gai.embeddingTaskTypeMenu.retrievalQuery',
                    default: 'Retrieval Query',
                    description: 'embedding task type menu item in Gemini'
                }),
                value: EmbeddingTaskType.RETRIEVAL_QUERY
            },
            {
                text: formatMessage({
                    id: 'gai.embeddingTaskTypeMenu.questionAnswering',
                    default: 'Question Answering',
                    description: 'embedding task type menu item in Gemini'
                }),
                value: EmbeddingTaskType.QUESTION_ANSWERING
            },
            {
                text: formatMessage({
                    id: 'gai.embeddingTaskTypeMenu.factVerification',
                    default: 'Fact Verification',
                    description: 'embedding task type menu item in Gemini'
                }),
                value: EmbeddingTaskType.FACT_VERIFICATION
            },
            {
                text: formatMessage({
                    id: 'gai.embeddingTaskTypeMenu.codeRetrievalQuery',
                    default: 'Code Retrieval Query',
                    description: 'embedding task type menu item in Gemini'
                }),
                value: EmbeddingTaskType.CODE_RETRIEVAL_QUERY
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
     * Get partial response text from last result.
     * @param {object} args - the block's arguments.
     * @param {object} util - utility object provided by the runtime.
     * @returns {string} - partial response text
     */
    partialResponseText (args, util) {
        const target = util.target;
        if (!GeminiAdapter.existsForTarget(target)) {
            return '';
        }
        const ai = GeminiAdapter.getForTarget(target);
        const response = ai.getLastPartialResponse();
        if (!response) {
            return '';
        }
        return getTextFromResponse(response);
    }

    /**
     * Whether the block is using in the target.
     * @param {string} blockOpcode - block opcode
     * @param {Target} target - the target to check
     * @returns {boolean} - whether the block is using in the target
     */
    blockIsUsingInTarget (blockOpcode, target) {
        const executableBlocks = target.blocks._blocks;
        for (const block in executableBlocks) {
            if (executableBlocks[block].opcode === blockOpcode) {
                return true;
            }
        }
        return false;
    }

    /**
     * Dispatch function calls from the prompt in new threads.
     * @param {Array<object>} funcCalls - the function calls array
     * @param {object} util - the utility object
     * @returns {void}
     */
    dispatchFunctionCalls (funcCalls, util) {
        const target = util.target;
        const ai = this.getAI(target);
        funcCalls.filter(funcCall => funcCall.status === 'PENDING')
            .forEach(funcCall => {
                funcCall.status = 'PROCESSING';
                // Find the procedure definition
                const functionSpec = ai.functionRegistry[funcCall.name];
                if (!functionSpec) {
                    console.warn(`Procedure not found: ${funcCall.name}`);
                    funcCall.status = 'FAILED';
                    return;
                }
                const procedureCode = functionSpec.procedureCode;
                // Get the procedure definition block ID
                const procedureDefinition = target.blocks.getProcedureDefinition(procedureCode);
                if (!procedureDefinition) {
                    console.warn(`Procedure definition not found: ${procedureCode}`);
                    funcCall.status = 'FAILED';
                    return;
                }
                const argumentMap = {};
                Object.entries(funcCall.args).forEach(([key, value]) => {
                    const paramName = functionSpec.argumentDict[key];
                    if (paramName) {
                    // Type conversion
                        switch (functionSpec.declaration.parameters.properties[key].type) {
                        case 'string':
                            value = String(value);
                            break;
                        case 'number':
                            value = Number(value);
                            break;
                        case 'boolean':
                            value = Boolean(value);
                            break;
                        }
                        argumentMap[paramName] = value;
                    }
                });

                const procThread = this.runtime._pushThread(procedureDefinition, target);
                procThread.persistentParams = argumentMap;
                // Hook into the thread's getParam and pushStack methods to handle persistent parameters
                const originalGetParam = procThread.getParam.bind(procThread);
                procThread.getParam = function (paramName) {
                    let value = originalGetParam(paramName);
                    if (value === null && procThread.persistentParams &&
                    Object.prototype.hasOwnProperty.call(procThread.persistentParams, paramName)) {
                        value = procThread.persistentParams[paramName];
                    }
                
                    return value;
                };
                const originalPushStack = procThread.pushStack.bind(procThread);
                procThread.pushStack = function (blockId) {
                    const result = originalPushStack(blockId);
                    if (procThread.persistentParams) {
                        if (procThread.initParams) {
                            procThread.initParams();
                            Object.entries(procThread.persistentParams).forEach(([paramName, value]) => {
                                if (procThread.pushParam) {
                                    procThread.pushParam(paramName, value);
                                }
                            });
                        }
                    }
                
                    return result;
                };

                // Use STATUS_YIELD_TICK to ensure parameter setup happens before actual execution
                procThread.status = 3; // Thread.STATUS_YIELD_TICK

                procThread.functionCall = funcCall;
                funcCall.thread = procThread;
            });
    }

    /**
     * Check if all function calls have completed
     * @param {Array<FunctionCall>} funcCalls - array of function calls
     * @returns {boolean} - true if all completed
     */
    allFunctionCallsFinished (funcCalls) {
        return funcCalls.every(funcCall =>
            funcCall.status === 'COMPLETED' ||
        funcCall.status === 'FAILED' ||
        (funcCall.thread && this.runtime.threads.indexOf(funcCall.thread) === -1)
        );
    }

    /**
     * Mark completed function calls and clean up
     * @param {Array} funcCalls - array of function calls
     */
    cleanupStoppedFunctionCalls (funcCalls) {
        if (!Array.isArray(funcCalls) || funcCalls.length === 0) {
            return;
        }
        const indicesToRemove = [];
        for (let i = 0; i < funcCalls.length; i++) {
            const funcCall = funcCalls[i];
            if (funcCall.thread && this.runtime.threads.indexOf(funcCall.thread) === -1) {
                if (funcCall.status === 'PENDING' || funcCall.status === 'PROCESSING') {
                    funcCall.status = 'STOPPED';
                    if (DEBUG) {
                        console.log(`Function call ${funcCall.name} marked as STOPPED`);
                    }
                }
                delete funcCall.thread;
                indicesToRemove.push(i);
            }
        }
        for (let i = indicesToRemove.length - 1; i >= 0; i--) {
            const indexToRemove = indicesToRemove[i];
            funcCalls.splice(indexToRemove, 1);
        }
        
        if (DEBUG && indicesToRemove.length > 0) {
            console.log(`Cleaned up ${indicesToRemove.length} stopped function calls`);
        }
    }

    /**
     * Request AI to generate content.
     * @param {object} args - the block's arguments.
     * @param {string} args.PROMPT - prompt to AI
     * @param {object} util - utility object provided by the runtime.
     * @returns {Promise<string>} - a Promise that resolves response text
     */
    generate (args, util) {
        if (!GeminiAdapter.getApiKey()) {
            return 'API key is not set.';
        }
        const promptText = Cast.toString(args.PROMPT);
        const target = util.target;
        const ai = this.getAI(target);
        const prompt = interpretContentPartsText(promptText);
        const stackFrame = util.stackFrame;
        if (stackFrame.functionCalls) {
            const callsToStart = stackFrame.functionCalls.filter(funcCall => funcCall.status === 'PENDING');
            if (callsToStart.length > 0) {
                this.dispatchFunctionCalls(callsToStart, util);
                util.yield();
                return;
            }
        }
        if (stackFrame.isResponseReceived) {
            if (stackFrame.functionCalls
                .every(funcCall => funcCall.thread &&
                    this.runtime.threads.indexOf(funcCall.thread) === -1)) {
                // All function calls are completed, exit this block
                this.cleanupStoppedFunctionCalls(stackFrame.functionCalls);
                return getTextFromResponse(ai.getLastResponse());
            }
        }
        // If the AI is using partial response, handle it
        if (this.blockIsUsingInTarget('gai_whenPartialResponseReceived', target)) {
            const partialResponseHandler = partialResponse => {
                this.runtime.startHats('gai_whenPartialResponseReceived', null, target);
                console.log(partialResponse);
            };
            
            if (!stackFrame.isRequesting) {
                stackFrame.isRequesting = true;
                this.updateFunctionRegistry(target);
                ai.requestGenerateStream(prompt, partialResponseHandler)
                    .then(([, functionCalls]) => {
                        stackFrame.functionCalls = stackFrame.functionCalls || [];
                        stackFrame.functionCalls.push(...functionCalls);
                        this.runtime.startHats('gai_whenResponseReceived', null, target);
                        stackFrame.isResponseReceived = true;
                    })
                    .catch(e => {
                        console.error(e);
                        return e.message;
                    });
            }
            util.yield();
            return;
        }
        if (!stackFrame.isRequesting) {
            stackFrame.isRequesting = true;
            this.updateFunctionRegistry(target);
            ai.requestGenerate(prompt)
                .then(([response, functionCalls]) => {
                    stackFrame.functionCalls = stackFrame.functionCalls || [];
                    stackFrame.functionCalls.push(...functionCalls);
                    if (response && response.text) {
                        // If response is received, mark it
                        this.runtime.startHats('gai_whenResponseReceived', null, target);
                    }
                    stackFrame.isResponseReceived = true;
                })
                .catch(error => {
                    console.error(error);
                    return error.message;
                });
        }
        util.yield();
        return;
    }

    /**
     * Chat to AI. Start chat if not started.
     * @param {object} args - the block's arguments.
     * @param {string} args.PROMPT - message to AI
     * @param {object} util - utility object provided by the runtime.
     * @returns {Promise<string>} - a Promise that resolves response text
     */
    chat (args, util) {
        if (!GeminiAdapter.getApiKey()) {
            return 'API key is not set.';
        }
        const promptText = Cast.toString(args.PROMPT);
        const target = util.target;
        const ai = this.getAI(target);
        const prompt = interpretContentPartsText(promptText);
        const stackFrame = util.stackFrame;

        // Handle function calls execution
        if (stackFrame.functionCalls) {
            const callsToStart = stackFrame.functionCalls.filter(funcCall => funcCall.status === 'PENDING');
            if (callsToStart.length > 0) {
                this.dispatchFunctionCalls(callsToStart, util);
                util.yield();
                return;
            }
        }

        if (stackFrame.isResponseReceived) {
            if (stackFrame.functionCalls &&
                stackFrame.functionCalls
                    .every(funcCall => funcCall.thread &&
                        this.runtime.threads.indexOf(funcCall.thread) === -1)) {
                // All function calls are completed, exit this block
                this.cleanupStoppedFunctionCalls(stackFrame.functionCalls);
                return getTextFromResponse(ai.getLastResponse());
            }
        }

        // If the AI is using partial response, handle it
        if (this.blockIsUsingInTarget('gai_whenPartialResponseReceived', target)) {
            const partialResponseHandler = partialResponse => {
                this.runtime.startHats('gai_whenPartialResponseReceived', null, target);
                console.log(partialResponse);
            };
            
            if (!stackFrame.isRequesting) {
                stackFrame.isRequesting = true;
                this.updateFunctionRegistry(target);
                ai.requestChatStream(prompt, partialResponseHandler)
                    .then(([, functionCalls]) => {
                        stackFrame.functionCalls = stackFrame.functionCalls || [];
                        stackFrame.functionCalls.push(...functionCalls);
                        this.runtime.startHats('gai_whenResponseReceived', null, target);
                        stackFrame.isResponseReceived = true;
                    })
                    .catch(e => {
                        console.error(e);
                        return e.message;
                    });
            }
            util.yield();
            return;
        }

        if (!stackFrame.isRequesting) {
            stackFrame.isRequesting = true;
            this.updateFunctionRegistry(target);
            ai.requestChat(prompt)
                .then(([response, functionCalls]) => {
                    stackFrame.functionCalls = stackFrame.functionCalls || [];
                    stackFrame.functionCalls.push(...functionCalls);
                    if (response && response.text) {
                        // If response is received, mark it
                        this.runtime.startHats('gai_whenResponseReceived', null, target);
                    }
                    stackFrame.isResponseReceived = true;
                })
                .catch(error => {
                    console.error(error);
                    return error.message;
                });
        }
        util.yield();
        return;
    }

    /**
     * Return costume data URL.
     * @param {object} args - the block's arguments.
     * @param {string} args.COSTUME - costume name
     * @param {object} util - utility object provided by the runtime.
     * @returns {string} - data URL of the costume
     */
    costumeData (args, util) {
        const costumeName = Cast.toString(args.COSTUME);
        const target = util.target;
        const costume = getCostumeByNameOrNumber(target, costumeName);
        if (!costume) {
            return '';
        }
        return costumeToDataURL(costume)
            .then(dataURL => (` ${dataURL} `));
    }

    /**
     * Return backdrop data directive.
     * @param {object} args - the block's arguments.
     * @param {string} args.BACKDROP - backdrop name
     * @returns {string} - backdrop data directive
     */
    backdropData (args) {
        const backdropName = Cast.toString(args.BACKDROP);
        const stage = this.runtime.getTargetForStage();
        const backdrop = getCostumeByNameOrNumber(stage, backdropName);
        if (!backdrop) {
            return '';
        }
        return costumeToDataURL(backdrop)
            .then(dataURL => (` ${dataURL} `));
    }

    /**
     * Return snapshot data directive.
     * @param {object} args - the block's arguments.
     * @param {object} util - utility object provided by the runtime.
     * @returns {Promise<string>} - a Promise that resolves snapshot data URL
     */
    snapshotData (args, util) {
        const runtime = this.runtime;
        const requester = util.target;
        return new Promise(resolve => {
            this.runtime.renderer.requestSnapshot(imageDataURL => {
                if (DEBUG) {
                    addImageAsCostume(
                        requester,
                        imageDataURL,
                        runtime,
                        'snapshot',
                        runtime.vm
                    ).catch(e => {
                        console.error(e);
                    });
                }
                resolve(` ${imageDataURL} `);
            });
        });
    }

    /**
     * Return sound data directive.
     * @param {object} args - the block's arguments.
     * @param {object} util - utility object provided by the runtime.
     * @returns {string} - sound data URL
     */
    soundData (args, util) {
        const soundName = Cast.toString(args.SOUND);
        const target = util.target;
        const sounds = target.sprite.sounds;
        let sound;
        for (let i = 0; i < sounds.length; i++) {
            if (sounds[i].name === soundName) {
                sound = sounds[i];
                break;
            }
        }
        if (!sound) {
            return '';
        }
        return ` ${sound.asset.encodeDataURI()} `;
    }

    /**
     * Start sound recorder.
     * @returns {Promise} - a Promise that resolves when recorder is started
     * or rejects if user denies access to microphone.
     */
    startSoundRecorder () {
        return navigator.mediaDevices.getUserMedia({audio: true})
            .then(stream => {
                this.runtime.emitMicListening(true);
                const mediaRecorder = new MediaRecorder(stream);
                this.soundRecorder = mediaRecorder;
                this.soundRecorderChunks = [];
                mediaRecorder.ondataavailable = event => {
                    this.soundRecorderChunks.push(event.data);
                };
                mediaRecorder.start();
                this.listeningTimeout = setTimeout(() => {
                    this.stopSoundRecorder();
                }, 60 * 1000);
            });
    }

    /**
     * Stop sound recorder.
     * @returns {?Promise<string>} - a Promise that resolves when recorder is stopped
     * and recorded sound data URL is returned
     */
    stopSoundRecorder () {
        if (this.listeningTimeout) {
            clearTimeout(this.listeningTimeout);
            this.listeningTimeout = null;
        }
        if (this.soundRecorder) {
            return new Promise(resolve => {
                this.soundRecorder.onstop = () => {
                    this.runtime.emitMicListening(false);
                    const audioBlob = new Blob(this.soundRecorderChunks, {type: 'audio/wav'});
                    const reader = new FileReader();
                    reader.readAsDataURL(audioBlob);
                    reader.onloadend = () => {
                        const dataURL = reader.result;
                        this.recordedSoundData = dataURL;
                        this.isListening = false;
                        this.soundRecorder = null;
                        resolve(dataURL);
                    };
                };
                this.soundRecorder.stop();
            });
        }
        return null;
    }

    /**
     * Start listening from microphone.
     * @returns {Promise} - a Promise that resolves when recorder is started
     */
    startListening () {
        if (this.isListening) {
            return;
        }
        this.isListening = true;
        return this.startSoundRecorder()
            .catch(e => {
                console.warn('Failed to start listening', e);
                this.isListening = false;
            });
    }

    /**
     * Stop listening from microphone.
     * @returns {?Promise<string>} - a Promise that resolves when recorder is stopped
     */
    stopListening () {
        if (!this.isListening) {
            return;
        }
        if (this.soundRecorder) {
            return this.stopSoundRecorder();
        }
    }

    /**
     * Listened data.
     * @returns {string} - recorded sound data URL
     */
    listenedData () {
        if (this.recordedSoundData) {
            return ` ${this.recordedSoundData} `;
        }
        return '';
    }

    /**
     * Chat history.
     * @param {object} args - the block's arguments.
     * @param {object} util - utility object provided by the runtime.
     * @returns {Promise<string>} - a Promise that resolves chat history
     */
    chatHistory (args, util) {
        const target = util.target;
        if (!GeminiAdapter.existsForTarget(target)) {
            return '';
        }
        const ai = GeminiAdapter.getForTarget(target);
        const history = ai.getChatHistory();
        return JSON.stringify(history).slice(1, -1);
    }

    /**
     * Start chat with history.
     * @param {object} args - the block's arguments.
     * @param {string} args.HISTORY - contents of the history of chat
     * @param {object} util - utility object provided by the runtime.
     * @returns {void}
     */
    startChat (args, util) {
        const target = util.target;
        const historyText = String(args.HISTORY).trim();
        try {
            const history = JSON.parse(`[${historyText}]`);
            this.getAI(target).startChat(history);
        } catch (error) {
            console.error(`startChat: ${error.message}`);
            return error.message;
        }
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
        const response = ai.getLastResponse();
        if (!response) {
            return '';
        }
        try {
            const candidateIndex = parseInt(args.CANDIDATE_INDEX, 10);
            let responseText;
            if (Array.isArray(response)) {
            // the response is streaming
                if (candidateIndex !== 1) {
                // Streaming response has no candidates
                    return '';
                }
                responseText = getTextFromResponse(response);
            } else {
                responseText = getTextFromResponse(response, candidateIndex - 1);
            }
            // Replace function names with procedureCode and argument names with their codes
            if (responseText && ai.functionRegistry) {
                Object.values(ai.functionRegistry).forEach(functionSpec => {
                    if (functionSpec.declaration && functionSpec.procedureCode) {
                        const funcName = functionSpec.declaration.name;
                        const procedureCode = functionSpec.procedureCode;
                        // Replace function name with procedure code in the response text
                        responseText = responseText.replace(new RegExp(funcName, 'g'), procedureCode);
                        
                        // Replace argument names with their codes
                        if (functionSpec.argumentDict) {
                            Object.entries(functionSpec.argumentDict).forEach(([argName, argCode]) => {
                                // Replace argument name with argument code in the response text
                                responseText = responseText.replace(new RegExp(argName, 'g'), argCode);
                            });
                        }
                    }
                });
            }
            return responseText;
        } catch (error) {
            console.error(`responseText: ${error.message}`);
            return error.message;
        }
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
        let response = ai.getLastResponse();
        if (!response) {
            return '';
        }
        if (Array.isArray(response)) {
            // the response is streaming
            response = response[0];
        }
        try {
            if (response.promptFeedback?.blockReason) {
                const blockReason = response.promptFeedback.blockReason;
                if (blockReason === 'SAFETY') {
                    const blockReasons = response.promptFeedback
                        .safetyRatings.filter(r => r.probability !== 'NEGLIGIBLE');
                    return `prompt was blocked: ${blockReason} (${JSON.stringify(blockReasons)})`;
                }
                // Blocked by other reason
                return `prompt was blocked: ${blockReason}`;
            }
            const candidateIndex = parseInt(args.CANDIDATE_INDEX, 10);
            if (candidateIndex < 1 || candidateIndex > response.candidates.length) {
                return '';
            }
            const candidate = response.candidates[candidateIndex - 1];
            if (!candidate.finishReason || candidate.finishReason === 'STOP') {
                return 'NEGLIGIBLE';
            }
            if (candidate.finishReason === 'SAFETY') {
                const category = args.HARM_CATEGORY;
                const rating = candidate.safetyRatings.find(r => r.category === category);
                if (!rating) {
                    return 'NEGLIGIBLE';
                }
                return rating.probability;
            }
            // Finished by other reason
            return `finishReason: ${candidate.finishReason}`;
        } catch (error) {
            console.error(`responseSafetyRating: ${error.message}`);
            return error.message;
        }
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
        const target = util.target;
        const ai = this.getAI(target);
        const harmCategory = args.HARM_CATEGORY;
        const harmBlockThreshold = args.BLOCK_THRESHOLD;
        const setParams = (category, threshold) => {
            const safetyRating = {
                category: category,
                threshold: threshold
            };
            const index = ai.safetySettings.findIndex(r => r.category === category);
            if (index >= 0) {
                ai.safetySettings[index] = safetyRating;
            } else {
                ai.safetySettings.push(safetyRating);
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
        const target = util.target;
        const ai = this.getAI(target);
        const configKey = args.CONFIG;
        let configValue = args.VALUE;
        switch (configKey) {
        case 'maxOutputTokens':
            configValue = Math.max(1, parseInt(Cast.toString(configValue), 10));
            break;
        case 'candidateCount':
            configValue = Math.max(1, parseInt(Cast.toString(configValue), 10));
            break;
        case 'stopSequences':
            configValue = Cast.toString(configValue).split(',')
                .map(s => s.trim());
            break;
        case 'temperature':
            configValue = Math.max(0.0, Math.min(1.0, Cast.toNumber(configValue)));
            break;
        case 'topP':
            configValue = Math.max(0.0, Math.min(1.0, Cast.toNumber(configValue)));
            break;
        case 'topK':
            configValue = Math.max(1, parseInt(Cast.toNumber(configValue), 10));
            break;
        case 'systemInstruction':
            configValue = Cast.toString(configValue);
            break;
        case 'responseSchema':
            try {
                configValue = JSON.parse(configValue);
                // Also set responseMimeType to application/json for structured output
                ai.generationConfig.responseMimeType = 'application/json';
            } catch (error) {
                // If parsing fails, delete responseSchema
                delete ai.generationConfig.responseSchema;
                delete ai.generationConfig.responseMimeType;
                return `delete ${configKey} due to error: ${error.message}`;
            }
            break;
        default:
            return `unknown config key: ${configKey}`;
        }
        if (configValue === '') {
            delete ai.generationConfig[configKey];
            if (configKey === 'responseSchema') {
                // Also remove responseMimeType when removing schema
                delete ai.generationConfig.responseMimeType;
            }
            return `delete ${configKey}`;
        }
        ai.generationConfig[configKey] = configValue;
    }

    /**
     * Get generation config.
     * @param {object} args - the block's arguments.
     * @param {string} args.CONFIG - config key
     * @param {object} util - utility object provided by the runtime.
     * @returns {string} - config value
     */
    generationConfig (args, util) {
        const target = util.target;
        const ai = this.getAI(target);
        const configKey = args.CONFIG;
        const configValue = ai.generationConfig[configKey];
        if (configValue === null || typeof configValue === 'undefined') {
            return '';
        }
        if (Array.isArray(configValue)) {
            // Convert array to comma-separated string
            return configValue.join(', ');
        }
        if (typeof configValue === 'object') {
            // Convert object to JSON string
            return JSON.stringify(configValue);
        }
        if (typeof configValue === 'number') {
            // Convert number to string
            return String(configValue);
        }
        if (typeof configValue === 'boolean') {
            // Convert boolean to string
            return configValue ? 'true' : 'false';
        }
        return configValue;
    }

    getValueFromJson (args) {
        const jsonText = args.JSON.trim();
        if (!jsonText) {
            return '';
        }
        let jsonObject;
        try {
            jsonObject = JSON.parse(jsonText);
        } catch (error) {
            return `error: ${error.message}`;
        }
        const path = Cast.toString(args.PATH).trim();
        if (!path) {
            return '';
        }
        const func = new Function('jsonObj', `return jsonObj.${path}`);
        const value = func.call(this, jsonObject);
        if (typeof value === 'undefined' || value === null) {
            return '';
        }
        if (Array.isArray(value)) {
            // Convert array to JSON string
            return JSON.stringify(value);
        }
        if (typeof value === 'object') {
            // Convert object to JSON string
            return JSON.stringify(value);
        }
        if (typeof value === 'number') {
            // Convert number to string
            return String(value);
        }
        if (typeof value === 'boolean') {
            // Convert boolean to string
            return value ? 'true' : 'false';
        }
        return String(value);
    }

    getItemOfJsonArray (args) {
        let jsonText = args.JSON.trim();
        if (!jsonText) {
            return '';
        }
        if (!jsonText.startsWith('[') && !jsonText.endsWith(']')) {
            jsonText = `[${jsonText}]`; // Wrap in array brackets if not already an array
        }
        try {
            const jsonArray = JSON.parse(jsonText);
            if (!Array.isArray(jsonArray)) {
                return 'error: not an array';
            }
            if (jsonArray.length === 0) {
                return '';
            }
            const index = parseInt(Cast.toString(args.INDEX), 10);
            if (isNaN(index) || index < 1 || index > jsonArray.length) {
                return '';
            }
            const value = jsonArray[index - 1];
            if (typeof value === 'undefined' || value === null) {
                return '';
            }
            if (Array.isArray(value)) {
                // Convert array to JSON string
                return JSON.stringify(value);
            }
            if (typeof value === 'object') {
                // Convert object to JSON string
                return JSON.stringify(value);
            }
            if (typeof value === 'number') {
                // Convert number to string
                return String(value);
            }
            if (typeof value === 'boolean') {
                // Convert boolean to string
                return value ? 'true' : 'false';
            }
            return String(value);
        } catch (error) {
            return `error: ${error.message}`;
        }
    }

    lengthOfJsonArray (args) {
        let jsonText = args.JSON.trim();
        if (!jsonText) {
            return 0; // Return 0 for empty JSON
        }
        if (!jsonText.startsWith('[') && !jsonText.endsWith(']')) {
            jsonText = `[${jsonText}]`; // Wrap in array brackets if not already an array
        }
        try {
            const jsonArray = JSON.parse(jsonText);
            if (!Array.isArray(jsonArray)) {
                return 0; // Return 0 if not an array
            }
            return jsonArray.length;
        } catch (error) {
            return 0; // Return 0 if parsing fails
        }
    }

    /**
     * Set the function calling mode for the target
     * @param {object} args - the arguments for the block
     * @param {object} util - the utility object
     */
    setFunctionCallingMode (args, util) {
        const mode = args.MODE;
        const target = util.target;
        const ai = this.getAI(target);
        if (mode === 'NONE') {
            ai.setFunctionCallingMode(GeminiAdapter.FUNCTION_CALLING_NONE);
        } else if (mode === 'AUTO') {
            ai.setFunctionCallingMode(GeminiAdapter.FUNCTION_CALLING_AUTO);
        } else if (mode === 'ANY') {
            ai.setFunctionCallingMode(GeminiAdapter.FUNCTION_CALLING_ANY);
        }
    }

    /**
     * Get all user-defined procedures from the target
     * @param {Target} target - the target to get procedures from
     * @returns {Array} - array of procedure information
     */
    getUserProcedures (target) {
        const procedures = [];
        const blocks = target.blocks._blocks;
        for (const blockId in blocks) {
            const block = blocks[blockId];
            if (block.opcode === 'procedures_definition') {
            // Get the procedure prototype
                const prototypeId = block.inputs.custom_block.block;
                const prototype = blocks[prototypeId];
                if (prototype && prototype.mutation) {
                    const inputTypes = Object.values(prototype.inputs)
                        .filter(input => blocks[input.shadow].parent === prototypeId)
                        .map(input => {
                            const inputBlock = blocks[input.shadow];
                            let inputType;
                            switch (inputBlock.opcode) {
                            case 'argument_reporter_string_number':
                                inputType = 'string';
                                break;
                            case 'argument_reporter_boolean':
                                inputType = 'boolean';
                                break;
                            default:
                                inputType = 'string';
                            }
                            return inputType;
                        });
                    procedures.push({
                        id: blockId,
                        comment: block.comment,
                        code: prototype.mutation.proccode,
                        argumentNames: JSON.parse(prototype.mutation.argumentnames || '[]'),
                        argumentIds: JSON.parse(prototype.mutation.argumentids || '[]'),
                        argumentTypes: inputTypes,
                        argumentDefaults: JSON.parse(prototype.mutation.argumentdefaults || '[]'),
                        warp: prototype.mutation.warp === 'true'
                    });
                }
            }
        }
    
        return procedures;
    }

    /**
     * Register a user-defined function for AI function calling
     * @param {Target} target - the target to register the function
     * @param {object} procedure - the procedure information
     */
    registerFunction (target, procedure) {
        const ai = this.getAI(target);
        const functionDescription = `${procedure.code}: ${target.comments[procedure.comment]?.text || ''}`;
        const functionArguments = procedure.argumentNames.map((name, index) => {
            const reporterBlocks = Object.values(target.blocks._blocks).filter(aBlock =>
                !aBlock.shadow && (aBlock.fields.VALUE?.value === name));
            const comments = reporterBlocks.reduce((prev, aBlock) => {
                const comment = target.comments[aBlock.comment];
                return comment ? `${prev} ${comment.text};` : prev;
            }, `${name}: `);
            return {
                code: name,
                type: procedure.argumentTypes[index],
                description: comments
            };
        });
        ai.registerFunction(procedure.code, functionDescription, functionArguments);
    }

    /**
     * Set functions for AI function calling
     * @param {object} args - the block's arguments
     * @param {string} args.PATTERN - function name pattern to match
     * @param {object} util - utility object provided by the runtime
     * @returns {string} - result message
     */
    useMatchedProcedures (args, util) {
        const target = util.target;
        const codePattern = new RegExp(args.PATTERN.trim());
        const ai = this.getAI(target);
        const procedures = this.getUserProcedures(target)
            .filter(proc => codePattern.test(proc.code));
        if (procedures.length === 0) {
            return 'No matching functions found.';
        }
        ai.clearRegisteredFunctions();
        procedures.forEach(proc => this.registerFunction(target, proc));
        return `Registered ["${procedures.map(proc => proc.code).join('", "')}"]`;
    }

    /**
     * Update function call registry for AI.
     * This will re-register all user-defined functions.
     * @param {Target} target - the target to update the function registry
     * @returns {void}
     */
    updateFunctionRegistry (target) {
        const ai = this.getAI(target);
        ai.clearRegisteredFunctions();
        const procedures = this.getUserProcedures(target);
        procedures.forEach(proc => {
            this.registerFunction(target, proc);
        });
    }

    /**
     * Return result to AI for function calling of the last response.
     * @param {object} args - the block's arguments.
     * @param {string} args.RESULT - result to return
     * @param {object} util - utility object provided by the runtime.
     * @returns {string} - message indicating result is returned
     */
    returnResultToAI (args, util) {
        const target = util.target;
        const ai = this.getAI(target);
        const result = args.RESULT;
        const blockId = util.thread.peekStack();
        const topBlockId = target.blocks.getTopLevelScript(blockId);
        const topBlock = target.blocks.getBlock(topBlockId);
        if (!topBlock || topBlock.opcode !== 'procedures_definition') {
            return 'Error: Not in a procedure definition block.';
        }
        const prototypeId = topBlock.inputs.custom_block.block;
        const prototype = target.blocks.getBlock(prototypeId);
        const procedureCode = prototype.mutation.proccode;
        const functionSpec = ai.getFunctionSpec(procedureCode);
        if (!functionSpec) {
            console.log(`returnResultToAI: "${procedureCode}" is not registered.`);
            return `"${procedureCode}" is not registered.`;
        }
        const currentCall = util.thread.functionCall;
        if (!currentCall) {
            return 'No function call in progress.';
        }
        if (currentCall.name !== functionSpec.declaration.name) {
            console.log(`returnResultToAI: "${functionSpec.declaration.name}" is not the current function call.`);
            return `"${functionSpec.declaration.name}" is not the current function call.`;
        }
        const stackFrame = util.stackFrame;
        if (stackFrame.functionCalls) {
            const callsToStart = stackFrame.functionCalls.filter(funcCall => funcCall.status === 'PENDING');
            if (callsToStart.length > 0) {
                this.dispatchFunctionCalls(callsToStart, util);
                util.yield();
                return;
            }
            if (stackFrame.functionCalls
                .every(funcCall => funcCall.thread &&
                    this.runtime.threads.indexOf(funcCall.thread) === -1)) {
            // All function calls are completed, exit this block
                this.cleanupStoppedFunctionCalls(stackFrame.functionCalls);
                console.log(
                    `"function: ${functionSpec.declaration.name}, block: ${procedureCode}", result: ${result},`
                );
                return;
            }
        }
        if (typeof currentCall.result === 'undefined') {
            currentCall.result = result;
            ai.returnFunctionResult(currentCall)
                .then(([response, functionCalls]) => {
                    stackFrame.functionCalls = stackFrame.functionCalls || [];
                    stackFrame.functionCalls.push(...functionCalls);
                    if (response && response.text) {
                        this.runtime.startHats('gai_whenResponseReceived', null, target);
                    }
                    stackFrame.isResultResponseReceived = true;
                })
                .catch(error => {
                    console.error(error);
                    return error.message;
                });
        }
        util.yield();
        return;
    }

    /**
     * Get embedding of content.
     * @param {object} args - the block's arguments.
     * @param {string} args.CONTENT - content
     * @param {string} args.TASK_TYPE - task type
     * @param {object} util - utility object provided by the runtime.
     * @returns {Promise<string>} - a Promise that resolves embedding
     */
    embeddingFor (args, util) {
        if (!GeminiAdapter.getApiKey()) {
            return 'API key is not set.';
        }
        const target = util.target;
        const runtime = util.runtime;
        const ai = this.getAI(target);
        if (ai.isRequesting()) {
            util.yield();
            return;
        }
        const contentText = Cast.toString(args.CONTENT).trim();
        const content = interpretContentPartsText(contentText, target, runtime);
        const taskType = args.TASK_TYPE;
        return ai.requestEmbedding(content, taskType)
            .then(embedding => {
                const jsonText = JSON.stringify(embedding);
                const result = jsonText.substring(1, jsonText.length - 1); // remove brackets
                return result;
            })
            .catch(error => {
                console.error(`embeddingFor: ${error.message}`);
                return '';
            });
    }

    /**
     * Calculate similarity of two vectors.
     * @param {object} args - the block's arguments.
     * @param {string} args.METRIC - metric {'dotProduct' | 'euclidean'}
     * @param {string} args.VECTOR_A - vector A
     * @param {string} args.VECTOR_B - vector B
     * @returns {number} - dot product
     */
    embeddingDistanceOf (args) {
        const metric = args.METRIC;
        const vectorA = String(args.VECTOR_A).split(',')
            .map(s => parseFloat(s));
        const vectorB = String(args.VECTOR_B).split(',')
            .map(s => parseFloat(s));
        if (vectorA.length !== vectorB.length) return 'error: not same length';
        if (vectorA.every(x => x === 0) || vectorB.every(x => x === 0)) return 'error: zero vector';
        let result = '';
        switch (metric) {
        case 'dotProduct':
            result = dotProduct(vectorA, vectorB);
            break;
        case 'euclidean':
            result = euclideanDistance(vectorA, vectorB);
            break;
        default:
            console.error(`embeddingDistanceOf: unknown metric ${metric}`);
        }
        return result;
    }

    /**
     * Set API key and reset AI.
     * @param {object} args - the block's arguments.
     * @param {string} args.KEY - API key
     * @param {object} util - utility object provided by the runtime.
     * @returns {void}
     */
    setApiKey (args, util) {
        const apiKey = Cast.toString(args.KEY).trim();
        GeminiAdapter.setApiKey(apiKey);
        GeminiAdapter.removeAllAdapter();
        this.updateFunctionRegistry(util.target);
    }

    /**
     * Get API key.
     * @returns {string} - API key

     * @deprecated
     */
    apiKey () {
        const apiKey = GeminiAdapter.getApiKey();
        if (!apiKey) {
            return '';
        }
        const lastFourChars = apiKey.slice(-4);
        const maskedPortion = '*'.repeat(apiKey.length - 4);
        return maskedPortion + lastFourChars;
    }

    /**
     * Set base URL and reset AI.
     * @param {object} args - the block's arguments.
     * @param {string} args.URL - base URL
     * @param {object} util - utility object provided by the runtime.
     * @returns {string} - message
     */
    setBaseUrl (args, util) {
        const baseUrl = Cast.toString(args.URL).trim();
        if (!baseUrl.startsWith('http://') && !baseUrl.startsWith('https://')) {
            return 'error: invalid URL';
        }
        GeminiAdapter.baseUrl = baseUrl;
        GeminiAdapter.removeAllAdapter();
        this.updateFunctionRegistry(util.target);
        return `set base URL: ${baseUrl}`;
    }

    /**
     * Get base URL.
     * @returns {string} - base URL
     */
    baseUrl () {
        return GeminiAdapter.baseUrl;
    }

    /**
     * Count tokens as request type.
     * @param {object} args - the block's arguments.
     * @param {string} args.CONTENT - content
     * @param {string} args.REQUEST_TYPE - request type {'generate' | 'chat'}
     * @param {object} util - utility object provided by the runtime.
     * @returns {Promise<number>} - a Promise that resolves token count
     */
    countTokensAs (args, util) {
        if (!GeminiAdapter.getApiKey()) {
            return 'API key is not set.';
        }
        const target = util.target;
        const ai = this.getAI(target);
        if (ai.isRequesting()) {
            util.yield();
            return;
        }
        const contentText = Cast.toString(args.CONTENT);
        const content = interpretContentPartsText(contentText, target, this.runtime);
        const requestType = args.REQUEST_TYPE;
        return ai.countTokensAs(content, requestType)
            .catch(error => {
                console.error(error);
                return error.message;
            });
    }

    /**
     * Set generative model code.
     * @param {object} args - the block's arguments.
     * @param {string} args.MODEL_CODE - model code
     * @param {object} util - utility object provided by the runtime.
     * @returns {Promise<string>} - validation result message
     */
    setGenerativeModel (args, util) {
        const target = util.target;
        const ai = this.getAI(target);
        const modelCode = Cast.toString(args.MODEL_CODE).trim();
        if (ai.isRequesting()) {
            util.yield();
            return;
        }
        return ai.setGenerativeModel(modelCode)
            .catch(error => `Error setting model: ${error.message}`);
    }

    /**
     * Get generative model code.
     * @param {object} args - the block's arguments.
     * @param {object} util - utility object provided by the runtime.
     * @returns {string} - model code
     */
    getGenerativeModel (args, util) {
        const target = util.target;
        const ai = this.getAI(target);
        return ai.modelCode.generative;
    }
    /**
     * Get generative model ID.
     * @param {object} args - the block's arguments.
     * @param {object} util - utility object provided by the runtime.
     * @returns {string} - model ID
     */
    getGenerativeModelID (args, util) {
        if (!GeminiAdapter.getApiKey()) {
            return '';
        }
        const modelIndex = parseInt(args.MODEL_INDEX, 10);
        if (isNaN(modelIndex)) {
            return '';
        }
        if (modelIndex < 1) {
            return '';
        }
        const target = util.target;
        const ai = this.getAI(target);
        return ai.getGenerativeModelID(modelIndex - 1)
            .then(modelID => {
                if (!modelID) {
                    return '';
                }
                return modelID;
            });
    }

    /**
     * Get max generative model number.
     * @param {object} args - the block's arguments.
     * @param {object} util - utility object provided by the runtime.
     * @returns {number} - max generative model number
     */
    getMaxGenerativeModelNumber (args, util) {
        if (!GeminiAdapter.getApiKey()) {
            return 0;
        }
        const target = util.target;
        const ai = this.getAI(target);
        return ai.getMaxGenerativeModelNumber();
    }

    /**
     * Set embedding model code.
     * @param {object} args - the block's arguments.
     * @param {string} args.MODEL_CODE - model code
     * @param {object} util - utility object provided by the runtime.
     * @returns {Promise<string>} - validation result message
     */
    setEmbeddingModel (args, util) {
        const target = util.target;
        const ai = this.getAI(target);
        const modelCode = Cast.toString(args.MODEL_CODE).trim();
        if (ai.isRequesting()) {
            util.yield();
            return;
        }
        return ai.setEmbeddingModel(modelCode)
            .catch(error => `Error setting model: ${error.message}`);
    }

    /**
     * Get embedding model code.
     * @param {object} args - the block's arguments.
     * @param {object} util - utility object provided by the runtime.
     * @returns {string} - model code
     */
    getEmbeddingModel (args, util) {
        const target = util.target;
        const ai = this.getAI(target);
        return ai.modelCode.embedding;
    }

    /**
     * Get embedding model ID.
     * @param {object} args - the block's arguments.
     * @param {object} util - utility object provided by the runtime.
     * @returns {string} - model ID
     */
    getEmbeddingModelID (args, util) {
        if (!GeminiAdapter.getApiKey()) {
            return '';
        }
        const modelIndex = parseInt(args.MODEL_INDEX, 10);
        if (isNaN(modelIndex)) {
            return '';
        }
        if (modelIndex < 1) {
            return '';
        }
        const target = util.target;
        const ai = this.getAI(target);
        return ai.getEmbeddingModelID(modelIndex - 1)
            .then(modelID => {
                if (!modelID) {
                    return '';
                }
                return modelID;
            });
    }

    /**
     * Get max embedding model number.
     * @param {object} args - the block's arguments.
     * @param {object} util - utility object provided by the runtime.
     * @returns {number} - max embedding model number
     */
    getMaxEmbeddingModelNumber (args, util) {
        if (!GeminiAdapter.getApiKey()) {
            return 0;
        }
        const target = util.target;
        const ai = this.getAI(target);
        return ai.getMaxEmbeddingModelNumber();
    }

    /**
     * Open dialog to input API key by user.
     * @param {string} [defaultApiKey=''] - default API key
     * @returns {Promise<string>?} - a Promise that resolves API key or null if canceled
     */
    openApiKeyDialog (defaultApiKey = '') {
        if (this.apiKeyDialogOpened) {
            // prevent to open multiple dialogs
            return null;
        }
        this.apiKeyDialogOpened = true;
        const inputDialog = document.createElement('dialog');
        inputDialog.style.padding = '0px';
        const dialogFace = document.createElement('div');
        dialogFace.style.padding = '16px';
        inputDialog.appendChild(dialogFace);
        const label = document.createTextNode(formatMessage({
            id: 'gai.apiKeyDialog.message',
            default: 'set API key',
            description: 'label of API key input dialog for gemini'
        }));
        dialogFace.appendChild(label);
        // Dialog form
        const apiKeyForm = document.createElement('form');
        apiKeyForm.setAttribute('method', 'dialog');
        apiKeyForm.style.margin = '8px';
        apiKeyForm.addEventListener('submit', e => {
            e.preventDefault();
        });
        dialogFace.appendChild(apiKeyForm);
        // API select
        const apiKeyInput = document.createElement('input');
        apiKeyInput.setAttribute('type', 'text');
        apiKeyInput.setAttribute('id', 'apiKeyInput');
        apiKeyInput.setAttribute('size', '50');
        apiKeyInput.setAttribute('value', defaultApiKey ? defaultApiKey : '');
        apiKeyForm.appendChild(apiKeyInput);
        // Cancel button
        const cancelButton = document.createElement('button');
        cancelButton.textContent = formatMessage({
            id: 'gai.apiKeyDialog.cancel',
            default: 'cancel',
            description: 'cancel button on groupID input dialog for gemini'
        });
        cancelButton.style.margin = '8px';
        dialogFace.appendChild(cancelButton);
        // OK button
        const confirmButton = document.createElement('button');
        confirmButton.textContent = formatMessage({
            id: 'gai.apiKeyDialog.set',
            default: 'set',
            description: 'set button on API key input dialog for gemini'
        });
        confirmButton.style.margin = '8px';
        dialogFace.appendChild(confirmButton);
        dialogFace.appendChild(document.createElement('br'));
        dialogFace.appendChild(document.createTextNode(' ('));
        const getApiKeyLink = document.createElement('a');
        getApiKeyLink.textContent = formatMessage({
            id: 'gai.apiKeyDialog.howToGetApiKey',
            default: 'get API key',
            description: 'link to get API key for gemini'
        });
        getApiKeyLink.setAttribute('href', 'https://ai.google.dev/gemini-api/docs/api-key');
        getApiKeyLink.setAttribute('target', '_blank');
        dialogFace.appendChild(getApiKeyLink);
        dialogFace.appendChild(document.createTextNode(')'));
        return new Promise(
            resolve => {
                // Add onClick action
                const confirmed = () => {
                    const inputValue = apiKeyInput.value.trim();
                    resolve(inputValue);
                };
                confirmButton.onclick = confirmed;
                const canceled = () => {
                    resolve(null);
                };
                cancelButton.onclick = canceled;
                inputDialog.addEventListener('keydown', e => {
                    if (e.code === 'Enter') {
                        confirmed();
                    }
                    if (e.code === 'Escape') {
                        canceled();
                    }
                });
                document.body.appendChild(inputDialog);
                inputDialog.showModal();
            })
            .finally(() => {
                document.body.removeChild(inputDialog);
                this.apiKeyDialogOpened = false;
            });
    }

    /**
     * Ask user to input API key.
     * @param {object} args - the block's arguments.
     * @param {object} util - utility object provided by the runtime.
     * @returns {void}
     */
    askApiKey (args, util) {
        if (this.apiKeyDialogOpened) {
            util.yield();
            return;
        }
        const prevApiKey = GeminiAdapter.getApiKey();
        return this.openApiKeyDialog(prevApiKey)
            .then(apiKey => {
                if (apiKey === null) {
                    // canceled
                    return 'canceled by user';
                }
                if (apiKey === '') {
                    // empty key
                    return 'API key is empty';
                }
                if (apiKey === prevApiKey) {
                    // same key, no need to validate again
                    return 'API key unchanged';
                }
                
                // Validate the new API key
                return GeminiAdapter.validateApiKey(apiKey)
                    .then(validation => {
                        if (validation.valid) {
                            GeminiAdapter.setApiKey(apiKey);
                            GeminiAdapter.removeAllAdapter();
                            this.updateFunctionRegistry(util.target);
                            return 'API key validated and set successfully';
                        }
                        return `API key validation failed: ${validation.error}`;
                        
                    })
                    .catch(error => `API key validation error: ${error.message}`);
            });
    }
}

export {GeminiBlocks as default, GeminiBlocks as blockClass};

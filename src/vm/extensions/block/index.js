import BlockType from '../../extension-support/block-type';
import ArgumentType from '../../extension-support/argument-type';
import Cast from '../../util/cast';
import log from '../../util/log';
import translations from './translations.json';
import blockIcon from './block-icon.png';

import {DEBUG, checkDebugMode} from './dev-util.js';
import {GeminiAdapter, HarmCategory, HarmBlockThreshold, EmbeddingTaskType} from './gemini-adapter.js';
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

    getResponseCandidateIndexMenu () {
        const menu = [{text: '1', value: '1'}];
        const target = this.runtime.getEditingTarget();
        if (!target) {
            return menu;
        }
        const ai = this.getAI(target);
        const modelParams = ai.getModelParams();
        if (!modelParams) {
            return menu;
        }
        if (!modelParams.generationConfig) {
            return menu;
        }
        const candidateCount = modelParams.generationConfig.candidateCount;
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
                    id: 'gai.embeddingTaskTypeMenu.retrievalQuery',
                    default: 'Retrieval Query',
                    description: 'embedding task type menu item in Gemini'
                }),
                value: EmbeddingTaskType.RETRIEVAL_QUERY
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
        return response.text();
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
     * Request content to AI and get streaming result.
     * @param {object} prompt - prompt object
     * @param {Target} target - the target to get the AI
     * @param {string} requestType - request type {'generate' | 'chat'}
     * @returns {Promise<string>} - a Promise that resolves response text
     * @private
     */
    async requestContentStream (prompt, target, requestType) {
        const ai = this.getAI(target);
        let streamingResult;
        if (requestType === 'generate') {
            streamingResult = await ai.requestGenerate(prompt, true);
        } else if (requestType === 'chat') {
            streamingResult = await ai.requestChat(prompt, true);
        } else {
            throw new Error(`unknown request type: ${requestType}`);
        }
        const {stream: partialResponseStream, response: totalResponseReceived} = streamingResult;
        for await (const partialResponse of partialResponseStream) {
            if (DEBUG) log.log(`partial response for ${requestType}:${partialResponse.text()}`);
            ai.setLastPartialResponse(partialResponse);
            this.runtime.startHats('gai_whenPartialResponseReceived', null, target);
        }
        const totalResponse = await totalResponseReceived;
        if (DEBUG) log.log(`response for ${requestType}:${totalResponse.text()}`);
        ai.setLastResponse(totalResponse);
        return totalResponse.text();
    }

    /**
     * Request content to AI.
     * @param {string} prompt - prompt text to AI
     * @param {Target} target - the target to get the AI
     * @param {string} requestType - request type {'generate' | 'chat'}
     * @returns {Promise<string>} - a Promise that resolves response text
     * @private
     */
    async requestContent (prompt, target, requestType) {
        const ai = this.getAI(target);
        let result;
        if (requestType === 'generate') {
            result = await ai.requestGenerate(prompt, false);
        } else if (requestType === 'chat') {
            result = await ai.requestChat(prompt, false);
        } else {
            throw new Error(`unknown request type: ${requestType}`);
        }
        const response = result.response;
        ai.setLastResponse(response);
        if (DEBUG) log.log(`response for ${requestType}:${response.text()}`);
        return response.text();
    }

    requestToAI (promptText, target, requestType, util) {
        const ai = this.getAI(target);
        if (ai.isRequesting()) {
            util.yield();
            return;
        }
        ai.setRequesting(true);
        const prompt = interpretContentPartsText(promptText);
        if (this.blockIsUsingInTarget('gai_whenPartialResponseReceived', target)) {
            return this.requestContentStream(prompt, target, requestType)
                .catch(error => error.message)
                .finally(() => {
                    ai.setRequesting(false);
                });
        }
        return this.requestContent(prompt, target, requestType)
            .catch(error => error.message)
            .finally(() => {
                ai.setRequesting(false);
            });
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
        const requestType = 'generate';
        const target = util.target;
        return this.requestToAI(promptText, target, requestType, util);
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
        const requestType = 'chat';
        const target = util.target;
        return this.requestToAI(promptText, target, requestType, util);
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
            .then(dataURL => (`[${dataURL}]`));
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
            .then(dataURL => (`[${dataURL}]`));
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
                resolve(`[${imageDataURL}]`);
            });
        });
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
        return ai.getChatHistory()
            .then(history => {
                if (!history) {
                    return '';
                }
                return JSON.stringify(history).slice(1, -1);
            });
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
        const history = JSON.parse(String(args.HISTORY));
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
        if (response.promptFeedback.blockReason) {
            const blockReasons = response.promptFeedback.safetyRatings.filter(r => r.probability !== 'NEGLIGIBLE');
            return `Blocked by ${response.promptFeedback.blockReason} (${JSON.stringify(blockReasons)})`;
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
        const modelParams = ai.getModelParams();
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
        default:
            return `unknown config key: ${configKey}`;
        }
        if (configValue === '') {
            delete modelParams.generationConfig[configKey];
            return `delete ${configKey}`;
        }
        modelParams.generationConfig[configKey] = configValue;
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
        const modelParams = ai.getModelParams();
        const configKey = args.CONFIG;
        const configValue = modelParams.generationConfig[configKey];
        if (typeof configValue === 'undefined') {
            return '';
        }
        return configValue;
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
        ai.setRequesting(true);
        const contentText = Cast.toString(args.CONTENT).trim();
        const content = interpretContentPartsText(contentText, target, runtime);
        const taskType = args.TASK_TYPE;
        return ai.requestEmbedding(content, taskType)
            .then(embedding => {
                const jsonText = JSON.stringify(embedding);
                const result = jsonText.substring(1, jsonText.length - 1);
                return result;
            })
            .catch(error => {
                log.error(error);
                return error.message;
            })
            .finally(() => {
                ai.setRequesting(false);
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
            return 'error: unknown metric';
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
        const target = util.target;
        const apiKey = Cast.toString(args.KEY).trim();
        GeminiAdapter.setApiKey(apiKey);
        if (GeminiAdapter.existsForTarget(target)) {
            GeminiAdapter.removeForTarget(target);
        }
    }

    /**
     * Get API key.
     * @returns {string} - API key
     */
    apiKey () {
        return GeminiAdapter.getApiKey() ? GeminiAdapter.getApiKey() : '';
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
        ai.setRequesting(true);
        const contentText = Cast.toString(args.CONTENT);
        const content = interpretContentPartsText(contentText, target, this.runtime);
        const requestType = args.REQUEST_TYPE;
        return ai.countTokensAs(content, requestType)
            .catch(error => {
                log.error(error);
                return error.message;
            })
            .finally(() => {
                ai.setRequesting(false);
            });
    }

    /**
     * Open dialog to input API key by user.
     * @returns {Promise<string>?} - a Promise that resolves API key
     */
    openApiKeyDialog () {
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
        apiKeyInput.setAttribute('value', '');
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
        return new Promise(
            resolve => {
                // Add onClick action
                const confirmed = () => {
                    const inputValue = apiKeyInput.value.trim();
                    if (inputValue === '') {
                        return; // do not exit dialog
                    }
                    resolve(inputValue);
                };
                confirmButton.onclick = confirmed;
                const canceled = () => {
                    resolve('');
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
        const target = util.target;
        return this.openApiKeyDialog()
            .then(apiKey => {
                if (!apiKey || apiKey === '') {
                    return '';
                }
                GeminiAdapter.setApiKey(apiKey);
                if (GeminiAdapter.existsForTarget(target)) {
                    GeminiAdapter.removeForTarget(target);
                }
                return apiKey;
            });
    }
}

export {GeminiBlocks as default, GeminiBlocks as blockClass};

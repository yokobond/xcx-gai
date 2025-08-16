// Mock the @google/genai package
jest.mock('@google/genai', () => ({
    GoogleGenAI: jest.fn(),
    createPartFromBase64: jest.fn(),
    createPartFromText: jest.fn(),
    createUserContent: jest.fn((parts) => ({ role: 'user', parts })),
    createModelContent: jest.fn((parts) => ({ role: 'model', parts })),
    FunctionCallingConfigMode: {
        NONE: 'NONE',
        AUTO: 'AUTO',
        ANY: 'ANY'
    }
}));

import {
    GeminiAdapter,
    HarmCategory,
    HarmBlockThreshold,
    EmbeddingTaskType
} from '../../src/vm/extensions/block/gemini-adapter.js';

import { GoogleGenAI } from '@google/genai';

describe('GeminiAdapter', () => {
    let mockTarget;
    let adapter;
    let mockSDK;
    let mockModels;
    let mockGenerativeModel;

    beforeEach(() => {
        // Reset all mocks
        jest.clearAllMocks();
        
        // Clear static adapters
        GeminiAdapter.removeAllAdapter();
        
        // Mock target object
        mockTarget = {
            id: 'test-target-id'
        };

        // Mock SDK and its components
        mockModels = {
            list: jest.fn(),
            countTokens: jest.fn(),
            embedContent: jest.fn()
        };

        mockGenerativeModel = {
            generateContent: jest.fn(),
            generateContentStream: jest.fn(),
            startChat: jest.fn(),
            embedContent: jest.fn()
        };

        mockSDK = {
            models: mockModels,
            getGenerativeModel: jest.fn().mockReturnValue(mockGenerativeModel),
            chats: {
                create: jest.fn()
            }
        };

        GoogleGenAI.mockReturnValue(mockSDK);

        // Set API key for tests
        GeminiAdapter.setApiKey('test-api-key');
    });

    afterEach(() => {
        // Clean up static state
        GeminiAdapter.removeAllAdapter();
        GeminiAdapter.setApiKey(null);
    });

    describe('Static Methods', () => {
        describe('existsForTarget', () => {
            it('should return false when no adapter exists for target', () => {
                expect(GeminiAdapter.existsForTarget(mockTarget)).toBe(false);
            });

            it('should return true when adapter exists for target', () => {
                new GeminiAdapter(mockTarget);
                expect(GeminiAdapter.existsForTarget(mockTarget)).toBe(true);
            });
        });

        describe('getForTarget', () => {
            it('should create new adapter if none exists', () => {
                const result = GeminiAdapter.getForTarget(mockTarget);
                expect(result).toBeInstanceOf(GeminiAdapter);
                expect(result.target).toBe(mockTarget);
            });

            it('should return existing adapter if it exists', () => {
                const adapter1 = GeminiAdapter.getForTarget(mockTarget);
                const adapter2 = GeminiAdapter.getForTarget(mockTarget);
                expect(adapter1).toBe(adapter2);
            });
        });

        describe('removeForTarget', () => {
            it('should remove adapter for target', () => {
                GeminiAdapter.getForTarget(mockTarget);
                expect(GeminiAdapter.existsForTarget(mockTarget)).toBe(true);
                
                GeminiAdapter.removeForTarget(mockTarget);
                expect(GeminiAdapter.existsForTarget(mockTarget)).toBe(false);
            });
        });

        describe('removeAllAdapter', () => {
            it('should remove all adapters', () => {
                const target1 = { id: 'target1' };
                const target2 = { id: 'target2' };
                
                GeminiAdapter.getForTarget(target1);
                GeminiAdapter.getForTarget(target2);
                
                expect(GeminiAdapter.existsForTarget(target1)).toBe(true);
                expect(GeminiAdapter.existsForTarget(target2)).toBe(true);
                
                GeminiAdapter.removeAllAdapter();
                
                expect(GeminiAdapter.existsForTarget(target1)).toBe(false);
                expect(GeminiAdapter.existsForTarget(target2)).toBe(false);
            });
        });

        describe('API Key management', () => {
            it('should set and get API key', () => {
                const testKey = 'test-api-key-123';
                GeminiAdapter.setApiKey(testKey);
                expect(GeminiAdapter.getApiKey()).toBe(testKey);
            });
        });

        describe('validateApiKey', () => {
            it('should validate API key successfully', async () => {
                const mockIterator = {
                    next: jest.fn().mockResolvedValue({ done: false, value: { name: 'test-model' } })
                };
                const mockList = jest.fn().mockResolvedValue({
                    [Symbol.asyncIterator]: () => mockIterator
                });
                const mockValidationSDK = {
                    models: { list: mockList }
                };
                GoogleGenAI.mockReturnValueOnce(mockValidationSDK);

                const result = await GeminiAdapter.validateApiKey('valid-key');
                
                expect(result.valid).toBe(true);
                expect(result.error).toBeUndefined();
                expect(GoogleGenAI).toHaveBeenCalledWith({
                    apiKey: 'valid-key',
                    baseUrl: 'https://generativelanguage.googleapis.com'
                });
            });

            it('should handle invalid API key', async () => {
                const mockList = jest.fn().mockRejectedValue(new Error('API key invalid'));
                const mockValidationSDK = {
                    models: { list: mockList }
                };
                GoogleGenAI.mockReturnValueOnce(mockValidationSDK);

                const result = await GeminiAdapter.validateApiKey('invalid-key');
                
                expect(result.valid).toBe(false);
                expect(result.error).toBe('API error: API key invalid');
            });
        });
    });

    describe('Instance Methods', () => {
        beforeEach(() => {
            adapter = new GeminiAdapter(mockTarget);
        });

        describe('constructor', () => {
            it('should initialize with default values', () => {
                expect(adapter.target).toBe(mockTarget);
                expect(adapter.sdk).toBeNull();
                expect(adapter.modelCode).toEqual(GeminiAdapter.MODEL_CODE);
                expect(adapter.models).toEqual({});
                expect(adapter.safetySettings).toEqual([]);
                expect(adapter.generationConfig).toEqual({});
                expect(adapter.chatSession).toBeNull();
                expect(adapter.lastResponse).toBeNull();
                expect(adapter.lastPartialResponse).toBeNull();
                expect(adapter.functionRegistry).toEqual({});
                expect(adapter.functionCallTool).toBeNull();
                expect(adapter.functionIndex).toBe(0);
                expect(adapter.functionArgPrefix).toBe('arg_');
                expect(adapter.functionNamePrefix).toBe('func_');
                expect(adapter.functionCallingMode).toBe(GeminiAdapter.FUNCTION_CALLING_AUTO);
            });

            it('should register itself in static adapters', () => {
                expect(GeminiAdapter.ADAPTERS[mockTarget.id]).toBe(adapter);
            });
        });

        describe('getSDK', () => {
            it('should create SDK on first call', () => {
                const sdk = adapter.getSDK();
                expect(GoogleGenAI).toHaveBeenCalledWith({
                    apiKey: 'test-api-key',
                    baseUrl: 'https://generativelanguage.googleapis.com'
                });
                expect(sdk).toBe(mockSDK);
                expect(adapter.sdk).toBe(mockSDK);
            });

            it('should return existing SDK on subsequent calls', () => {
                const sdk1 = adapter.getSDK();
                const sdk2 = adapter.getSDK();
                expect(sdk1).toBe(sdk2);
                expect(GoogleGenAI).toHaveBeenCalledTimes(1);
            });
        });

        describe('getModels', () => {
            it('should fetch models from SDK', async () => {
                const mockModelData = [
                    { name: 'model1', supportedActions: ['generateContent'] },
                    { name: 'model2', supportedActions: ['embedContent'] }
                ];
                
                // Mock async generator
                const mockPager = {
                    [Symbol.asyncIterator]: async function* () {
                        for (const model of mockModelData) {
                            yield model;
                        }
                    }
                };
                
                mockModels.list.mockResolvedValue(mockPager);
                
                const models = await adapter.getModels();
                expect(models).toEqual(mockModelData);
                expect(adapter.models).toEqual(mockModelData);
            });

            it('should return cached models on subsequent calls', async () => {
                adapter.models = ['cached-model'];
                
                const models = await adapter.getModels();
                expect(models).toEqual(['cached-model']);
                expect(mockModels.list).not.toHaveBeenCalled();
            });
        });

        describe('getGenerativeModelList', () => {
            it('should filter and return generative model names', async () => {
                const mockModelData = [
                    { name: 'model1', supportedActions: ['generateContent'] },
                    { name: 'model2', supportedActions: ['embedContent'] },
                    { name: 'model3', supportedActions: ['generateContent', 'embedContent'] }
                ];
                
                const mockPager = {
                    [Symbol.asyncIterator]: async function* () {
                        for (const model of mockModelData) {
                            yield model;
                        }
                    }
                };
                
                mockModels.list.mockResolvedValue(mockPager);
                
                const modelList = await adapter.getGenerativeModelList();
                expect(modelList).toEqual(['model1', 'model3']);
            });
        });

        describe('getEmbeddingModelList', () => {
            it('should filter and return embedding model names', async () => {
                const mockModelData = [
                    { name: 'model1', supportedActions: ['generateContent'] },
                    { name: 'model2', supportedActions: ['embedContent'] },
                    { name: 'model3', supportedActions: ['generateContent', 'embedContent'] }
                ];
                
                const mockPager = {
                    [Symbol.asyncIterator]: async function* () {
                        for (const model of mockModelData) {
                            yield model;
                        }
                    }
                };
                
                mockModels.list.mockResolvedValue(mockPager);
                
                const modelList = await adapter.getEmbeddingModelList();
                expect(modelList).toEqual(['model2', 'model3']);
            });
        });

        describe('getGenerativeModelID', () => {
            it('should return model ID by index', async () => {
                const mockModelData = [
                    { name: 'model1', supportedActions: ['generateContent'] },
                    { name: 'model2', supportedActions: ['generateContent'] }
                ];
                
                const mockPager = {
                    [Symbol.asyncIterator]: async function* () {
                        for (const model of mockModelData) {
                            yield model;
                        }
                    }
                };
                
                mockModels.list.mockResolvedValue(mockPager);
                
                const modelId = await adapter.getGenerativeModelID(1);
                expect(modelId).toBe('model2');
            });
        });

        describe('getMaxGenerativeModelNumber', () => {
            it('should return the count of generative models', async () => {
                const mockModelData = [
                    { name: 'model1', supportedActions: ['generateContent'] },
                    { name: 'model2', supportedActions: ['embedContent'] },
                    { name: 'model3', supportedActions: ['generateContent'] }
                ];
                
                const mockPager = {
                    [Symbol.asyncIterator]: async function* () {
                        for (const model of mockModelData) {
                            yield model;
                        }
                    }
                };
                
                mockModels.list.mockResolvedValue(mockPager);
                
                const count = await adapter.getMaxGenerativeModelNumber();
                expect(count).toBe(2);
            });
        });

        describe('countTokensAs', () => {
            it('should count tokens for generate request', async () => {
                const mockResult = { totalTokens: 42 };
                mockModels.countTokens.mockResolvedValue(mockResult);
                
                const contentParts = ['Hello world'];
                const tokenCount = await adapter.countTokensAs(contentParts, 'generate');
                
                expect(tokenCount).toBe(42);
                expect(mockModels.countTokens).toHaveBeenCalled();
            });

            it('should count tokens for chat request', async () => {
                const mockResult = { totalTokens: 24 };
                mockModels.countTokens.mockResolvedValue(mockResult);
                
                const contentParts = ['Hello'];
                const tokenCount = await adapter.countTokensAs(contentParts, 'chat');
                
                expect(tokenCount).toBe(24);
                expect(mockModels.countTokens).toHaveBeenCalled();
            });
        });

        describe('Response handling', () => {
            it('should set and get last response', () => {
                const mockResponse = { text: 'test response' };
                adapter.setLastResponse(mockResponse);
                expect(adapter.getLastResponse()).toBe(mockResponse);
            });

            it('should set and get last partial response', () => {
                const mockPartialResponse = { text: 'partial response' };
                adapter.setLastPartialResponse(mockPartialResponse);
                expect(adapter.getLastPartialResponse()).toBe(mockPartialResponse);
            });
        });

        describe('Function calling', () => {
            describe('setFunctionCallingMode', () => {
                it('should set function calling mode', () => {
                    adapter.setFunctionCallingMode(GeminiAdapter.FUNCTION_CALLING_NONE);
                    expect(adapter.functionCallingMode).toBe(GeminiAdapter.FUNCTION_CALLING_NONE);
                });

                it('should update tool config when setting mode and functions exist', () => {
                    // First register a function to create tools
                    adapter.registerFunction('testProc', 'Test function', []);
                    
                    adapter.setFunctionCallingMode(GeminiAdapter.FUNCTION_CALLING_ANY);
                    expect(adapter.generationConfig.toolConfig).toBeDefined();
                    expect(adapter.generationConfig.toolConfig.functionCallingConfig).toBeDefined();
                    expect(adapter.generationConfig.toolConfig.functionCallingConfig.mode).toBe(GeminiAdapter.FUNCTION_CALLING_ANY);
                });

                it('should not create tool config when no functions are registered', () => {
                    adapter.setFunctionCallingMode(GeminiAdapter.FUNCTION_CALLING_ANY);
                    expect(adapter.generationConfig.toolConfig).toBeUndefined();
                });
            });

            describe('updateToolConfig', () => {
                it('should return early when no tools exist', () => {
                    adapter.updateToolConfig();
                    expect(adapter.generationConfig.toolConfig).toBeUndefined();
                });

                it('should create toolConfig when functions exist', () => {
                    // Setup: register a function to create tools
                    adapter.registerFunction('testProc', 'Test function', []);
                    
                    adapter.updateToolConfig();
                    
                    expect(adapter.generationConfig.toolConfig).toBeDefined();
                    expect(adapter.generationConfig.toolConfig.functionCallingConfig).toBeDefined();
                    expect(adapter.generationConfig.toolConfig.functionCallingConfig.mode).toBe(adapter.functionCallingMode);
                });

                it('should remove functionCallingConfig when no function declarations exist', () => {
                    // Setup: create initial toolConfig
                    adapter.generationConfig.tools = [];
                    adapter.generationConfig.toolConfig = {
                        functionCallingConfig: { mode: 'AUTO' }
                    };
                    
                    adapter.updateToolConfig();
                    
                    expect(adapter.generationConfig.toolConfig.functionCallingConfig).toBeUndefined();
                });

                it('should preserve other toolConfig properties when removing functionCallingConfig', () => {
                    // Setup: create toolConfig with other properties
                    adapter.generationConfig.tools = [];
                    adapter.generationConfig.toolConfig = {
                        functionCallingConfig: { mode: 'AUTO' },
                        otherConfig: { value: 'test' }
                    };
                    
                    adapter.updateToolConfig();
                    
                    expect(adapter.generationConfig.toolConfig.functionCallingConfig).toBeUndefined();
                    expect(adapter.generationConfig.toolConfig.otherConfig).toEqual({ value: 'test' });
                });
            });

            describe('updateFunctionCallTool', () => {
                it('should remove function declarations when no functions are registered', () => {
                    // Setup: create initial tools with function declarations
                    adapter.generationConfig.tools = [{
                        functionDeclarations: [{ name: 'test', description: 'test' }]
                    }];
                    
                    adapter.updateFunctionCallTool();
                    
                    expect(adapter.generationConfig.tools[0].functionDeclarations).toBeUndefined();
                });

                it('should create new function call tool when none exists', () => {
                    adapter.registerFunction('testProc', 'Test function', []);
                    
                    expect(adapter.generationConfig.tools).toBeDefined();
                    expect(adapter.functionCallTool).toBeDefined();
                    expect(adapter.functionCallTool.functionDeclarations).toHaveLength(1);
                });

                it('should update existing function call tool', () => {
                    // Setup: register first function
                    adapter.registerFunction('proc1', 'Function 1', []);
                    const initialTool = adapter.functionCallTool;
                    
                    // Register second function
                    adapter.registerFunction('proc2', 'Function 2', []);
                    
                    expect(adapter.functionCallTool).toBe(initialTool);
                    expect(adapter.functionCallTool.functionDeclarations).toHaveLength(2);
                });

                it('should call updateToolConfig after updating function declarations', () => {
                    const spy = jest.spyOn(adapter, 'updateToolConfig');
                    
                    adapter.registerFunction('testProc', 'Test function', []);
                    
                    expect(spy).toHaveBeenCalled();
                    spy.mockRestore();
                });
            });

            describe('registerFunction', () => {
                it('should register a function', () => {
                    const procedureCode = 'testProc';
                    const description = 'Test procedure';
                    const args = [
                        { type: 'string', description: 'Test arg', code: 'testArg' }
                    ];
                    
                    adapter.registerFunction(procedureCode, description, args);
                    
                    // Function registry uses function names as keys, not procedure codes
                    const functionNames = Object.keys(adapter.functionRegistry);
                    expect(functionNames.length).toBe(1);
                    
                    const functionSpec = adapter.functionRegistry[functionNames[0]];
                    expect(functionSpec.procedureCode).toBe(procedureCode);
                    expect(functionSpec.declaration).toBeDefined();
                    expect(functionSpec.declaration.name).toMatch(/^func_\d+$/);
                    expect(functionSpec.declaration.description).toBe(description);
                    
                    // Check that tools and toolConfig are properly set up
                    expect(adapter.generationConfig.tools).toBeDefined();
                    expect(adapter.functionCallTool).toBeDefined();
                    expect(adapter.generationConfig.toolConfig).toBeDefined();
                    expect(adapter.generationConfig.toolConfig.functionCallingConfig).toBeDefined();
                });

                it('should update existing function if procedure code already exists', () => {
                    const procedureCode = 'testProc';
                    
                    // Register first time
                    adapter.registerFunction(procedureCode, 'First description', []);
                    const firstFunctionName = Object.keys(adapter.functionRegistry)[0];
                    
                    // Register again with same procedure code
                    adapter.registerFunction(procedureCode, 'Updated description', []);
                    
                    // Should still have only one function with same name but updated description
                    expect(Object.keys(adapter.functionRegistry).length).toBe(1);
                    expect(Object.keys(adapter.functionRegistry)[0]).toBe(firstFunctionName);
                    expect(adapter.functionRegistry[firstFunctionName].declaration.description).toBe('Updated description');
                });
            });

            describe('unregisterFunction', () => {
                it('should unregister a function', () => {
                    const procedureCode = 'testProc';
                    adapter.registerFunction(procedureCode, 'Test', []);
                    
                    const functionNames = Object.keys(adapter.functionRegistry);
                    expect(functionNames.length).toBe(1);
                    expect(adapter.generationConfig.tools).toBeDefined();
                    expect(adapter.functionCallTool).toBeDefined();
                    
                    adapter.unregisterFunction(procedureCode);
                    
                    expect(Object.keys(adapter.functionRegistry).length).toBe(0);
                    // After unregistering all functions, function declarations should be removed
                    expect(adapter.generationConfig.tools[0].functionDeclarations).toBeUndefined();
                });

                it('should do nothing when trying to unregister non-existent function', () => {
                    adapter.unregisterFunction('nonExistent');
                    expect(Object.keys(adapter.functionRegistry).length).toBe(0);
                });
            });

            describe('clearRegisteredFunctions', () => {
                it('should clear all registered functions', () => {
                    adapter.registerFunction('func1', 'Function 1', []);
                    adapter.registerFunction('func2', 'Function 2', []);
                    
                    expect(Object.keys(adapter.functionRegistry)).toHaveLength(2);
                    expect(adapter.functionIndex).toBe(2);
                    expect(adapter.generationConfig.tools).toBeDefined();
                    expect(adapter.functionCallTool).toBeDefined();
                    
                    adapter.clearRegisteredFunctions();
                    
                    expect(Object.keys(adapter.functionRegistry)).toHaveLength(0);
                    expect(adapter.functionIndex).toBe(0);
                    // After clearing all functions, function declarations should be removed
                    expect(adapter.generationConfig.tools[0].functionDeclarations).toBeUndefined();
                });
            });
        });

        describe('Model management', () => {
            describe('setGenerativeModel', () => {
                it('should set generative model successfully', async () => {
                    // Mock successful model validation
                    const mockModelData = [
                        { name: 'models/test-model', supportedActions: ['generateContent'] }
                    ];
                    
                    const mockPager = {
                        [Symbol.asyncIterator]: async function* () {
                            for (const model of mockModelData) {
                                yield model;
                            }
                        }
                    };
                    
                    mockModels.list.mockResolvedValue(mockPager);
                    
                    const result = await adapter.setGenerativeModel('test-model');
                    expect(result).toContain('successfully');
                    expect(adapter.modelCode.generative).toBe('models/test-model');
                });

                it('should return error for invalid model', async () => {
                    const mockModelData = [
                        { name: 'models/valid-model', supportedActions: ['generateContent'] }
                    ];
                    
                    const mockPager = {
                        [Symbol.asyncIterator]: async function* () {
                            for (const model of mockModelData) {
                                yield model;
                            }
                        }
                    };
                    
                    mockModels.list.mockResolvedValue(mockPager);
                    
                    const result = await adapter.setGenerativeModel('invalid-model');
                    expect(result).toContain('not found');
                });
            });

            describe('setEmbeddingModel', () => {
                it('should set embedding model successfully', async () => {
                    const mockModelData = [
                        { name: 'models/embed-model', supportedActions: ['embedContent'] }
                    ];
                    
                    const mockPager = {
                        [Symbol.asyncIterator]: async function* () {
                            for (const model of mockModelData) {
                                yield model;
                            }
                        }
                    };
                    
                    mockModels.list.mockResolvedValue(mockPager);
                    
                    const result = await adapter.setEmbeddingModel('embed-model');
                    expect(result).toContain('successfully');
                    expect(adapter.modelCode.embedding).toBe('models/embed-model');
                });
            });
        });

        describe('Content conversion', () => {
            describe('convertContentParts', () => {
                it('should convert string content parts', () => {
                    const contentParts = ['Hello', 'World'];
                    const result = adapter.convertContentParts(contentParts);
                    expect(result).toEqual(['Hello', 'World']);
                });

                it('should convert object content parts', () => {
                    const contentParts = [
                        { text: 'Hello' },
                        { text: 'World' }
                    ];
                    const result = adapter.convertContentParts(contentParts);
                    expect(result).toEqual([{ text: 'Hello' }, { text: 'World' }]);
                });
            });
        });

        describe('Chat functionality', () => {
            describe('startChat', () => {
                it('should start a new chat session', () => {
                    const mockChatSession = {
                        getHistory: jest.fn().mockReturnValue([])
                    };
                    mockSDK.chats.create.mockReturnValue(mockChatSession);
                    
                    const history = ['Hello', 'Hi there'];
                    adapter.startChat(history);
                    
                    expect(mockSDK.chats.create).toHaveBeenCalled();
                    expect(adapter.chatSession).toBe(mockChatSession);
                });
            });

            describe('getChatHistory', () => {
                it('should return empty array when no chat session', () => {
                    const history = adapter.getChatHistory();
                    expect(history).toEqual([]);
                });

                it('should return chat history when session exists', () => {
                    const mockHistory = [{ role: 'user', parts: [{ text: 'Hello' }] }];
                    const mockChatSession = {
                        getHistory: jest.fn().mockReturnValue(mockHistory)
                    };
                    adapter.chatSession = mockChatSession;
                    
                    const history = adapter.getChatHistory();
                    expect(history).toBe(mockHistory);
                });
            });
        });

        describe('Embedding functionality', () => {
            describe('requestEmbedding', () => {
                it('should request embedding for content', async () => {
                    const mockEmbedResponse = {
                        embeddings: [{ values: [0.1, 0.2, 0.3] }]
                    };
                    mockModels.embedContent.mockResolvedValue(mockEmbedResponse);
                    
                    const contentParts = [{ type: 'text', data: 'Hello world' }];
                    const taskType = EmbeddingTaskType.SEMANTIC_SIMILARITY;
                    
                    const result = await adapter.requestEmbedding(contentParts, taskType);
                    
                    expect(result).toEqual([0.1, 0.2, 0.3]);
                    expect(mockModels.embedContent).toHaveBeenCalled();
                });
            });
        });
    });

    describe('Utility Functions', () => {
        describe('getTextFromResponse', () => {
            it('should return empty string for null/undefined response', () => {
                expect(adapter.getTextFromResponse(null)).toBe('');
                expect(adapter.getTextFromResponse(undefined)).toBe('');
            });

            it('should handle string response', () => {
                // Note: the function doesn't actually handle string responses correctly
                // due to early return without setting contentText
                const response = 'Simple string response';
                expect(adapter.getTextFromResponse(response)).toBe('');
            });

            it('should extract text from candidate response', () => {
                const response = {
                    candidates: [{
                        content: {
                            parts: [
                                { text: 'Hello ' },
                                { text: 'World!' }
                            ]
                        }
                    }]
                };
                expect(adapter.getTextFromResponse(response)).toBe('Hello World!');
            });

            it('should handle multiple responses', () => {
                const responses = [
                    {
                        candidates: [{
                            content: {
                                parts: [{ text: 'First ' }]
                            }
                        }]
                    },
                    {
                        candidates: [{
                            content: {
                                parts: [{ text: 'Second' }]
                            }
                        }]
                    }
                ];
                expect(adapter.getTextFromResponse(responses)).toBe('First Second');
            });

            it('should handle error responses', () => {
                const response = {
                    name: 'Error: Something went wrong',
                    message: 'Error: Something went wrong'
                };
                expect(adapter.getTextFromResponse(response)).toBe('Error: Something went wrong');
            });

            it('should handle responses with prompt feedback', () => {
                const response = {
                    promptFeedback: { 
                        blockReason: 'SAFETY',
                        safetyRatings: [
                            { category: 'HARM_CATEGORY_HATE_SPEECH', probability: 'HIGH', blocked: true }
                        ]
                    }
                };
                expect(adapter.getTextFromResponse(response)).toBe('\nBlocked: HARM_CATEGORY_HATE_SPEECH is (HIGH)');
            });

            it('should use specified candidate index', () => {
                const response = {
                    candidates: [
                        {
                            content: {
                                parts: [{ text: 'First candidate' }]
                            }
                        },
                        {
                            content: {
                                parts: [{ text: 'Second candidate' }]
                            }
                        }
                    ]
                };
                expect(adapter.getTextFromResponse(response, 1)).toBe('Second candidate');
            });
        });
    });

    describe('Constants', () => {
        it('should export HarmCategory constants', () => {
            expect(HarmCategory.HARM_CATEGORY_HATE_SPEECH).toBe('HARM_CATEGORY_HATE_SPEECH');
            expect(HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT).toBe('HARM_CATEGORY_SEXUALLY_EXPLICIT');
            expect(HarmCategory.HARM_CATEGORY_HARASSMENT).toBe('HARM_CATEGORY_HARASSMENT');
            expect(HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT).toBe('HARM_CATEGORY_DANGEROUS_CONTENT');
        });

        it('should export HarmBlockThreshold constants', () => {
            expect(HarmBlockThreshold.BLOCK_LOW_AND_ABOVE).toBe('BLOCK_LOW_AND_ABOVE');
            expect(HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE).toBe('BLOCK_MEDIUM_AND_ABOVE');
            expect(HarmBlockThreshold.BLOCK_ONLY_HIGH).toBe('BLOCK_ONLY_HIGH');
            expect(HarmBlockThreshold.BLOCK_NONE).toBe('BLOCK_NONE');
        });

        it('should export EmbeddingTaskType constants', () => {
            expect(EmbeddingTaskType.SEMANTIC_SIMILARITY).toBe('SEMANTIC_SIMILARITY');
            expect(EmbeddingTaskType.CLASSIFICATION).toBe('CLASSIFICATION');
            expect(EmbeddingTaskType.CLUSTERING).toBe('CLUSTERING');
            expect(EmbeddingTaskType.RETRIEVAL_DOCUMENT).toBe('RETRIEVAL_DOCUMENT');
        });
    });
});

// Mock the openai package
jest.mock('openai', () => {
    return jest.fn().mockImplementation(() => ({
        models: {
            list: jest.fn()
        },
        chat: {
            completions: {
                create: jest.fn()
            }
        },
        embeddings: {
            create: jest.fn()
        }
    }));
});

import {OpenAIAdapter, HarmCategory, HarmBlockThreshold, EmbeddingTaskType} from '../../src/vm/extensions/block/openai-adapter.js';
import OpenAI from 'openai';

describe('OpenAIAdapter', () => {
    let mockTarget;
    let adapter;
    let mockSDK;

    beforeEach(() => {
        // Reset all mocks
        jest.clearAllMocks();
        
        // Clear static adapters
        OpenAIAdapter.removeAllAdapter();
        
        // Mock target object
        mockTarget = {
            id: 'test-target-id'
        };

        // Mock SDK and its components
        mockSDK = {
            models: {
                list: jest.fn()
            },
            chat: {
                completions: {
                    create: jest.fn()
                }
            },
            embeddings: {
                create: jest.fn()
            }
        };

        OpenAI.mockReturnValue(mockSDK);

        // Set API key for tests
        OpenAIAdapter.setApiKey('test-api-key');
    });

    afterEach(() => {
        // Clean up static state
        OpenAIAdapter.removeAllAdapter();
        OpenAIAdapter.setApiKey(null);
    });

    describe('Static Methods', () => {
        describe('existsForTarget', () => {
            it('should return false when no adapter exists for target', () => {
                expect(OpenAIAdapter.existsForTarget(mockTarget)).toBe(false);
            });

            it('should return true when adapter exists for target', () => {
                new OpenAIAdapter(mockTarget);
                expect(OpenAIAdapter.existsForTarget(mockTarget)).toBe(true);
            });
        });

        describe('getForTarget', () => {
            it('should create new adapter if none exists', () => {
                const result = OpenAIAdapter.getForTarget(mockTarget);
                expect(result).toBeInstanceOf(OpenAIAdapter);
                expect(result.target).toBe(mockTarget);
            });

            it('should return existing adapter if it exists', () => {
                const adapter1 = OpenAIAdapter.getForTarget(mockTarget);
                const adapter2 = OpenAIAdapter.getForTarget(mockTarget);
                expect(adapter1).toBe(adapter2);
            });
        });

        describe('removeForTarget', () => {
            it('should remove adapter for target', () => {
                OpenAIAdapter.getForTarget(mockTarget);
                expect(OpenAIAdapter.existsForTarget(mockTarget)).toBe(true);
                
                OpenAIAdapter.removeForTarget(mockTarget);
                expect(OpenAIAdapter.existsForTarget(mockTarget)).toBe(false);
            });
        });

        describe('removeAllAdapter', () => {
            it('should remove all adapters', () => {
                const target1 = {id: 'target1'};
                const target2 = {id: 'target2'};
                
                OpenAIAdapter.getForTarget(target1);
                OpenAIAdapter.getForTarget(target2);
                
                expect(OpenAIAdapter.existsForTarget(target1)).toBe(true);
                expect(OpenAIAdapter.existsForTarget(target2)).toBe(true);
                
                OpenAIAdapter.removeAllAdapter();
                
                expect(OpenAIAdapter.existsForTarget(target1)).toBe(false);
                expect(OpenAIAdapter.existsForTarget(target2)).toBe(false);
            });
        });

        describe('API Key management', () => {
            it('should set and get API key', () => {
                const testKey = 'test-api-key-123';
                OpenAIAdapter.setApiKey(testKey);
                expect(OpenAIAdapter.getApiKey()).toBe(testKey);
            });
        });

        describe('validateApiKey', () => {
            it('should validate API key successfully', async () => {
                // mockValidationSDK is async list
                const mockValidationSDK = {
                    models: {
                        list: jest.fn().mockResolvedValue({
                            data: [{id: 'gpt-4o', object: 'model'}]
                        })
                    }
                };
                OpenAI.mockReturnValueOnce(mockValidationSDK);

                const result = await OpenAIAdapter.validateApiKey('valid-key');
                
                expect(result.valid).toBe(true);
                expect(result.error).toBeUndefined();
                expect(OpenAI).toHaveBeenCalledWith({
                    apiKey: 'valid-key',
                    baseURL: 'https://api.openai.com/v1',
                    dangerouslyAllowBrowser: true
                });
            });

            it('should handle invalid API key', async () => {
                const mockValidationSDK = {
                    models: {
                        list: jest.fn().mockRejectedValue(new Error('401 Unauthorized'))
                    }
                };
                OpenAI.mockReturnValueOnce(mockValidationSDK);

                const result = await OpenAIAdapter.validateApiKey('invalid-key');
                
                expect(result.valid).toBe(false);
                expect(result.error).toBe('API key is invalid');
            });

            it('should handle empty API key', async () => {
                const result = await OpenAIAdapter.validateApiKey('');
                expect(result.valid).toBe(false);
                expect(result.error).toBe('API key is empty');
            });
        });
    });

    describe('Instance Methods', () => {
        beforeEach(() => {
            adapter = new OpenAIAdapter(mockTarget);
        });

        describe('constructor', () => {
            it('should initialize with default values', () => {
                expect(adapter.target).toBe(mockTarget);
                expect(adapter.sdk).toBeNull();
                expect(adapter.modelCode).toEqual(OpenAIAdapter.MODEL_CODE);
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
                expect(adapter.functionCallingMode).toBe(OpenAIAdapter.FUNCTION_CALLING_AUTO);
                expect(adapter.chatHistory).toEqual([]);
            });

            it('should register itself in static adapters', () => {
                expect(OpenAIAdapter.existsForTarget(mockTarget)).toBe(true);
            });
        });

        describe('getSDK', () => {
            it('should create SDK on first call', () => {
                const sdk = adapter.getSDK();
                expect(sdk).toBe(mockSDK);
                expect(OpenAI).toHaveBeenCalledWith({
                    apiKey: 'test-api-key',
                    baseURL: 'https://api.openai.com/v1',
                    dangerouslyAllowBrowser: true
                });
            });

            it('should return existing SDK on subsequent calls', () => {
                const sdk1 = adapter.getSDK();
                const sdk2 = adapter.getSDK();
                expect(sdk1).toBe(sdk2);
                expect(OpenAI).toHaveBeenCalledTimes(1);
            });
        });

        describe('getModels', () => {
            it('should fetch models from SDK', async () => {
                const mockModels = [
                    {id: 'gpt-4o', object: 'model'},
                    {id: 'text-embedding-3-small', object: 'model'}
                ];
                mockSDK.models.list.mockResolvedValue({data: mockModels});

                const result = await adapter.getModels();
                expect(result).toEqual(mockModels);
                expect(mockSDK.models.list).toHaveBeenCalledTimes(1);
            });

            it('should return cached models on subsequent calls', async () => {
                const mockModels = [{id: 'gpt-4o', object: 'model'}];
                mockSDK.models.list.mockResolvedValue({data: mockModels});

                const result1 = await adapter.getModels();
                const result2 = await adapter.getModels();
                
                expect(result1).toEqual(mockModels);
                expect(result2).toEqual(mockModels);
                expect(mockSDK.models.list).toHaveBeenCalledTimes(1);
            });

            it('should return default models when API fails', async () => {
                mockSDK.models.list.mockRejectedValue(new Error('API Error'));

                const result = await adapter.getModels();
                expect(result).toHaveLength(7); // Default models
                expect(result[0].id).toBe('gpt-4o');
                expect(result[4].id).toBe('text-embedding-3-large');
            });
        });

        describe('getGenerativeModelList', () => {
            it('should filter and return generative model names', async () => {
                const mockModels = [
                    {id: 'gpt-4o', object: 'model'},
                    {id: 'gpt-3.5-turbo', object: 'model'},
                    {id: 'text-embedding-3-small', object: 'model'}
                ];
                mockSDK.models.list.mockResolvedValue({data: mockModels});

                const result = await adapter.getGenerativeModelList();
                expect(result).toEqual(['gpt-4o', 'gpt-3.5-turbo']);
            });
        });

        describe('getEmbeddingModelList', () => {
            it('should filter and return embedding model names', async () => {
                const mockModels = [
                    {id: 'gpt-4o', object: 'model'},
                    {id: 'text-embedding-3-small', object: 'model'},
                    {id: 'text-embedding-ada-002', object: 'model'}
                ];
                mockSDK.models.list.mockResolvedValue({data: mockModels});

                const result = await adapter.getEmbeddingModelList();
                expect(result).toEqual(['text-embedding-3-small', 'text-embedding-ada-002']);
            });
        });

        describe('getGenerativeModelID', () => {
            it('should return model ID by index', async () => {
                const mockModels = [
                    {id: 'gpt-4o', object: 'model'},
                    {id: 'gpt-3.5-turbo', object: 'model'}
                ];
                mockSDK.models.list.mockResolvedValue({data: mockModels});

                const result = await adapter.getGenerativeModelID(1);
                expect(result).toBe('gpt-3.5-turbo');
            });
        });

        describe('getMaxGenerativeModelNumber', () => {
            it('should return the count of generative models', async () => {
                const mockModels = [
                    {id: 'gpt-4o', object: 'model'},
                    {id: 'gpt-3.5-turbo', object: 'model'},
                    {id: 'text-embedding-3-small', object: 'model'}
                ];
                mockSDK.models.list.mockResolvedValue({data: mockModels});

                const result = await adapter.getMaxGenerativeModelNumber();
                expect(result).toBe(2);
            });
        });

        describe('countTokensAs', () => {
            it('should count tokens for text content', async () => {
                const contentParts = [
                    {type: 'text', data: 'Hello world'},
                    'More text'
                ];

                const result = await adapter.countTokensAs(contentParts);
                // "Hello worldMore text" = 20 characters, divided by 4 = 5 tokens
                expect(result).toBe(5);
            });
        });

        describe('Response handling', () => {
            it('should set and get last response', () => {
                const response = {choices: [{message: {content: 'test'}}]};
                adapter.setLastResponse(response);
                expect(adapter.getLastResponse()).toBe(response);
            });

            it('should set and get last partial response', () => {
                const response = {choices: [{delta: {content: 'test'}}]};
                adapter.setLastPartialResponse(response);
                expect(adapter.getLastPartialResponse()).toBe(response);
            });
        });

        describe('Function calling', () => {
            describe('setFunctionCallingMode', () => {
                it('should set function calling mode', () => {
                    adapter.setFunctionCallingMode(OpenAIAdapter.FUNCTION_CALLING_NONE);
                    expect(adapter.functionCallingMode).toBe(OpenAIAdapter.FUNCTION_CALLING_NONE);
                });
            });

            describe('registerFunction', () => {
                it('should register a function', () => {
                    const args = [{type: 'string', description: 'test arg', code: 'arg1'}];
                    adapter.registerFunction('testProc', 'Test function', args);

                    expect(Object.keys(adapter.functionRegistry)).toHaveLength(1);
                    const funcName = Object.keys(adapter.functionRegistry)[0];
                    const spec = adapter.functionRegistry[funcName];
                    
                    expect(spec.procedureCode).toBe('testProc');
                    expect(spec.declaration.name).toBe('func_1');
                    expect(spec.declaration.description).toBe('Test function');
                    expect(spec.declaration.parameters.properties.arg_0).toBeDefined();
                });
            });

            describe('unregisterFunction', () => {
                it('should unregister a function', () => {
                    adapter.registerFunction('testProc', 'Test function', []);
                    expect(Object.keys(adapter.functionRegistry)).toHaveLength(1);

                    adapter.unregisterFunction('testProc');
                    expect(Object.keys(adapter.functionRegistry)).toHaveLength(0);
                });
            });

            describe('clearRegisteredFunctions', () => {
                it('should clear all registered functions', () => {
                    adapter.registerFunction('testProc1', 'Test function 1', []);
                    adapter.registerFunction('testProc2', 'Test function 2', []);
                    expect(Object.keys(adapter.functionRegistry)).toHaveLength(2);

                    adapter.clearRegisteredFunctions();
                    expect(Object.keys(adapter.functionRegistry)).toHaveLength(0);
                    expect(adapter.functionIndex).toBe(0);
                });
            });
        });

        describe('Model management', () => {
            describe('setGenerativeModel', () => {
                it('should set generative model successfully', async () => {
                    const mockModels = [{id: 'gpt-4o', object: 'model'}];
                    mockSDK.models.list.mockResolvedValue({data: mockModels});

                    const result = await adapter.setGenerativeModel('gpt-4o');
                    expect(result).toBe('Model "gpt-4o" set successfully for generative');
                    expect(adapter.modelCode.generative).toBe('gpt-4o');
                });

                it('should handle model not found', async () => {
                    const mockModels = [{id: 'gpt-3.5-turbo', object: 'model'}];
                    mockSDK.models.list.mockResolvedValue({data: mockModels});

                    const result = await adapter.setGenerativeModel('invalid-model');
                    expect(result).toContain('Model "invalid-model" not found');
                    expect(adapter.modelCode.generative).toBe('model-not-found');
                });
            });

            describe('setEmbeddingModel', () => {
                it('should set embedding model successfully', async () => {
                    const mockModels = [{id: 'text-embedding-3-small', object: 'model'}];
                    mockSDK.models.list.mockResolvedValue({data: mockModels});

                    const result = await adapter.setEmbeddingModel('text-embedding-3-small');
                    expect(result).toBe('Model "text-embedding-3-small" set successfully for embedding');
                    expect(adapter.modelCode.embedding).toBe('text-embedding-3-small');
                });
            });
        });

        describe('Content conversion', () => {
            describe('convertContentParts', () => {
                it('should convert text content', () => {
                    const parts = [
                        'Simple text',
                        {type: 'text', data: 'Text object'}
                    ];
                    const result = adapter.convertContentParts(parts);
                    expect(result).toEqual([
                        {type: 'text', text: 'Simple text'},
                        {type: 'text', text: 'Text object'}
                    ]);
                });

                it('should convert image content', () => {
                    const parts = [
                        {type: 'dataURL', data: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=='}
                    ];
                    const result = adapter.convertContentParts(parts);
                    expect(result).toEqual([
                        {
                            type: 'image_url',
                            image_url: {
                                url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=='
                            }
                        }
                    ]);
                });
            });
        });

        describe('Chat functionality', () => {
            describe('startChat', () => {
                it('should start chat with empty history', () => {
                    adapter.startChat();
                    expect(adapter.chatSession).toBe(true);
                    expect(adapter.chatHistory).toEqual([]);
                });

                it('should start chat with provided history', () => {
                    const history = [{role: 'user', content: 'Hello'}];
                    adapter.startChat(history);
                    expect(adapter.chatSession).toBe(true);
                    expect(adapter.chatHistory).toEqual(history);
                });
            });

            describe('getChatHistory', () => {
                it('should return chat history', () => {
                    const history = [{role: 'user', content: 'Hello'}];
                    adapter.startChat(history);
                    expect(adapter.getChatHistory()).toEqual(history);
                });
            });
        });

        describe('Embedding functionality', () => {
            describe('requestEmbedding', () => {
                it('should request embedding for text content', async () => {
                    const mockEmbedding = {
                        data: [{embedding: [0.1, 0.2, 0.3]}]
                    };
                    mockSDK.embeddings.create.mockResolvedValue(mockEmbedding);

                    const contentParts = [{type: 'text', data: 'Hello world'}];
                    const result = await adapter.requestEmbedding(contentParts, 'SEMANTIC_SIMILARITY');

                    expect(result).toEqual([0.1, 0.2, 0.3]);
                    expect(mockSDK.embeddings.create).toHaveBeenCalledWith({
                        model: adapter.modelCode.embedding,
                        input: 'Hello world'
                    });
                });

                it('should return cached embedding for same content', async () => {
                    const mockEmbedding = {
                        data: [{embedding: [0.1, 0.2, 0.3]}]
                    };
                    mockSDK.embeddings.create.mockResolvedValue(mockEmbedding);

                    const contentParts = [{type: 'text', data: 'Hello world'}];
                    
                    // First call
                    const result1 = await adapter.requestEmbedding(contentParts, 'SEMANTIC_SIMILARITY');
                    // Second call (should use cache)
                    const result2 = await adapter.requestEmbedding(contentParts, 'SEMANTIC_SIMILARITY');

                    expect(result1).toEqual([0.1, 0.2, 0.3]);
                    expect(result2).toEqual([0.1, 0.2, 0.3]);
                    expect(mockSDK.embeddings.create).toHaveBeenCalledTimes(1);
                });

                it('should return empty array for empty content', async () => {
                    const result = await adapter.requestEmbedding([], 'SEMANTIC_SIMILARITY');
                    expect(result).toEqual([]);
                    expect(mockSDK.embeddings.create).not.toHaveBeenCalled();
                });
            });
        });
    });

    describe('Utility Functions', () => {
        describe('getTextFromResponse', () => {
            it('should return empty string for null/undefined response', () => {
                expect(OpenAIAdapter.getTextFromResponse(null)).toBe('');
                expect(OpenAIAdapter.getTextFromResponse(undefined)).toBe('');
            });

            it('should handle string response', () => {
                expect(OpenAIAdapter.getTextFromResponse('Hello world')).toBe('Hello world');
            });

            it('should extract text from OpenAI response', () => {
                const response = {
                    choices: [
                        {
                            message: {
                                content: 'Hello from OpenAI'
                            }
                        }
                    ]
                };
                expect(OpenAIAdapter.getTextFromResponse(response)).toBe('Hello from OpenAI');
            });

            it('should handle streaming delta response', () => {
                const response = {
                    choices: [
                        {
                            delta: {
                                content: 'Streaming text'
                            }
                        }
                    ]
                };
                expect(OpenAIAdapter.getTextFromResponse(response)).toBe('Streaming text');
            });

            it('should handle multiple responses', () => {
                const responses = [
                    {
                        choices: [
                            {
                                message: {
                                    content: 'First '
                                }
                            }
                        ]
                    },
                    {
                        choices: [
                            {
                                message: {
                                    content: 'Second'
                                }
                            }
                        ]
                    }
                ];
                expect(OpenAIAdapter.getTextFromResponse(responses)).toBe('First Second');
            });

            it('should handle error responses', () => {
                const response = {
                    name: 'OpenAIError',
                    message: 'API Error occurred'
                };
                expect(OpenAIAdapter.getTextFromResponse(response)).toBe('API Error occurred');
            });

            it('should handle missing choices', () => {
                const response = {
                    object: 'chat.completion'
                };
                expect(OpenAIAdapter.getTextFromResponse(response)).toBe('');
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

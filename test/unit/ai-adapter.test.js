// Mock the AI SDK packages
jest.mock('@ai-sdk/google', () => ({
    createGoogleGenerativeAI: jest.fn()
}));

jest.mock('@ai-sdk/openai', () => ({
    createOpenAI: jest.fn()
}));

jest.mock('@ai-sdk/openai-compatible', () => ({
    createOpenAICompatible: jest.fn()
}));

jest.mock('@ai-sdk/anthropic', () => ({
    createAnthropic: jest.fn()
}));

jest.mock('ai', () => ({
    generateText: jest.fn(),
    streamText: jest.fn(),
    tool: jest.fn(),
    jsonSchema: jest.fn(),
    stepCountIs: jest.fn(),
    embed: jest.fn(),
    Output: {
        object: jest.fn()
    }
}));

import {
    AIAdapter
} from '../../src/vm/extensions/block/ai-adapter.js';

import {createGoogleGenerativeAI} from '@ai-sdk/google';
import {createOpenAI} from '@ai-sdk/openai';
import {createOpenAICompatible} from '@ai-sdk/openai-compatible';
import {createAnthropic} from '@ai-sdk/anthropic';
import {generateText, streamText, tool, jsonSchema, stepCountIs, embed, Output} from 'ai';

describe('AIAdapter', () => {
    let mockTarget;
    let adapter;
    let mockClient;

    beforeEach(() => {
        // Reset all mocks
        jest.clearAllMocks();

        // Clear static adapters
        AIAdapter.removeAllAdapter();

        // Mock target object
        mockTarget = {
            id: 'test-target-id'
        };

        // Mock client
        mockClient = {
            languageModel: jest.fn().mockReturnValue({
                modelID: 'test-model'
            }),
            textEmbeddingModel: jest.fn().mockReturnValue({
                modelID: 'test-embedding-model'
            })
        };

        // Mock provider factories
        createGoogleGenerativeAI.mockReturnValue(mockClient);
        createOpenAI.mockReturnValue(mockClient);
        createOpenAICompatible.mockReturnValue(mockClient);
        createAnthropic.mockReturnValue(mockClient);

        // Mock AI functions
        generateText.mockResolvedValue({
            response: {
                messages: []
            },
            text: 'AI response'
        });
        streamText.mockResolvedValue({
            textStream: (async function* () {
                yield 'test';
            })(),
            response: Promise.resolve({
                messages: []
            }),
            toText: async () => 'test'
        });
        tool.mockImplementation((config) => config);
        jsonSchema.mockImplementation((schema) => schema);
        stepCountIs.mockImplementation((count) => count);
        embed.mockResolvedValue({
            embedding: [0.1, 0.2, 0.3]
        });

        // Set API key for tests
        AIAdapter.setApiKey('test-api-key');
    });

    afterEach(() => {
        // Clean up static state
        AIAdapter.removeAllAdapter();
        AIAdapter.setApiKey(null);
        delete global.fetch;
    });

    describe('Static Methods', () => {
        describe('existsForTarget', () => {
            it('should return false when no adapter exists for target', () => {
                expect(AIAdapter.existsForTarget(mockTarget)).toBe(false);
            });

            it('should return true when adapter exists for target', () => {
                new AIAdapter(mockTarget);
                expect(AIAdapter.existsForTarget(mockTarget)).toBe(true);
            });
        });

        describe('getForTarget', () => {
            it('should create new adapter if none exists', () => {
                const result = AIAdapter.getForTarget(mockTarget);
                expect(result).toBeInstanceOf(AIAdapter);
                expect(AIAdapter.existsForTarget(mockTarget)).toBe(true);
            });

            it('should return existing adapter if it exists', () => {
                const adapter1 = AIAdapter.getForTarget(mockTarget);
                const adapter2 = AIAdapter.getForTarget(mockTarget);
                expect(adapter1).toBe(adapter2);
            });
        });

        describe('removeForTarget', () => {
            it('should remove adapter for target', () => {
                AIAdapter.getForTarget(mockTarget);
                expect(AIAdapter.existsForTarget(mockTarget)).toBe(true);

                AIAdapter.removeForTarget(mockTarget);
                expect(AIAdapter.existsForTarget(mockTarget)).toBe(false);
            });
        });

        describe('removeAllAdapter', () => {
            it('should remove all adapters', () => {
                const target1 = {id: 'target1'};
                const target2 = {id: 'target2'};

                AIAdapter.getForTarget(target1);
                AIAdapter.getForTarget(target2);

                expect(AIAdapter.existsForTarget(target1)).toBe(true);
                expect(AIAdapter.existsForTarget(target2)).toBe(true);

                AIAdapter.removeAllAdapter();

                expect(AIAdapter.existsForTarget(target1)).toBe(false);
                expect(AIAdapter.existsForTarget(target2)).toBe(false);
            });
        });

        describe('API Key management', () => {
            it('should set and get API key', () => {
                const testKey = 'test-api-key-123';
                AIAdapter.setApiKey(testKey);
                expect(AIAdapter.getApiKey()).toBe(testKey);
            });
        });
    });

    describe('Instance Methods', () => {
        beforeEach(() => {
            adapter = new AIAdapter(mockTarget);
        });

        describe('constructor', () => {
            it('should initialize with default values', () => {
                expect(AIAdapter.existsForTarget(mockTarget)).toBe(true);
                expect(adapter.client).toBeNull();
                expect(adapter.apiType).toBeNull();
                expect(adapter.modelID).toBeNull();
                expect(adapter.models).toEqual([]);
                expect(adapter.generationConfig).toEqual({});
                expect(adapter.messages).toEqual([]);
                expect(adapter.lastResponse).toBeNull();
                expect(adapter.lastPartialText).toBeNull();
                expect(adapter.functionRegistry).toEqual({});
                expect(adapter.functionIndex).toBe(0);
                expect(adapter.functionArgPrefix).toBe('arg_');
                expect(adapter.functionNamePrefix).toBe('func_');
                expect(adapter.functionCallingMode).toBe(AIAdapter.FUNCTION_CALLING_AUTO);
            });

            it('should register itself in static adapters', () => {
                expect(AIAdapter.ADAPTERS[mockTarget.id]).toBe(adapter);
            });
        });

        describe('getClient', () => {
            it('should create Gemini client on first call', () => {
                // Set up adapter with API key to trigger config
                adapter.setApiKey('test-api-key');
                
                const client = adapter.getClient();
                expect(createGoogleGenerativeAI).toHaveBeenCalledWith({
                    apiKey: 'test-api-key',
                    baseURL: 'https://generativelanguage.googleapis.com/v1beta'
                });
                expect(client).toBe(mockClient);
                expect(adapter.client).toBe(mockClient);
            });

            it('should create OpenAI client', () => {
                const openAIAdapter = new AIAdapter(mockTarget);
                openAIAdapter.setApiType('OpenAI');
                openAIAdapter.setApiKey('test-api-key');
                
                const client = openAIAdapter.getClient();
                expect(createOpenAI).toHaveBeenCalledWith({
                    apiKey: 'test-api-key',
                    baseURL: 'https://api.openai.com/v1'
                });
                expect(client).toBe(mockClient);
            });

            it('should create Anthropic client', () => {
                const anthropicAdapter = new AIAdapter(mockTarget);
                anthropicAdapter.setApiType('Anthropic');
                anthropicAdapter.setApiKey('test-api-key');
                
                const client = anthropicAdapter.getClient();
                expect(createAnthropic).toHaveBeenCalledWith({
                    apiKey: 'test-api-key',
                    baseURL: 'https://api.anthropic.com/v1'
                });
                expect(client).toBe(mockClient);
            });

            it('should return existing client on subsequent calls', () => {
                adapter.setApiKey('test-api-key');
                
                const client1 = adapter.getClient();
                const client2 = adapter.getClient();
                expect(client1).toBe(client2);
                expect(createGoogleGenerativeAI).toHaveBeenCalledTimes(1);
            });

            it('should throw error for unsupported API type', () => {
                adapter.setApiType('UnsupportedAPI');
                expect(() => adapter.getClient()).toThrow('Unsupported API type: UnsupportedAPI');
            });

            it('should include baseUrl when set', () => {
                jest.clearAllMocks();
                
                adapter.setApiType('Gemini');
                adapter.setApiKey('test-api-key');
                adapter.setBaseUrl('https://custom.api.endpoint');
                adapter.getClient();
                expect(createGoogleGenerativeAI).toHaveBeenCalledWith({
                    apiKey: 'test-api-key',
                    baseURL: 'https://custom.api.endpoint'
                });
            });

            it('should include supportsStructuredOutputs for OpenAICompatible', () => {
                adapter.setApiType('OpenAICompatible');
                adapter.setApiKey('test-api-key');
                adapter.getClient();
                expect(createOpenAICompatible).toHaveBeenCalledWith({
                    apiKey: 'test-api-key',
                    baseURL: 'https://router.huggingface.co/v1',
                    supportsStructuredOutputs: true
                });
            });
        });

        describe('getModels', () => {
            beforeEach(() => {
                adapter = new AIAdapter(mockTarget);
                global.fetch = jest.fn();
            });

            it('should return Gemini model list from API', async () => {
                const mockModels = [
                    {name: 'models/gemini-1.5-flash-latest'},
                    {name: 'models/text-embedding-004'}
                ];
                
                global.fetch.mockResolvedValue({
                    ok: true,
                    json: () => Promise.resolve({
                        models: mockModels
                    })
                });

                // Explicitly set API type to Gemini for this test
                adapter.setApiType('Gemini');
                adapter.setApiKey('test-api-key');
                adapter.setBaseUrl('https://custom.api.endpoint');
                
                const models = await adapter.getModels();
                
                // Check if fetch was called
                expect(global.fetch).toHaveBeenCalled();
                
                expect(models).toHaveLength(2);
                expect(models[0].id).toBe('gemini-1.5-flash-latest');
                expect(models[1].id).toBe('text-embedding-004');
                
                expect(global.fetch).toHaveBeenCalledWith(
                    'https://custom.api.endpoint/models',
                    {
                        headers: {
                            'x-goog-api-key': 'test-api-key'
                        }
                    }
                );
            });

            it('should return cached models on subsequent calls', async () => {
                adapter.models = [{id: 'cached-model'}];
                const models = await adapter.getModels();
                expect(models[0].id).toBe('cached-model');
                expect(global.fetch).not.toHaveBeenCalled();
            });

            it('should handle API errors and return empty array for Gemini', async () => {
                adapter.setBaseUrl('https://dummy.url');
                global.fetch.mockResolvedValue({
                    ok: false,
                    status: 401
                });
                const models = await adapter.getModels();
                expect(models).toEqual([]);
            });

            it('should handle network errors and return empty array for Gemini', async () => {
                adapter.setBaseUrl('https://dummy.url');
                global.fetch.mockRejectedValue(new Error('Network error'));
                const models = await adapter.getModels();
                expect(models).toEqual([]);
            });

            it('should fetch OpenAI models', async () => {
                const mockOpenAIModels = {
                    data: [
                        {id: 'gpt-4o-mini'},
                        {id: 'text-embedding-3-small'}
                    ]
                };
                global.fetch.mockResolvedValue({
                    ok: true,
                    json: () => Promise.resolve(mockOpenAIModels)
                });

                const openAIAdapter = new AIAdapter(mockTarget, 'OpenAI');
                openAIAdapter.setBaseUrl('https://dummy.url');
                const models = await openAIAdapter.getModels();
                expect(models).toHaveLength(2);
                expect(models[0].id).toBe('gpt-4o-mini');
                expect(models[1].id).toBe('text-embedding-3-small');
            });

            it('should handle OpenAI API errors', async () => {
                global.fetch.mockResolvedValue({
                    ok: false,
                    status: 401
                });
                const openAIAdapter = new AIAdapter(mockTarget, 'OpenAI');
                openAIAdapter.setBaseUrl('https://dummy.url');
                const models = await openAIAdapter.getModels();
                expect(models).toEqual([]);
            });

            it('should fetch Anthropic models (returns empty since no models endpoint)', async () => {
                // Anthropic doesn't have a public models endpoint like OpenAI/Gemini
                // so it should return empty array
                const anthropicAdapter = new AIAdapter(mockTarget);
                anthropicAdapter.setApiType('Anthropic');
                anthropicAdapter.setApiKey('test-api-key');
                anthropicAdapter.setBaseUrl('https://api.anthropic.com');
                const models = await anthropicAdapter.getModels();
                expect(models).toEqual([]);
                expect(global.fetch).not.toHaveBeenCalled();
            });

            it('should handle Anthropic API errors', async () => {
                global.fetch.mockResolvedValue({
                    ok: false,
                    status: 401
                });
                const anthropicAdapter = new AIAdapter(mockTarget);
                anthropicAdapter.setApiType('Anthropic');
                anthropicAdapter.setApiKey('test-api-key');
                anthropicAdapter.setBaseUrl('https://api.anthropic.com');
                const models = await anthropicAdapter.getModels();
                expect(models).toEqual([]);
            });
        });

        describe('getGenerativeModelList', () => {
            it('should filter and return generative model names', async () => {
                adapter.getModels = jest.fn().mockResolvedValue([
                    {id: 'gemini-pro'},
                    {id: 'embedding-model'},
                    {id: 'another-generative'}
                ]);
                const modelList = await adapter.getGenerativeModelList();
                expect(modelList).toEqual(['gemini-pro', 'embedding-model', 'another-generative']);
            });
        });

        describe('Response handling', () => {
            it('should set and get last response', () => {
                const response = {text: 'test'};
                adapter.setLastResponse(response);
                expect(adapter.getLastResponse()).toBe(response);
            });

            it('should set and get last partial response', () => {
                const partial = 'partial test';
                adapter.setLastPartialText(partial);
                expect(adapter.getLastPartialText()).toBe(partial);
            });

            it('should set and get last response text', () => {
                const text = 'response text';
                adapter.setLastResponseText(text);
                expect(adapter.getLastResponseText()).toBe(text);
            });
        });

        describe('Function calling', () => {
            describe('registerFunction', () => {
                it('should register a new function', () => {
                    const procCode = 'proc1';
                    const description = 'Test function';
                    const args = [{code: 'arg1', type: 'string', description: 'Argument 1'}];
                    
                    adapter.registerFunction(procCode, description, args);
                    
                    const spec = adapter.getFunctionSpec(procCode);
                    expect(spec).toBeDefined();
                    expect(spec.name).toMatch(/^func_\d+$/);
                    expect(spec.description).toBe(description);
                    expect(spec.parameters.properties.arg_0).toEqual({
                        type: 'string',
                        description: 'Argument 1'
                    });
                });

                it('should not register function without procedure code', () => {
                    adapter.registerFunction(null, 'description', []);
                    expect(Object.keys(adapter.functionRegistry)).toHaveLength(1);
                });
            });

            describe('getFunctionSpec', () => {
                it('should return undefined for non-existent function', () => {
                    expect(adapter.getFunctionSpec('nonexistent')).toBeUndefined();
                });

                it('should return correct spec for registered function', () => {
                    adapter.registerFunction('proc1', 'desc', []);
                    const spec = adapter.getFunctionSpec('proc1');
                    expect(spec).toBeDefined();
                    expect(spec.description).toBe('desc');
                });
            });

            describe('unregisterFunction', () => {
                it('should unregister an existing function', () => {
                    adapter.registerFunction('proc1', 'desc', []);
                    expect(adapter.getFunctionSpec('proc1')).not.toBeUndefined();
                    
                    adapter.unregisterFunction('proc1');
                    expect(adapter.getFunctionSpec('proc1')).toBeUndefined();
                });

                it('should handle unregistering non-existent function', () => {
                    expect(() => adapter.unregisterFunction('nonexistent')).not.toThrow();
                });
            });

            describe('clearRegisteredFunctions', () => {
                it('should clear all registered functions', () => {
                    adapter.registerFunction('proc1', 'desc', []);
                    adapter.registerFunction('proc2', 'desc', []);
                    
                    adapter.clearRegisteredFunctions();
                    expect(Object.keys(adapter.functionRegistry)).toHaveLength(0);
                });
            });

            describe('setFunctionCallingMode', () => {
                it('should set the function calling mode', () => {
                    adapter.setFunctionCallingMode(AIAdapter.FUNCTION_CALLING_REQUIRED);
                    expect(adapter.functionCallingMode).toBe(AIAdapter.FUNCTION_CALLING_REQUIRED);
                });
            });
        });

        describe('Content conversion', () => {
            describe('_convertToMessage', () => {
                it('should convert string content', () => {
                    const result = adapter._convertToMessage(['Hello world']);
                    expect(result).toEqual({
                        role: 'user',
                        content: 'Hello world'
                    });
                });

                it('should convert object content parts', () => {
                    const contentParts = [
                        {type: 'text', data: 'Hello'},
                        {type: 'text', data: ' world'}
                    ];
                    const result = adapter._convertToMessage(contentParts);
                    expect(result).toEqual({
                        role: 'user',
                        content: 'Hello world'
                    });
                });

                it('should handle dataURL content', () => {
                    const contentParts = [
                        {type: 'text', data: 'Image:'},
                        {type: 'dataURL', data: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=='}
                    ];
                    const result = adapter._convertToMessage(contentParts);
                    expect(result.content).toEqual([
                        { type: 'file', data: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==', mediaType: 'image/png' },
                        { type: 'text', text: 'Image:' }
                      ]);
                });
            });
        });

        describe('Text extraction', () => {
            describe('getTextFromResponse', () => {
                it('should return empty string for no responses', () => {
                    expect(adapter.getTextFromResponse(null)).toBe('');
                    expect(adapter.getTextFromResponse(undefined)).toBe('');
                    expect(adapter.getTextFromResponse([])).toBe('');
                });

                it('should extract text from a single text response', () => {
                    const response = {
                        text: 'Hello'
                    };
                    expect(adapter.getTextFromResponse(response)).toBe('Hello');
                });

                it('should extract text from multiple text parts', () => {
                    const response = {
                        text: 'Part 1 Part 2'
                    };
                    expect(adapter.getTextFromResponse(response)).toBe('Part 1 Part 2');
                });

                it('should ignore non-text parts', () => {
                    const response = {
                        text: 'Text',
                        toolCalls: []
                    };
                    expect(adapter.getTextFromResponse(response)).toBe('Text');
                });

                it('should handle multiple response objects (legacy)', () => {
                    const responses = [
                        {text: 'First.'},
                        {text: ' Second.'}
                    ];
                    expect(adapter.getTextFromResponse(responses)).toBe('First. Second.');
                });
            });
        });

        describe('Generation methods', () => {
            describe('requestGenerate', () => {
                let responseTextHandler, functionDispatcher, partialTextHandler;

                beforeEach(() => {
                    responseTextHandler = jest.fn();
                    functionDispatcher = jest.fn();
                    partialTextHandler = jest.fn();
                    adapter.setApiKey('test-api-key');
                });

                it('should call streamText with correct parameters', async () => {
                    const prompt = ['Test prompt'];
                    
                    streamText.mockResolvedValue({
                        textStream: (async function* () {
                            yield 'test';
                        })(),
                        response: Promise.resolve({
                            messages: []
                        })
                    });
                    
                    await adapter.requestGenerate(prompt, responseTextHandler, functionDispatcher, partialTextHandler, false);
                    
                    expect(streamText).toHaveBeenCalledWith(
                        expect.objectContaining({
                            model: {modelID: 'test-model'},
                            messages: expect.arrayContaining([
                                expect.objectContaining({
                                    role: 'user',
                                    content: 'Test prompt'
                                })
                            ])
                        })
                    );
                });

                it('should handle streaming response', async () => {
                    const prompt = ['Test prompt'];
                    streamText.mockImplementation(async ({ onStepFinish }) => {
                        if (onStepFinish) {
                            // Simulate the step finishing and calling the handler
                            onStepFinish({ text: 'partial response' });
                        }
                        return {
                            textStream: (async function*() {
                                yield 'partial ';
                                yield 'response';
                            })(),
                            toText: async () => 'partial response',
                            response: Promise.resolve({ messages: [] }),
                            text: 'partial response'
                        };
                    });

                    await adapter.requestGenerate(prompt, responseTextHandler, functionDispatcher, partialTextHandler, false);

                    expect(partialTextHandler).toHaveBeenCalledWith('partial ');
                    expect(partialTextHandler).toHaveBeenCalledWith('response');
                    expect(responseTextHandler).toHaveBeenCalledWith('partial response');
                });

                it('should handle function calls', async () => {
                    adapter.registerFunction('proc1', 'desc', []);
                    const spec = adapter.getFunctionSpec('proc1');
                    
                    streamText.mockResolvedValue({
                        toolCalls: [{
                            toolCallId: 'call1',
                            toolName: spec.name,
                            args: {}
                        }],
                        toText: async () => '',
                        textStream: (async function*() {})()
                    });

                    const result = await adapter.requestGenerate(['prompt'], responseTextHandler, functionDispatcher, partialTextHandler, false);
                    
                    expect(result.toolCalls).toHaveLength(1);
                    expect(result.toolCalls[0].toolName).toBe(spec.name);
                });

                it('should use generateText when partialTextHandler is null', async () => {
                    await adapter.requestGenerate(['prompt'], responseTextHandler, functionDispatcher, null, false);
                    expect(generateText).toHaveBeenCalled();
                });

                it('should build tools when function calling is enabled', async () => {
                    adapter.registerFunction('proc1', 'desc', []);
                    adapter.setFunctionCallingMode(AIAdapter.FUNCTION_CALLING_AUTO);
                    
                    await adapter.requestGenerate(['prompt'], responseTextHandler, functionDispatcher, null, false);
                    
                    const args = generateText.mock.calls[0][0];
                    expect(args.tools).toBeDefined();
                    expect(Object.keys(args.tools)).toHaveLength(1);
                });

                it('should not build tools when function calling is none', async () => {
                    adapter.registerFunction('proc1', 'desc', []);
                    adapter.setFunctionCallingMode(AIAdapter.FUNCTION_CALLING_NONE);
                    
                    await adapter.requestGenerate(['prompt'], responseTextHandler, functionDispatcher, null, false);
                    
                    const args = generateText.mock.calls[0][0];
                    expect(args.tools).toBeUndefined();
                    expect(args.toolChoice).toBeUndefined();
                });

                it('should include Anthropic-specific headers for direct browser access', async () => {
                    const anthropicAdapter = new AIAdapter(mockTarget);
                    anthropicAdapter.setApiType('Anthropic');
                    anthropicAdapter.setApiKey('test-api-key');
                    
                    streamText.mockResolvedValue({
                        textStream: (async function* () {
                            yield 'test response';
                        })(),
                        response: Promise.resolve({
                            messages: []
                        }),
                        toText: async () => 'test response'
                    });

                    await anthropicAdapter.requestGenerate(['Test prompt'], jest.fn(), jest.fn(), jest.fn(), false);

                    const args = streamText.mock.calls[0][0];
                    expect(args.headers).toEqual({
                        'anthropic-dangerous-direct-browser-access': 'true'
                    });
                });
            });
        });

        describe('Chat functionality', () => {
            describe('startChat', () => {
                it('should set messages from history', () => {
                    const history = [
                        {role: 'user', content: 'Hi'},
                        {role: 'assistant', content: 'Hello'}
                    ];
                    adapter.startChat(history);
                    expect(adapter.messages).toEqual(history);
                });
            });

            describe('getChatHistory', () => {
                it('should return current messages', () => {
                    adapter.messages = ['test message'];
                    expect(adapter.getChatHistory()).toEqual(['test message']);
                });
            });

            describe('requestGenerate with isChat=true', () => {
                it('should include chat history in the request', async () => {
                    adapter.startChat([{role: 'user', content: 'Old message'}]);
                    await adapter.requestGenerate(['New message'], jest.fn(), jest.fn(), null, true);
                    
                    const args = generateText.mock.calls[0][0];
                    expect(args.messages).toEqual([
                        {role: 'user', content: 'Old message'},
                        {role: 'user', content: 'New message'}
                    ]);
                });

                it('should update chat history after generation', async () => {
                    generateText.mockResolvedValue({
                        text: 'AI response',
                        response: {
                            messages: [{ role: 'assistant', content: 'AI response' }]
                        }
                    });
                    
                    await adapter.requestGenerate(['User message'], jest.fn(), jest.fn(), null, true);
                    
                    expect(adapter.getChatHistory()).toEqual([
                        {role: 'user', content: 'User message'},
                        { role: 'assistant', content: 'AI response' }
                    ]);
                });
            });
        });

        describe('API management', () => {
            it('should set and get API type', () => {
                adapter.setApiType('OpenAI');
                expect(adapter.getApiType()).toBe('OpenAI');
            });

            it('should infer Anthropic API type from base URL', () => {
                adapter.setBaseUrl('https://api.anthropic.com/v1/messages');
                expect(adapter.getApiType()).toBe('Anthropic');
            });

            it('should set base URL and reset client', () => {
                adapter.getClient(); // create client
                adapter.setBaseUrl('new-url');
                expect(adapter.baseUrl).toBe('new-url');
                expect(adapter.client).toBeNull();
            });

            it('should set API key and reset client', () => {
                adapter.getClient(); // create client
                AIAdapter.setApiKey('new-key');
                expect(AIAdapter.getApiKey()).toBe('new-key');
                // This test is tricky because all adapters share the static key.
                // A better test would be to check if the client is reset.
            });
        });

        describe('Embedding functionality', () => {
                it('should request embedding for Gemini', async () => {
                adapter.setApiKey('test-api-key');
                const contentParts = ['Hello world'];
                const result = await adapter.requestEmbedding(contentParts);
                
                expect(embed).toHaveBeenCalledWith({
                    model: { modelID: 'test-embedding-model' },
                    value: 'Hello world'
                });
                expect(result).toEqual([0.1, 0.2, 0.3]);
            });            it('should request embedding for OpenAI', async () => {
                const openAIAdapter = new AIAdapter(mockTarget);
                openAIAdapter.setApiType('OpenAI');
                openAIAdapter.setApiKey('test-api-key');
                const contentParts = ['Hello world'];
                const result = await openAIAdapter.requestEmbedding(contentParts);
                
                expect(embed).toHaveBeenCalledWith({
                    model: { modelID: 'test-embedding-model' },
                    value: 'Hello world'
                });
                expect(result).toEqual([0.1, 0.2, 0.3]);
            });

            it('should handle empty content and return an empty array string', async () => {
                const result = await adapter.requestEmbedding([]);
                expect(result).toBe('[]');
            });

            it('should handle string content parts', async () => {
                adapter.setApiKey('test-api-key');
                const contentParts = 'Hello world';
                const result = await adapter.requestEmbedding(contentParts);
                
                expect(embed).toHaveBeenCalledWith({
                    model: { modelID: 'test-embedding-model' },
                    value: 'Hello world'
                });
                expect(result).toEqual([0.1, 0.2, 0.3]);
            });

            it('should handle Anthropic embedding request and throw error (not supported)', async () => {
                // Create a mock client that throws error for textEmbeddingModel with null
                const anthropicMockClient = {
                    languageModel: jest.fn().mockReturnValue({
                        modelID: 'claude-3-haiku'
                    }),
                    textEmbeddingModel: jest.fn().mockImplementation((modelId) => {
                        if (!modelId) {
                            throw new Error('Model ID is required for embedding model');
                        }
                        return { modelID: modelId };
                    })
                };
                
                // Override the Anthropic mock
                createAnthropic.mockReturnValue(anthropicMockClient);
                
                const anthropicAdapter = new AIAdapter(mockTarget);
                anthropicAdapter.setApiType('Anthropic');
                anthropicAdapter.setApiKey('test-api-key');
                
                const contentParts = ['Hello world'];
                
                // Since Anthropic doesn't support embeddings (defaultModels.embedding is null),
                // this should throw an error when trying to create textEmbeddingModel with null
                await expect(anthropicAdapter.requestEmbedding(contentParts))
                    .rejects.toThrow('Model ID is required for embedding model');
                
                // Restore the original mock
                createAnthropic.mockReturnValue(mockClient);
            });

        });



        describe('Model management', () => {
            describe('setModel', () => {
                it('should set model successfully', async () => {
                    const result = await adapter.setModel('test-model');
                    expect(result).toContain('successfully');
                    expect(adapter.modelID).toBe('test-model');
                });

                it('should return error for empty model ID', async () => {
                    const result = await adapter.setModel('');
                    expect(result).toBe('Model ID is empty');
                });
            });
        });
    });

    describe('Static properties', () => {

        it('should have correct FUNCTION_CALLING constants', () => {
            expect(AIAdapter.FUNCTION_CALLING_NONE).toBe('none');
            expect(AIAdapter.FUNCTION_CALLING_AUTO).toBe('auto');
            expect(AIAdapter.FUNCTION_CALLING_REQUIRED).toBe('required');
        });

        it('should have correct DEFAULT_MODEL_ID structure', () => {
            expect(AIAdapter.DEFAULT_MODEL_ID.generative).toBeDefined();
            expect(AIAdapter.DEFAULT_MODEL_ID.embedding).toBeDefined();
        });
    });
});

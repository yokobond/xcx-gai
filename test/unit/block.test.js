import { blockClass } from "../../src/vm/extensions/block/index.js";
import { AIAdapter } from "../../src/vm/extensions/block/ai-adapter.js";

// Mock AIAdapter
jest.mock("../../src/vm/extensions/block/ai-adapter.js");

describe("blockClass", () => {
    const runtime = {
        formatMessage: function (msg) {
            return msg.default;
        },
        on: function () { },
        emit: function () { },
    };

    let block;
    let mockTarget;
    let mockAIAdapter;

    beforeEach(() => {
        jest.clearAllMocks();
        
        block = new blockClass(runtime);
        
        mockTarget = {
            id: 'test-target-id'
        };
 
        mockAIAdapter = {
            abortRequests: jest.fn(),
            getResultFiles: jest.fn()
        };

        mockUtil = { target: mockTarget };
        
        // Mock aiForTarget method
        block.aiForTarget = jest.fn().mockReturnValue(mockAIAdapter);
    });

    it("should create an instance of blockClass", () => {
        expect(block).toBeInstanceOf(blockClass);
    });

    describe("abortRequestsForTarget", () => {
        it("should call abortRequests on AI adapter when adapter exists", () => {
            block.aiForTarget.mockReturnValue(mockAIAdapter);

            block.abortRequestsForTarget(mockTarget, "test reason");

            expect(block.aiForTarget).toHaveBeenCalledWith(mockTarget);
            expect(mockAIAdapter.abortRequests).toHaveBeenCalledWith("test reason");
        });

        it("should do nothing when no AI adapter exists for target", () => {
            block.aiForTarget.mockReturnValue(null);

            expect(() => block.abortRequestsForTarget(mockTarget, "test reason")).not.toThrow();
            expect(block.aiForTarget).toHaveBeenCalledWith(mockTarget);
        });

        it("should handle undefined target gracefully", () => {
            block.aiForTarget.mockReturnValue(null);

            expect(() => block.abortRequestsForTarget(undefined, "test reason")).not.toThrow();
            expect(block.aiForTarget).toHaveBeenCalledWith(undefined);
        });
    });

    describe('File methods', () => {
        describe('getFileDataAtIndex', () => {
            it('should return empty string when no AI adapter', async () => {
                block.aiForTarget.mockReturnValue(null);
                const result = await block.getFileDataAtIndex({ INDEX: 1 }, mockUtil);
                expect(result).toBe('');
            });

            it('should return empty string when no files', async () => {
                mockAIAdapter.getResultFiles.mockReturnValue([]);
                const result = await block.getFileDataAtIndex({ INDEX: 1 }, mockUtil);
                expect(result).toBe('');
            });

            it('should return file data URL at valid index', async () => {
                const mockFiles = [
                    { base64: 'data1', mediaType: 'image/png' },
                    { base64: 'data2', mediaType: 'image/jpeg' }
                ];
                mockAIAdapter.getResultFiles.mockReturnValue(mockFiles);

                const result = await block.getFileDataAtIndex({ INDEX: 1 }, mockUtil);
                expect(result).toBe('data:image/png;base64,data1');

                const result2 = await block.getFileDataAtIndex({ INDEX: 2 }, mockUtil);
                expect(result2).toBe('data:image/jpeg;base64,data2');
            });

            it('should return empty string for invalid index', async () => {
                const mockFiles = [
                    { base64: 'data1', mediaType: 'image/png' }
                ];
                mockAIAdapter.getResultFiles.mockReturnValue(mockFiles);

                const result = await block.getFileDataAtIndex({ INDEX: 0 }, mockUtil);
                expect(result).toBe('');

                const result2 = await block.getFileDataAtIndex({ INDEX: 3 }, mockUtil);
                expect(result2).toBe('');
            });

            it('should handle non-integer index', async () => {
                const mockFiles = [
                    { base64: 'data1', mediaType: 'image/png' }
                ];
                mockAIAdapter.getResultFiles.mockReturnValue(mockFiles);

                const result = await block.getFileDataAtIndex({ INDEX: 1.7 }, mockUtil);
                expect(result).toBe('data:image/png;base64,data1');
            });

            it('should use default media type when mediaType is missing', async () => {
                const mockFiles = [
                    { base64: 'data1' } // mediaType missing
                ];
                mockAIAdapter.getResultFiles.mockReturnValue(mockFiles);

                const result = await block.getFileDataAtIndex({ INDEX: 1 }, mockUtil);
                expect(result).toBe('data:application/octet-stream;base64,data1');
            });

            it('should return empty string when base64 is empty', async () => {
                const mockFiles = [
                    { base64: '', mediaType: 'image/png' }
                ];
                mockAIAdapter.getResultFiles.mockReturnValue(mockFiles);

                const result = await block.getFileDataAtIndex({ INDEX: 1 }, mockUtil);
                expect(result).toBe('');
            });

            it('should return empty string when base64 is missing', async () => {
                const mockFiles = [
                    { mediaType: 'image/png' } // base64 missing
                ];
                mockAIAdapter.getResultFiles.mockReturnValue(mockFiles);

                const result = await block.getFileDataAtIndex({ INDEX: 1 }, mockUtil);
                expect(result).toBe('');
            });
        });

        describe('getFileMediaTypeAtIndex', () => {
            it('should return empty string when no AI adapter', async () => {
                block.aiForTarget.mockReturnValue(null);
                const result = await block.getFileMediaTypeAtIndex({ INDEX: 1 }, mockUtil);
                expect(result).toBe('');
            });

            it('should return empty string when no files', async () => {
                mockAIAdapter.getResultFiles.mockReturnValue([]);
                const result = await block.getFileMediaTypeAtIndex({ INDEX: 1 }, mockUtil);
                expect(result).toBe('');
            });

            it('should return media type at valid index', async () => {
                const mockFiles = [
                    { base64: 'data1', mediaType: 'image/png' },
                    { base64: 'data2', mediaType: 'image/jpeg' }
                ];
                mockAIAdapter.getResultFiles.mockReturnValue(mockFiles);

                const result = await block.getFileMediaTypeAtIndex({ INDEX: 1 }, mockUtil);
                expect(result).toBe('image/png');

                const result2 = await block.getFileMediaTypeAtIndex({ INDEX: 2 }, mockUtil);
                expect(result2).toBe('image/jpeg');
            });

            it('should return empty string for invalid index', async () => {
                const mockFiles = [
                    { base64: 'data1', mediaType: 'image/png' }
                ];
                mockAIAdapter.getResultFiles.mockReturnValue(mockFiles);

                const result = await block.getFileMediaTypeAtIndex({ INDEX: 0 }, mockUtil);
                expect(result).toBe('');

                const result2 = await block.getFileMediaTypeAtIndex({ INDEX: 3 }, mockUtil);
                expect(result2).toBe('');
            });
        });

        describe('getMaxFileNumber', () => {
            it('should return 0 when no AI adapter', async () => {
                block.aiForTarget.mockReturnValue(null);
                const result = await block.getMaxFileNumber({}, mockUtil);
                expect(result).toBe(0);
            });

            it('should return 0 when no files', async () => {
                mockAIAdapter.getResultFiles.mockReturnValue([]);
                const result = await block.getMaxFileNumber({}, mockUtil);
                expect(result).toBe(0);
            });

            it('should return file count', async () => {
                const mockFiles = [
                    { base64: 'data1', mediaType: 'image/png' },
                    { base64: 'data2', mediaType: 'image/jpeg' },
                    { base64: 'data3', mediaType: 'image/gif' }
                ];
                mockAIAdapter.getResultFiles.mockReturnValue(mockFiles);

                const result = await block.getMaxFileNumber({}, mockUtil);
                expect(result).toBe(3);
            });

            it('should return 0 when getResultFiles returns null', async () => {
                mockAIAdapter.getResultFiles.mockReturnValue(null);
                const result = await block.getMaxFileNumber({}, mockUtil);
                expect(result).toBe(0);
            });
        });
    });

    describe('cross-extension interface', () => {
        it('registers the "gai" facade with version 3 and the expected members', () => {
            const iface = runtime.getExtensionInterface('gai');
            expect(iface).toBeTruthy();
            expect(iface.version).toBe(3);
            expect(typeof iface.hasAI).toBe('function');
            expect(typeof iface.ensureAI).toBe('function');
            expect(typeof iface.resetHistory).toBe('function');
            expect(typeof iface.abort).toBe('function');
            expect(typeof iface.chat).toBe('function');
            expect(typeof iface.registerTools).toBe('function');
            expect(typeof iface.unregisterTools).toBe('function');
            expect(typeof iface.registerInstructions).toBe('function');
            expect(typeof iface.unregisterInstructions).toBe('function');
            expect(typeof iface.getHistory).toBe('function');
            expect(typeof iface.setHistory).toBe('function');
        });

        describe('getHistory / setHistory', () => {
            it('getHistory returns [] for a target with no adapter, without creating one', () => {
                block.aiForTarget.mockReturnValue(null);
                const iface = runtime.getExtensionInterface('gai');

                const result = iface.getHistory(mockTarget);

                expect(result).toEqual([]);
                expect(AIAdapter).not.toHaveBeenCalled();
            });

            it('getHistory returns a fresh copy each time (mutating it does not leak)', () => {
                mockAIAdapter.getChatHistory = jest.fn().mockReturnValue([
                    {role: 'user', content: 'Hi'}
                ]);
                const iface = runtime.getExtensionInterface('gai');

                const first = iface.getHistory(mockTarget);
                first.push({role: 'assistant', content: 'injected'});
                const second = iface.getHistory(mockTarget);

                expect(second).toEqual([{role: 'user', content: 'Hi'}]);
            });

            it('setHistory creates the adapter, filters malformed entries, and getHistory reflects the filtered set', () => {
                let stored = [];
                mockAIAdapter.startChat = jest.fn(history => {
                    stored = history;
                });
                mockAIAdapter.getChatHistory = jest.fn(() => stored);
                jest.spyOn(block, 'getAI').mockReturnValue(mockAIAdapter);
                const iface = runtime.getExtensionInterface('gai');

                const input = [
                    {role: 'user', content: 'Hi'},
                    {role: 'assistant', content: ['not', 'a', 'string']}, // valid: content is an Array
                    null, // malformed: not an object
                    {content: 'no role'}, // malformed: missing role
                    {role: 'user', content: 42}, // malformed: content neither string nor Array
                    'not-an-object' // malformed
                ];

                iface.setHistory(mockTarget, input);

                expect(block.getAI).toHaveBeenCalledWith(mockTarget);
                expect(mockAIAdapter.startChat).toHaveBeenCalledWith([
                    {role: 'user', content: 'Hi'},
                    {role: 'assistant', content: ['not', 'a', 'string']}
                ]);
                expect(iface.getHistory(mockTarget)).toEqual([
                    {role: 'user', content: 'Hi'},
                    {role: 'assistant', content: ['not', 'a', 'string']}
                ]);
            });

            it('setHistory treats a non-array messages argument as empty', () => {
                mockAIAdapter.startChat = jest.fn();
                jest.spyOn(block, 'getAI').mockReturnValue(mockAIAdapter);
                const iface = runtime.getExtensionInterface('gai');

                iface.setHistory(mockTarget, 'not-an-array');

                expect(mockAIAdapter.startChat).toHaveBeenCalledWith([]);
            });
        });

        describe('GAI_HISTORY_CHANGED emission from getAI', () => {
            it('wires a fresh adapter with an onHistoryChanged callback that emits GAI_HISTORY_CHANGED(target) on runtime', () => {
                const freshTarget = {
                    id: 'fresh-target-id',
                    // Made to look like the config/skills variables already exist, so
                    // ensureSkillsList/ensureConfigVariables (real, un-mocked helpers
                    // invoked by getAI on first creation) are no-ops for this test.
                    lookupVariableByNameAndType: jest.fn().mockReturnValue({}),
                    lookupOrCreateVariable: jest.fn(),
                    lookupOrCreateList: jest.fn(),
                    runtime
                };
                const emitSpy = jest.spyOn(runtime, 'emit');
                block.aiForTarget.mockReturnValue(null);

                block.getAI(freshTarget);

                expect(AIAdapter).toHaveBeenCalledWith(
                    freshTarget,
                    expect.objectContaining({onHistoryChanged: expect.any(Function)})
                );
                const {onHistoryChanged} = AIAdapter.mock.calls[AIAdapter.mock.calls.length - 1][1];

                onHistoryChanged();

                expect(emitSpy).toHaveBeenCalledWith('GAI_HISTORY_CHANGED', freshTarget);

                emitSpy.mockRestore();
            });
        });

        describe('registerTools / unregisterTools', () => {
            it('stores the factory on runtime._gaiExternalToolFactories, keyed by ownerExtensionId', () => {
                const iface = runtime.getExtensionInterface('gai');
                const factory = () => ({});

                iface.registerTools('owner-a', factory);

                expect(runtime._gaiExternalToolFactories).toBeInstanceOf(Map);
                expect(runtime._gaiExternalToolFactories.get('owner-a')).toBe(factory);
            });

            it('replaces a previous registration for the same ownerExtensionId', () => {
                const iface = runtime.getExtensionInterface('gai');
                const firstFactory = () => ({});
                const secondFactory = () => ({});

                iface.registerTools('owner-b', firstFactory);
                iface.registerTools('owner-b', secondFactory);

                expect(runtime._gaiExternalToolFactories.get('owner-b')).toBe(secondFactory);
            });

            it('ignores registration with a missing ownerExtensionId or non-function factory', () => {
                const iface = runtime.getExtensionInterface('gai');

                iface.registerTools('', () => ({}));
                iface.registerTools('owner-c', 'not-a-function');

                expect(runtime._gaiExternalToolFactories?.has('')).toBeFalsy();
                expect(runtime._gaiExternalToolFactories?.has('owner-c')).toBeFalsy();
            });

            it('removes a registered factory via unregisterTools', () => {
                const iface = runtime.getExtensionInterface('gai');
                iface.registerTools('owner-d', () => ({}));

                iface.unregisterTools('owner-d');

                expect(runtime._gaiExternalToolFactories.has('owner-d')).toBe(false);
            });

            it('unregisterTools is a no-op when nothing is registered yet', () => {
                const freshRuntime = {
                    formatMessage: msg => msg.default,
                    on: () => {},
                    emit: () => {}
                };
                new blockClass(freshRuntime);
                const iface = freshRuntime.getExtensionInterface('gai');

                expect(() => iface.unregisterTools('nobody')).not.toThrow();
            });
        });

        describe('registerInstructions / unregisterInstructions', () => {
            it('stores the factory on runtime._gaiExternalInstructions, keyed by ownerExtensionId', () => {
                const iface = runtime.getExtensionInterface('gai');
                const factory = () => '';

                iface.registerInstructions('owner-a', factory);

                expect(runtime._gaiExternalInstructions).toBeInstanceOf(Map);
                expect(runtime._gaiExternalInstructions.get('owner-a')).toBe(factory);
            });

            it('replaces a previous registration for the same ownerExtensionId', () => {
                const iface = runtime.getExtensionInterface('gai');
                const firstFactory = () => '';
                const secondFactory = () => '';

                iface.registerInstructions('owner-b', firstFactory);
                iface.registerInstructions('owner-b', secondFactory);

                expect(runtime._gaiExternalInstructions.get('owner-b')).toBe(secondFactory);
            });

            it('ignores registration with a missing ownerExtensionId or non-function factory', () => {
                const iface = runtime.getExtensionInterface('gai');

                iface.registerInstructions('', () => '');
                iface.registerInstructions('owner-c', 'not-a-function');

                expect(runtime._gaiExternalInstructions?.has('')).toBeFalsy();
                expect(runtime._gaiExternalInstructions?.has('owner-c')).toBeFalsy();
            });

            it('removes a registered factory via unregisterInstructions', () => {
                const iface = runtime.getExtensionInterface('gai');
                iface.registerInstructions('owner-d', () => '');

                iface.unregisterInstructions('owner-d');

                expect(runtime._gaiExternalInstructions.has('owner-d')).toBe(false);
            });

            it('unregisterInstructions is a no-op when nothing is registered yet', () => {
                const freshRuntime = {
                    formatMessage: msg => msg.default,
                    on: () => {},
                    emit: () => {}
                };
                new blockClass(freshRuntime);
                const iface = freshRuntime.getExtensionInterface('gai');

                expect(() => iface.unregisterInstructions('nobody')).not.toThrow();
            });
        });

        it('emits EXTENSION_INTERFACE_REGISTERED with "gai" when registering', () => {
            const emitSpy = jest.fn();
            const freshRuntime = {
                formatMessage: msg => msg.default,
                on: () => {},
                emit: emitSpy
            };
            new blockClass(freshRuntime);
            expect(emitSpy).toHaveBeenCalledWith('EXTENSION_INTERFACE_REGISTERED', 'gai');
        });

        it('does not replace an already-installed registerExtensionInterface polyfill', () => {
            const existingRegister = jest.fn();
            const existingGetter = jest.fn().mockReturnValue(null);
            const customRuntime = {
                formatMessage: msg => msg.default,
                on: () => {},
                emit: () => {},
                registerExtensionInterface: existingRegister,
                getExtensionInterface: existingGetter
            };
            new blockClass(customRuntime);
            // installExtensionInterop is a no-op here because the polyfill already
            // existed; the extension still registers itself through it.
            expect(customRuntime.registerExtensionInterface).toBe(existingRegister);
            expect(existingRegister).toHaveBeenCalledWith('gai', expect.any(Object));
        });

        describe('chat', () => {
            it('resolves with the last response text on success', async () => {
                jest.spyOn(block, 'getAI').mockReturnValue(mockAIAdapter);
                jest.spyOn(block, 'updateFunctionRegistry').mockImplementation(() => {});
                mockAIAdapter.requestGenerate = jest.fn().mockResolvedValue();
                mockAIAdapter.getLastResponseText = jest.fn().mockReturnValue('hi there');

                const iface = runtime.getExtensionInterface('gai');
                const result = await iface.chat(mockTarget, 'hello');

                expect(result).toBe('hi there');
                expect(block.updateFunctionRegistry).toHaveBeenCalledWith(mockTarget);
            });

            it('resolves with error text instead of rejecting when the request fails', async () => {
                jest.spyOn(block, 'getAI').mockReturnValue(mockAIAdapter);
                jest.spyOn(block, 'updateFunctionRegistry').mockImplementation(() => {});
                mockAIAdapter.requestGenerate = jest.fn().mockRejectedValue(new Error('boom'));
                mockAIAdapter.getLastResponseText = jest.fn();

                const result = await block._chatViaExternalApi(mockTarget, 'hello');

                expect(result).toBe('boom');
                expect(mockAIAdapter.getLastResponseText).not.toHaveBeenCalled();
            });

            it('passes onPartial the accumulated text, not the raw delta chunks', async () => {
                jest.spyOn(block, 'getAI').mockReturnValue(mockAIAdapter);
                jest.spyOn(block, 'updateFunctionRegistry').mockImplementation(() => {});
                // ai-adapter's requestGenerate passes text-stream *delta* chunks to its
                // partialTextHandler when streaming plain text (no responseSchema set).
                mockAIAdapter.generationConfig = {};
                mockAIAdapter.requestGenerate = jest.fn().mockImplementation(
                    (prompt, responseTextHandler, functionDispatcher, partialTextHandler) => {
                        partialTextHandler('モック応');
                        partialTextHandler('答 2 ');
                        partialTextHandler('番です。');
                        return Promise.resolve();
                    }
                );
                mockAIAdapter.getLastResponseText = jest.fn().mockReturnValue('モック応答 2 番です。');

                const onPartial = jest.fn();
                await block._chatViaExternalApi(mockTarget, 'hello', {onPartial});

                expect(onPartial).toHaveBeenCalledTimes(3);
                expect(onPartial).toHaveBeenNthCalledWith(1, 'モック応');
                expect(onPartial).toHaveBeenNthCalledWith(2, 'モック応答 2 ');
                expect(onPartial).toHaveBeenNthCalledWith(3, 'モック応答 2 番です。');
            });

            it('passes onPartial the schema snapshot unchanged when responseSchema is set', async () => {
                jest.spyOn(block, 'getAI').mockReturnValue(mockAIAdapter);
                jest.spyOn(block, 'updateFunctionRegistry').mockImplementation(() => {});
                // With a responseSchema set, ai-adapter passes the full JSON snapshot so
                // far (not a delta), so it must be forwarded to onPartial unchanged.
                mockAIAdapter.generationConfig = {responseSchema: {type: 'object'}};
                mockAIAdapter.requestGenerate = jest.fn().mockImplementation(
                    (prompt, responseTextHandler, functionDispatcher, partialTextHandler) => {
                        partialTextHandler('{"a":1}');
                        partialTextHandler('{"a":1,"b":2}');
                        return Promise.resolve();
                    }
                );
                mockAIAdapter.getLastResponseText = jest.fn().mockReturnValue('{"a":1,"b":2}');

                const onPartial = jest.fn();
                await block._chatViaExternalApi(mockTarget, 'hello', {onPartial});

                expect(onPartial).toHaveBeenCalledTimes(2);
                expect(onPartial).toHaveBeenNthCalledWith(1, '{"a":1}');
                expect(onPartial).toHaveBeenNthCalledWith(2, '{"a":1,"b":2}');
            });
        });
    });
});


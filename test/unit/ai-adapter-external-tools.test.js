// Mock the AI SDK packages (same surface as ai-adapter.test.js)
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
    tool: jest.fn(config => config),
    jsonSchema: jest.fn(schema => schema),
    stepCountIs: jest.fn(),
    embed: jest.fn(),
    Output: {
        object: jest.fn()
    }
}));

import {
    AIAdapter
} from '../../src/vm/extensions/block/ai-adapter.js';

/**
 * Build a fake target whose `runtime` optionally carries an external tool
 * factory registry (`_gaiExternalToolFactories`), mirroring the shape that
 * `_registerExtensionInterface` (index.js) installs on the shared runtime.
 * @param {string} id - target id
 * @param {?Map} factories - the runtime-level factory registry, or null/undefined
 * for "no registry installed yet".
 * @returns {object} a minimal Target-like object
 */
const fakeTarget = function (id, factories) {
    const state = {};
    return {
        id,
        getCustomState (key) {
            return state[key];
        },
        setCustomState (key, value) {
            state[key] = value;
        },
        lookupVariableByNameAndType () {
            return null;
        },
        runtime: {
            _gaiExternalToolFactories: factories
        }
    };
};

describe('AIAdapter _buildExternalTools', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('returns {} when the runtime registry is undefined', () => {
        const adapter = new AIAdapter(fakeTarget('t-no-registry', undefined));
        expect(adapter._buildExternalTools()).toEqual({});
    });

    test('returns {} when the runtime registry is empty', () => {
        const adapter = new AIAdapter(fakeTarget('t-empty-registry', new Map()));
        expect(adapter._buildExternalTools()).toEqual({});
    });

    test('merges a registered factory\'s tools, wrapped for the AI SDK', async () => {
        const execute = jest.fn(async ({arg}) => ({success: true, result: `did ${arg}`}));
        const factories = new Map();
        factories.set('my-extension', () => ({
            myTool: {
                description: 'Does something useful.',
                parameters: {
                    type: 'object',
                    properties: {arg: {type: 'string'}},
                    required: ['arg']
                },
                execute
            }
        }));
        const adapter = new AIAdapter(fakeTarget('t-one-factory', factories));

        const tools = adapter._buildExternalTools();

        expect(tools.myTool).toBeDefined();
        expect(tools.myTool.description).toBe('Does something useful.');
        expect(tools.myTool.inputSchema).toEqual({
            type: 'object',
            properties: {arg: {type: 'string'}},
            required: ['arg']
        });

        // Successful execute() call passes through to the registered execute
        // and its result is returned unchanged.
        await expect(tools.myTool.execute({arg: 'x'})).resolves.toEqual({
            success: true,
            result: 'did x'
        });
        expect(execute).toHaveBeenCalledWith({arg: 'x'});
    });

    test('wraps an execute() rejection into a {success:false, error} tool result', async () => {
        const factories = new Map();
        factories.set('my-extension', () => ({
            failingTool: {
                description: 'Always fails.',
                parameters: {type: 'object', properties: {}},
                execute: async () => {
                    throw new Error('boom');
                }
            }
        }));
        const adapter = new AIAdapter(fakeTarget('t-failing-execute', factories));

        const tools = adapter._buildExternalTools();

        await expect(tools.failingTool.execute({})).resolves.toEqual({
            success: false,
            error: 'boom'
        });
    });

    test('fails an execute() that never settles with a timeout result instead of hanging', async () => {
        jest.useFakeTimers();
        try {
            const factories = new Map();
            factories.set('my-extension', () => ({
                hangingTool: {
                    description: 'Never settles.',
                    parameters: {type: 'object', properties: {}},
                    // e.g. an asset fetch with no timeout of its own
                    execute: () => new Promise(() => {})
                }
            }));
            const adapter = new AIAdapter(fakeTarget('t-hanging-execute', factories));

            const tools = adapter._buildExternalTools();
            const resultPromise = tools.hangingTool.execute({});
            await jest.advanceTimersByTimeAsync(30000);

            await expect(resultPromise).resolves.toEqual({
                success: false,
                error: expect.stringContaining('did not finish within')
            });
        } finally {
            jest.useRealTimers();
        }
    });

    test('skips a factory that throws, logs the error, and still returns other factories\' tools', () => {
        const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
        const factories = new Map();
        factories.set('broken-extension', () => {
            throw new Error('factory exploded');
        });
        factories.set('good-extension', () => ({
            goodTool: {
                description: 'Works fine.',
                parameters: {type: 'object', properties: {}},
                execute: async () => ({success: true})
            }
        }));
        const adapter = new AIAdapter(fakeTarget('t-broken-factory', factories));

        const tools = adapter._buildExternalTools();

        expect(tools.brokenTool).toBeUndefined();
        expect(tools.goodTool).toBeDefined();
        expect(consoleErrorSpy).toHaveBeenCalled();

        consoleErrorSpy.mockRestore();
    });

    test('returns {} when function calling is disabled (same gate as _buildSkillTools)', () => {
        const factories = new Map();
        factories.set('my-extension', () => ({
            myTool: {
                description: 'Does something useful.',
                parameters: {type: 'object', properties: {}},
                execute: async () => ({success: true})
            }
        }));
        const adapter = new AIAdapter(fakeTarget('t-gated-off', factories));
        adapter.setFunctionCallingMode(AIAdapter.FUNCTION_CALLING_NONE);

        expect(adapter._buildExternalTools()).toEqual({});
    });
});

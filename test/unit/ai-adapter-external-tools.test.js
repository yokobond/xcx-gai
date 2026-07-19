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

    test('honors a per-tool timeoutMs, both in timing and in the error message', async () => {
        jest.useFakeTimers();
        try {
            const factories = new Map();
            factories.set('my-extension', () => ({
                slowTool: {
                    description: 'Takes a while but has its own timeout budget.',
                    parameters: {type: 'object', properties: {}},
                    timeoutMs: 5000,
                    execute: () => new Promise(() => {})
                }
            }));
            const adapter = new AIAdapter(fakeTarget('t-custom-timeout', factories));

            const tools = adapter._buildExternalTools();
            const resultPromise = tools.slowTool.execute({});
            await jest.advanceTimersByTimeAsync(5000);

            await expect(resultPromise).resolves.toEqual({
                success: false,
                error: expect.stringContaining('did not finish within 5000ms')
            });
        } finally {
            jest.useRealTimers();
        }
    });

    test('clamps an oversized timeoutMs to 10 minutes (600000ms)', async () => {
        jest.useFakeTimers();
        try {
            const factories = new Map();
            factories.set('my-extension', () => ({
                reallySlowTool: {
                    description: 'Requests an absurdly long budget.',
                    parameters: {type: 'object', properties: {}},
                    timeoutMs: 999999999,
                    execute: () => new Promise(() => {})
                }
            }));
            const adapter = new AIAdapter(fakeTarget('t-clamped-timeout', factories));

            const tools = adapter._buildExternalTools();
            const resultPromise = tools.reallySlowTool.execute({});
            await jest.advanceTimersByTimeAsync(600000);

            await expect(resultPromise).resolves.toEqual({
                success: false,
                error: expect.stringContaining('did not finish within 600000ms')
            });
        } finally {
            jest.useRealTimers();
        }
    });

    test.each([
        ['omitted', undefined],
        ['non-numeric', 'soon'],
        ['zero', 0],
        ['negative', -5000]
    ])('falls back to the 30-second default when timeoutMs is %s', async (label, timeoutMs) => {
        jest.useFakeTimers();
        try {
            const factories = new Map();
            const spec = {
                description: 'Never settles.',
                parameters: {type: 'object', properties: {}},
                execute: () => new Promise(() => {})
            };
            if (timeoutMs !== undefined) spec.timeoutMs = timeoutMs;
            factories.set('my-extension', () => ({invalidTimeoutTool: spec}));
            const adapter = new AIAdapter(fakeTarget(`t-invalid-timeout-${label}`, factories));

            const tools = adapter._buildExternalTools();
            const resultPromise = tools.invalidTimeoutTool.execute({});
            await jest.advanceTimersByTimeAsync(30000);

            await expect(resultPromise).resolves.toEqual({
                success: false,
                error: expect.stringContaining('did not finish within 30000ms')
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

    test('suppresses abortRequests fired from inside a tool execute (self-abort guard)', async () => {
        const factories = new Map();
        let adapter;
        // Mirrors an editor's runProject tool: green flag -> stopAll ->
        // PROJECT_STOP_ALL -> abortRequests, all synchronously inside execute.
        factories.set('my-extension', () => ({
            runProject: {
                description: 'Run the project.',
                parameters: {type: 'object', properties: {}},
                execute: () => {
                    adapter.abortRequests('Project stopped');
                    return {success: true};
                }
            }
        }));
        adapter = new AIAdapter(fakeTarget('t-self-abort', factories));
        const controller = {signal: {aborted: false}, abort: jest.fn()};
        adapter.abortControllers = [controller];

        const tools = adapter._buildExternalTools();
        const result = await tools.runProject.execute({});

        expect(result).toEqual({success: true});
        expect(controller.abort).not.toHaveBeenCalled();
        expect(adapter.abortControllers).toEqual([controller]);

        // Once the tool has finished, aborts behave normally again.
        adapter.abortRequests('Project stopped');
        expect(controller.abort).toHaveBeenCalledWith('Project stopped');
        expect(adapter.abortControllers).toEqual([]);
    });

    test('restores the abort guard when a tool execute rejects', async () => {
        const factories = new Map();
        factories.set('my-extension', () => ({
            failingTool: {
                description: 'Always fails.',
                parameters: {type: 'object', properties: {}},
                execute: () => Promise.reject(new Error('boom'))
            }
        }));
        const adapter = new AIAdapter(fakeTarget('t-tool-error', factories));
        const tools = adapter._buildExternalTools();

        const result = await tools.failingTool.execute({});
        expect(result).toEqual({success: false, error: 'boom'});

        const controller = {signal: {aborted: false}, abort: jest.fn()};
        adapter.abortControllers = [controller];
        adapter.abortRequests('later stop');
        expect(controller.abort).toHaveBeenCalledWith('later stop');
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

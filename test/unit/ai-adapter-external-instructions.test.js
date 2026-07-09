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
 * Build a fake target whose `runtime` optionally carries an external
 * instructions factory registry (`_gaiExternalInstructions`), mirroring the
 * shape that `_registerExtensionInterface` (index.js) installs on the shared
 * runtime.
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
            _gaiExternalInstructions: factories
        }
    };
};

describe('AIAdapter _buildExternalInstructions', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('returns \'\' when the runtime registry is undefined', () => {
        const adapter = new AIAdapter(fakeTarget('t-no-registry', undefined));
        expect(adapter._buildExternalInstructions()).toBe('');
    });

    test('returns \'\' when the registry is empty', () => {
        const adapter = new AIAdapter(fakeTarget('t-empty-registry', new Map()));
        expect(adapter._buildExternalInstructions()).toBe('');
    });

    test('joins text from multiple registered factories with a blank line', () => {
        const factories = new Map();
        factories.set('owner-a', () => 'Instructions from A.');
        factories.set('owner-b', () => 'Instructions from B.');
        const adapter = new AIAdapter(fakeTarget('t-multi', factories));

        const result = adapter._buildExternalInstructions();

        expect(result).toBe('Instructions from A.\n\nInstructions from B.');
    });

    test('skips a factory that throws, logs the error, and still returns other factories\' text', () => {
        const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
        const factories = new Map();
        factories.set('broken-extension', () => {
            throw new Error('factory exploded');
        });
        factories.set('good-extension', () => 'Good instructions.');
        const adapter = new AIAdapter(fakeTarget('t-broken-factory', factories));

        const result = adapter._buildExternalInstructions();

        expect(result).toBe('Good instructions.');
        expect(consoleErrorSpy).toHaveBeenCalled();

        consoleErrorSpy.mockRestore();
    });

    test('ignores factories returning empty or whitespace-only text', () => {
        const factories = new Map();
        factories.set('owner-empty', () => '');
        factories.set('owner-whitespace', () => '   \n  ');
        factories.set('owner-real', () => 'Real instructions.');
        const adapter = new AIAdapter(fakeTarget('t-blank', factories));

        const result = adapter._buildExternalInstructions();

        expect(result).toBe('Real instructions.');
    });

    test('is not gated by function-calling mode (unlike _buildExternalTools)', () => {
        const factories = new Map();
        factories.set('owner-a', () => 'Always merged instructions.');
        const adapter = new AIAdapter(fakeTarget('t-not-gated', factories));
        adapter.setFunctionCallingMode(AIAdapter.FUNCTION_CALLING_NONE);

        expect(adapter._buildExternalInstructions()).toBe('Always merged instructions.');
    });
});

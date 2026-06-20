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

const GREETING_SKILL = [
    '---',
    'name: greeting',
    'description: Use when the user greets the agent',
    '---',
    'Reply with an enthusiastic greeting and ask how you can help.'
].join('\n');

/**
 * Build a fake target whose `skills` list holds the given raw documents.
 * @param {string} id - target id
 * @param {?Array.<string>} skills - raw skill documents, or null for no list
 * @returns {object} a minimal Target-like object
 */
const fakeTarget = function (id, skills) {
    return {
        id,
        lookupVariableByNameAndType (name, type) {
            return (skills && name === 'skills' && type === 'list') ? {value: skills} : null;
        }
    };
};

describe('AIAdapter Agent Skills', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        AIAdapter.removeAllAdapter();
    });

    describe('_composeSystemInstruction', () => {
        test('lists skill names without bodies when tool calling is available', () => {
            const adapter = new AIAdapter(fakeTarget('t-progressive', [GREETING_SKILL]));
            const system = adapter._composeSystemInstruction();
            expect(system).toContain('loadSkill');
            expect(system).toContain('name: greeting');
            expect(system).not.toContain('Reply with an enthusiastic greeting');
        });

        test('merges the base instruction with the skills section', () => {
            const adapter = new AIAdapter(fakeTarget('t-merge', [GREETING_SKILL]));
            adapter.generationConfig.systemInstruction = 'You are a helpful tutor.';
            const system = adapter._composeSystemInstruction();
            expect(system).toContain('You are a helpful tutor.');
            expect(system).toContain('name: greeting');
        });

        test('inlines full skill bodies when function calling is disabled', () => {
            const adapter = new AIAdapter(fakeTarget('t-inline', [GREETING_SKILL]));
            adapter.setFunctionCallingMode(AIAdapter.FUNCTION_CALLING_NONE);
            const system = adapter._composeSystemInstruction();
            expect(system).toContain('greeting');
            expect(system).toContain('Reply with an enthusiastic greeting and ask how you can help.');
        });

        test('returns the base instruction unchanged when there are no skills', () => {
            const adapter = new AIAdapter(fakeTarget('t-none', null));
            adapter.generationConfig.systemInstruction = 'Base only.';
            expect(adapter._composeSystemInstruction()).toBe('Base only.');
        });

        test('returns \'\' when there is neither a base instruction nor skills', () => {
            const adapter = new AIAdapter(fakeTarget('t-empty', null));
            expect(adapter._composeSystemInstruction()).toBe('');
        });
    });

    describe('_buildSkillTools', () => {
        test('exposes a loadSkill tool whose execute returns the skill body', () => {
            const adapter = new AIAdapter(fakeTarget('t-tool', [GREETING_SKILL]));
            const tools = adapter._buildSkillTools();
            expect(tools.loadSkill).toBeDefined();
            const result = tools.loadSkill.execute({name: 'greeting'});
            expect(result).toEqual({
                success: true,
                name: 'greeting',
                instructions: 'Reply with an enthusiastic greeting and ask how you can help.'
            });
        });

        test('loadSkill execute reports an error for an unknown skill', () => {
            const adapter = new AIAdapter(fakeTarget('t-tool-miss', [GREETING_SKILL]));
            const tools = adapter._buildSkillTools();
            expect(tools.loadSkill.execute({name: 'nope'})).toEqual({
                success: false,
                error: 'No skill named "nope".'
            });
        });

        test('returns {} when function calling is disabled', () => {
            const adapter = new AIAdapter(fakeTarget('t-tool-none', [GREETING_SKILL]));
            adapter.setFunctionCallingMode(AIAdapter.FUNCTION_CALLING_NONE);
            expect(adapter._buildSkillTools()).toEqual({});
        });

        test('returns {} when the target has no skills', () => {
            const adapter = new AIAdapter(fakeTarget('t-tool-empty', null));
            expect(adapter._buildSkillTools()).toEqual({});
        });
    });

    describe('_buildGenerationParams', () => {
        test('sets system to the composed instruction when skills exist', () => {
            const adapter = new AIAdapter(fakeTarget('t-params', [GREETING_SKILL]));
            const params = adapter._buildGenerationParams();
            expect(params.system).toContain('name: greeting');
        });

        test('omits system when there is neither a base instruction nor skills', () => {
            const adapter = new AIAdapter(fakeTarget('t-params-empty', null));
            const params = adapter._buildGenerationParams();
            expect(params.system).toBeUndefined();
        });
    });
});

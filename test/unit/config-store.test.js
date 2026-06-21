import {
    CONFIG_VARIABLES,
    ensureConfigVariables,
    readConfigFromVariables,
    getConfigVariableRaw,
    setConfigVariable
} from '../../src/vm/extensions/block/config-store.js';

/**
 * Build a minimal mock of a scratch-vm Target that supports the scalar variable
 * lookup/create API the config store relies on.
 * @returns {object} mock target
 */
const makeTarget = () => {
    const variables = {};
    return {
        variables,
        runtime: {
            emitProjectChanged: jest.fn(),
            requestBlocksUpdate: jest.fn()
        },
        lookupVariableByNameAndType (name, type) {
            return Object.values(variables).find(v => v.name === name && v.type === (type || ''));
        },
        lookupOrCreateVariable (id, name) {
            if (variables[id]) return variables[id];
            variables[id] = {id, name, type: '', value: ''};
            return variables[id];
        }
    };
};

describe('config-store', () => {
    describe('ensureConfigVariables', () => {
        it('creates all config variables on first use and notifies the runtime', () => {
            const target = makeTarget();
            ensureConfigVariables(target);
            CONFIG_VARIABLES.forEach(spec => {
                expect(target.variables[spec.id]).toBeDefined();
                expect(target.variables[spec.id].name).toBe(spec.name);
                expect(target.variables[spec.id].type).toBe('');
                // Newly created variables are seeded with their default value.
                expect(target.variables[spec.id].value).toBe(spec.default);
            });
            expect(target.runtime.emitProjectChanged).toHaveBeenCalledTimes(1);
            expect(target.runtime.requestBlocksUpdate).toHaveBeenCalledTimes(1);
        });

        it('does nothing when all variables already exist', () => {
            const target = makeTarget();
            ensureConfigVariables(target);
            target.runtime.emitProjectChanged.mockClear();
            target.runtime.requestBlocksUpdate.mockClear();

            ensureConfigVariables(target);
            expect(target.runtime.emitProjectChanged).not.toHaveBeenCalled();
            expect(target.runtime.requestBlocksUpdate).not.toHaveBeenCalled();
        });

        it('is a no-op for a target without the variable API', () => {
            expect(() => ensureConfigVariables(null)).not.toThrow();
            expect(() => ensureConfigVariables({})).not.toThrow();
        });
    });

    describe('readConfigFromVariables', () => {
        it('returns defaults when no variables exist', () => {
            const target = makeTarget();
            expect(readConfigFromVariables(target)).toEqual({
                baseUrl: '',
                modelID: '',
                generationConfig: {}
            });
        });

        it('returns seeded baseUrl/modelID defaults and empty generation config after ensure', () => {
            const target = makeTarget();
            ensureConfigVariables(target);
            const baseUrlDefault = CONFIG_VARIABLES.find(s => s.key === 'baseUrl').default;
            const modelDefault = CONFIG_VARIABLES.find(s => s.key === 'modelID').default;
            expect(readConfigFromVariables(target)).toEqual({
                baseUrl: baseUrlDefault,
                modelID: modelDefault,
                generationConfig: {}
            });
        });

        it('parses baseUrl and modelID to the top level', () => {
            const target = makeTarget();
            ensureConfigVariables(target);
            setConfigVariable(target, 'baseUrl', '  https://example.com/v1  ');
            setConfigVariable(target, 'modelID', '  gpt-5-mini  ');
            const config = readConfigFromVariables(target);
            expect(config.baseUrl).toBe('https://example.com/v1');
            expect(config.modelID).toBe('gpt-5-mini');
        });

        it('clamps temperature and topP to 0..1', () => {
            const target = makeTarget();
            ensureConfigVariables(target);
            setConfigVariable(target, 'temperature', '2');
            setConfigVariable(target, 'topP', '-1');
            const config = readConfigFromVariables(target);
            expect(config.generationConfig.temperature).toBe(1);
            expect(config.generationConfig.topP).toBe(0);
        });

        it('parses positive integers for topK and maxOutputTokens', () => {
            const target = makeTarget();
            ensureConfigVariables(target);
            setConfigVariable(target, 'topK', '40');
            setConfigVariable(target, 'maxOutputTokens', '0');
            const config = readConfigFromVariables(target);
            expect(config.generationConfig.topK).toBe(40);
            // 0 clamps up to the minimum of 1
            expect(config.generationConfig.maxOutputTokens).toBe(1);
        });

        it('splits stopSequences into a trimmed array and drops empties', () => {
            const target = makeTarget();
            ensureConfigVariables(target);
            setConfigVariable(target, 'stopSequences', 'STOP, END ,, ');
            const config = readConfigFromVariables(target);
            expect(config.generationConfig.stopSequences).toEqual(['STOP', 'END']);
        });

        it('keeps systemInstruction as-is', () => {
            const target = makeTarget();
            ensureConfigVariables(target);
            setConfigVariable(target, 'systemInstruction', 'You are helpful');
            const config = readConfigFromVariables(target);
            expect(config.generationConfig.systemInstruction).toBe('You are helpful');
        });

        it('parses responseSchema JSON, and omits it when invalid', () => {
            const target = makeTarget();
            ensureConfigVariables(target);
            setConfigVariable(target, 'responseSchema', '{"type":"object"}');
            expect(readConfigFromVariables(target).generationConfig.responseSchema)
                .toEqual({type: 'object'});

            setConfigVariable(target, 'responseSchema', 'not json');
            expect(readConfigFromVariables(target).generationConfig.responseSchema)
                .toBeUndefined();
        });

        it('returns defaults for a target without the variable API', () => {
            expect(readConfigFromVariables(null)).toEqual({
                baseUrl: '',
                modelID: '',
                generationConfig: {}
            });
        });
    });

    describe('getConfigVariableRaw / setConfigVariable', () => {
        it('round-trips the raw value, creating the variable on demand', () => {
            const target = makeTarget();
            setConfigVariable(target, 'temperature', '0.7');
            expect(target.variables.gai_temperature).toBeDefined();
            expect(getConfigVariableRaw(target, 'temperature')).toBe('0.7');
        });

        it('returns empty string for unknown keys or missing variables', () => {
            const target = makeTarget();
            expect(getConfigVariableRaw(target, 'temperature')).toBe('');
            expect(getConfigVariableRaw(target, 'nope')).toBe('');
        });

        it('ignores unknown keys on set', () => {
            const target = makeTarget();
            expect(() => setConfigVariable(target, 'nope', 'x')).not.toThrow();
            expect(Object.keys(target.variables)).toHaveLength(0);
        });
    });
});

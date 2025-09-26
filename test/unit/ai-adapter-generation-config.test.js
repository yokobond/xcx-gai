jest.mock('ai', () => ({
    Output: {
        object: jest.fn(config => config),
    },
    jsonSchema: jest.fn(schema => schema),
}));

import { AIAdapter } from "../../src/vm/extensions/block/ai-adapter.js";

describe("AIAdapter Generation Config", () => {
    let mockTarget;
    let adapter;

    beforeEach(() => {
        // Clear static adapters
        AIAdapter.removeAllAdapter();

        // Mock target object
        mockTarget = {
            id: 'test-target-id'
        };

        // Set API key for tests
        AIAdapter.setApiKey('test-api-key');
        
        // Create adapter instance
        adapter = new AIAdapter(mockTarget);
    });

    afterEach(() => {
        // Clean up static state
        AIAdapter.removeAllAdapter();
        AIAdapter.setApiKey(null);
    });

    describe('_buildGenerationParams', () => {
        beforeEach(() => {
            adapter.generationConfig = {};
        });

        it('should return empty params when no generation config is set', () => {
            const params = adapter._buildGenerationParams();
            expect(params).toEqual({});
        });

        it('should apply temperature setting', () => {
            adapter.generationConfig.temperature = 0.7;
            const params = adapter._buildGenerationParams();
            expect(params.temperature).toBe(0.7);
        });

        it('should apply topP setting', () => {
            adapter.generationConfig.topP = 0.9;
            const params = adapter._buildGenerationParams();
            expect(params.topP).toBe(0.9);
        });

        it('should apply topK setting', () => {
            adapter.generationConfig.topK = 40;
            const params = adapter._buildGenerationParams();
            expect(params.topK).toBe(40);
        });

        it('should apply maxOutputTokens setting', () => {
            adapter.generationConfig.maxOutputTokens = 1000;
            const params = adapter._buildGenerationParams();
            expect(params.maxOutputTokens).toBe(1000);
        });

        it('should apply stopSequences setting', () => {
            adapter.generationConfig.stopSequences = ['STOP', 'END'];
            const params = adapter._buildGenerationParams();
            expect(params.stopSequences).toEqual(['STOP', 'END']);
        });

        it('should not apply empty stopSequences', () => {
            adapter.generationConfig.stopSequences = [];
            const params = adapter._buildGenerationParams();
            expect(params.stopSequences).toBeUndefined();
        });

        it('should not apply non-array stopSequences', () => {
            adapter.generationConfig.stopSequences = 'invalid';
            const params = adapter._buildGenerationParams();
            expect(params.stopSequences).toBeUndefined();
        });

        it('should apply systemInstruction setting', () => {
            adapter.generationConfig.systemInstruction = 'You are a helpful assistant';
            const params = adapter._buildGenerationParams();
            expect(params.system).toBe('You are a helpful assistant');
        });

        it('should apply responseSchema setting', () => {
            const schema = {type: 'object', properties: {name: {type: 'string'}}};
            adapter.generationConfig.responseSchema = schema;
            const params = adapter._buildGenerationParams();
            expect(params.output).toBeDefined();
            expect(params.output).toEqual({ schema: schema });
        });

        it('should apply multiple settings at once', () => {
            adapter.generationConfig = {
                temperature: 0.8,
                topP: 0.95,
                maxOutputTokens: 2000,
                stopSequences: ['HALT'],
                systemInstruction: 'Be creative'
            };
            const params = adapter._buildGenerationParams();
            expect(params).toEqual({
                temperature: 0.8,
                topP: 0.95,
                maxOutputTokens: 2000,
                stopSequences: ['HALT'],
                system: 'Be creative'
            });
        });

        it('should include values even if they are undefined or null', () => {
            adapter.generationConfig = {
                temperature: undefined,
                topP: null,
                maxOutputTokens: 0
            };
            const params = adapter._buildGenerationParams();
            expect(params.maxOutputTokens).toBe(0); // 0 is a valid value
            expect(params.temperature).toBeUndefined();
            expect(params.topP).toBeNull();
        });

        it('should preserve original generationConfig object', () => {
            const originalConfig = {
                temperature: 0.5,
                topP: 0.8
            };
            adapter.generationConfig = originalConfig;
            
            adapter._buildGenerationParams();
            
            expect(adapter.generationConfig).toEqual(originalConfig);
            expect(adapter.generationConfig).toBe(originalConfig);
        });
    });

    describe('hasOwnProperty checks', () => {
        it('should use Object.prototype.hasOwnProperty.call for property checking', () => {
            // Create an object without hasOwnProperty method
            const configWithoutPrototype = Object.create(null);
            configWithoutPrototype.temperature = 0.7;
            
            adapter.generationConfig = configWithoutPrototype;
            const params = adapter._buildGenerationParams();
            
            expect(params.temperature).toBe(0.7);
        });

        it('should not pick up inherited properties', () => {
            // Create object with inherited properties
            const parentConfig = { temperature: 0.5 };
            const childConfig = Object.create(parentConfig);
            childConfig.topP = 0.9;
            
            adapter.generationConfig = childConfig;
            const params = adapter._buildGenerationParams();
            
            expect(params.topP).toBe(0.9);
            expect(params.temperature).toBeUndefined(); // Should not inherit
        });
    });

    describe('Provider-specific configuration', () => {
        it('should work correctly for Anthropic adapter with all parameters', () => {
            adapter.setApiType('Anthropic');
            adapter.generationConfig = {
                temperature: 0.7,
                topP: 0.95,
                maxOutputTokens: 1500,
                stopSequences: ['STOP', 'END'],
                systemInstruction: 'You are Claude, an AI assistant created by Anthropic.',
                responseSchema: {
                    type: 'object',
                    properties: {
                        response: { type: 'string' },
                        confidence: { type: 'number' }
                    }
                }
            };
            
            const params = adapter._buildGenerationParams();
            
            expect(params).toEqual({
                temperature: 0.7,
                topP: 0.95,
                maxOutputTokens: 1500,
                stopSequences: ['STOP', 'END'],
                system: 'You are Claude, an AI assistant created by Anthropic.',
                output: {
                    schema: {
                        type: 'object',
                        properties: {
                            response: { type: 'string' },
                            confidence: { type: 'number' }
                        }
                    }
                }
            });
        });

        it('should handle Anthropic-specific edge cases', () => {
            adapter.setApiType('Anthropic');
            // Anthropic doesn't support topK, but the adapter should still include it
            adapter.generationConfig = {
                topK: 40,
                temperature: 0,  // Anthropic supports temperature of 0
                maxOutputTokens: 4096  // Anthropic's max token limit
            };
            
            const params = adapter._buildGenerationParams();
            
            expect(params.topK).toBe(40);
            expect(params.temperature).toBe(0);
            expect(params.maxOutputTokens).toBe(4096);
        });
    });
});

import {refreshVariablePalette} from './variable-util.js';

// Scalar variables are looked up with the empty-string type in scratch-vm.
const SCALAR_TYPE = '';

/**
 * Whether a raw variable value should be treated as "unset" (use the default).
 * @param {*} raw - raw value read from a sprite variable
 * @returns {boolean} true when empty/blank
 */
const isEmpty = function (raw) {
    if (raw === null || typeof raw === 'undefined') return true;
    return String(raw).trim() === '';
};

// Parse functions return `null` to signal "unset/invalid" (use the default);
// `null` is used instead of `undefined` because the repo's eslint bans the
// `undefined` literal (no-undefined).

/**
 * Parse a trimmed string value, or null when empty.
 * @param {*} raw - raw value
 * @returns {?string} trimmed string or null
 */
const parseString = function (raw) {
    return isEmpty(raw) ? null : String(raw).trim();
};

/**
 * Parse a free-form text value (not trimmed), or null when blank.
 * @param {*} raw - raw value
 * @returns {?string} the text or null
 */
const parseText = function (raw) {
    return isEmpty(raw) ? null : String(raw);
};

/**
 * Parse a number clamped to the 0.0–1.0 range, or null when empty/invalid.
 * @param {*} raw - raw value
 * @returns {?number} clamped number or null
 */
const parseUnitRange = function (raw) {
    if (isEmpty(raw)) return null;
    const n = Number(raw);
    if (Number.isNaN(n)) return null;
    return Math.max(0.0, Math.min(1.0, n));
};

/**
 * Parse a positive integer (>= 1), or null when empty/invalid.
 * @param {*} raw - raw value
 * @returns {?number} positive integer or null
 */
const parsePositiveInt = function (raw) {
    if (isEmpty(raw)) return null;
    const n = parseInt(String(raw), 10);
    if (Number.isNaN(n)) return null;
    return Math.max(1, n);
};

/**
 * Parse a comma-separated list into an array of non-empty trimmed strings,
 * or null when nothing remains.
 * @param {*} raw - raw value
 * @returns {?Array.<string>} array or null
 */
const parseStopSequences = function (raw) {
    if (isEmpty(raw)) return null;
    const arr = String(raw).split(',')
        .map(s => s.trim())
        .filter(s => s !== '');
    return arr.length > 0 ? arr : null;
};

/**
 * Parse a JSON string into an object, or null when empty/invalid.
 * @param {*} raw - raw value
 * @returns {?object} parsed object or null
 */
const parseSchema = function (raw) {
    if (isEmpty(raw)) return null;
    try {
        return JSON.parse(String(raw));
    } catch (error) {
        console.error(`responseSchema: ${error.message}`);
        return null;
    }
};

// Initial values for the config variables. baseUrl and modelID mirror the
// Gemini provider defaults in ai-adapter.js (PROVIDERS.Gemini), which is the
// extension's default API type, so freshly created variables show the values
// actually in use. The generation params have no fixed default — empty means
// "let the model decide" — so they start as empty strings rather than the
// scratch-vm scalar default of 0.
const DEFAULT_BASE_URL = 'https://generativelanguage.googleapis.com/v1beta';
const DEFAULT_MODEL_ID = 'gemini-flash-latest';

/**
 * Specifications for the AI config sprite variables. `dest` indicates where a
 * parsed value belongs in the result of {@link readConfigFromVariables}:
 * 'baseUrl' and 'modelID' are top-level; everything else goes into
 * `generationConfig` keyed by `key`. `default` is the value seeded when the
 * variable is first created. An empty variable means "use the default".
 * @type {Array.<{key: string, name: string, id: string, dest: string, default: string, parse: Function}>}
 */
export const CONFIG_VARIABLES = [
    {
        key: 'baseUrl',
        name: 'baseUrl',
        id: 'gai_baseUrl',
        dest: 'baseUrl',
        default: DEFAULT_BASE_URL,
        parse: parseString
    },
    {
        key: 'modelID',
        name: 'modelID',
        id: 'gai_modelID',
        dest: 'modelID',
        default: DEFAULT_MODEL_ID,
        parse: parseString
    },
    {
        key: 'temperature',
        name: 'temperature',
        id: 'gai_temperature',
        dest: 'generation',
        default: '',
        parse: parseUnitRange
    },
    {key: 'topP', name: 'topP', id: 'gai_topP', dest: 'generation', default: '', parse: parseUnitRange},
    {key: 'topK', name: 'topK', id: 'gai_topK', dest: 'generation', default: '', parse: parsePositiveInt},
    {
        key: 'maxOutputTokens',
        name: 'maxOutputTokens',
        id: 'gai_maxOutputTokens',
        dest: 'generation',
        default: '',
        parse: parsePositiveInt
    },
    {
        key: 'stopSequences',
        name: 'stopSequences',
        id: 'gai_stopSequences',
        dest: 'generation',
        default: '',
        parse: parseStopSequences
    },
    {
        key: 'systemInstruction',
        name: 'systemInstruction',
        id: 'gai_systemInstruction',
        dest: 'generation',
        default: '',
        parse: parseText
    },
    {
        key: 'responseSchema',
        name: 'responseSchema',
        id: 'gai_responseSchema',
        dest: 'generation',
        default: '',
        parse: parseSchema
    }
];

/**
 * Find the config variable specification for a config key.
 * @param {string} key - config key (e.g. 'temperature')
 * @returns {?object} the spec, or undefined when unknown
 */
const specForKey = function (key) {
    return CONFIG_VARIABLES.find(spec => spec.key === key);
};

/**
 * Ensure the target owns a sprite-local scalar variable for each AI config key,
 * creating any that are missing. Mirrors `ensureSkillsList`: on first creation
 * the project is marked changed, the Blockly workspace is asked to reload, and
 * the (dynamic) variable flyout is refreshed so the variables show up in the
 * palette without re-opening the Code tab.
 * @param {Target} target - target that should own the config variables
 * @returns {void}
 */
export const ensureConfigVariables = function (target) {
    if (!target || typeof target.lookupOrCreateVariable !== 'function') return;
    let created = false;
    CONFIG_VARIABLES.forEach(spec => {
        const existing = target.lookupVariableByNameAndType(spec.name, SCALAR_TYPE);
        if (!existing) {
            // Seed the default value so a new variable shows a usable value
            // (scratch-vm scalars otherwise default to 0).
            const variable = target.lookupOrCreateVariable(spec.id, spec.name);
            variable.value = spec.default;
            created = true;
        }
    });
    if (created && target.runtime) {
        target.runtime.emitProjectChanged();
        if (typeof target.runtime.requestBlocksUpdate === 'function') {
            target.runtime.requestBlocksUpdate();
        }
        refreshVariablePalette();
    }
};

/**
 * Read the AI config from the target's sprite variables and parse each value
 * into its typed form. Read-only: never creates variables. Empty/unset/invalid
 * values are omitted so callers fall back to provider defaults.
 * @param {Target} target - target whose config variables are read
 * @returns {{baseUrl: string, modelID: string, generationConfig: object}} parsed config
 */
export const readConfigFromVariables = function (target) {
    const result = {baseUrl: '', modelID: '', generationConfig: {}};
    if (!target || typeof target.lookupVariableByNameAndType !== 'function') {
        return result;
    }
    CONFIG_VARIABLES.forEach(spec => {
        const variable = target.lookupVariableByNameAndType(spec.name, SCALAR_TYPE);
        if (!variable) return;
        const parsed = spec.parse(variable.value);
        if (parsed === null) return;
        if (spec.dest === 'baseUrl') {
            result.baseUrl = parsed;
        } else if (spec.dest === 'modelID') {
            result.modelID = parsed;
        } else {
            result.generationConfig[spec.key] = parsed;
        }
    });
    return result;
};

/**
 * Get the raw (unparsed) string value of a config variable. Used by the hidden,
 * backward-compatible reporter blocks.
 * @param {Target} target - target whose variable is read
 * @param {string} key - config key
 * @returns {string} the raw value, or '' when unset/unknown
 */
export const getConfigVariableRaw = function (target, key) {
    if (!target || typeof target.lookupVariableByNameAndType !== 'function') return '';
    const spec = specForKey(key);
    if (!spec) return '';
    const variable = target.lookupVariableByNameAndType(spec.name, SCALAR_TYPE);
    if (!variable || variable.value === null || typeof variable.value === 'undefined') {
        return '';
    }
    return variable.value;
};

/**
 * Set the value of a config variable, creating it if necessary. Used by the
 * hidden, backward-compatible command blocks so old projects keep working.
 * @param {Target} target - target whose variable is written
 * @param {string} key - config key
 * @param {*} raw - raw value to store
 * @returns {void}
 */
export const setConfigVariable = function (target, key, raw) {
    if (!target || typeof target.lookupOrCreateVariable !== 'function') return;
    const spec = specForKey(key);
    if (!spec) return;
    let variable = target.lookupVariableByNameAndType(spec.name, SCALAR_TYPE);
    let created = false;
    if (!variable) {
        variable = target.lookupOrCreateVariable(spec.id, spec.name);
        created = true;
    }
    variable.value = raw;
    if (target.runtime) {
        target.runtime.emitProjectChanged();
        if (created && typeof target.runtime.requestBlocksUpdate === 'function') {
            target.runtime.requestBlocksUpdate();
            refreshVariablePalette();
        }
    }
};

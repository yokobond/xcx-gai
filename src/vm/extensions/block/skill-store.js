const SKILLS_LIST_NAME = 'skills';
const SKILLS_LIST_ID = 'gai_skills';

// Header for the progressive-disclosure listing: only the name and description of
// each skill are shown here. The model retrieves the full instructions on demand
// with the `loadSkill` tool, keeping the system prompt small (see
// https://ai-sdk.dev/cookbook/guides/agent-skills).
const SKILLS_PROMPT_HEADER =
    'You have the following Agent Skills available. Each is listed with its "name" ' +
    'and a "description" of when to use it. When the user\'s request matches a ' +
    'skill\'s description, call the "loadSkill" tool with that skill\'s name to ' +
    'retrieve its full instructions, then follow them. Only load a skill when it ' +
    'is relevant to the request.';

// Header used for the fallback that inlines full skill bodies (for providers that
// cannot call tools, e.g. the local model). Here the instructions are already in
// context, so the model just follows the matching skill directly.
const SKILLS_FULL_PROMPT_HEADER =
    'You have the following Agent Skills, each written with a "name", a ' +
    '"description" of when to use it, and its instructions. When the user\'s ' +
    'request matches a skill\'s description, follow that skill\'s instructions.';

const FRONTMATTER_RE = /^---\s*\r?\n([\s\S]*?)\r?\n---\s*\r?\n?([\s\S]*)$/;

/**
 * Remove a single pair of surrounding quotes from a frontmatter value.
 * @param {string} value - raw frontmatter value
 * @returns {string} unquoted value
 */
const unquote = function (value) {
    const m = value.match(/^"([\s\S]*)"$/) || value.match(/^'([\s\S]*)'$/);
    return m ? m[1] : value;
};

/**
 * Parse one Agent Skills document (YAML frontmatter + markdown body) into its
 * metadata and body. Missing fields fall back to sensible defaults so a skill is
 * always addressable by name.
 * @param {string} raw - the raw skill document
 * @param {number} index - position in the list, used for a fallback name
 * @returns {{name: string, description: string, body: string}} parsed skill
 */
const parseSkill = function (raw, index) {
    const text = String(raw);
    let name = '';
    let description = '';
    let body = '';

    const m = text.match(FRONTMATTER_RE);
    if (m) {
        body = m[2].trim();
        m[1].split(/\r?\n/).forEach(line => {
            const sep = line.indexOf(':');
            if (sep === -1) return;
            const key = line.slice(0, sep).trim()
                .toLowerCase();
            const val = unquote(line.slice(sep + 1).trim());
            if (key === 'name') name = val;
            else if (key === 'description') description = val;
        });
    } else {
        body = text.trim();
    }

    if (!name) name = `skill-${index + 1}`;
    if (!description) description = body.split(/\r?\n/)[0] || name;
    return {name, description, body};
};

/**
 * Force the Blockly variable/list flyout to re-render so a just-created list
 * shows up in the palette immediately.
 *
 * A workspace update alone is not enough: the variables category is a *dynamic*
 * toolbox category (`custom="VARIABLE"`), so the toolbox XML string never changes
 * when a list is added and the GUI's diff-based toolbox refresh is skipped. The
 * flyout is only re-read on an explicit toolbox refresh (tab switch, drag-drop,
 * etc.). Since the extension runs on the main thread with DOM access, we reach
 * the scratch-blocks workspace through the rendered DOM + React fiber and call
 * its `refreshToolboxSelection_` (the same method the GUI uses internally).
 * Best-effort: if editor internals differ, the list still appears on the next
 * natural toolbox refresh.
 * @returns {void}
 */
const refreshVariablePalette = function () {
    if (typeof document === 'undefined') return;
    try {
        const svg = document.querySelector('svg.blocklyWorkspace') ||
            document.querySelector('.blocklyWorkspace');
        let el = svg && svg.parentElement;
        for (let depth = 0; depth < 20 && el; depth++) {
            const fiberKey = Object.keys(el).find(k =>
                k.startsWith('__reactFiber$') || k.startsWith('__reactInternalInstance$'));
            if (fiberKey) {
                let fiber = el[fiberKey];
                while (fiber) {
                    const ws = fiber.stateNode && fiber.stateNode.workspace;
                    if (ws && typeof ws.refreshToolboxSelection_ === 'function') {
                        // The workspace XML reload (triggered by requestBlocksUpdate)
                        // leaves toolboxRefreshEnabled_ false, which makes
                        // refreshToolboxSelection_ a no-op. Re-enable it first, the
                        // same way the GUI's own updateToolbox does.
                        ws.toolboxRefreshEnabled_ = true;
                        ws.refreshToolboxSelection_();
                        return;
                    }
                    fiber = fiber.return;
                }
            }
            el = el.parentElement;
        }
    } catch (e) {
        // best-effort only; ignore if the editor internals have changed
    }
};

/**
 * Ensure the target has a sprite-local list variable named `skills`, creating it
 * if missing. The list holds one skill per item in Agent Skills format
 * (YAML frontmatter + body); users edit it with the standard Scratch list blocks.
 * @param {Target} target - target that should own the skills list
 * @returns {Variable} the existing or newly created skills list variable
 */
export const ensureSkillsList = function (target) {
    let list = target.lookupVariableByNameAndType(SKILLS_LIST_NAME, 'list');
    if (!list) {
        list = target.lookupOrCreateList(SKILLS_LIST_ID, SKILLS_LIST_NAME);
        if (target.runtime) {
            target.runtime.emitProjectChanged();
            // Sync the new list into the Blockly workspace variable map. This
            // emits BLOCKS_NEED_UPDATE, which the VM turns into a workspace
            // update that reloads the workspace XML (incl. the new variable).
            if (typeof target.runtime.requestBlocksUpdate === 'function') {
                target.runtime.requestBlocksUpdate();
            }
            // Then force the (dynamic) variable/list flyout to re-render so the
            // list shows in the palette without re-opening the code tab.
            refreshVariablePalette();
        }
    }
    return list;
};

/**
 * Discover the skills owned by a target by parsing each item of its `skills`
 * list. Empty items are skipped. Read-only: does not create the list.
 * @param {Target} target - target whose skills list is read
 * @returns {Array.<{name: string, description: string, body: string}>} parsed skills
 */
export const discoverSkills = function (target) {
    if (!target || typeof target.lookupVariableByNameAndType !== 'function') return [];
    const list = target.lookupVariableByNameAndType(SKILLS_LIST_NAME, 'list');
    if (!list || !Array.isArray(list.value)) return [];
    return list.value
        .filter(v => String(v).trim())
        .map((v, i) => parseSkill(v, i))
        .filter(skill => skill.body);
};

/**
 * Build the progressive-disclosure skills section of the system instruction:
 * only the name and description of each skill, plus guidance to call `loadSkill`.
 * @param {Target} target - target whose skills are listed
 * @returns {string} the skills prompt section, or '' if there are no skills
 */
export const buildSkillsPrompt = function (target) {
    const skills = discoverSkills(target);
    if (skills.length === 0) return '';
    const lines = skills.map(s => `- name: ${s.name}\n  description: ${s.description}`);
    return `${SKILLS_PROMPT_HEADER}\n\n${lines.join('\n')}`;
};

/**
 * Look up the full instructions (body) of a skill by its name. Used by the
 * `loadSkill` tool to lazily expand a skill into context. Case-insensitive.
 * @param {Target} target - target whose skills are searched
 * @param {string} name - the skill name to load
 * @returns {string|null} the skill body, or null if no such skill
 */
export const loadSkillBody = function (target, name) {
    const wanted = String(name).trim()
        .toLowerCase();
    const found = discoverSkills(target).find(s => s.name.toLowerCase() === wanted);
    return found ? found.body : null;
};

/**
 * Compose a skills section that inlines the full body of every skill. Used as a
 * fallback for providers that cannot call tools (e.g. the local model), where
 * progressive disclosure via `loadSkill` is unavailable. Read-only.
 * @param {Target} target - target whose skills list is read
 * @returns {string} the skills prompt section, or '' if there are no skills
 */
export const composeSkillsPrompt = function (target) {
    const skills = discoverSkills(target);
    if (skills.length === 0) return '';
    const blocks = skills.map(s =>
        `## ${s.name}\n${s.description}\n\n${s.body}`);
    return `${SKILLS_FULL_PROMPT_HEADER}\n\n${blocks.join('\n\n')}`;
};

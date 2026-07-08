/**
 * Locate the scratch-blocks main workspace through the rendered DOM + React
 * fiber (this extension runs on the main thread with DOM access; the
 * workspace object itself is GUI-private). Returns null when the DOM is
 * absent (Jest) or the editor internals differ.
 * @returns {?object} the scratch-blocks Workspace, or null
 */
const findBlocklyWorkspace = function () {
    if (typeof document === 'undefined') return null;
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
                    if (ws) return ws;
                    fiber = fiber.return;
                }
            }
            el = el.parentElement;
        }
    } catch (e) {
        // fall through to null: best-effort only
    }
    return null;
};

/**
 * Force the Blockly variable/list flyout to re-render so a just-created
 * variable or list shows up in the palette immediately.
 *
 * A workspace update alone is not enough: the variables category is a *dynamic*
 * toolbox category (`custom="VARIABLE"`), so the toolbox XML string never changes
 * when a variable is added and the GUI's diff-based toolbox refresh is skipped. The
 * flyout is only re-read on an explicit toolbox refresh (tab switch, drag-drop,
 * etc.). Since the extension runs on the main thread with DOM access, we reach
 * the scratch-blocks workspace through the rendered DOM + React fiber and call
 * its `refreshToolboxSelection_` (the same method the GUI uses internally).
 * Best-effort: if editor internals differ, the variable still appears on the next
 * natural toolbox refresh.
 * @returns {void}
 */
export const refreshVariablePalette = function () {
    const ws = findBlocklyWorkspace();
    if (!ws || typeof ws.refreshToolboxSelection_ !== 'function') return;
    try {
        // The workspace XML reload (triggered by requestBlocksUpdate)
        // leaves toolboxRefreshEnabled_ false, which makes
        // refreshToolboxSelection_ a no-op. Re-enable it first, the
        // same way the GUI's own updateToolbox does.
        ws.toolboxRefreshEnabled_ = true;
        ws.refreshToolboxSelection_();
    } catch (e) {
        // best-effort only; ignore if the editor internals have changed
    }
};

// Delays (ms) for the post-reload glow resync passes: one right after the
// current VM step (0), one after the script-glow OFF that normally follows a
// finished script by a frame or two (150), and one late safety pass (450).
const GLOW_RESYNC_DELAYS_MS = [0, 150, 450];

/**
 * Re-align the yellow script-glow outlines in the workspace with the VM's
 * actual glow bookkeeping (`runtime._scriptGlowsPreviousFrame`).
 *
 * Reloading the workspace XML mid-execution (which requestBlocksUpdate does,
 * e.g. when the AI adapter lazily creates its config variables / skills list
 * while a script is running) destroys and re-creates every Blockly block,
 * racing the VM's SCRIPT_GLOW_ON/OFF events: a glow applied to a re-created
 * block can be orphaned (the VM already considers it un-glowed, so no OFF
 * will ever remove it) and a running script's glow can be visually lost.
 * Both are fixed by diffing: filters not backed by a VM glow are removed,
 * VM glows missing their filter are re-applied.
 * @param {?object} runtime - the shared scratch-vm Runtime
 * @returns {void}
 */
const resyncScriptGlows = function (runtime) {
    const ws = findBlocklyWorkspace();
    if (!ws || !runtime) return;
    try {
        const active = new Set(runtime._scriptGlowsPreviousFrame || []);
        ws.getAllBlocks().forEach(block => {
            if (typeof block.setGlowStack !== 'function') return;
            const svg = block.getSvgRoot && block.getSvgRoot();
            const filterValue = svg && svg.getAttribute && svg.getAttribute('filter');
            if (filterValue && (/stackglow/i).test(filterValue) && !active.has(block.id)) {
                block.setGlowStack(false);
            }
        });
        active.forEach(id => {
            const block = ws.getBlockById(id);
            if (block && typeof block.setGlowStack === 'function') block.setGlowStack(true);
        });
    } catch (e) {
        // best-effort only
    }
};

/**
 * Schedule glow-resync passes after a mid-execution workspace reload (see
 * resyncScriptGlows). Multiple delayed passes cover both orderings of the
 * race: the glow that gets orphaned right after the reload, and the one
 * orphaned when the script finishes a frame later. No-op without a DOM.
 * @param {?object} runtime - the shared scratch-vm Runtime
 * @returns {void}
 */
export const scheduleGlowResync = function (runtime) {
    if (typeof document === 'undefined' || typeof setTimeout !== 'function') return;
    GLOW_RESYNC_DELAYS_MS.forEach(delay => {
        setTimeout(() => resyncScriptGlows(runtime), delay);
    });
};

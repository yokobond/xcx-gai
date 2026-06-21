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

/**
 * Cross-extension interop registry for xcx-* extensions.
 * Installs an idempotent polyfill on the shared scratch-vm runtime so that
 * extensions loaded as separate ES modules can discover each other's public
 * interfaces without importing each other's code.
 * The first extension to load installs the registry; later installs are no-ops.
 * @param {Runtime} runtime - the Scratch 3.0 runtime shared by all extensions.
 * @returns {void}
 */
const installExtensionInterop = runtime => {
    if (!runtime || typeof runtime.registerExtensionInterface === 'function') return;
    const registry = runtime._extensionInterfaces || new Map();
    runtime._extensionInterfaces = registry;

    /**
     * Register an extension's public interface so other extensions can call it.
     * @param {string} extensionId - the ID of the extension registering its interface.
     * @param {object} api - the public interface object to expose.
     * @returns {void}
     */
    runtime.registerExtensionInterface = function (extensionId, api) {
        registry.set(extensionId, api);
        this.emit('EXTENSION_INTERFACE_REGISTERED', extensionId);
    };

    /**
     * Look up a previously registered extension interface.
     * @param {string} extensionId - the ID of the extension whose interface is requested.
     * @returns {?object} - the registered interface, or null if not registered.
     */
    runtime.getExtensionInterface = extensionId => registry.get(extensionId) || null;
};

export {installExtensionInterop};

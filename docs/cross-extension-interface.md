
# Cross-Extension Interface

xcx-gai exposes part of its functionality to other xcx-* extensions (for example
`xcx-agent`) through the shared scratch-vm `runtime` object, without either
extension importing the other's code. This lets sibling extensions, loaded as
separate ES modules, call each other's public interfaces safely.

## The Interop Registry

The registry is a small, framework-free convention implemented by
`installExtensionInterop(runtime)` (in `src/vm/extensions/block/interop.js`).
The same function is duplicated verbatim in every participating extension, so
whichever extension loads first installs it:

- `runtime.registerExtensionInterface(extensionId, api)` — register an
  extension's public interface object under its extension ID.
- `runtime.getExtensionInterface(extensionId)` — look up a previously
  registered interface, or `null` if none is registered.
- `'EXTENSION_INTERFACE_REGISTERED'` — an event emitted on the runtime (with
  the `extensionId` as payload) whenever an interface is (re-)registered, so
  interested extensions can react to late registration/order-of-load issues.

The installer is **idempotent**: if `runtime.registerExtensionInterface` is
already a function, `installExtensionInterop` does nothing. This means the
**first** extension to load installs the registry, and every later extension
reuses the same one — there is exactly one registry per runtime.

Each extension is responsible for calling `runtime.registerExtensionInterface`
with its own `extensionId` and API object; the polyfill itself does not
register anything automatically.

## The `gai` Facade (V1)

xcx-gai registers itself under the extension ID `'gai'`. Another extension can
call it like this:

```js
const gai = runtime.getExtensionInterface('gai');
if (gai) {
    await gai.ensureAI(target);
    const responseText = await gai.chat(target, 'Hello!');
}
```

### Contract

| Member | Signature | Description |
|---|---|---|
| `version` | `number` | Interface version, currently `1`. Bumped only on breaking changes. |
| `hasAI` | `(target) => boolean` | Whether an AI adapter already exists for `target`. |
| `ensureAI` | `(target) => void` | Create the AI adapter (and its config sprite variables / skills list) for `target` if it does not exist yet. |
| `resetHistory` | `(target) => void` | Clear the chat history for `target`'s AI adapter, if any. No-op if no adapter exists. |
| `abort` | `(target, reason) => void` | Abort any ongoing AI requests for `target`. `reason` is a string surfaced in logs. |
| `chat` | `(target, promptText, options) => Promise<string>` | Send `promptText` to AI as a chat message (appended to conversation history) and resolve with the response text. |

`options` (all optional; unknown keys are ignored for forward compatibility):

- `onPartial(partialText)` — called with the accumulated response text so far
  (or the latest JSON snapshot so far for structured output) while the
  response streams in. Providing this switches the underlying request to
  streaming mode. Note that this differs from ai-adapter's own internal
  `partialTextHandler`, which passes a text-stream *delta* chunk when
  streaming plain text; the `chat` facade accumulates those deltas for you so
  callers always receive the full text so far, matching what they would see
  rendered.
- `fireHats` — when `true`, also fires the `gai_whenResponseReceived` and
  `gai_whenPartialResponseReceived` hat blocks in the Scratch project, the
  same way the built-in `chat` block does. Defaults to `false`, since a
  cross-extension caller usually wants to consume the result directly rather
  than trigger the sprite's own hat scripts.

### Error handling

`chat` **never rejects**. If the underlying AI request fails, the returned
Promise resolves with a localized, human-readable error message instead (the
same message the `chat`/`generate` blocks would show in
`response candidate`). Callers should not wrap `chat` in `try/catch` to detect
failures — inspect the resolved string instead.

### V1 limitation: custom-procedure function calling

The `chat` block normally lets AI call user-defined Scratch procedures
registered as functions (via `set function calling mode`), dispatching the
call to a new VM thread and polling it to completion across ticks. The
cross-extension `chat` facade has no per-tick polling loop of its own, so
dispatching to a procedure thread would hang forever. For V1, calling such a
function resolves as a tool error to the AI (fails fast) rather than hanging.

**Agent Skills' `loadSkill` tool is unaffected** — it is plain JavaScript with
no Scratch thread involved, so it keeps working normally through the
cross-extension facade.

A future V2 may add support for tool calling (e.g. a `tools` option) once a
non-blocking dispatch mechanism is available.

## Versioning Policy

- Consumers should feature-detect members with `typeof gai.someMethod ===
  'function'` rather than assuming a given `version` implies every member is
  present.
- `version` is only incremented when an existing member's behavior changes in
  a backward-incompatible way (signature change, semantics change, or
  removal). Purely additive changes (new members) do not require a version
  bump.

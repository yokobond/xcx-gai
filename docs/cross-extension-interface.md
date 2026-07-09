
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

## The `gai` Facade (V2)

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
| `version` | `number` | Interface version, currently `2`. Bumped only on breaking changes (see "Versioning Policy" below for why this addition still bumped it). |
| `hasAI` | `(target) => boolean` | Whether an AI adapter already exists for `target`. |
| `ensureAI` | `(target) => void` | Create the AI adapter (and its config sprite variables / skills list) for `target` if it does not exist yet. |
| `resetHistory` | `(target) => void` | Clear the chat history for `target`'s AI adapter, if any. No-op if no adapter exists. |
| `abort` | `(target, reason) => void` | Abort any ongoing AI requests for `target`. `reason` is a string surfaced in logs. |
| `chat` | `(target, promptText, options) => Promise<string>` | Send `promptText` to AI as a chat message (appended to conversation history) and resolve with the response text. |
| `registerTools` | `(ownerExtensionId, factory) => void` | Register a `factory` that contributes plain-JS tools to this extension's AI function calling. See "External Tools (V2)" below. |
| `unregisterTools` | `(ownerExtensionId) => void` | Remove a previously registered `factory` for `ownerExtensionId`. No-op if none is registered. |
| `registerInstructions` | `(ownerExtensionId, factory) => void` | Register a `factory` that contributes a section of text merged into this extension's AI system instruction. See "External Instructions (V2)" below. |
| `unregisterInstructions` | `(ownerExtensionId) => void` | Remove a previously registered `factory` for `ownerExtensionId`. No-op if none is registered. |

All V1 members keep their V1 signature and behavior unchanged.

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

This limitation is specific to the `chat`/`registerTools` cross-extension
entry points; it does not apply to the `chat` *block* used directly within
xcx-gai's own project, which still dispatches to procedure threads normally.

### External Tools (V2)

A sibling extension can contribute its own plain-JS tools to xcx-gai's AI
function calling via `registerTools`, without xcx-gai importing that
extension's code:

```js
const gai = runtime.getExtensionInterface('gai');
if (gai && typeof gai.registerTools === 'function') {
    gai.registerTools('my-extension-id', target => ({
        myTool: {
            description: 'Does something useful for the sprite.',
            parameters: {
                type: 'object',
                properties: {
                    arg: {type: 'string', description: 'An argument.'}
                },
                required: ['arg']
            },
            execute: async ({arg}) => ({success: true, result: `did ${arg}`})
        }
    }));
}
```

- `factory` is called with the `target` the AI request is running for each
  time tools are built for a request, so it can return per-target tools (or
  vary tools by target state).
- `parameters` is a plain JSON Schema object (not a Zod schema).
- `execute` must be a pure JS function (`async` or sync); its return value is
  sent back to the AI as the tool result. Because there is no Scratch thread
  involved, `execute` **cannot run Scratch procedures/blocks** — same
  restriction as the V1 custom-procedure limitation above. If `execute`
  throws, the facade catches it and returns `{success: false, error: <message>}`
  to the AI instead of propagating the exception.
- If a registered tool name collides with a tool xcx-gai already defines for
  that request (a sprite's own custom-procedure function, or the built-in
  `loadSkill` tool), the built-in tool wins; the external registration is
  silently ignored for that name.
- Registering again with the same `ownerExtensionId` replaces the previous
  factory; `unregisterTools(ownerExtensionId)` removes it.
- Gated by the same condition as `loadSkill`: available only when the
  configured provider supports function calling and function calling mode is
  not `none`.

### External Instructions (V2)

A sibling extension can contribute a section of text merged into xcx-gai's AI
system instruction via `registerInstructions`, without xcx-gai importing that
extension's code:

```js
const gai = runtime.getExtensionInterface('gai');
if (gai && typeof gai.registerInstructions === 'function') {
    gai.registerInstructions('my-extension-id', target =>
        'When emitting Scratch blocks, use English scratchblocks syntax.');
}
```

- `factory` has the shape `(target) => string` and is called every time the
  system instruction is composed (`_composeSystemInstruction` in
  ai-adapter.js) — once per request, not just once at registration time — so
  it can return per-target text (or vary text by target state).
- Merge order is base instruction → external instructions → Agent Skills
  section, each separated by a blank line; sections that are empty (or
  whitespace-only after trimming) are skipped.
- **Not gated by function-calling support**, unlike External Tools above: a
  contributed instruction is plain text unrelated to function calling, so it
  is merged for every provider and function-calling mode, including the
  browser LLM path. (External Tools *are* gated because tool calling itself
  requires provider/mode support; instructions carry no such requirement.)
- If a factory throws, the facade catches it, logs the error with the
  `ownerExtensionId`, and continues merging the other registered factories'
  text instead of propagating the exception.
- Registering again with the same `ownerExtensionId` replaces the previous
  factory; `unregisterInstructions(ownerExtensionId)` removes it.
- The registry lives on the shared `runtime`
  (`runtime._gaiExternalInstructions`), not on this extension instance, so
  registrations survive this extension being reloaded — same as External
  Tools' `runtime._gaiExternalToolFactories`.

## Versioning Policy

- Consumers should feature-detect members with `typeof gai.someMethod ===
  'function'` rather than assuming a given `version` implies every member is
  present.
- `version` is only incremented when an existing member's behavior changes in
  a backward-incompatible way (signature change, semantics change, or
  removal). Purely additive changes (new members) do not require a version
  bump.
- V2's `registerTools`/`unregisterTools` are themselves purely additive (V1
  members are unchanged), so per the rule above they would not strictly
  require a bump; `version` was raised to `2` anyway to make the addition of
  a new capability class (tool contribution, not just data calls) easy to
  detect at a glance. Future purely-additive changes may continue to skip the
  bump per the rule above.
- `registerInstructions`/`unregisterInstructions` follow that precedent: they
  are purely additive to the V2 facade (no existing member's signature or
  behavior changed), so they were added without a further version bump.

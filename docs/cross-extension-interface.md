
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

## The `gai` Facade (V3)

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
| `version` | `number` | Interface version, currently `3`. Bumped only on breaking changes (see "Versioning Policy" below for why each bump was made). |
| `hasAI` | `(target) => boolean` | Whether an AI adapter already exists for `target`. |
| `ensureAI` | `(target) => void` | Create the AI adapter (and its config sprite variables / skills list) for `target` if it does not exist yet. |
| `resetHistory` | `(target) => void` | Clear the chat history for `target`'s AI adapter, if any. No-op if no adapter exists. |
| `abort` | `(target, reason) => void` | Abort any ongoing AI requests for `target`. `reason` is a string surfaced in logs. |
| `chat` | `(target, promptText, options) => Promise<string>` | Send `promptText` to AI as a chat message (appended to conversation history) and resolve with the response text. |
| `registerTools` | `(ownerExtensionId, factory) => void` | Register a `factory` that contributes plain-JS tools to this extension's AI function calling. See "External Tools (V2)" below. |
| `unregisterTools` | `(ownerExtensionId) => void` | Remove a previously registered `factory` for `ownerExtensionId`. No-op if none is registered. |
| `registerInstructions` | `(ownerExtensionId, factory) => void` | Register a `factory` that contributes a section of text merged into this extension's AI system instruction. See "External Instructions (V2)" below. |
| `unregisterInstructions` | `(ownerExtensionId) => void` | Remove a previously registered `factory` for `ownerExtensionId`. No-op if none is registered. |
| `getHistory` | `(target) => Array<{role, content}>` | Return a fresh copy of `target`'s persistent chat history. See "History Sync (V3)" below. |
| `setHistory` | `(target, messages) => void` | Replace `target`'s persistent chat history, creating the AI adapter first if needed. See "History Sync (V3)" below. |

All V1 members keep their V1 signature and behavior unchanged. All V2 members keep their V2 signature and behavior unchanged.

`options` (all optional; unknown keys are ignored for forward compatibility):

- `onPartial(partialText)` — called with the accumulated response text so far
  (or the latest JSON snapshot so far for structured output) while the
  response streams in. Providing this switches the underlying request to
  streaming mode. Note that this differs from ai-adapter's own internal
  `partialTextHandler`, which passes a text-stream *delta* chunk when
  streaming plain text; the `chat` facade accumulates those deltas for you so
  callers always receive the full text so far, matching what they would see
  rendered.
- `onFinish({finishReason})` — called once, just before the Promise resolves,
  on success only. `finishReason` is the AI SDK finish reason of the final
  step: `'stop'` (the model finished on its own), `'tool-calls'` (cut off by
  the step limit while still requesting tools), `'length'` (token-limit
  truncation), or `null` when unknown (e.g. BrowserLLM). Not called on the
  error path (the Promise then resolves with a non-empty error message
  instead). Callers use this to tell "finished with nothing to say" apart
  from "cut off mid-work" when the resolved text is empty.
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

When a turn is aborted (`abort`, red-light stop, ...), the Promise resolves
with the abort reason string. Any steps that had already fully completed
before the interruption — assistant tool-call messages and their tool
results — are still persisted into the chat history (and announced via
`GAI_HISTORY_CHANGED`), so a follow-up "continue" turn sees what was already
done instead of redoing it.

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
- While a registered tool's `execute` is running, aborts of that adapter's
  own requests are suppressed. This lets a tool stop or restart the Scratch
  project (`vm.greenFlag()` fires `PROJECT_STOP_ALL` via `stopAll()`,
  `vm.stopAll()` fires it directly) without those stop events aborting the
  very chat turn that invoked the tool. A user-initiated stop that genuinely
  coincides with the few-ms tool window is dropped — accepted trade-off.
- A tool-call chain within one turn is bounded by the AI SDK step limit
  (`stopWhen: stepCountIs(...)`, default 25 as a runaway-loop backstop);
  a sprite can override it via the generation config's `maxSteps`. A turn
  cut off by the limit reports `finishReason: 'tool-calls'` through
  `onFinish`, with all completed steps already persisted to history.
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

### History Sync (V3)

A sibling extension can read and replace a target's persistent chat history —
the same array `chat`/`startChat` read and mutate — via `getHistory` and
`setHistory`, and can be notified whenever that history changes via the
`GAI_HISTORY_CHANGED` runtime event.

```js
const gai = runtime.getExtensionInterface('gai');
if (gai && typeof gai.getHistory === 'function') {
    const history = gai.getHistory(target); // [] if no adapter exists yet

    runtime.on('GAI_HISTORY_CHANGED', changedTarget => {
        if (changedTarget !== target) return;
        // Re-read via getHistory(target); treat this as a "changed, refresh"
        // signal rather than a diff.
    });

    if (typeof gai.setHistory === 'function') {
        gai.setHistory(target, [
            {role: 'user', content: 'Hello!'},
            {role: 'assistant', content: 'Hi there!'}
        ]);
    }
}
```

- `getHistory(target)` returns a fresh `.slice()` copy of the AI SDK messages
  (`{role: 'user'|'assistant'|'system'|'tool', content: string|Array}`, where
  `content` is either plain text or an array of content parts, e.g.
  `{type: 'text', text: string}` or `{type: 'file', data, mediaType}`). It
  returns `[]` if no AI adapter exists yet for `target`, and — unlike
  `ensureAI`/`chat` — **does not create one** as a side effect.
- `setHistory(target, messages)` replaces the target's persistent chat
  history, creating the AI adapter first if needed (via the same path as
  `getAI`). `messages` is filtered defensively: only entries shaped like
  `{role: string, content: string|Array}` are kept, malformed entries are
  dropped rather than throwing. Internally delegates to `AIAdapter#startChat`,
  which itself emits `GAI_HISTORY_CHANGED` — callers must not emit it again.
- `'GAI_HISTORY_CHANGED'` is a runtime event emitted as
  `runtime.emit('GAI_HISTORY_CHANGED', target)` — its single argument is the
  `target` whose history changed — every time that target's persistent chat
  history (`this.messages` on its `AIAdapter`) is mutated: by a `chat` block
  call, the `resetHistory`/`setHistory` facade members, or the underlying
  `startChat`/`requestGenerate` methods on `AIAdapter` (including every push in
  the browser-LLM function-call loop). It may fire more than once per turn
  (e.g. once for the prompt push, once for the reply push) — subscribe with
  `runtime.on('GAI_HISTORY_CHANGED', handler)` and treat each emission as a
  coalescable "history changed, re-read it via `getHistory`" signal rather
  than a precise diff. It is only emitted for targets that already have an AI
  adapter (created via `getAI`/`ensureAI`/any `hasAI`-triggering call); it is
  never emitted for a target with no adapter.

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
- `getHistory`/`setHistory` are also purely additive (no existing member's
  signature or behavior changed), but `version` was raised to `3` anyway,
  consistent with the V2 precedent above: they introduce a new capability
  class (direct history read/replace, plus the `GAI_HISTORY_CHANGED` event)
  that callers benefit from detecting at a glance, not just per-member via
  `typeof`. As always, feature-detect the specific members you use —
  `typeof gai.getHistory === 'function'`, `typeof gai.setHistory ===
  'function'` — rather than branching on `gai.version`, since older hosts may
  eventually gain a member without a version bump and newer hosts may in
  principle omit one.

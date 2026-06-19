# GAI

Multi-AI Provider Extension for Xcratch

This extension adds extra-blocks for multiple AI providers including [Google Gemini AI](https://deepmind.google/technologies/gemini/#introduction), [OpenAI](https://openai.com/), and [Anthropic Claude](https://www.anthropic.com/claude) to [Xcratch](https://xcratch.github.io/).


## ✨ What You Can Do With This Extension

This extension enables you to query multiple AI providers (Google Gemini, OpenAI, Anthropic Claude) with images and sentences in Scratch.

Please read the document for details. 
- [xcx-gai docs](https://yokobond.github.io/xcx-gai/docs)


## How to Use in Xcratch

This extension can be used with other extension in Xcratch.

1. Open [Xcratch Editor](https://xcratch.github.io/editor)
2. Click 'Add Extension' button
3. Select 'Extension Loader' extension
4. Type the module URL in the input field 
```
https://yokobond.github.io/xcx-gai/dist/gai.mjs
```
5. Click 'OK' button
6. Now you can use the blocks of this extension


## Development

### Install Dependencies

```sh
npm install
```

### Setup Development Environment

Run the setup-dev script to link the local `scratch-vm` sources into this project. By default it
looks for `scratch-vm` at `../scratch-editor/packages/scratch-vm`. Pass a different path as an
argument if your `scratch-vm` lives elsewhere.

```sh
# Use the default path (../scratch-editor/packages/scratch-vm)
npm run setup-dev

# Or specify your own scratch-vm location
node ./scripts/setup-dev.mjs ../scratch-vm
```

### Install xcratch-skills via APM

This project bundles a set of agent skills for developing Xcratch extensions, managed with
[APM (Agent Package Manager)](https://github.com/microsoft/apm). After installing the `apm` CLI, run:

```sh
apm install
```

This deploys the skills into `.claude/skills/` (target is declared in `apm.yml`). Once installed,
you can use natural-language trigger phrases such as:

| Trigger phrase | Skill invoked |
|---|---|
| `xcratch-create`, `scaffold extension`, `setup-dev` | `xcratch-extension-create` — scaffold a new extension repo and set up the dev environment |
| `breakpoints not hit`, `live server HTTPS` | `xcratch-extension-debug` — fix source maps and local HTTPS debugging issues |
| `verify extension loads`, `check console errors` | `xcratch-extension-debug-auto` — autonomously navigate to the editor and inspect the loaded extension |
| `variable not showing until tab switch`, `refresh toolbox flyout` | `xcratch-extension-palette-refresh` — force the editor block palette to refresh after programmatic variable/list changes |
| `add to stretch3`, `stretch3-install` | `xcratch-extension-stretch3` — generate the stretch3 install script and entry files |

### Debug in VS Code

A VS Code debug configuration is included for loading the built extension into the public
[Xcratch editor](https://xcratch.github.io/editor) over a local HTTPS server.

1. Generate local certificates with [mkcert](https://github.com/FiloSottile/mkcert) (once):
   ```sh
   mkcert -install
   cd .vscode && mkcert -cert-file localhost.pem -key-file localhost-key.pem localhost 127.0.0.1 0.0.0.0 ::1
   ```
2. Build (or watch) the extension so `dist/gai.mjs` exists.
3. From the Run and Debug panel, start **"debug extension on xcratch.github.io editor"**. This runs
   the `start live server` task (serving this repo at `https://0.0.0.0:5500` with CORS) and opens
   the editor with the extension loaded from `https://0.0.0.0:5500/dist/gai.mjs`.

### Bundle into a Module

Run build script to bundle this extension into a module file which could be loaded on Xcratch.

```sh
npm run build
```

### Watch and Bundle

Run watch script to watch the changes of source files and bundle automatically.

```sh
npm run watch
```

### Test

Run test script to test this extension.

```sh
npm run test
```


## 🏠 Home Page

Open this page from [https://yokobond.github.io/xcx-gai/](https://yokobond.github.io/xcx-gai/)


## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/yokobond/xcx-gai/issues).

### Running Integration Tests

To run integration tests with actual AI APIs:

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and add your actual API keys:
   ```bash
   GEMINI_API_KEY=your_actual_gemini_api_key
   OPENAI_API_KEY=your_actual_openai_api_key
   ANTHROPIC_API_KEY=your_actual_anthropic_api_key
   ```

3. Run the integration tests:
   ```bash
   npm test -- ai-adapter.integration.test.js
   ```

**Note:** Integration tests will be skipped if API keys are not set. This is normal behavior when API keys are not configured.

## 📝 License

This software is licensed under the [GNU Affero General Public License Version 3](LICENSE).

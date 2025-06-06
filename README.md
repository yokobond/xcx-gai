# GAI

Google generative AI, Gemini extension for Xcratch

This extension add extra-blocks for [Google Gemini AI](https://deepmind.google/technologies/gemini/#introduction) to [Xcratch](https://xcratch.github.io/).


## ✨ What You Can Do With This Extension

This extension enables you to query the generative AI with images and sentences in Scratch.

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

Change ```vmSrcOrg``` to your local ```scratch-vm``` directory in ```./scripts/setup-dev.js``` then run setup-dev script to setup development environment.

```sh
npm run setup-dev
```

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

## 📝 License

This software is licensed under the [GNU Affero General Public License Version 3](LICENSE).

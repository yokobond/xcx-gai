# What is GAI

Multi-AI Provider Extension for Xcratch

This extension adds extra-blocks for multiple AI providers including [Google Gemini AI](https://deepmind.google/technologies/gemini/#introduction), [OpenAI](https://openai.com/), and [Anthropic Claude](https://www.anthropic.com/claude) into [Xcratch](https://xcratch.github.io/).


## ✨ What You Can Do With This Extension

This extension enables you to query multiple AI providers (Google Gemini, OpenAI, Anthropic Claude) with images and sentences in Scratch.

Play the example project to look at what you can do with "GAI" extension. 
This project is an example of sending camera images to AI providers to generate text.
(You need API key of your chosen AI provider (ref. [Set API key](how-to-use?id=set-api-key)) and allow camera access to play this project.)

Example Project
([open in a new window](https://xcratch.github.io/editor#https://yokobond.github.io/xcx-gai/projects/example.sb3))

<iframe src="https://xcratch.github.io/editor/player#https://yokobond.github.io/xcx-gai/projects/example.sb3" width="540px" height="460px" allow="camera"></iframe>

Refer to [How to Use](how-to-use) for more details.


## Supported AI Providers
This extension supports multiple AI providers and their models:

### Google Gemini
- Supports generative models and embedding models
- Available models can be checked in the [Gemini API documentation](https://ai.google.dev/gemini-api/docs/models)

### OpenAI
- Supports GPT-4, GPT-3.5-turbo, text-embedding-ada-002, and other models
- Also supports OpenAI-compatible API endpoints

### Anthropic Claude
- Supports Claude 3.5 Sonnet, Claude 3 Opus, Claude 3 Haiku, and other models

The default model is set to the latest model at the time of release but you can change it in the block.

This extension has model listing block, so you can check the available models like this project.
([gai-model_listing](https://xcratch.github.io/editor#https://yokobond.github.io/xcx-gai/projects/gai-model_listing.sb3))


## Load into Xcratch

This extension can be used with other extension in Xcratch by following steps.

1. Open [Xcratch Editor](https://xcratch.github.io/editor)
2. Click 'Add Extension' button
3. Select 'Extension Loader' extension
4. Type the module URL in the input field 
```
https://yokobond.github.io/xcx-gai/dist/gai.mjs
```
1. Click 'OK' button
2. Now you can use the blocks of this extension


## </> Source Code

Source code is open on GitHub [https://github.com/yokobond/xcx-gai](https://github.com/yokobond/xcx-gai)

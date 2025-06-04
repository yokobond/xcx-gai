# What is GAI

Google generative AI, Gemini extension for Xcratch

This extension add extra-blocks for [Google Gemini AI](https://deepmind.google/technologies/gemini/#introduction) into [Xcratch](https://xcratch.github.io/).


## ✨ What You Can Do With This Extension

This extension enables you to query the generative AI with images and sentences in Scratch.

Play the example project to look at what you can do with "GAI" extension. 
This project is an example of sending camera images to Gemini to generate text.
(You need API key of the Gemini (ref. [Set API key](how-to-use?id=set-api-key)) and allow camera access to play this project.)

Example Project
([open in a new window](https://xcratch.github.io/editor#https://yokobond.github.io/xcx-gai/projects/example.sb3))

<iframe src="https://xcratch.github.io/editor/player#https://yokobond.github.io/xcx-gai/projects/example.sb3" width="540px" height="460px" allow="camera"></iframe>

Refer to [How to Use](how-to-use) for more details.


## Supported AI Models
This extension supports the Google Gemini generative models, and embedding models.
The default model is set to the latest model at the time of release but you can change it in the block.

You can check the available models in the [Gemini API documentation](https://ai.google.dev/gemini-api/docs/models).

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

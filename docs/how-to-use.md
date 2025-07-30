
# How to Use

## Set API key

To set up an AI API key, use the ```ask for API key``` or ```set API key to ( )``` blocks. Once you enter an API key, it will be available until you exit Scratch.

Specify the Gemini Pro API key as the API key. You can obtain the API key from the Gemini Pro website.<br>[Get an API key | Google AI for Developers](https://ai.google.dev/tutorials/setup)

The ```ask for API key``` block displays a dialog for entering the API key.

The ```set API key to ( )``` block sets the AI's API key. By placing a ```set API key to ( )``` block with a pre-entered key in the code area, you can save the API key to the project.

```API key``` retrieves the currently set API key with partial masking.


## Querying AI

Queries to AI are made using the ```generate (prompt)``` and ```chat (prompt)``` blocks.

```generate (prompt)``` sends ```(prompt)``` to AI and waits for AI to generate the following text.

```chat (prompt)``` sends ```(prompt)``` to AI as a continuation of previous conversations, and waits for AI to generate text that continues the conversation. By executing this block continuously, you can automatically build up conversations.

Previous conversations can be retrieved with the ```chat history``` block, and by putting it into the ```start chat continuing ( )``` block, you can start a conversation as a continuation of that.

AI responses can be retrieved with ```response candidate (candidate number)```. Specify the number of the AI-generated text candidate with ```(candidate number)```. This block retains the response until the next time a ```generate (prompt)``` or ```chat (prompt)``` block is executed on that sprite.

When the ```when partial response received``` block is used in the code area, partially sent responses can be retrieved with the ```partial response``` block before the complete response is returned.

To specify the model used for generation, use the ```use (model name) for generation model``` block before executing the ```generate (prompt)``` or ```chat (prompt)``` block. For ```(model name)```, specify the model code of the generation model found in [Gemini model names](https://ai.google.dev/gemini-api/docs/models/gemini).


## Function Calls

AI can execute custom functions within Scratch projects using Function Calls. This enables AI to not only generate simple text but also examine project states and manipulate sprites.

### Defining Functions

Functions that AI can call can be freely defined using Scratch's "Make a Block" feature.
AI understands function behavior based on function names, argument names, and comments attached to them.
All defined user-defined blocks are recognized as functions that AI can call.
Functions can be defined with the following steps:

1. Create a custom block with "Make a Block"
2. Set the block name and arguments
3. Implement the block's behavior with Scratch blocks

When AI cannot understand the function's behavior from the name alone, add descriptions to the block definition and arguments with the following steps:

   1. Add a comment to the block definition to explain the function's functionality
   2. Place the block's arguments in the code area and add comments to the arguments to explain their roles

### Returning Function Results

To return results to AI after AI calls a function, use the ```return result (result) to AI``` block. This allows AI to receive the function execution results and decide on the next processing.

### Controlling Function Calls

The ```set function calling to (setting)``` block allows you to configure AI's function calling behavior.
This functionality enables AI to create more dynamic and intelligent Scratch projects.

```(setting)``` can specify the following:
- ```Auto``` - AI calls functions as needed (default)
- ```Any``` - Force AI to use function calls
- ```None``` - Disable function calls

### Operation Flow

1. AI receives a prompt
2. Calls registered functions as needed
3. Receives function execution results
4. Generates appropriate responses based on the results


## Using Images

You can query by including image data in Data URL format using ```dataURL``` in ```generate (prompt)```.

_※ The currently released Gemini pro API v1 cannot use images in conversations._

The ```dataURL``` of images in Scratch can be obtained using the following blocks:

- The ```costume (selector) data``` block retrieves the ```dataURL``` of the specified costume. For ```(selector)```, you can specify the costume name or number (- is the order from the end).
- The ```backdrop (selector) data``` block retrieves the ```dataURL``` of the background. For ```(selector)```, you can specify the background name or number (- is the order from the end).
- The ```snapshot data``` block retrieves the ```dataURL``` of a snapshot image of the stage and displayed sprites.


## Safety Settings

You can set the safety of AI generation results with the ```(safety category) (setting level)``` block.

```(safety category)``` can specify the following:

- ```All harm categories```
- ```Hate speech```
- ```Sexual explicit```
- ```Harassment```
- ```Dangerous content```

```(setting level)``` can specify the following:

- ```Unspecified```
- ```Block most```
- ```Block some```
- ```Block few```
- ```Block none```


## Generation Parameter Settings

Generation model parameter settings used by AI can be set separately for each sprite.

Parameter settings use the ```set generation (parameter) to ( )``` block.

```(parameter)``` can specify the following:

- ```Temperature```
- ```Top P```
- ```Top K```
- ```Max output tokens```
- ```Candidate count```
- ```Stop sequence```
- ```System instruction```
- ```Response schema```

The ```generation (parameter)``` block retrieves the generation model parameters used by that sprite.


## Embeddings

The ```embedding of ( ) for (task type)``` block retrieves embeddings for the specified task type for the input text.

```(task type)``` can specify the following:

- ```Retrieval Query``` retrieves from AI an embedded expression that can be used as a search question.
- ```Retrieval Document``` retrieves from the AI an embedded expression that can be used as a search target document.
- ```Semantic Similarity``` retrieves embedded expressions from the AI that can be used to search for similar meanings.
- ```Classification``` retrieves embedded expressions from the AI for classification.
- ```Clustering``` retrieves an embedded representation from the AI for clustering.

Embeddings can calculate similarity using the ```(Vector A) and (Vector B) (calculation method)``` block. Vector A and Vector B specify embeddings retrieved with the ```embedding of ( ) for (task type)``` block.

```(calculation method)``` can specify ```Dot product``` or ```Euclidean distance```.

To specify the model used for embeddings, use the ```use (model name) for embedding model``` block before executing the ```embedding of ( ) for (task type)``` block. For ```(model name)```, specify the text embedding model code found in [Gemini model names](https://ai.google.dev/gemini-api/docs/models/gemini).

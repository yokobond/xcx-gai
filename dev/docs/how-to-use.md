
# How to Use

## Setting the API key

To set the AI's API key, use the ``ask API Key`` or ``set API Key to ( )`` block. Once you enter the API key, it will be available until you exit Scratch.

The API key is the Gemini pro API key, which can be obtained from the Gemini pro website. <br>[Get an API key  \|  Google AI for Developers](https://ai.google.dev/tutorials/setup)

The ```ask for API key``` block displays a dialog for entering the API key.

```API key to ( )``` block sets the AI's API key. You can save the API key to your project by placing a ```API key to ( )``` block in the code area with the key entered beforehand.

```API key``` retrieves the currently set API key.


## Quering the AI

Querying AI is done using ```generate(prompt)``` and ```chat(prompt)``` blocks.

The ```generate(prompt)``` sends a ```(prompt)``` to the AI and waits for the AI to generate a subsequent sentence.


```chat (prompt)``` sends ```(prompt)``` to the AI as a continuation of the previous dialog, and waits for the AI to generate sentences following the dialog. By running this block in succession, you can automatically build up a dialog.

You can retrieve previous dialogues by the ```chat history``` block and put them in the ```start chat with history ( )``` block to start a chat as a continuation of the previous one.

The answer from the AI can be retrieved in ```response draft (Candidate Number)```. You can specify the number of the AI-generated sentence candidates in ```(Candidate Number)```. This block will hold the answers until the next time a ```generate (prompt)``` or ```chat (prompt)``` block is executed on the sprite.

_* The currently released Gemini pro API v1 does not allow you to select one answer. _

If the ```when partial response received``` block is used in a code area, you can use the ```partial response text``` block to retrieve partially sent answers before the full answer is returned.


## Using images

You can query ```generate (prompt)``` with ```dataURL``` to include a sentence containing data in the form of an image Data URL.

_* Images are not available for chat in the currently released Gemini pro API v1. _

```dataURL``` of images in Scratch can be retrieved using the following blocks.

- The ```costume data (selector)``` block retrieves the ```dataURL``` of the specified costume. The ```(selector)``` can be either the name or the number (- means the order from the last) of the costume.
- The ```backdrop data (selector)``` block gets the ```dataURL``` of the background. The ```(selector)``` can be the name or number (- means the order from the last) of the background.
- The ```snapshot data``` block retrieves the ```dataURL``` snapshot images of the stage and the displayed sprites.


## Setting safety

The ```set (safety category) to (setting level)``` block allows you to set the safety of AI generated results.

In the ```(safety category)``` you can specify the following.

- ```All harm categories```
- ```Hate speech```
- ```Sexual explicit```
- ```Harassment```
- ```Dangerous content```

```(setting level)``` allows you to specify the following.

- ```Unspecified```
- ```Block most```
- ```Block some```
- ```Block few```
- ```Block none```


## Setting parameters for generation

The parameter settings of the generated model used by AI can be set separately for each sprite.

To set parameters, use the ```set generation (parameter) to ( )``` block.

The following can be specified for ```(parameter)```.

- ```Temperature```
- ```Top P```
- ```Top K```
- ```Max output tokens```
- ```Candidate count```
- ```Stop sequence```

The ```generation (parameter)``` block retrieves the parameters of the generation model used by the sprite.


## Use of embedding

The ```embedding of ( ) for (task type)``` block obtains an embedded representation of the specified task type for the input sentence.

The ```(task type)``` can be specified as follows.

- ```Retrieval Query``` retrieves from AI an embedded expression that can be used as a search question.
- ```Retrieval Document``` retrieves from the AI an embedded expression that can be used as a search target document.
- ```Semantic Similarity``` retrieves embedded expressions from the AI that can be used to search for similar meanings.
- ```Classification``` retrieves embedded expressions from the AI for classification.
- ```Clustering``` retrieves an embedded representation from the AI for clustering.

Embedded representations can be used to compute similarity using the ```(Vector A) and (Vector B) (calculation method)``` block. Vector A and Vector B specify the embedded representation obtained by the ```embedding of ( ) for (task type)``` block.

 For ``(calculation method)`` you can specify either ```Dot product``` or ``Euclidean distance``.

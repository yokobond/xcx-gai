
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


## Model Management

The following blocks are available for retrieving and managing information about models provided by AI providers.

### Specifying Models

To specify the model used for generation, use the ```use (model name)``` block before executing the ```generate (prompt)``` or ```chat (prompt)``` block. For ```(model name)```, specify the model code available for your chosen AI provider.

### Retrieving Model Information

- The ```model``` block retrieves the currently specified model ID. This allows you to check which model is being used.

- The ```max model number``` block returns the total number of available models obtained by querying the current AI provider. You can use this information to know the range of available models.

- The ```model ID at (index)``` block retrieves the model ID at the specified index (starting from 1) from the list of available models obtained by querying the provider. You can use this feature to sequentially retrieve all available models.

### Usage Examples

To list all available models:

1. Use the ```max model number``` block to get the total count
2. Repeat from 1 to the total count, executing the ```model ID at (index)``` block
3. Display or store each model ID in a list

To check the currently used model:

- Execute the ```model``` block to display the currently set model ID

### Notes

- Retrieving the model list may require communication with the AI provider
- Some providers require setting up an API key before using the ```max model number``` or ```model ID at (index)``` blocks
- Available models vary depending on the provider
- Model indices start from 1 (not 0)


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


## Retrieving Generated Files

Some AI models can generate and return files (images, audio, etc.) as part of their response. You can access these generated files using the following blocks:

- The ```generated file data at (index)``` block retrieves the data URL of the generated file at the specified index. The index starts from 1. Returns an empty string if no file exists at that index.
- The ```generated file media type at (index)``` block retrieves the media type (MIME type) of the generated file at the specified index. Returns an empty string if no file exists at that index.
- The ```max generated file count``` block returns the total number of files generated in the last AI response. Returns 0 if no files were generated.

These blocks are useful when working with AI models that can generate images, audio files, or other media content as part of their response.


## Safety Settings

_※ The safety settings feature is currently deprecated. This feature was only available with the Gemini API but has been removed to support multiple AI providers._


## Generation Parameter Settings

Generation model parameter settings used by AI can be set separately for each sprite.

Parameter settings use the ```set generation (parameter) to ( )``` block.

```(parameter)``` can specify the following:

- ```Temperature```
- ```Top P```
- ```Top K```
- ```Max output tokens```
- ```Stop sequence```
- ```System instruction```
- ```Response schema```

_※ The ```Candidate count``` parameter has been removed. This parameter is no longer available to support multiple AI providers._

The ```generation (parameter)``` block retrieves the generation model parameters used by that sprite.


## Structured Output (Response Schema)

You can make AI generate responses in a specific format (JSON format). This allows you to obtain structured data that is easy to process programmatically.

### Usage

1. Use the ```set generation (Response Schema) to ( )``` block to set a JSON schema
2. Execute the ```generate (prompt)``` or ```chat (prompt)``` block
3. AI will generate JSON responses according to the schema

### Writing JSON Schema

A JSON schema defines the structure of the expected response. Here's a basic example:

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "Person's name"
    },
    "age": {
      "type": "number",
      "description": "Age"
    },
    "skills": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "List of skills"
    }
  },
  "required": ["name", "age"]
}
```

### Processing JSON Data

Generated JSON format responses can be processed with the following blocks:

- ```get (path) from JSON ( )``` block - Retrieve specific values from JSON objects
- ```item (index) of JSON array ( )``` block - Retrieve specific elements from JSON arrays
- ```length of JSON array ( )``` block - Get the number of elements in JSON arrays

### Practical Example

For example, when asking "Create 3 characters" with the following schema:

```json
{
  "type": "object",
  "properties": {
    "characters": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {"type": "string"},
          "role": {"type": "string"},
          "description": {"type": "string"}
        }
      }
    }
  }
}
```

AI will generate a structured response like this:

```json
{
  "characters": [
    {
      "name": "Hero Alex",
      "role": "Warrior",
      "description": "Strong sense of justice, serves as a shield to protect companions"
    },
    {
      "name": "Wizard Luna",
      "role": "Mage",
      "description": "A sage well-versed in ancient magic"
    },
    {
      "name": "Thief Jin",
      "role": "Rogue",
      "description": "Quick movements and dexterity are their weapons"
    }
  ]
}
```

### Notes

- When response schema is set, AI will always respond in JSON format
- To disable schema settings, set an empty value
- This feature may not be available with some AI providers that don't support it


## Embeddings

The ```embedding of ( )``` block retrieves embeddings for the input text.

_※ The task type specification feature has been removed. To support multiple AI providers, the system now retrieves general-purpose embeddings without specifying task types._

Embeddings can calculate similarity using the ```(Vector A) and (Vector B) (calculation method)``` block. Vector A and Vector B specify embeddings retrieved with the ```embedding of ( )``` block.

```(calculation method)``` can specify ```Dot product```, ```Cosine distance```, or ```Euclidean distance```.

To specify the model used for embeddings, use the ```use (model name)``` block before executing the ```embedding of ( )``` block. For ```(model name)```, specify the embedding model code available for your chosen AI provider.

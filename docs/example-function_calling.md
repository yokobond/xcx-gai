## Sprite Control

This is an example project where AI uses function calls to check a sprite's position and then move it.
Functions that AI can use can be freely defined by users as Scratch block definitions.

1. Press the green flag to start the project.
2. When you send instructions to the character, AI will check the current position and then move to the target position.

[open in a new window](https://xcratch.github.io/editor#https://yokobond.github.io/xcx-gai/docs/gai-sprite_control.sb3)

<iframe src="https://xcratch.github.io/editor/player#https://yokobond.github.io/xcx-gai/docs/gai-sprite_control.sb3" width="540px" height="460px"></iframe>

### Project Description
This project utilizes Gemini's function calling feature, allowing AI to examine sprite states and perform operations.
AI has the following capabilities:

- **Position Retrieval**: Get the current x and y coordinates of the sprite
- **Movement Control**: Move the sprite to specified coordinates
- **State Judgment**: Determine the optimal destination based on the current position

### Function Calling Mechanism
1. **Current Position Check**: When AI receives an instruction to "check current position and move", it first calls the position retrieval function
2. **Movement Planning**: Based on the retrieved position information, AI determines an appropriate destination
3. **Actual Movement**: Calls the movement function to move the sprite to the target position

In this way, rather than simply following instructions, AI grasps the current state before taking appropriate action, achieving more intelligent sprite control.

### Functions Used
The following blocks are used as Scratch block definitions:

- `meow`: Makes the sprite meow
- `move sprite (x coordinate) (y coordinate) (whether gliding)`: Moves the sprite to specified coordinates with gliding movement
- `position and direction`: Gets current sprite position information (x, y, direction)

This example demonstrates how to use GAI's function calling feature to enable AI to dynamically control elements within Scratch projects.

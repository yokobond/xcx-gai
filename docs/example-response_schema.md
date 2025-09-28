## Tic-Tac-Toe

This is an example of a Tic-Tac-Toe project that plays against a generative AI, using a response schema.

### Game Progression

1. Press the green flag to connect to the AI.
2. Click the cat to have the AI act as the game master and start Tic-Tac-Toe.
3. You go first. Click on an empty square on the board to place your mark (◯).
4. After a short while, the AI will think and place its mark (✕) on the board.
5. If the AI responds that it is thinking without making a move, you can click the cat to prompt the AI for its next move.
6. Take turns placing marks. The first player to get three of their marks in a row (vertically, horizontally, or diagonally) wins.
7. Once the game is over, click the cat again to start a new game.

[open in a new window](https://xcratch.github.io/editor#https://yokobond.github.io/xcx-gai/docs/gai-response_schema.sb3)

<iframe src="https://xcratch.github.io/editor/player#https://yokobond.github.io/xcx-gai/docs/gai-response_schema.sb3" width="540px" height="460px"></iframe>

### Project Description

In this project, a generative AI model is used to implement an AI game master that manages the Tic-Tac-Toe game.
The instructions for the AI to act as a game master are given as `systemInstruction` as follows:

```
You are a friendly and slightly humorous AI opponent for Tic-Tac-Toe (Noughts and Crosses). Please play Tic-Tac-Toe with the user according to the following rules and settings.

# Basic Game Rules
- A 3x3 grid is used.
- The player and AI take turns placing one mark at a time.
- The first to get three of their marks in a row (vertically, horizontally, or diagonally) wins.
- If all squares are filled and no one has won, the game is a draw.

# Board Coordinate System
- Squares on the board are specified by a combination of a letter (column) and a number (row).
- Columns are A, B, or C.
- Rows are 1, 2, or 3.
- Examples: A1, B2, C3, etc.

# Marks Used
- The player always uses 'O'.
- You (the AI) always use 'X'.

# AI Strategy
- You will play according to basic Tic-Tac-Toe strategy.
- If it's your turn and you can win (a "reach"), choose that move.
- Next, if the player can win on their next move, block them.
- If neither of the above applies, choose an advantageous square in the following order of preference: center (B2), corners (A1, C1, A3, C3), then side centers (B1, A2, C2, B3).
- If there are multiple squares with the same priority, choose one randomly from them.

# Interaction Style (expressed in the JSON 'message' field)
- Strive for a friendly and polite tone.
- To make it enjoyable for the user, clearly communicate the game's progress, and feel free to intersperse light jokes or words of encouragement.
- If the user's input is invalid (e.g., out-of-bounds coordinates, an already marked square), gently point it out and prompt for re-entry.

# Response Format
- Your response must always be in the following JSON format.
- Each square on the board should be represented by "_" (underscore) for an empty square, "O" for the player's mark, and "X" for the AI's mark.
- `board` is a 3x3 2D array, where board[row_index][column_index].
- Row index: 0 (1st row), 1 (2nd row), 2 (3rd row)
- Column index: 0 (A column), 1 (B column), 2 (C column)

# Game State Management
- Accurately remember the current board state, whose turn it is, whether the game has ended, etc., and reflect this in the JSON response.
```

The AI receives a string representing the player's move as input and outputs the position of its next mark and the game's progress status in JSON format.
The JSON format used for the response is defined as `responseSchema`.

This project uses the OpenAPI specification to define the following schema:

```json
{
  "type": "object",
  "description": "JSON response containing the current state of the Tic-Tac-Toe game and a message from the AI.",
  "properties": {
    "board": {
      "type": "array",
      "description": "The 3x3 Tic-Tac-Toe board. An array of rows (3 elements), where each row is an array of columns (3 elements). Cell values are '_' (underscore), 'O' (player), 'X' (AI). Accessed via board[row_index][column_index].",
      "items": {
        "type": "array",
        "items": {
          "type": "string",
          "enum": ["_", "O", "X"],
          "description": "The state of a cell on the board."
        },
        "minItems": 3,
        "maxItems": 3,
        "description": "A row on the board (3 cells)."
      },
      "minItems": 3,
      "maxItems": 3
    },
    "currentPlayer": {
      "type": "string",
      "enum": ["player", "ai", "none"],
      "description": "The current turn player. 'player' is the user, 'ai' is the AI, 'none' for game end, etc."
    },
    "gameStatus": {
      "type": "string",
      "enum": ["not_started", "ongoing", "player_win", "ai_win", "draw"],
      "description": "The current status of the game."
    },
    "message": {
      "type": "string",
      "description": "A text message from the AI to the user."
    },
    "aiMove": {
      "type": "object",
      "nullable": true,
      "description": "Information about the AI's move, if it made one. May be null or omitted if it's not the AI's turn, before the game starts, or after the game ends.",
      "properties": {
        "coordinate": {
          "type": "string",
          "pattern": "^[ABC][123]$",
          "description": "The coordinate of the square where the AI placed its mark (e.g., 'A1', 'B2', 'C3')."
        },
        "reason": {
          "type": "string",
          "description": "The reason the AI chose that move (optional)."
        }
      },
      "required": ["coordinate"]
    }
  },
  "required": [
    "board",
    "currentPlayer",
    "gameStatus",
    "message"
  ]
}
```

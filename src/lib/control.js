import Direction from "./Direction";

const SNAKE_CONTROLS = {
    up: ["w", "ArrowUp"],
    down: ["s", "ArrowDown"],
    left: ["a", "ArrowLeft"],
    right: ["d", "ArrowRight"],
}

function moveButton(key, direction) {
    // Returns true if key matches direction
    return SNAKE_CONTROLS[direction].some(c => c===key);
}

// User Keyboard Input
export function handleUserInput(event, snake) {
    /**
     * Handles user input so that snake moves only in 90deg turns
     */

    const currentDirection = snake.direction;

    if (snake.dirChanging) {
        return;
    }

    // Snake was moving horizontally - allow vertical turns
    if (currentDirection === Direction.RIGHT || currentDirection === Direction.LEFT) {
        if (moveButton(event.key, "up")) {
            snake.changeDirection(Direction.UP);
        }
        else if (moveButton(event.key, "down")) {
            snake.changeDirection(Direction.DOWN);
        }
    }

    // Snake was moving vertically - allow horizontal turns
    else if (currentDirection === Direction.UP || currentDirection === Direction.DOWN) {
        if (moveButton(event.key, "right")) {
            snake.changeDirection(Direction.RIGHT);
        }
        else if (moveButton(event.key, "left")) {
            snake.changeDirection(Direction.LEFT);
        }
    }

    // Snake was not moving -- allow any turn
    else if (!currentDirection) {
        if (moveButton(event.key, "right")) {
            snake.changeDirection(Direction.RIGHT);
        }
        else if (moveButton(event.key, "left")) {
            snake.changeDirection(Direction.LEFT);
        }
        else if (moveButton(event.key, "up")) {
            snake.changeDirection(Direction.UP);
        }
        else if (moveButton(event.key, "down")) {
            snake.changeDirection(Direction.DOWN);
        }
    }

    // Temp
    if (event.key === " ") {
        snake.grow();
    }

    if (event.key === "Escape") {
        snake.changeDirection(null);
    }
}


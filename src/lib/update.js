function getCell(rowNum, colNum) {
    /**
     * Get a cell by its row and col number
     * Returns the DOM element representing that cell
     */
    try {
        const row = document.getElementById(`row-${rowNum}`);
        const cell = row.querySelector(`#col-${colNum}`);
        return cell;
    } catch {
        return null;
    }
}

export function isCollided(head, node) {
    // Check if head collides with node
    return head[0] === node[0] && head[1] === node[1];
}

export function removeSnake(game) {
    // Remove prev snake position
    const snakeHead = getCell(game.snake.head[0], game.snake.head[1]);
    if (snakeHead) {
        snakeHead.className = "cell";
    }
    game.snake.nodes.forEach(node => {
        if (node){
            const snakeCell = getCell(node[0], node[1]);
            if (snakeCell) {
                snakeCell.className = "cell";
            }
        }
    });
}

export function addSnake(game) {
    // Snake Color
    const snakeColor = "color-"+game.snake.color;

    // Add snake head
    const snakeHead = getCell(game.snake.head[0], game.snake.head[1]);
    if (snakeHead) {
        snakeHead.classList.add("snake-cell", "snake-head", snakeColor);
    }
    // Add snake nodes & Check for snake collision
    game.snake.nodes.forEach(node => {
        if (node) {
            // Check if snake collides itself
            if (isCollided(game.snake.head, node)) {
                game.snake.isCollided = true;
            }
            const cell = getCell(node[0], node[1]);
            if (cell) {
                cell.classList.add("snake-cell", snakeColor);
            }
        }
    });
}

export function removeFood(game) {
    // Remove prev food position
    const cell = getCell(game.food[0], game.food[1]);
    if (cell) {
        cell.className = "cell";
    }
}

export function addFood(game) {
    // Remove prev food position
    const cell = getCell(game.food[0], game.food[1]);
    if (cell) {
        cell.classList.add("food-cell");
    }
}
export default function getCell(row, col, game) {
    const snake = game.snake;
    const food = game.food;

    if (isSnakeHead(row, col, snake)) {
        return SnakeHead(col);
    }
    else if (isFood(row, col, food)) {
        return Food(col);
    }
    else if (isSnakeNode(row, col, snake)) {
        return SnakeNode(col);
    }
    else {
        return Cell(col);
    }
}

// Cells
const SnakeHead = (col) => (
    <div key={col} className="cell snake-cell snake-head"></div>
)
const SnakeNode = (col) => (
    <div key={col} className="cell snake-cell"></div>
)
const Food = (col) => (
    <div key={col} className="cell food-cell"></div>
)
const Cell = (col) => (
    <div key={col} className="cell"></div>
)

// Cell Checks
function isSnakeHead(row, col, snake) {
    return snake.head[0] === row && snake.head[1] === col;
}
function isSnakeNode(row, col, snake) {
    return snake.nodes.some(node => node[0] === row && node[1] === col);
}
function isFood(row, col, food) {
    return food[0] === row && food[1] === col;
}
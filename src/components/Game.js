import Snake from "./Snake";
import { randomInteger } from "../lib/utils";

class Game {
    snake;
    food;
    constructor(snake, food) {
        this.snake = snake;
        this.food = food;
    }
}

// Row Element
const Row = (row, children) => (
    <div key={row} className="row">{children}</div>
)

export function setupGame(boardLength) {

    // Create Snake in Centre of Board
    const midBoard = Math.ceil(boardLength/2);
    const snake = new Snake(midBoard, midBoard, 3);

    // Place Food randomly on Board
    const food = [randomInteger(boardLength), randomInteger(boardLength)];

    return new Game(snake, food);
}

export function mapBoard(game, boardLength) {
    const rows = [];
    for (let row = 0; row < boardLength; row++) {
        const cells = [];
        for (let col = 0; col < boardLength; col++) {
            const cell = getCell(row, col, game);
            cells.push(cell);
        }
        rows.push(Row(row, cells));        
    }
    return rows;
}

function getCell(rowNum, colNum) {
    try {
        const row = document.querySelector(`[data-row="${rowNum}"]`);
        const cell = row.querySelector(`[data-col="${colNum}"]`);
        return cell;
    } catch {
        return null;
    }
}

function removeSnake(snake) {
    // Remove prev snake position
    const snakeHead = getCell(snake.head[0], snake.head[1]);
    if (snakeHead) {
        snakeHead.className = "cell";
    }
    try {
        snake.nodes.forEach(node => {
            if (node){
                const cell = getCell(node[0], node[1]);
                if (cell) cell.className = "cell";
            }
        });
    } catch {
        
    }
}

function addSnake(snake) {
    // Add new snake position
    const snakeHead = getCell(snake.head[0], snake.head[1]);
    if (snakeHead) {
        snakeHead.classList.add("snake-cell", "snake-head");
    }
    snake.nodes.forEach(node => {
        const cell = getCell(node[0], node[1]);
        if (cell) {
            cell.classList.add("snake-cell");
        }
    });
}

function removeFood(food) {
    // Remove prev food position
    const cell = getCell(food[0], food[1]);
    if (cell) {
        cell.className = "cell";
    }
}
function addFood(food) {
    // Remove prev food position
    const cell = getCell(food[0], food[1]);
    if (cell) {
        cell.classList.add("food-cell");
    }
}

export function update(game) {
    if (game === undefined) return null;
    
    removeFood(game.food);

    removeSnake(game.snake);

    game.snake.move();

    addSnake(game.snake);

    addFood(game.food);
}
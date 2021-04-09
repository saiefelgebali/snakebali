import Snake from "./Snake";
import getCell from "./Cells";
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
    debugger
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
import { Row, Cell } from "./Board";
import Snake from "../lib/Snake";
import Game from "../lib/Game";
import { randomInteger } from "../lib/utils";
import { addFood, addSnake, isCollided, removeFood, removeSnake } from "../lib/update";

export function setupGame(boardLength) {
    return new Game(boardLength);
}

export function setupBoard(boardLength) {
    const rows = [];
    console.log("Setting up board...")
    for (let row = 0; row < boardLength; row++) {
        const cells = [];
        for (let col = 0; col < boardLength; col++) {
            cells.push(Cell(col));            
        }
        rows.push(Row(row, cells));
    }
    return rows;
}

export function update(game) {
    removeFood(game);
    
    removeSnake(game);
    
    game.snake.move();

    if (isCollided(game.snake.head, game.food)) {
        game.snake.grow(4);
        game.newFood();
    }
    
    addSnake(game);
    
    addFood(game);
}
import Snake from "./Snake";
import { randomInteger } from "./utils";

export default class Game {
    snake;
    food;
    boardLength;
    gameOver;

    constructor(boardLength) {
        this.boardLength = boardLength;
        
        // Init Snake
        const midPoint = Math.ceil(boardLength/2);
        this.snake = new Snake(midPoint, midPoint, 4);

        // Init Food
        this.newFood();
    }
    
    newFood() {
        // Place food in random cell excluding edges
        this.food = [randomInteger(1, this.boardLength-1), randomInteger(1, this.boardLength-1)];
    }
}
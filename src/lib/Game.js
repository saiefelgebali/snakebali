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
        this.food = [randomInteger(boardLength), randomInteger(boardLength)];
    }
    
    newFood() {
        // Replace Food
        this.food = [randomInteger(this.boardLength), randomInteger(this.boardLength)];
    }
}
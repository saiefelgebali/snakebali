import Direction from "./Direction";

export default class Snake {
    head;
    nodes;
    tail;
    direction;

    constructor(row, col) {
        this.head = this.tail = [0, 3];
        this.nodes = Array.from(new Set([this.head,this.tail]));
    }

    moveSnake() {

        // Remove tail
        this.nodes.pop(-1);

        // Move head
        let row = this.head[0];
        let col = this.head[1];
        switch (this.direction) {
            case Direction.RIGHT:
                col++;
                break;
            case Direction.DOWN:
                row++;
                break;
            case Direction.LEFT:
                col--;
                break;
            case Direction.UP:
                row--;
            default:
                break;
        }
        this.head = [row, col];
        this.nodes.unshift(this.head);

        // Set tail to new last node
        this.tail = this.nodes[this.nodes.length-1]
    }

    changeDirection(newDirection) {
        this.direction = newDirection;
    }

    grow() {
        this.nodes.push(this.tail);
    }
}
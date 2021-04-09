import Direction from "../lib/Direction";

export default class Snake {
    head;
    nodes;
    direction;

    constructor(row, col, length) {
        // Set head to specified coords
        this.head = [row, col];

        // Add head to nodes
        this.nodes = []

        // Add 'length' nodes, trailing left of head
        for (let i = 1; i <= length; i++) {
            this.nodes.push([row, col-i]);
        }

        // Default direction is RIGHT
        this.direction = Direction.RIGHT;
    }

    changeDirection(direction) {
        this.direction = direction;
    }

    move() {
        // Add current head to beggining of nodes
        this.nodes.unshift([this.head[0], this.head[1]]);

        // Update head
        switch (this.direction) {
            case "right":
                this.head[1]++;
                break;
            case "down":
                this.head[0]++;
                break;
            case "left":
                this.head[1]--;
                break;
            case "up":
                this.head[0]--;
                break;
            default:
                break;
        }

        // Remove last node
        this.nodes.pop(-1);
    }

    grow() {
        // Duplicate last node and push it to nodes
        this.nodes.push(this.nodes[this.nodes.length]);
    }
}
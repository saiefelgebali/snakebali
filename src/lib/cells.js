import Direction from "./Direction";

export function getCellId(row, col, rowSize) {
    /**
     * Returns the respective ID of a cell
     * by using its position on the 2D Board
     */
    return (row*rowSize)+col;
}

export function checkCell(id, row, col, snake) {
    if (checkSnakeHead(row, col, snake)) {
        return SnakeHead(id, snake.direction);
    }
    else if (checkSnakeCell(row, col, snake)) {
        return SnakeCell(id);
    } else {
        return Cell(id);
    }
}

export function checkSnakeCell(row, col, snake) {
    const isSnakeCell = snake.nodes.some(node => {
        return node[0] === row && node[1] === col
    });
    return isSnakeCell;
}

export function checkSnakeHead(row, col, snake) {
    const isSnakeHead = snake.head[0] === row && snake.head[1] === col;
    return isSnakeHead;
}

export const SnakeHead = (id, direction) => (
    <div key={id} className={`cell snake-cell snake-head ${direction?direction:'stopped'}`}></div>
)
export const SnakeCell = (id) => (
    <div key={id} className="cell snake-cell"></div>
)
export const Cell = (id) => (
    <div key={id} className="cell"></div>
)
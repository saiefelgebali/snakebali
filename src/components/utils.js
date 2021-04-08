import Snake from "./Snake";

export function createBoard(boardSize) {
    /**
     * Create a 2-Dimensional Array
     * Represents a square board
     * sets board state to result
     * @example board[row][column] === cell
     */
    const newBoard = new Array(boardSize);
    for (let row = 0; row < boardSize; row++) {
        newBoard[row] = new Array(boardSize);
        for (let col = 0; col < boardSize; col++) {
            newBoard[row][col] = col;
        }
    }
    return newBoard;
}

export function createSnake(board) {
    const initRow = Math.ceil(board.length / 2);
    const initCol = Math.ceil(board[0].length / 2);
    return new Snake(initRow, initCol);
}

function getCellId(row, col, rowSize) {
    /**
     * Returns the respective ID of a cell
     * by using its position on the 2D Board
     */
    return (row*rowSize)+col;
}

function checkSnakeCell(snakeCells, row, col) {
    const isSnakeCell = snakeCells.some(node => {
        return node[0] === row && node[1] === col
    })
    return isSnakeCell;
}

const SnakeCell = (id) => (
    <div key={id} className="cell snake-cell"></div>
)
const Cell = (id) => (
    <div key={id} className="cell"></div>
)

export function mapBoard(board, snakeCells, boardSize) {
    /**
     * Iterates through rows and their columns
     * Maps cells onto rows
     * Returns rows with cells
     */
    const rows = [];
    for (let row = 0; row < boardSize; row++) {
        const cells = board[row].map(col => {
            const snakeCell = checkSnakeCell(snakeCells, row, col);
            const id = getCellId(row, col, boardSize);
            return snakeCell ? SnakeCell(id) : Cell(id);
        });
        rows.push(<div key={row} className="row">{cells}</div>)
    }
    return rows;
}
import Snake from "./Snake";
import { checkSnakeCell, getCellId, Cell, SnakeCell, checkSnakeHead, checkCell } from "./cells";

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
    /**
     * Create a new snake instance placed in the middle of the board
     */
    const initRow = Math.ceil(board.length / 2);
    const initCol = Math.ceil(board[0].length / 2);
    return new Snake(initRow, initCol);
}

export function mapBoard(board, snake, boardSize) {
    /**
     * Iterates through rows and their columns
     * Maps cells onto rows
     * Returns rows with cells
     */
    const rows = [];

    for (let row = 0; row < boardSize; row++) {
        const cells = board[row].map(col => {
            const id = getCellId(row, col, boardSize);
            const cell = checkCell(id, row, col, snake);
            return cell;
        });
        rows.push(<div key={row} className="row">{cells}</div>)
    }
    return rows;
}
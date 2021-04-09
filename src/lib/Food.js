export function createFood(board) {
    /**
     * Create a new food cell placed in a random cell on the board
     */
    const randRow = Math.ceil(Math.random()*board.length);
    const randCol = Math.ceil(Math.random()*board.length);
    return [randRow, randCol];
}
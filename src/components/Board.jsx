import { useEffect, useState } from 'react'
import { setupGame, update } from "./Game";
import { useInterval } from '../lib/useInterval';
import { handleUserInput } from '../lib/control';
import { handleCanvasAspectRatio } from '../lib/utils';

// Responsive Canvas Event Listeners
window.addEventListener("load", handleCanvasAspectRatio)
window.addEventListener("resize", handleCanvasAspectRatio);

const Row = (index, children) => (
    <div key={index} data-row={index} className="row">{children}</div>
);
const Cell = (index) => (
    <div key={index} data-col={index} className="cell"></div>
);

function setupBoard(boardLength) {
    const rows = [];
    for (let row = 0; row < boardLength; row++) {
        const cells = [];
        for (let col = 0; col < boardLength; col++) {
            cells.push(Cell(col));            
        }
        rows.push(Row(row, cells));
    }
    return rows;
}

function Board() {
    /**
     * Snake Board & Game Logic
     */

    const tickTime = 50;
    const [tick, setTick] = useState(0);

    const boardLength = 50;
    const [board, setBoard] = useState();
    const [game, setGame] = useState();

    // Initial Load
    useEffect(() => {
        const newBoard = setupBoard(boardLength);
        setBoard(newBoard);
        const newGame = setupGame(boardLength);
        setGame(newGame);
        // User Snake Controls
        window.addEventListener("keyup", (e) => handleUserInput(e, newGame.snake));
    }, []);
    
    useInterval(tickTime, ()=> {
        // Tick on interval & rerender component
        update(game);
        setTick(tick+1);
    });
    
    if (board === undefined) {
        return null;
    }
    
    return board;

}

export default Board

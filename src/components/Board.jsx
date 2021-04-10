import { useEffect, useState } from 'react'
import { setupGame, setupBoard, update } from "./GameLogic";
import { useInterval } from '../lib/useInterval';
import { handleUserInput } from '../lib/control';

export const Row = (index, children) => (
    <div key={index} id={`row-${index}`} className="row">{children}</div>
);

export const Cell = (index) => (
    <div key={index} id={`col-${index}`} className="cell"></div>
);

export default function Board() {
    /**
     * Snake Board & Game Logic
     */

    const tickTime = 100;
    const boardLength = 20;
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
        if (game!== undefined) {
            update(game);
        }
    });
    
    if (board === undefined) {
        return null;
    }
    
    return board;

}
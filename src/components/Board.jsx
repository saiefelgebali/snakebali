import { useEffect, useState } from 'react'
import { setupGame, setupBoard, update } from "./GameLogic";
import { useInterval } from '../lib/useInterval';
import { handleUserInput } from '../lib/control';

import useSound from "use-sound";
import appleCrunch from "../assets/sound/apple-crunch.wav";

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

    const tickTime = 80;
    const boardLength = 20;
    const [board, setBoard] = useState();
    const [game, setGame] = useState();
    const [playFoodEat] = useSound(
        appleCrunch,
        { volume: 0.5 }
    );

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
        if (game === undefined) {
            return;
        }
        // If gameOver dont update
        if (game.gameOver) {
            return;
        }
        update(game);
        if (game.snake.onFood) {
            playFoodEat();
        }
        else if (game.snake.isCollided) {
            game.snake.changeDirection(null);
            game.gameOver = true;
        }
    });
    
    if (board === undefined) {
        return null;
    }
    
    return board;
}
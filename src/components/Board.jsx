import { useContext, useEffect, useState } from 'react';
import { Store } from '../store/store';
import { gameEnd } from '../store/actions';
import { setupGame, setupBoard, update } from "./GameLogic";
import { useInterval } from '../lib/useInterval';
import { handleUserInput } from '../lib/control';
import useSound from "use-sound";
import appleCrunch from "../assets/sound/apple-crunch.wav";
import robloxOof from "../assets/sound/roblox-oof.mp3";

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

    const { dispatch } = useContext(Store);
    const tickTime = 80;
    const boardLength = 20;
    const [board, setBoard] = useState(null);
    const [game, setGame] = useState(null);
    const [playFoodEat] = useSound(appleCrunch, { volume: 0.5 });
    const [playOof] = useSound(robloxOof, { volume: 0.5 });

    // Initial Load
    useEffect(() => {
        // Board & Game Setup
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
            gameEnd(dispatch);
            return;
        } else {
            update(game);
        }

        // Play Food Sound
        if (game.snake.onFood) {
            playFoodEat();
        }

        // Check if snake is Collided
        else if (game.snake.isCollided) {
            playOof();
            game.gameOver = true;
        }
    });
    
    return (
        <div id="board">
            <div className="canvas">
                {board}            
            </div>   
        </div>
    )
}
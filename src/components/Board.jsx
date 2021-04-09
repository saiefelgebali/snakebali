import { useEffect, useState } from 'react'
import { setupGame, mapBoard } from "./Game";
import { useInterval } from '../lib/useInterval';
import { handleUserInput } from '../lib/control';
import { handleCanvasAspectRatio } from '../lib/utils';

// Responsive Canvas Event Listeners
window.addEventListener("load", handleCanvasAspectRatio)
window.addEventListener("resize", handleCanvasAspectRatio);

function Board() {
    /**
     * Snake Board & Game Logic
     */

    const tickTime = 1000;
    const [tick, setTick] = useState(0);

    const boardLength = 10;
    const [game] = useState(setupGame(boardLength))

    // Initial Load
    useEffect(() => {
        // User Snake Controls
        window.addEventListener("keyup", (e) => handleUserInput(e, game.snake));
    }, []);
    
    useInterval(tickTime, ()=> {
        // Tick on interval & rerender component
        game.snake.move();
        setTick(tick+1);
    });
    
    return mapBoard(game, boardLength);

}

export default Board

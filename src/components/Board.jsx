import React, { useEffect, useState } from 'react'
import { handleUserInput } from '../lib/control';
import { handleCanvasAspectRatio } from '../lib/utils';
import { createBoard, createSnake, mapBoard } from '../lib/setup';
import { useInterval } from '../lib/useInterval';
import { createFood } from '../lib/Food';

// Responsive Canvas Event Listeners
window.addEventListener("load", handleCanvasAspectRatio)
window.addEventListener("resize", handleCanvasAspectRatio);

function Board() {
    /**
     * Snake Board & Game Logic
     */

    const boardSize = 20;
    const tickTime = 100;
    const [board, setBoard] = useState(createBoard(boardSize));
    const [snake, setSnake] = useState(createSnake(board));
    const [snakeCells, setSnakeCells] = useState(snake.nodes);
    const [food, setFood] = useState(createFood(board));

    // Initial Load
    useEffect(() => {
        // User Snake Controls
        window.addEventListener("keyup", (e) => handleUserInput(e, snake, setSnakeCells));
        console.log(food)
    }, []);

    useInterval(tickTime, ()=> {
        snake.moveSnake();
        setSnakeCells([...snake.nodes]);
    });
    
    return (
        <div className="container">
            <div id="canvas" className="board" >
                {mapBoard(board, snake, boardSize)}
            </div>
        </div>
    )

}

export default Board

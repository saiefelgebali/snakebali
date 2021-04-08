import React, { useEffect, useState } from 'react'
import { useInterval } from '../lib/utils';
import Direction from './Direction';
import Snake from './Snake';
import { createBoard, createSnake, mapBoard } from './utils';

// Responsive Board
function adjustCanvasAspectRatio() {
    const canv = document.getElementById("canvas");
    const parent = canv.parentElement;
    console.log(parent.offsetWidth)
    const size = (parent.offsetWidth > parent.offsetHeight) ? parent.offsetHeight : parent.offsetWidth;
    canv.style.width = size + "px";
    canv.style.height = size + "px";
    canv.classList.add("ready");
}
window.addEventListener("load", adjustCanvasAspectRatio)
window.addEventListener("resize", adjustCanvasAspectRatio);

function Board() {
    /**
     * Create a Snake Board
     */

    const boardSize = 10;
    const [board, setBoard] = useState(createBoard(boardSize));
    const [snake, setSnake] = useState(createSnake(board));
    const [snakeCells, setSnakeCells] = useState(snake.nodes);

    // Initial Load
    useEffect(() => {
        // Move Snake Controls
        window.addEventListener("keyup", e => {
            switch (e.key) {
                case "w":
                    snake.changeDirection(Direction.UP);
                    break;
                case "a":
                    snake.changeDirection(Direction.LEFT);
                    break;
                case "s":
                    snake.changeDirection(Direction.DOWN)
                    break;
                case "d":
                    snake.changeDirection(Direction.RIGHT)
                    break;
                case " ":
                    snake.grow();
                    break;
                default:
                    break;
            }
            setSnakeCells([...snake.nodes])
        });
    }, []);

    useInterval(500, ()=> {
        snake.moveSnake();
        setSnakeCells([...snake.nodes]);
    });

    if (!Array.isArray(board)) {
        return null;
    }
    
    return (
        <div className="container">
            <div id="canvas" className="board" >
                {mapBoard(board, snakeCells, boardSize)}
            </div>
        </div>
    )

}

export default Board

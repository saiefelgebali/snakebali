import React, { useEffect, useState } from 'react'
import { useInterval } from '../lib/utils';

class LinkedListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(value) {
        const node = new LinkedListNode(value);
        this.head = node;
        this.tail = node;
    }
}

const  BOARD_SIZE = 12;

const Direction = {
    RIGHT: 0,
    DOWN: 1,
    LEFT: 2,
    UP: 3
}

function Board() {

    const [board, setBoard] = useState(createBoard(BOARD_SIZE));
    const [snake, setSnake] = useState(new SinglyLinkedList({row: 4, col: 3, cell: 44}));
    const [snakeCells, setSnakeCells] = useState(new Set([snake.head.value.cell]));
    const [direction, setDirection] = useState(Direction.RIGHT);

    useEffect(() => {
        window.addEventListener('keydown', e => {
            handleKeydown(e);
        });
    }, []);

    useInterval(100, ()=> {
        moveSnake();
    })

    function handleKeydown(event) {
        switch (event.key) {
            case 'd':
                setDirection(Direction.RIGHT);
                break;
            case 's':
                setDirection(Direction.DOWN);
                break;
            case 'a':
                setDirection(Direction.LEFT);
                break;
            case 'w':
                setDirection(Direction.UP);
                break;
        
            default:
                break;
        }
    }

    function moveSnake() {

        const currentHeadCoords = {
            row: snake.head.value.row,
            col: snake.head.value.col
        };

        const nextHeadCoords = getNextCoords(currentHeadCoords, direction);
        // Check if within bounds
        if (nextHeadCoords.row >= BOARD_SIZE || nextHeadCoords.col >= BOARD_SIZE ||
            nextHeadCoords.row < 0 || nextHeadCoords.col < 0) {
            return;
        }
        const nextHeadCell = board[nextHeadCoords.row][nextHeadCoords.col];

        const newHead = new LinkedListNode({
            ...nextHeadCoords,
            cell: nextHeadCell
        });

        const newSnakeCells = new Set(snakeCells);
        newSnakeCells.delete(snake.tail.value.cell);
        newSnakeCells.add(nextHeadCell);

        // Update Head Position
        const currentHead = snake.head;
        snake.head = newHead;
        currentHead.next = newHead;

        // Update Tail Position
        snake.tail = snake.tail.next;

        setSnakeCells(newSnakeCells);
    }

    function getNextCoords(coords, direction) {
        switch (direction) {
            case Direction.RIGHT:
                return {
                    row: coords.row,
                    col: coords.col + 1
                }
            case Direction.DOWN:
                return {
                    row: coords.row + 1,
                    col: coords.col
                }
            case Direction.LEFT:
                return {
                    row: coords.row,
                    col: coords.col - 1
                }
            case Direction.UP:
                return {
                    row: coords.row - 1,
                    col: coords.col
                }
        
            default:
                return {
                    row: coords.row,
                    col: coords.col + 1
                }
        }
    }

    const Cell = ({cell}) => {
        let cellClass = "cell ";
        if (snakeCells.has(cell)) {
            cellClass += 'snake-cell '
        }
        else if (false) {
            cellClass += 'food-cell '
        }
        return (
            <div className={cellClass}></div>
        )
    }

    return (
        <div className="board">
            {board.map((row, rowIndex) => 
                <div key={rowIndex} className="row"> 
                    {row.map((cell, cellIndex) => <Cell key={cellIndex} cell={cell} />)}
                </div>
            )}
        </div>
    )

    function createBoard(length) {
        let counter = 1;
        const board = [];
        for (let row = 0; row < length; row++) {
            const currentRow = [];
            for (let col = 0; col < length; col++) {
                currentRow.push(counter++);        
            }
            board.push(currentRow);
        }
        return board;
    }
}

export default Board

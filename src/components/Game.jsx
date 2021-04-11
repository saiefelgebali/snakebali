import { useContext } from 'react';
import { Store } from '../store/store'
import Menu from './Menu';
import Board from './Board';

function Game() {

    const { state } = useContext(Store);

    return (
        <div id="main">
            <div id="title">
                <h1>Snakebali</h1>
            </div>
            {state.gameRun ?
            <Board></Board>:
            <Menu></Menu>}
        </div>
    )
}

export default Game

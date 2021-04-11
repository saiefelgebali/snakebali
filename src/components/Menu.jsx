import React, { useContext } from 'react';
import { gameStart } from '../store/actions';
import { Store } from '../store/store';


function Menu() {
    const { dispatch } = useContext(Store);
    return (
        <div id="menu">
            <div className="menu-buttons">
                <button className="option start-button" onClick={()=>gameStart(dispatch)}>Start</button>
                <button className="option inactive leaderboard-button">Leaderboard</button>
                <div className="button-group">
                    <button className="option inactive sound-button">Sound</button>
                    <button className="option inactive settings-button">Settings</button>
                </div>
            </div>
        </div>
    )
}

export default Menu

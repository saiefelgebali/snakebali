import React, { useContext } from 'react';
import { gameStart } from '../store/actions';
import { Store } from '../store/store';


function Menu() {
    const { dispatch } = useContext(Store);
    return (
        <div id="menu">
            <div className="menu-buttons">
                <button className="option start-button" onClick={()=>gameStart(dispatch)}>Start</button>
                <button className="option leaderboard-button" onClick={()=>gameStart(dispatch)}>Leaderboard</button>
                <div className="button-group">
                    <button className="option sound-button" onClick={()=>gameStart(dispatch)}>Sound</button>
                    <button className="option settings-button" onClick={()=>gameStart(dispatch)}>Settings</button>
                </div>
            </div>
        </div>
    )
}

export default Menu

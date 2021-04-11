export const gameStart = (dispatch) => {
    return dispatch({
        type: 'GAME_START'
    });
}

export const gameEnd = (dispatch) => {
    return dispatch({
        type: 'GAME_END'
    });
}
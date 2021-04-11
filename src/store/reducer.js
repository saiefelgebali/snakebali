export default function reducer(state, action) {
    switch (action.type) {

        case 'GAME_START':
            return {
                gameRun: true
            }
            
        case 'GAME_END':
            return {
                gameRun: false
            }
            
        default:
            return state;
    }
}
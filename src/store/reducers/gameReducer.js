import {GET_ALL_BET_SUCCESS, GET_ALL_BET_ERROR, SET_GAME_RESULT, GAME_STATE, CHANGE_GAME_STATE} from '../../utils/types';

const initialState = {
    allBets: [],
    loading: false,
    loaded: false,
    gameResult: 0,
    gameState: GAME_STATE.WAITING
}

const gameReducer = (state = initialState, action) => {

    switch(action.type){

        case GET_ALL_BET_SUCCESS:
        return {
            ...state,
            allBets: action.payload.map(betData => {return { username: betData[0], amount: betData[1], multiplier:betData[2]}}),
            loading: false,
            loaded: true
        }
        case GET_ALL_BET_ERROR:
        return {
            ...state,
            allBets: [],
            loading: false,
            loaded: false
        }
        case SET_GAME_RESULT:
        return {
            ...state,
            gameResult: action.payload
        }
        case CHANGE_GAME_STATE:
        return {
            ...state,
            gameState: action.payload
        }
        default: return state
    }

}


export default gameReducer;
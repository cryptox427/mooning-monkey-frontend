import {GET_ALL_BET_SUCCESS, 
    GET_ALL_BET_ERROR, 
    SET_GAME_RESULT, 
    GAME_STATE, 
    CHANGE_GAME_STATE,
    GET_GAME_HISTORY_SUCCESS,
    GET_GAME_HISTORY_ERROR,
    SET_POPUP,
    GET_ONLINE_PLEYERS_SUCCESS,
    GET_ONLINE_PLEYERS_ERROR,
    SHOW_LOGIN_MODAL,
    HIDE_LOGIN_MODAL
} from '../../utils/types';

const initialState = {
    allBets: [],
    onlinePlayerCount: 0,
    gameHistory: null,
    loading: false,
    loaded: false,
    gameResult: 0,
    popup: "",
    gameState: GAME_STATE.WAITING,
    crashValues: [],
    displayValues: [],
    displayLoginModal: false
}

const gameReducer = (state = initialState, action) => {

    switch(action.type){

        case GET_ALL_BET_SUCCESS:
        return {
            ...state,
            allBets: action.payload.map(betData => 
                {
                    return { username: betData[0], amount: betData[1], multiplier:betData[2]}
                }),
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
            let timeValue = 1
            let crashValues = []
            let displayValues = [];
            if(state.gameState === GAME_STATE.RUNNING) {
                timeValue = state.crashValues.length > 0 ? state.crashValues[state.crashValues.length-1].time+1 : 1;
                crashValues = [...state.crashValues, 
                    {
                        time: timeValue,
                        crashValue: action.payload
                    }]
                
                if(crashValues.length > 8) {
                    for(let i = 0 ; i < 7 ; i ++) {
                        displayValues = [...displayValues, crashValues[parseInt(i * crashValues.length / 8)]]
                    }
                    displayValues = [...displayValues, crashValues[crashValues.length - 1]]
                }
                else {
                    displayValues = [...crashValues];
                }
            }
            return {
                ...state,
                gameResult: action.payload,
                crashValues: crashValues,
                displayValues: displayValues
            }
        case CHANGE_GAME_STATE:
            console.log("CHANGE_GAME_STATE", action)
        return {
            ...state,
            gameState: action.payload
        }
        case GET_GAME_HISTORY_SUCCESS:
        return {
            ...state,
            gameHistory: action.payload.map(historyData => 
                {
                    return { 
                        username: historyData[0],  
                        address: historyData[1], 
                        bet: historyData[2], 
                        multiplier:historyData[3], 
                        payout:historyData[4], 
                        gameDate:historyData[5]}
                })
        }
        case GET_GAME_HISTORY_ERROR:
        return {
            ...state,
            gameHistory: []
        }
        case SET_POPUP:
        return {
            ...state,
            popup: action.payload
        }
        case GET_ONLINE_PLEYERS_SUCCESS:
        return {
            ...state,
            onlinePlayerCount: action.payload
        }
        case GET_ONLINE_PLEYERS_ERROR:
        return {
            ...state,
            onlinePlayerCount: 0
        }
        case SHOW_LOGIN_MODAL:
        return {
            ...state,
            displayLoginModal: true
        }
        case HIDE_LOGIN_MODAL:
        return {
            ...state,
            displayLoginModal: false
        }
        default: return state
    }

}


export default gameReducer;
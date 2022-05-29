import {SET_PUBLICKEY, GET_MY_RECENT_WINS_SUCCESS, CHANGE_CURRENT_PAGE,
    GET_LOGIN_REQUEST_REQUEST, GET_LOGIN_REQUEST_SUCCESS, GET_LOGIN_REQUEST_ERROR,
    GET_REGISTERED_STATUS_SUCCESS, GET_REGISTERED_STATUS_ERROR } from '../../utils/types';

const initialState = {
    publicKey: 0,
    myRecentWin: [],
    currentPage: "play",
    logged: false,
    registered: false,
    loading: true
}

const userReducer = (state = initialState, action) => {

    switch(action.type){

        case SET_PUBLICKEY:
        return {
            ...state,
            publicKey: action.payload,
            loading: false

        }
        case GET_MY_RECENT_WINS_SUCCESS:
        return {
            ...state,
            myRecentWin: action.payload.map(myWinData => 
                {
                    return { 
                        bet: myWinData[0], 
                        multiplier:myWinData[1], 
                        payout:myWinData[2]
                    }
                }),
            
            loading: false
        }
        case CHANGE_CURRENT_PAGE:
        return {
            ...state,
            currentPage: action.payload
        }
        case GET_LOGIN_REQUEST_SUCCESS:
        return {
            ...state,
            logged: true
        }
        case GET_LOGIN_REQUEST_ERROR:
        return {
            ...state,
            logged: false
        }
        case GET_REGISTERED_STATUS_SUCCESS:
            return {
                ...state,
                registered: action.payload
            }
        case GET_REGISTERED_STATUS_ERROR:
        return {
            ...state,
            registered: false
        }
        
        default: return state
    }

}

export default userReducer;
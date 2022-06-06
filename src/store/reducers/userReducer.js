import {SET_PUBLICKEY, GET_MY_RECENT_WINS_SUCCESS, CHANGE_CURRENT_PAGE,
    GET_LOGIN_REQUEST_REQUEST, GET_LOGIN_REQUEST_SUCCESS, GET_LOGIN_REQUEST_ERROR,
    GET_REGISTERED_STATUS_SUCCESS, GET_REGISTERED_STATUS_ERROR,
    GET_STATS_REQUEST, GET_STATS_SUCCESS, GET_STATS_ERROR,
    GET_USER_STATS_REQUEST, GET_USER_STATS_SUCCESS, GET_USER_STATS_ERROR,
    GET_USERNAME_REQUEST, GET_USERNAME_SUCCESS, GET_USERNAME_ERROR, ADD_FRIEND } from '../../utils/types';

import {setPopUp} from "../../actions/gameActions";

const initialState = {
    publicKey: 0,
    userName: "",
    myRecentWin: [],
    stats: {
        users: 0,
        bets: 0,
        wagered: 0,
        investorProfit: 0,
        investorProfitATH: 0
    },
    userStats: [],
    currentPage: "play",
    logged: false,
    registered: false,
    friends: [],
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
        case GET_USERNAME_SUCCESS:
        return {
            ...state,
            userName: action.payload
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
        case GET_STATS_SUCCESS:
            if(action.payload.length > 0) {
                return {
                    ...state,
                    stats: {
                        users: action.payload[0][0],
                        bets: action.payload[0][1],
                        wagered: action.payload[0][2],
                        investorProfit: action.payload[0][3],
                        investorProfitATH: action.payload[0][4]
                    }
                }
            }
        case GET_STATS_ERROR:
        return {
            ...state
        }
        case ADD_FRIEND:
            if(state.friends.includes(action.payload)) {
                setPopUp("The user is already your friend")
                return {
                    ...state
                }
            }
            return {
                ...state,
                friends: [...state.friends, action.payload]
            }
        
        default: return state
    }

}

export default userReducer;
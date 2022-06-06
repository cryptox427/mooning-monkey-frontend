import { GiTurret } from 'react-icons/gi';
import {GET_MAX_CREDITS, BET_SUCCESS, BET_ERROR, END_BET, STOP_BET_SUCCESS, STOP_BET_ERROR,
    SET_AUTO_BET, STOP_AUTO_BET} from '../../utils/types';

const initialState = {
    maxCredits: 0,
    betState: false,
    autoBetState: false,
    betAmount: 0,
    multiplier: 0,
    loading:true
}

const betReducer = (state = initialState, action) => {

    switch(action.type){

        case GET_MAX_CREDITS:
        return {
            ...state,
            maxCredits: action.payload,
            loading: false

        }
        case BET_SUCCESS:
        return {
            ...state,
            betState: true,
            betAmount: action.payload.amount,
            multiplier: action.payload.multiplier,
            loading: false

        }
        case BET_ERROR:
        return {
            ...state,
            betState: false,
            loading: false,
            betAmount: 0,
            multiplier: 0

        }
        case STOP_BET_SUCCESS:
        return {
            ...state,
            betState: false,
            loading: false,
            betAmount: 0,
            multiplier: 0
        }
        case STOP_BET_ERROR:
        return {
            ...state,
            loading: false

        }
        case END_BET:
        return {
            ...state,
            betState: false,
            loading: false,
            betAmount: 0,
            multiplier: 0,

        }
        case SET_AUTO_BET:
        return {
            ...state,
            autoBetState: true

        }
        case STOP_AUTO_BET:
        return {
            ...state,
            autoBetState: false

        }
        
        default: return state
    }

}

export default betReducer;
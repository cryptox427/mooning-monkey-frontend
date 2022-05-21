import { GiTurret } from 'react-icons/gi';
import {GET_MAX_CREDITS, BET_SUCCESS, BET_ERROR} from '../../utils/types';

const initialState = {
    maxCredits: 0,
    betState: false,
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
            loading: false

        }
        case BET_ERROR:
        return {
            ...state,
            betState: false,
            loading: false

        }
        default: return state
    }

}

export default betReducer;
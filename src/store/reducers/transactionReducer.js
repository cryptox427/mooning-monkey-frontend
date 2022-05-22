import { GiTurret } from 'react-icons/gi';
import {GET_TRANSACTION_HISTORY_SUCCESS, GET_TRANSACTION_HISTORY_ERROR} from '../../utils/types';

const initialState = {
    transactionHistory: [],
    loading: false,
    loaded: false,
    networkError: false
}

const transactionReducer = (state = initialState, action) => {

    switch(action.type){

        case GET_TRANSACTION_HISTORY_SUCCESS:
        return {
            ...state,
            transactionHistory: action.payload,
            loading: false,
            loaded: true,
            networkError: false
        }
        case GET_TRANSACTION_HISTORY_ERROR:
        return {
            ...state,
            transactionHistory: [],
            loading: false,
            loaded: false,
            networkError: true
        }
        default: return state
    }

}

export default transactionReducer;
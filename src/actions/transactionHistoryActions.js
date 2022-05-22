
import {GET_TRANSACTION_HISTORY_SUCCESS, GET_TRANSACTION_HISTORY_ERROR} from '../utils/types'
import axios from 'axios'

export const getTransactionHistory = (information) => async dispatch => {
    try{
        const res = await axios.get(`./getTransactions.php?information=${information}`);
        console.log("~~~~~~~~~getTransactionHistory:", res.data)
        dispatch( {
            type: GET_TRANSACTION_HISTORY_SUCCESS,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: GET_TRANSACTION_HISTORY_ERROR,
            payload: console.log(e),
        })
    }

}

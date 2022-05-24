
import {SET_PUBLICKEY, GET_MY_RECENT_WINS_SUCCESS, GET_MY_RECENT_WINS_ERROR,
    CHANGE_CURRENT_PAGE} from '../utils/types'
import axios from 'axios'

import {serverUrl} from '../utils/constant'

export const setPublicKey = (publicKey) => async dispatch => {
    
    dispatch( {
        type: SET_PUBLICKEY,
        payload: publicKey
    })

}

export const changeCurrentPage = (targetPage) => dispatch => {
    
    dispatch( {
        type: CHANGE_CURRENT_PAGE,
        payload: targetPage
    })

}

export const getMyRecentWins = () => async dispatch => {
    
    
    try{
        const res = await axios.get(`${serverUrl}getWins.php`);
        console.log("~~~~~~~~~getMyRecentWins:", res.data)
        dispatch( {
            type: GET_MY_RECENT_WINS_SUCCESS,
            payload: res.data.data
        })
    }
    catch(e){
        dispatch( {
            type: GET_MY_RECENT_WINS_ERROR,
            payload: console.log(e),
        })
    }

}
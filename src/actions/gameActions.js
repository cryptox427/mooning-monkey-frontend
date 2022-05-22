
import {GET_ALL_BET_SUCCESS, GET_ALL_BET_ERROR, SET_GAME_RESULT} from '../utils/types'
import axios from 'axios'

import {serverUrl} from '../utils/constant'

export const getAllBets = () => async dispatch => {
    try{
        const res = await axios.get(`${serverUrl}getBets.php`);
        console.log("~~~~~~~~~all bet:", res.data)
        if(res.data.message === "Success") {
            dispatch( {
                type: GET_ALL_BET_SUCCESS,
                payload: res.data.data
            })
        }
        
    }
    catch(e){
        dispatch( {
            type: GET_ALL_BET_ERROR,
            payload: console.log(e),
        })
    }
}

export const removeAllBets = () => async dispatch => {
    dispatch( {
        type: GET_ALL_BET_SUCCESS,
        payload: []
    })
}

export const setGameResult = (result) => async dispatch => {
    dispatch( {
        type: SET_GAME_RESULT,
        payload: result
    })

}
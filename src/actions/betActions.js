
import {GET_MAX_CREDITS, GET_MAX_CREDITS_ERROR, BET_REQUEST, BET_SUCCESS, BET_ERROR} from '../utils/types'
import axios from 'axios'

import {serverUrl} from '../utils/constant'

export const getMaxCredits = (publicKey) => async dispatch => {
    
    
    try{

        const data = {
            publicKey: publicKey
        }
        const res = await axios.get(`${serverUrl}getCredits.php`);
        console.log("~~~~~~~~~credits:", res.data)
        dispatch( {
            type: GET_MAX_CREDITS,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: GET_MAX_CREDITS_ERROR,
            payload: console.log(e),
        })
    }

}

export const betRequest = (publicKey, amount, multiplier) => async dispatch => {
    console.log("~~~~~~~~~betRequest:")
    try{
        const data = {
            publicKey: publicKey,
            amount: amount,
            multiplier: multiplier
        }
        const res = await axios.get(`./bet.php?amount=${amount}&multiplier=${multiplier}`);
        console.log("~~~~~~~~~betResult:", res.data)
        if(res.data === "Success"){
            dispatch( {
                type: BET_SUCCESS
            })
        }
        else {
            dispatch( {
                type: BET_ERROR
            })
        }
    }
    catch(e){
        dispatch( {
            type: BET_ERROR,
            payload: console.log(e),
        })
    }

}
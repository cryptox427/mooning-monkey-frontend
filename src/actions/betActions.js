
import {GET_MAX_CREDITS, GET_MAX_CREDITS_ERROR, BET_REQUEST, BET_SUCCESS, BET_ERROR, END_BET, 
    STOP_BET_SUCCESS, STOP_BET_ERROR} from '../utils/types'
import axios from 'axios'

import {serverUrl} from '../utils/constant'

export const getMaxCredits = (publicKey) => async dispatch => {
    
    
    try{
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

export const betRequest = ( amount, multiplier) => async dispatch => {
    console.log("~~~~~~~~~betRequest:")
    try{
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

export const stopBet = ( ) => async dispatch => {
    console.log("~~~~~~~~~stopBet")
    try{
        const res = await axios.get("./stopBet.php");
        console.log("~~~~~~~~~stopBet:", res.data)
        if(res.data === "Success"){
            dispatch( {
                type: STOP_BET_SUCCESS
            })
        }
        else {
            dispatch( {
                type: STOP_BET_ERROR
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

export const endBet = () => async dispatch => {
    dispatch( {
        type: END_BET
    })
}
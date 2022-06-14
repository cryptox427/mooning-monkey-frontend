
import {GET_MAX_CREDITS, GET_MAX_CREDITS_ERROR, BET_REQUEST, BET_SUCCESS, BET_ERROR, END_BET, 
    STOP_BET_SUCCESS, STOP_BET_ERROR, SET_AUTO_BET, STOP_AUTO_BET} from '../utils/types'
import axios from 'axios'

import {serverUrl} from '../utils/constant'
import {setPopUp, getAllBets} from "./gameActions";

export const getMaxCredits = (publicKey) => async dispatch => {
    
    
    try{
        console.log("~~~~~~~~~credits:")
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
            setPopUp("You bet to this round")
            dispatch( {
                type: BET_SUCCESS,
                payload: {amount, multiplier}
            })
            dispatch(getAllBets())
        }
        else if(res.data === "Already placed a bet"){
            setPopUp("Already placed a bet")
            dispatch( {
                type: BET_SUCCESS,
                payload: {amount, multiplier}
            })
        }
        
        else {
            setPopUp("You can't bet to this round")
            dispatch( {
                type: BET_ERROR
            })
        }
    }
    catch(e){
        setPopUp("You can't bet to this round")
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
        console.log("~~~~~~~~~stopBet:", res)
        if(res.data === "Success"){
            dispatch( {
                type: STOP_BET_SUCCESS
            })
            dispatch(getAllBets())
        }
        else {
            setPopUp(res.data)
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
export const setAutoBet = () => async dispatch => {
    dispatch( {
        type: SET_AUTO_BET
    })
}
export const stopAutoBet = () => async dispatch => {
    dispatch( {
        type: STOP_AUTO_BET
    })
}

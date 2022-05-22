
import {GET_MAX_CREDITS, GET_MAX_CREDITS_ERROR, BET_REQUEST, BET_SUCCESS, BET_ERROR} from '../utils/types'
import axios from 'axios'

import {serverUrl} from '../utils/constant'

export const getMaxCredits = (publicKey) => async dispatch => {
    
    
    try{
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        //axios.defaults.withCredentials = true;
        axios.defaults.crossDomain = true;
        const data = {
            publicKey: publicKey
        }
        const res = await axios.post(`${serverUrl}getCredits.php`, {
                data: data,
                type: 'products'
            });
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
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        //axios.defaults.withCredentials = true;
        axios.defaults.crossDomain = true;
        const data = {
            publicKey: publicKey,
            amount: amount,
            multiplier: multiplier
        }
        const res = await axios.post(`./bet.php`, {
                data: data,
                type: 'products'
            });
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

import {SET_PUBLICKEY, GET_MY_RECENT_WINS_SUCCESS, GET_MY_RECENT_WINS_ERROR,
    CHANGE_CURRENT_PAGE, GET_LOGIN_REQUEST_SUCCESS, GET_LOGIN_REQUEST_ERROR} from '../utils/types'
import axios from 'axios'

import {serverUrl} from '../utils/constant'
import {getMaxCredits} from './betActions'

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

const postRequest = async (url, data) => {
    try {
        //axios.defaults.withCredentials = true;
        axios.defaults.crossDomain = true;
        console.log(JSON.stringify(data));
        const res = await axios.post(url, {
                data: data,
                type: 'products'
            });
            console.log("res:", res);
            return res;
    } catch (error) {
        return {status: "error", result: "Not responding"};
    }
};
export const login = (userData) => async dispatch => {
    try{
        axios.defaults.crossDomain = true;
        const res = await axios.post(`${serverUrl}check.php`, {
            data: userData
        });
        console.log("~~~~~~~~~login:", res.data)
        if(res.data === "login success") {
            dispatch( {
                type: GET_LOGIN_REQUEST_SUCCESS
            })
            setPublicKey(userData.password);
            getMaxCredits(userData.password);
            getMyRecentWins();
        }
        else {
            dispatch( {
                type: GET_LOGIN_REQUEST_ERROR,
                payload: console.log(res.data)
            })    
        }
    }
    catch(e){
        dispatch( {
            type: GET_LOGIN_REQUEST_ERROR,
            payload: console.log(e)
        })
    }
}
export const register = (userData) => async dispatch => {
    try{
        axios.defaults.crossDomain = true;
        const res = await axios.post(`${serverUrl}check.php`, {
            data: userData
        });
        console.log("~~~~~~~~~register:", res.data)
        if(res.data === "register success") {
            dispatch( {
                type: GET_LOGIN_REQUEST_SUCCESS
            })
            setPublicKey(userData.password);
            getMaxCredits(userData.password);
            getMyRecentWins();
        }
        else {
            dispatch( {
                type: GET_LOGIN_REQUEST_ERROR,
                payload: console.log(res.data)
            })    
        }
    }
    catch(e){
        dispatch( {
            type: GET_LOGIN_REQUEST_ERROR,
            payload: console.log(e)
        })
    }
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
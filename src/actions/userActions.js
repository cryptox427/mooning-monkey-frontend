
import {SET_PUBLICKEY, GET_MY_RECENT_WINS_SUCCESS, GET_MY_RECENT_WINS_ERROR,
    CHANGE_CURRENT_PAGE, GET_LOGIN_REQUEST_SUCCESS, GET_LOGIN_REQUEST_ERROR,
    GET_REGISTERED_STATUS_REQUEST, GET_REGISTERED_STATUS_SUCCESS, GET_REGISTERED_STATUS_ERROR,
    GET_STATS_REQUEST, GET_STATS_SUCCESS, GET_STATS_ERROR,
    GET_USER_STATS_REQUEST, GET_USER_STATS_SUCCESS, GET_USER_STATS_ERROR,
    GET_USERNAME_SUCCESS, ADD_FRIEND} from '../utils/types'
import axios from 'axios'

import {serverUrl} from '../utils/constant'
import {getMaxCredits} from './betActions'
import {setPopUp} from "./gameActions";

export const setPublicKey = (publicKey) => async dispatch => {
    console.log("setPublicKey")
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
        
        console.log("~~~~~~~~~login:", res, userData)
        if(res.data === "Login success") {
            setPopUp("Login success")
            dispatch( {
                type: GET_LOGIN_REQUEST_SUCCESS
            })
            dispatch(setPublicKey(userData.publicKey));
            dispatch(getMaxCredits(userData.publicKey));
            dispatch(getMyRecentWins());
            dispatch(getUserName());
            
        }
        else {
            setPopUp("Login failed")
            dispatch( {
                type: GET_LOGIN_REQUEST_ERROR,
                payload: console.log(res.data)
            })    
        }
    }
    catch(e){
        setPopUp("Login failed")
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
            setPopUp("register success")
            dispatch( {
                type: GET_LOGIN_REQUEST_SUCCESS
            })
            dispatch(setPublicKey(userData.publicKey));
            dispatch(getMaxCredits(userData.publicKey));
            dispatch(getMyRecentWins());
            dispatch(getUserName());
        }
        else {
            setPopUp("register failed")
            dispatch( {
                type: GET_LOGIN_REQUEST_ERROR,
                payload: console.log(res.data)
            })    
        }
    }
    catch(e){
        setPopUp("register failed")
        dispatch( {
            type: GET_LOGIN_REQUEST_ERROR,
            payload: console.log(e)
        })
    }
}
export const getRegisteredState = (walletAddress) => async dispatch => {
    try{
        const res = await axios.get(`${serverUrl}account.php?publicKey=${walletAddress}`);
        console.log("~~~~~~~~~getRegisteredState:", res)
            if (res.data === "Doesnt Exist") {
                dispatch( {
                    type: GET_REGISTERED_STATUS_SUCCESS,
                    payload: false
                })
            }
            
            if (res.data === "Exists") {
                dispatch( {
                    type: GET_REGISTERED_STATUS_SUCCESS,
                    payload: true
                })
            }
    }
    catch(e){
        dispatch( {
            type: GET_REGISTERED_STATUS_ERROR,
            payload: console.log("GET_REGISTERED_STATUS_SUCCESS")
        })
    }
}
export const getMyRecentWins = () => async dispatch => {
    try{
        console.log("~~~~~~~~~getMyRecentWins:")
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
export const getStats = () => async dispatch => {
    try{
        const res = await axios.get(`${serverUrl}getStats.php`);
        console.log("~~~~~~~~~getStats:", res.data)
        if(res.data.message === "Success") {
            dispatch( {
                type: GET_STATS_SUCCESS,
                payload: res.data.data
            })
        }
        else {
            dispatch( {
                type: GET_STATS_ERROR
            })
        }
    }
    catch(e){
        dispatch( {
            type: GET_STATS_ERROR,
            payload: console.log(e),
        })
    }
}
export const getUserStats = async (userName) => {
    try{
        const res = await axios.get(`${serverUrl}getUserStats.php?username=${userName}`);
        console.log("~~~~~~~~~getUserStats:", res.data)
        if(res.data.message === "Success") {
            return res.data.data
        }
        else {
            return []
        }
    }
    catch(e){
        console.log(e)
        return []
    }
}
export const getUserName = () => async dispatch => {
    try{
        const res = await axios.get(`${serverUrl}getUsername.php`);
        console.log("~~~~~~~~~getUsername:", res.data)
        dispatch( {
            type: GET_USERNAME_SUCCESS,
            payload: res.data
        })
    }
    catch(e){

    }
}
export const addFriend = (userName) => dispatch => {
    try{
        console.log("~~~~~~~~~addFriend:", userName)
        dispatch( {
            type: ADD_FRIEND,
            payload: userName
        })
    }
    catch(e){

    }
}
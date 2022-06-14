import { toast } from 'react-toastify';

import {
        GET_ALL_BET_SUCCESS, 
        GET_ALL_BET_ERROR, 
        SET_GAME_RESULT, 
        CHANGE_GAME_STATE,
        GAME_HISTORY_TYPE,
        GET_GAME_HISTORY_SUCCESS,
        GET_GAME_HISTORY_ERROR,
        GET_LEADERBOARD_SUCCESS,
        GET_LEADERBOARD_ERROR ,
        SET_POPUP,
        GET_ONLINE_PLEYERS_SUCCESS,
        GET_ONLINE_PLEYERS_ERROR,
        SHOW_LOGIN_MODAL,
        HIDE_LOGIN_MODAL,
        HIDE_STATS_MODAL,
        SHOW_STATS_MODAL
    } from '../utils/types'
import axios from 'axios'

import {serverUrl} from '../utils/constant'

export const getLeaderBoards = async () => {
    try{
        const res = await axios.get(`${serverUrl}getLeaderboard.php`);
        console.log("~~~~~~~~~all getLeaderBoards:", res.data)
        if(res.data.message === "Success") {
            return res.data.data;
        }
        else {
            return [];
        }
    }
    catch(e){
        console.log("Error: getLeaderBoards")
        return [];
    }
}

export const getAllBets = () => async dispatch => {
    try{
        console.log("~~~~~~~~~all bet")
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
            type: GET_ALL_BET_ERROR
        })
    }
}
export const getOnlinePlayerCount = () => async dispatch => {
    try{
        console.log("~~~~~~~~~getOnlinePlayerCount")
        const res = await axios.get(`${serverUrl}getOnline.php`);
        console.log("~~~~~~~~~getOnlinePlayerCount:", res.data)
        dispatch( {
            type: GET_ONLINE_PLEYERS_SUCCESS,
            payload: res.data
        })
        
    }
    catch(e){
        dispatch( {
            type: GET_ONLINE_PLEYERS_ERROR
        })
    }
}
export const getHistoryData = (historyType) => async (dispatch) => {
    let apiUrl = "";
    switch(historyType) {
        case GAME_HISTORY_TYPE.ALL:
            apiUrl = "getAllWins.php";
            break;
        case GAME_HISTORY_TYPE.HIGH_WINS:
            apiUrl = "getHighWins.php";
            break;
        case GAME_HISTORY_TYPE.LUCKY_WINS:
            apiUrl = "getLuckyWins.php";
            break;
        case GAME_HISTORY_TYPE.MY_WAGER:
            apiUrl = "getWagers.php";
            break;
    }
    try{
        const res = await axios.get(`${serverUrl}${apiUrl}`);
        console.log("~~~~~~~~~getHistoryData:", res.data)
        if(res.data.message === "Success") {
            dispatch( {
                type: GET_GAME_HISTORY_SUCCESS,
                payload: res.data.data,
                historyType: historyType
            })
        }
    }
    catch(e){
        dispatch( {
            type: GET_GAME_HISTORY_ERROR,
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

export const changeGameState = (gameState) => async dispatch => {
    dispatch( {
        type: CHANGE_GAME_STATE,
        payload: gameState
    })

}
export const setPopUp = (popup) => {
    console.log("popup")
    toast.info(popup, {
        position: "top-right",
        autoClose: false,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    });
    // dispatch( {
    //     type: SET_POPUP,
    //     payload: popup
    // })

}
export const showLoginModal = () => dispatch => {
    console.log("showLoginModal")
    dispatch( {
        type: SHOW_LOGIN_MODAL
    })
}
export const hideLoginModal = () => dispatch => {
    console.log("hideLoginModal")
    dispatch( {
        type: HIDE_LOGIN_MODAL
    })
}
export const showStatsModal = () => dispatch => {
    console.log("showStatsModal")
    dispatch( {
        type: SHOW_STATS_MODAL
    })
}
export const hideStatsModal = () => dispatch => {
    console.log("hideStatsModal")
    dispatch( {
        type: HIDE_STATS_MODAL
    })
}

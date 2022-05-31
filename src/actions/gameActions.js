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
        SET_POPUP
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
            type: GET_ALL_BET_ERROR,
            payload: console.log(e),
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
    }
    try{
        const res = await axios.get(`${serverUrl}${apiUrl}`);
        console.log("~~~~~~~~~getHistoryData:", res.data)
        if(res.data.message === "Success") {
            dispatch( {
                type: GET_GAME_HISTORY_SUCCESS,
                payload: res.data.data
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
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    });
    // dispatch( {
    //     type: SET_POPUP,
    //     payload: popup
    // })

}

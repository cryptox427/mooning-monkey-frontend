
import {SET_PUBLICKEY, GET_MY_RECENT_WINS_SUCCESS, GET_MY_RECENT_WINS_ERROR} from '../utils/types'
import axios from 'axios'
import {serverUrl} from '../utils/constant'
import {postRequest} from '../utils/request'
import {setPopUp} from "./gameActions";

export const withdraw = async (tokenId, tokenAmount) => {
    try{
        const data = {
            tokenId,
            tokenAmount
        }
        const res = await postRequest(`${serverUrl}withdraw.php`, data);
        if(res.data === "Success") {
            setPopUp("withdraw success")
        }
        else {
            setPopUp("withdraw failed")
        }
        console.log("~~~~~~~~~withdraw:", res.data)
        return res.data;
    }
    catch(e){
        console.log("withdraw error")
    }

}
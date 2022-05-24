
import {SET_PUBLICKEY, GET_MY_RECENT_WINS_SUCCESS, GET_MY_RECENT_WINS_ERROR} from '../utils/types'
import axios from 'axios'
import {serverUrl} from '../utils/constant'
import {postRequest} from '../utils/request'

export const withdraw = async (tokenId, tokenAmount) => {
    try{
        const data = {
            tokenId,
            tokenAmount
        }
        const res = await postRequest(`${serverUrl}withdraw.php`, data);
        console.log("~~~~~~~~~withdraw:", res.data)
        return res.data;
    }
    catch(e){
        console.log("withdraw error")
    }

}
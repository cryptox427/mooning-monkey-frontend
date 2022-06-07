
import axios from 'axios'
import {serverUrl} from '../utils/constant'
import {postRequest} from '../utils/request'
import {setPopUp} from "./gameActions";

export const withdraw = async (tokenId, tokenAmount) => {
    try{
        const res = await axios.get(`${serverUrl}withdraw.php?amount=`, tokenAmount);
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
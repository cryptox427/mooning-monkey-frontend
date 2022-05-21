
import {SET_PUBLICKEY} from '../utils/types'
import axios from 'axios'

export const setPublicKey = (publicKey) => async dispatch => {
    
    dispatch( {
        type: SET_PUBLICKEY,
        payload: publicKey
    })

}
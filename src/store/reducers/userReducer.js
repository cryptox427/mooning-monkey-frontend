import {SET_PUBLICKEY} from '../../utils/types';

const initialState = {
    publicKey: 0,
    loading:true
}

const userReducer = (state = initialState, action) => {

    switch(action.type){

        case SET_PUBLICKEY:
        return {
            ...state,
            publicKey: action.payload,
            loading: false

        }
        default: return state
    }

}

export default userReducer;
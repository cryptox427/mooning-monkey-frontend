import {SET_PUBLICKEY, GET_MY_RECENT_WINS_SUCCESS, GET_MY_RECENT_WINS_ERROR} from '../../utils/types';

const initialState = {
    publicKey: 0,
    myRecentWin: [],
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
        case GET_MY_RECENT_WINS_SUCCESS:
        return {
            ...state,
            myRecentWin: action.payload.map(myWinData => 
                {
                    return { 
                        bet: myWinData[0], 
                        multiplier:myWinData[1], 
                        payout:myWinData[2]
                    }
                }),
            
            loading: false
        }
        default: return state
    }

}

export default userReducer;
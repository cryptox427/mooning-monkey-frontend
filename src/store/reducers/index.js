import { combineReducers } from 'redux'
import betReducer from './betReducer'
import userReducer from './userReducer'
import transactionReducer from './transactionReducer'
import gameReducer from './gameReducer'

export default combineReducers({
  betData: betReducer,
  userData: userReducer,
  transactionData: transactionReducer,
  betGameData: gameReducer
})
import { combineReducers } from 'redux'
import betReducer from './betReducer'
import userReducer from './userReducer'
import transactionReducer from './transactionReducer'

export default combineReducers({
  betData: betReducer,
  userData: userReducer,
  transactionData: transactionReducer
})
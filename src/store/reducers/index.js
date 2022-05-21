import { combineReducers } from 'redux'
import betReducer from './betReducer'
import userReducer from './userReducer'

export default combineReducers({
  betData: betReducer,
  userData: userReducer
})
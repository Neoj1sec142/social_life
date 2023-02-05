import { combineReducers } from "redux";
import auth from './auth'
import alert from './alert'
import social from './social'

export default combineReducers({
    auth,
    alert,
    social
})
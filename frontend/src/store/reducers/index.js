import { combineReducers } from "redux";
import auth from './auth'
import post from './post'
// import userProfile from './userProfile'
import alert from './alert'

export default combineReducers({
    auth,
    post,
    alert
})
import { combineReducers } from "redux";
import auth from './auth'
import post from './post'
import userProfile from './userProfile'
import alert from './alert'
import comment from "./comment";
import threadModel from "./threadModel";
import message from './message'
export default combineReducers({
    auth,
    post,
    alert,
    comment,
    userProfile,
    threadModel,
    message
})
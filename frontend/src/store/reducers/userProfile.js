/* eslint-disable import/no-anonymous-default-export */
import {
    LOAD_USERPROFILES_SUCCESS, LOAD_USERPROFILES_FAIL, 
    LOAD_USERPROFILE_SUCCESS, LOAD_USERPROFILE_FAIL, 
    USERPROFILE_UPDATE_SUCCESS, USERPROFILE_UPDATE_FAIL, 
    FOLLOW_USERPROFILE_SUCCESS, FOLLOW_USERPROFILE_FAIL, 
    UNFOLLOW_USERPROFILE_SUCCESS, UNFOLLOW_USERPROFILE_FAIL,
    LOAD_USERINFO_SUCCESS, LOAD_USERINFO_FAIL,
    LOAD_USER_FOLLOWERS_SUCCESS, LOAD_USER_FOLLOWERS_FAIL,
    LOAD_ALL_FOLLOWERS_SUCCESS, LOAD_ALL_FOLLOWERS_FAIL
} from '../types'

const initialState = {
    userProfiles: [],
    userProfile: {},
    all_followers: [],
    user_followers: [],
    userInfo: []
}

export default function(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case LOAD_USERPROFILES_SUCCESS:
            return{
                ...state,
                userProfiles: payload
            }
        
        case LOAD_USERPROFILE_SUCCESS:
            return{
                ...state,
                userProfile: payload
            }
        case LOAD_USERINFO_SUCCESS:
            return{
                ...state,
                userInfo: payload
            }
        case LOAD_USER_FOLLOWERS_SUCCESS:
            return{
                ...state,
                user_followers: payload
            }
        case LOAD_ALL_FOLLOWERS_SUCCESS:
            return{
                ...state,
                all_followers: payload
            }
        case LOAD_USER_FOLLOWERS_FAIL:
        case LOAD_ALL_FOLLOWERS_FAIL:
        case LOAD_USERINFO_FAIL:
        case FOLLOW_USERPROFILE_SUCCESS:
        case UNFOLLOW_USERPROFILE_SUCCESS:
        case USERPROFILE_UPDATE_SUCCESS:
        case LOAD_USERPROFILES_FAIL:
        case LOAD_USERPROFILE_FAIL:
        case USERPROFILE_UPDATE_FAIL:
        case FOLLOW_USERPROFILE_FAIL:
        case UNFOLLOW_USERPROFILE_FAIL:
            return{...state}
        default:
            return state
    }
}
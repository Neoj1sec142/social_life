/* eslint-disable import/no-anonymous-default-export */
import {
    LOAD_USERPROFILES_SUCCESS, LOAD_USERPROFILES_FAIL, 
    LOAD_USERPROFILE_SUCCESS, LOAD_USERPROFILE_FAIL, 
    USERPROFILE_UPDATE_SUCCESS, USERPROFILE_UPDATE_FAIL, 
    FOLLOW_USERPROFILE_SUCCESS, FOLLOW_USERPROFILE_FAIL, 
    UNFOLLOW_USERPROFILE_SUCCESS, UNFOLLOW_USERPROFILE_FAIL
} from '../types'

const initialState = {
    userProfiles: [],
    userProfile: {},
}

export default function(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case LOAD_USERPROFILES_SUCCESS:
            return{
                ...state,
                userProfiles: payload
            }
        case FOLLOW_USERPROFILE_SUCCESS:
        case UNFOLLOW_USERPROFILE_SUCCESS:
        case USERPROFILE_UPDATE_SUCCESS:
        case LOAD_USERPROFILE_SUCCESS:
            return{
                ...state,
                userProfile: payload
            }
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
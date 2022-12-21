/* eslint-disable import/no-anonymous-default-export */
import {
    UPLOAD_POST_SUCCESS, UPLOAD_POST_FAIL, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAIL, LOAD_POST_SUCCESS,
    LOAD_POST_FAIL, DESTROY_POST_SUCCESS, DESTORY_POST_FAIL, POST_UPDATE_SUCCESS, POST_UPDATE_FAIL,
    LIKE_POST_SUCCESS, LIKE_POST_FAIL, DISLIKE_POST_SUCCESS, DISLIKE_POST_FAIL
} from '../types'

const initialState = {
    posts: [],
    post: {},
}

export default function(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case LOAD_POSTS_SUCCESS:
            return{
                ...state,
                posts: payload
            }
        case LIKE_POST_SUCCESS:
        case DISLIKE_POST_SUCCESS:
        case POST_UPDATE_SUCCESS:
        case LOAD_POST_SUCCESS:
            return{
                ...state,
                post: payload
            }
        case UPLOAD_POST_SUCCESS:
        case DESTROY_POST_SUCCESS:
        case UPLOAD_POST_FAIL:
        case LOAD_POST_FAIL:
        case DESTORY_POST_FAIL:
        case POST_UPDATE_FAIL:
        case LIKE_POST_FAIL:
        case DISLIKE_POST_FAIL:   
        case LOAD_POSTS_FAIL:
            return{...state}
        default:
            return state
    }
}
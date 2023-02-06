/* eslint-disable import/no-anonymous-default-export */
import {
    UPLOAD_POST_SUCCESS, UPLOAD_POST_FAIL,
    LOAD_POSTS_SUCCESS, LOAD_POSTS_FAIL,
    LOAD_POST_SUCCESS, LOAD_POST_FAIL,
    REMOVE_POST_SUCCESS, REMOVE_POST_FAIL,
    UPLOAD_COMMENT_SUCCESS, UPLOAD_COMMENT_FAIL,
    LOAD_COMMENTS_SUCCESS, LOAD_COMMENTS_FAIL,
    LOAD_COMMENT_SUCCESS, LOAD_COMMENT_FAIL,
    REMOVE_COMMENT_SUCCESS, REMOVE_COMMENT_FAIL,
    LOAD_PROFILE_LIST_SUCCESS, LOAD_PROFILE_LIST_FAIL
} from '../types'

const initialState = {
    posts: [],
    post: {},
    postAuthor: {},
    comments: [],
    comment: {}
}

export default function(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case LOAD_PROFILE_LIST_SUCCESS:
        case LOAD_POSTS_SUCCESS:
            return{
                ...state,
                posts: payload
            }
        case UPLOAD_POST_SUCCESS:
            return{
                ...state,
                post: payload
            }
        case LOAD_POST_SUCCESS:
            return{
                ...state,
                post: payload.post,
                comments: payload.comments,
                postAuthor: payload.author
            }
        case LOAD_COMMENTS_SUCCESS:
            return{
                ...state,
                comments: payload
            }
        case UPLOAD_COMMENT_SUCCESS:
        case LOAD_COMMENT_SUCCESS:
            return{
                ...state,
                comment: payload
            }
        case LOAD_PROFILE_LIST_FAIL:
        case UPLOAD_POST_FAIL:
        case LOAD_POST_FAIL:
        case REMOVE_POST_SUCCESS:
        case REMOVE_POST_FAIL:
        case UPLOAD_COMMENT_FAIL:
        case LOAD_COMMENTS_FAIL:
        case LOAD_COMMENT_FAIL:
        case REMOVE_COMMENT_SUCCESS:
        case REMOVE_COMMENT_FAIL:
        case LOAD_POSTS_FAIL:
            return{...state}
        default:
            return state
    }
}
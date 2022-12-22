/* eslint-disable import/no-anonymous-default-export */
import {
    UPLOAD_COMMENT_SUCCESS, UPLOAD_COMMENT_FAIL, LOAD_COMMENTS_SUCCESS, LOAD_COMMENTS_FAIL, LOAD_COMMENT_SUCCESS,
    LOAD_COMMENT_FAIL, DESTROY_COMMENT_SUCCESS, DESTORY_COMMENT_FAIL, COMMENT_UPDATE_SUCCESS, COMMENT_UPDATE_FAIL,
    LIKE_COMMENT_SUCCESS, LIKE_COMMENT_FAIL, DISLIKE_COMMENT_SUCCESS, DISLIKE_COMMENT_FAIL
} from '../types'

const initialState = {
    comments: [],
    comment: {},
}

export default function(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case LOAD_COMMENTS_SUCCESS:
            return{
                ...state,
                COMMENTs: payload
            }
        case LIKE_COMMENT_SUCCESS:
        case DISLIKE_COMMENT_SUCCESS:
        case COMMENT_UPDATE_SUCCESS:
        case LOAD_COMMENT_SUCCESS:
            return{
                ...state,
                COMMENT: payload
            }
        case UPLOAD_COMMENT_SUCCESS:
        case DESTROY_COMMENT_SUCCESS:
        case UPLOAD_COMMENT_FAIL:
        case LOAD_COMMENT_FAIL:
        case DESTORY_COMMENT_FAIL:
        case COMMENT_UPDATE_FAIL:
        case LIKE_COMMENT_FAIL:
        case DISLIKE_COMMENT_FAIL:   
        case LOAD_COMMENTS_FAIL:
            return{...state}
        default:
            return state
    }
}
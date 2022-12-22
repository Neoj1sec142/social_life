import { GetComments, GetCommentById, CreateComment } from '../services/CommentServices'
import {
    UPLOAD_COMMENT_SUCCESS, UPLOAD_COMMENT_FAIL, LOAD_COMMENTS_SUCCESS, LOAD_COMMENTS_FAIL, 
    LOAD_COMMENT_SUCCESS, LOAD_COMMENT_FAIL, DESTROY_COMMENT_SUCCESS, DESTORY_COMMENT_FAIL, 
    COMMENT_UPDATE_SUCCESS, COMMENT_UPDATE_FAIL, LIKE_COMMENT_SUCCESS, LIKE_COMMENT_FAIL, 
    DISLIKE_COMMENT_SUCCESS, DISLIKE_COMMENT_FAIL
} from '../types'
import { setAlert } from './alert'

export const get_comments = () => async dispatch => {
    try{
        const res = await GetComments()
        if(res.status === 200){
            dispatch({
                type: LOAD_COMMENTS_SUCCESS,
                payload: res.data
            })
        }else{
            dispatch({
                type: LOAD_COMMENTS_FAIL
            })
            dispatch(setAlert('An Error Occured Loading the Feed', 'error'))
        }
    }catch(err){
        dispatch({
            type: LOAD_COMMENTS_FAIL
        })
        dispatch(setAlert(err, 'error'))
    }
}

export const get_comment_by_id = (id) => async dispatch => {
    try{
        const res = await GetCommentById(id)
        if(res.status === 200){
            dispatch({
                type: LOAD_COMMENT_SUCCESS,
                payload: res.data
            })
        }else{
            dispatch({
                type: LOAD_COMMENT_FAIL
            })
            dispatch(setAlert('An Error Occured Loading the Comment', 'error'))
        }
    }catch(err){
        dispatch({
            type: LOAD_COMMENT_FAIL
        })
        dispatch(setAlert(err, 'error'))
    }
}

export const upload_comment = (post_id, comment) => async dispatch => {
    try{
        const res = await CreateComment(post_id, comment)
        console.log(res, "CREATE COMMENT RES")
        if(res.status === 201 || res.statusText === 'Created'){
            dispatch({
                type : UPLOAD_COMMENT_SUCCESS
            })
            dispatch(setAlert('Successfully Commented', 'success'))
        }else{
            dispatch({
                type: UPLOAD_COMMENT_FAIL
            })
            dispatch(setAlert('Error Commenting to Feed', 'error'))
        }
    }catch(err){
        dispatch({
            type: UPLOAD_COMMENT_FAIL
        })
        dispatch(setAlert(err, 'error'))
    }
}
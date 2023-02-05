import {
    UPLOAD_POST_SUCCESS, UPLOAD_POST_FAIL,
    LOAD_POSTS_SUCCESS, LOAD_POSTS_FAIL,
    LOAD_POST_SUCCESS, LOAD_POST_FAIL,
    REMOVE_POST_SUCCESS, REMOVE_POST_FAIL,
    UPLOAD_COMMENT_SUCCESS, UPLOAD_COMMENT_FAIL,
    LOAD_COMMENTS_SUCCESS, LOAD_COMMENTS_FAIL,
    LOAD_COMMENT_SUCCESS, LOAD_COMMENT_FAIL,
    REMOVE_COMMENT_SUCCESS, REMOVE_COMMENT_FAIL,
} from '../types'
import { setAlert } from './alert'
import {
 GetPosts, GetPostDetail, GetPostComments, GetCommentById,
 CreatePost, CreateComment, RemovePost, RemoveComment
} from '../services/PostServices'
// Post Actions
export const load_posts = () => async dispatch => {
    try{
        const res = await GetPosts()
        if(res.status === 200){
            dispatch({
                type: LOAD_POSTS_SUCCESS,
                payload: res.data
            })
            
        }else{
            console.log(res, 'error 1')
            dispatch({
                type: LOAD_POSTS_FAIL
            })
            dispatch(setAlert('Error fetching posts', 'error'))
        }
    }catch(err){
        console.log(err, 'error 2')
        dispatch({
            type: LOAD_POSTS_FAIL
        })
        dispatch(setAlert('Error fetching posts', 'error'))
    }
}

export const load_post_by_id = (id) => async dispatch => {
    try{
        const res = await GetPostDetail(id)
        if(res.status === 200){
            dispatch({
                type: LOAD_POST_SUCCESS,
                payload: res.data
            })
            
        }else{
            console.log(res, 'error 1')
            dispatch({
                type: LOAD_POST_FAIL
            })
            dispatch(setAlert('Error fetching posts', 'error'))
        }
    }catch(err){
        console.log(err, 'error 2')
        dispatch({
            type: LOAD_POST_FAIL
        })
        dispatch(setAlert('Error fetching posts', 'error'))
    }
}

export const upload_post = (post) => async dispatch => {
    try{
        const res = await CreatePost(post)
        if(res.status === 201 || res.statusText === 'Created'){
            dispatch({
                type: UPLOAD_POST_SUCCESS,
                payload: res.data
            })
            
        }else{
            console.log(res, 'error 1')
            dispatch({
                type: UPLOAD_POST_FAIL
            })
            dispatch(setAlert('Error creating posts', 'error'))
        }
    }catch(err){
        console.log(err, 'error 2')
        dispatch({
            type: UPLOAD_POST_FAIL
        })
        dispatch(setAlert('Error creating posts', 'error'))
    }
}

export const destroy_post = (id) => async dispatch => {
    try{
        const res = await RemovePost(id)
        if(res.status === 204 || res.statusText === 'Not Found'){
            dispatch({
                type: REMOVE_POST_SUCCESS
            })
        }else{
            
            dispatch({
                type: REMOVE_POST_FAIL
            })
        }
    }catch(err){
        console.log(err, "ERR 2")
        dispatch({
            type: REMOVE_POST_FAIL
        })
    }
}

// Comment Actions
export const load_post_comments = (post_pk) => async dispatch => {
    try{
        const res = await GetPostComments(post_pk)
        if(res.status === 200){
            dispatch({
                type: LOAD_COMMENTS_SUCCESS,
                payload: res.data
            })
            
        }else{
            console.log(res, 'error 1')
            dispatch({
                type: LOAD_COMMENTS_FAIL
            })
            dispatch(setAlert('Error fetching posts comments', 'error'))
        }
    }catch(err){
        console.log(err, 'error 2')
        dispatch({
            type: LOAD_COMMENTS_FAIL
        })
        dispatch(setAlert('Error fetching posts comments', 'error'))
    }
}

export const load_comment_by_id = (id) => async dispatch => {
    try{
        const res = await GetCommentById(id)
        if(res.status === 200){
            dispatch({
                type: LOAD_COMMENT_SUCCESS,
                payload: res.data
            })
            
        }else{
            console.log(res, 'error 1')
            dispatch({
                type: LOAD_COMMENT_FAIL
            })
            dispatch(setAlert('Error fetching posts comment', 'error'))
        }
    }catch(err){
        console.log(err, 'error 2')
        dispatch({
            type: LOAD_COMMENT_FAIL
        })
        dispatch(setAlert('Error fetching posts comment', 'error'))
    }
}

export const upload_comment = (comment) => async dispatch => {
    try{
        const res = await CreateComment(comment)
        if(res.status === 201 || res.statusText === 'Created'){
            dispatch({
                type: UPLOAD_COMMENT_SUCCESS,
                payload: res.data
            })
            
        }else{
            console.log(res, 'error 1')
            dispatch({
                type: UPLOAD_COMMENT_FAIL
            })
            dispatch(setAlert('Error fetching posts comments', 'error'))
        }
    }catch(err){
        console.log(err, 'error 2')
        dispatch({
            type: UPLOAD_COMMENT_FAIL
        })
        dispatch(setAlert('Error fetching posts comments', 'error'))
    }
}

export const destory_comment = (id) => async dispatch => {
    try{
        const res = await RemoveComment(id)
        if(res.status === 204 || res.statusText === 'Not Found'){
            dispatch({
                type: REMOVE_COMMENT_SUCCESS
            })
        }else{
            
            dispatch({
                type: REMOVE_COMMENT_FAIL
            })
        }
    }catch(err){
        console.log(err, "ERR 2")
        dispatch({
            type: REMOVE_COMMENT_FAIL
        })
    }
}
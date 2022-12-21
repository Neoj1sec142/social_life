import { GetPosts, GetPostById, CreatePost } from '../services/PostServices'
import {
    UPLOAD_POST_SUCCESS, UPLOAD_POST_FAIL, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAIL, 
    LOAD_POST_SUCCESS, LOAD_POST_FAIL, DESTROY_POST_SUCCESS, DESTORY_POST_FAIL, 
    POST_UPDATE_SUCCESS, POST_UPDATE_FAIL, LIKE_POST_SUCCESS, LIKE_POST_FAIL, 
    DISLIKE_POST_SUCCESS, DISLIKE_POST_FAIL
} from '../types'
import { setAlert } from './alert'

export const get_posts = () => async dispatch => {
    try{
        const res = await GetPosts()
        if(res.status === 200){
            dispatch({
                type: LOAD_POSTS_SUCCESS,
                payload: res.data
            })
        }else{
            dispatch({
                type: LOAD_POSTS_FAIL
            })
            dispatch(setAlert('An Error Occured Loading the Feed', 'error'))
        }
    }catch(err){
        dispatch({
            type: LOAD_POSTS_FAIL
        })
        dispatch(setAlert(err, 'error'))
    }
}

export const get_post_by_id = (id) => async dispatch => {
    try{
        const res = await GetPostById(id)
        if(res.status === 200){
            dispatch({
                type: LOAD_POST_SUCCESS,
                payload: res.data
            })
        }else{
            dispatch({
                type: LOAD_POST_FAIL
            })
            dispatch(setAlert('An Error Occured Loading the Post', 'error'))
        }
    }catch(err){
        dispatch({
            type: LOAD_POST_FAIL
        })
        dispatch(setAlert(err, 'error'))
    }
}

export const upload_post = (post) => async dispatch => {
    try{
        const res = await CreatePost(post)
        console.log(res, "CREATE POST RES")
        if(res.status === 201 || res.statusText === 'Created'){
            dispatch({
                type : UPLOAD_POST_SUCCESS
            })
            dispatch(setAlert('Successfully Posted', 'success'))
        }else{
            dispatch({
                type: UPLOAD_POST_FAIL
            })
            dispatch(setAlert('Error Posting to Feed', 'error'))
        }
    }catch(err){
        dispatch({
            type: UPLOAD_POST_FAIL
        })
        dispatch(setAlert(err, 'error'))
    }
}
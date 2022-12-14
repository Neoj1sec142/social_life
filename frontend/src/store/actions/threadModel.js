import {
    GetThread, CreateThread, RemoveThread, GetThreadByUser
} from '../services/ThreadServices'
import {
    CREATE_THREAD_SUCCESS, CREATE_THREAD_FAIL, DELETE_THREAD_SUCCESS, 
    DELETE_THREAD_FAIL, LOAD_THREADS_SUCCESS, LOAD_THREADS_FAIL, 
    LOAD_THREAD_SUCCESS, LOAD_THREAD_FAIL
} from '../types'
import {setAlert} from '../actions/alert'

export const load_thread_by_id = (id) => async dispatch => {
    try{
        const res = await GetThread(id)
        if(res.status === 200){
            dispatch({
                type: LOAD_THREAD_SUCCESS,
                payload: res.data
            })
        }else{
            dispatch({
                type: LOAD_THREAD_FAIL
            })
        }
    }catch(err){
        dispatch({
            type: LOAD_THREAD_FAIL
        })
    }
}
export const load_threads_by_user = (id) => async dispatch => {
    try{
        const res = await GetThreadByUser(id)
        if(res.status === 200){
            dispatch({
                type: LOAD_THREADS_SUCCESS,
                payload: res.data
            })
        }else{
            dispatch({
                type: LOAD_THREADS_FAIL
            })
        }
    }catch(err){
        dispatch({
            type: LOAD_THREADS_FAIL
        })
    }
}
export const upload_thread = (thread) => async dispatch => {
    try{
        const res = await CreateThread(thread)
        if(res.status === 201 || res.statusText === 'Created'){
            dispatch({
                type: CREATE_THREAD_SUCCESS,
                payload: res.data
            })
        }else{
            dispatch({
                type: CREATE_THREAD_FAIL
            })
        }
    }catch(err){
        dispatch({
            type: CREATE_THREAD_FAIL
        })
    }
}

export const destroy_thread = (id) => async dispatch => {
    try{
        const res = await RemoveThread(id)
        if(res.status === 204 || res.statusText === 'Not Found'){
            dispatch({
                type: DELETE_THREAD_SUCCESS
            })
        }else{
            dispatch({
                type: DELETE_THREAD_FAIL
            })
        }
    }catch(err){
        dispatch({
            type: DELETE_THREAD_FAIL
        })
    }
}
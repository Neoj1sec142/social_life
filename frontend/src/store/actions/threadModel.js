import {
    GetThreadById, GetThreads, CreateThread, UpdateThread, RemoveThread
} from '../services/ThreadServices'
import {
    CREATE_THREAD_SUCCESS, CREATE_THREAD_FAIL, DELETE_THREAD_SUCCESS, 
    DELETE_THREAD_FAIL, UPDATE_THREAD_SUCCESS, UPDATE_THREAD_FAIL, 
    LOAD_THREADS_SUCCESS, LOAD_THREADS_FAIL, LOAD_THREAD_SUCCESS, LOAD_THREAD_FAIL
} from '../types'
import {setAlert} from '../actions/alert'

export const load_threads = () => async dispatch => {
    try{
        const res = await GetThreads()
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
export const load_thread_by_id = (id) => async dispatch => {}
export const upload_thread = (thread) => async dispatch => {}
export const update_thread = (id, threadDetails) => async dispatch => {}
export const destroy_threads = (id) => async dispatch => {}
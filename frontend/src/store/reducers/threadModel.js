/* eslint-disable import/no-anonymous-default-export */
import {
    LOAD_THREADS_SUCCESS, LOAD_THREADS_FAIL,
    LOAD_THREAD_SUCCESS, LOAD_THREAD_FAIL,
    CREATE_THREAD_SUCCESS, CREATE_THREAD_FAIL,
    DELETE_THREAD_SUCCESS, DELETE_THREAD_FAIL,
    UPDATE_THREAD_SUCCESS, UPDATE_THREAD_FAIL
} from '../types'

const initialState = {
    threadModels: [],
    threadModel: {},
}

export default function(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case LOAD_THREAD_SUCCESS:
            return{
                ...state,
                threadModel: payload
            }
        case LOAD_THREADS_SUCCESS:
            return{
                ...state,
                threadModels: payload
            }
        case CREATE_THREAD_SUCCESS:
        case DELETE_THREAD_SUCCESS:
        case UPDATE_THREAD_SUCCESS:
        case LOAD_THREADS_FAIL:
        case CREATE_THREAD_FAIL:
        case DELETE_THREAD_FAIL:
        case UPDATE_THREAD_FAIL:
        case LOAD_THREAD_FAIL: 
            return{...state}
        default:
            return state
    }
}
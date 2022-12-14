/* eslint-disable import/no-anonymous-default-export */
import {
    SIGNUP_SUCCESS, SIGNUP_FAIL, LOGIN_SUCCESS, 
    LOGOUT_SUCCESS, LOGOUT_FAIL, LOGIN_FAIL,
    LOAD_CURRENT_SUCCESS, LOAD_CURRENT_FAIL,
    LOAD_USERS_SUCCESS, LOAD_USERS_FAIL
} from '../types'

const initialState = {
    current_user: {},
    access_token: localStorage.getItem('access_token'),
    refresh_token: localStorage.getItem("refresh_token"),
    isAuthenticated: false,
    loading: false,
    users: []
}

export default function(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case LOAD_CURRENT_SUCCESS:
            localStorage.setItem('user_id', payload.id)
            localStorage.setItem('username', payload.username)
            localStorage.setItem('is_staff', payload.is_staff)
            return{
                ...state,
                isAuthenticated: payload.is_active,
                current_user: payload,
            }
        case LOAD_USERS_SUCCESS:
            return{
                ...state,
                users: payload
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('access_token', payload.access)
            localStorage.setItem('refresh_token', payload.refresh)
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                access_token: payload.access,
                refresh_token: payload.refresh
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                loading: true
            }
        case LOAD_CURRENT_FAIL:
        case SIGNUP_FAIL:
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
            return{
                ...state,
                token: null,
                loading: false
            }
        case LOAD_USERS_FAIL:
        case LOGOUT_FAIL:
            return{...state}
        default:
            return state
    }
}
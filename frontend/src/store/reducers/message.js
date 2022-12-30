/* eslint-disable import/no-anonymous-default-export */
import {
    MESSAGE_SENT_SUCCESS, MESSAGE_SENT_FAIL,
    LOAD_MESSAGES_SUCCESS, LOAD_MESSAGES_FAIL, 
    LOAD_MESSAGE_SUCCESS, LOAD_MESSAGE_FAIL
} from '../types'

const initialState = {
    messages: [],
    message: {},
}

export default function(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case LOAD_MESSAGES_SUCCESS:
            return{
                ...state,
                messages: payload
            }
        case LOAD_MESSAGE_SUCCESS:
            return{
                ...state,
                message: payload
            }
        case MESSAGE_SENT_FAIL:
        case LOAD_MESSAGES_FAIL:
        case LOAD_MESSAGE_FAIL:
        case MESSAGE_SENT_SUCCESS:
            return{...state}
        default:
            return state
    }
}
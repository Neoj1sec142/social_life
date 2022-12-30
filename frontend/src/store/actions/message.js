import {
    MESSAGE_SENT_SUCCESS, MESSAGE_SENT_FAIL, 
    LOAD_MESSAGES_SUCCESS, LOAD_MESSAGES_FAIL,
    // LOAD_MESSAGE_SUCCESS, LOAD_MESSAGE_FAIL
} from '../types'
import { GetMessagesByThread, SendMessage } from '../services/MessageServices'

export const load_thread_msgs = (id) => async dispatch => {
    try{
        const res = await GetMessagesByThread(id)
        if(res.status === 200){
            dispatch({
                type: LOAD_MESSAGES_SUCCESS,
                payload: res.data
            })
        }else{
            dispatch({
                type: LOAD_MESSAGES_FAIL
            })
        }
    }catch(err){
        dispatch({
            type: LOAD_MESSAGES_FAIL
        })
    }
}

export const upload_msg = (msg) => async dispatch => {
    try{
        const res = await SendMessage(msg)
        if(res.status === 201 || res.statusText === 'Created'){
            dispatch({
                type: MESSAGE_SENT_SUCCESS
            })
        }else{
            dispatch({
                type: MESSAGE_SENT_FAIL
            })
        }
    }catch(err){
        dispatch({
            type: MESSAGE_SENT_FAIL
        })
    }
}



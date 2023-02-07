/* eslint-disable import/no-anonymous-default-export */
import {
    LOAD_DATA_SUCCESS, LOAD_DATA_FAIL,
    LOAD_DATATYPES_SUCCESS, LOAD_DATATYPES_FAIL
} from '../types'

const initialState = {
    data: {},
    dataTypes: []
}

export default function(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case LOAD_DATATYPES_SUCCESS:
            return{
                ...state,
                dataTypes: payload
            }
        case LOAD_DATA_SUCCESS:
            return{
                ...state,
                data: payload
            }
        case LOAD_DATATYPES_FAIL:
        case LOAD_DATA_FAIL:
            return{...state}
        default:
            return state
    }
}
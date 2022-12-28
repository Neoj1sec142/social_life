import {GetProfiles, GetProfileDetail, UpdateProfile} from '../services/ProfileServices'
import {
    LOAD_USERPROFILES_SUCCESS, LOAD_USERPROFILES_FAIL, 
    LOAD_USERPROFILE_SUCCESS, LOAD_USERPROFILE_FAIL, 
    USERPROFILE_UPDATE_SUCCESS, USERPROFILE_UPDATE_FAIL, 
    // FOLLOW_USERPROFILE_SUCCESS, FOLLOW_USERPROFILE_FAIL, 
    // UNFOLLOW_USERPROFILE_SUCCESS, UNFOLLOW_USERPROFILE_FAIL
} from '../types'
import { setAlert } from './alert'

export const load_user_profiles = () => async dispatch => {
    try{
        const res = await GetProfiles()
        if(res.status === 200){
            dispatch({
                type: LOAD_USERPROFILES_SUCCESS,
                payload: res.data
            })
        }else{
            dispatch({
                type: LOAD_USERPROFILES_FAIL
            })
        }
    }catch(err){
        dispatch({
            type: LOAD_USERPROFILES_FAIL
        })
    }
}

export const load_user_profile_by_id = (id) => async dispatch => {
    try{
        const res = await GetProfileDetail(id)
        if(res.status === 200){
            dispatch({
                type: LOAD_USERPROFILE_SUCCESS,
                payload: res.data
            })
        }else{
            dispatch({
                type: LOAD_USERPROFILE_FAIL
            })
        }
    }catch(err){
        dispatch({
            type: LOAD_USERPROFILE_FAIL
        })
    }
}
export const update_user_profile = (id, profile) => async dispatch => {
    try{
        const res = await UpdateProfile(id, profile)
        if(res.status === 200 || res.status === 201){
            dispatch({
                type: USERPROFILE_UPDATE_SUCCESS
            })
            dispatch(setAlert('Profile Updated Successfully', 'success'))
        }else{
            dispatch({
                type: USERPROFILE_UPDATE_FAIL
            })
            dispatch(setAlert('Error Updating Profile', 'error'))
        }
    }catch(err){
        dispatch({
            type: USERPROFILE_UPDATE_FAIL
        })
        dispatch(setAlert(err, 'error'))
    }    
}

// export const load_followers = () => async dispatch => {}
// export const follow_user_profile = () => async dispatch => {}
// export const unfollow_user_profile = () => async dispatch => {}
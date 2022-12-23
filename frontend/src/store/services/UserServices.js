// User Services
import Client from './api'

export const GetUsers = async () => {
    try{
        const res = await Client.get('/')
        return res
    }catch(err){console.log(err)}
}

export const GetUserDetail = async (id) => {
    try{
        const res = await Client.get(`users/${id}/`)
        return res
    }catch(err){console.log(err)}
}

export const UpdateUser = async (id, userDetails) => {
    try {
        const res = await Client.put(`users/${id}`, userDetails)
        return res.data
      } catch (err) {throw err}
}

export const RemoveUser = async (id) => {
    try{
        await Client.delete(`users/${id}`)
        .then((res) => console.log(res, "Successfully removed user"))
        .catch((err) => console.log(err))
    } catch (err) {throw err}
}

export const GetProfiles = async () => {
    try{
        const res = await Client.get('social/profile/')
        return res.data
    }catch(err){throw err}
}

export const GetProfileDetail = async (id) => {
    try{
        const res = await Client.get(`social/profiles/${id}/`)
        console.log(res, "User Profile RES")
        return res
    }catch(err){throw err}
}

export const UpdateProfile = async (id, profile) => {
    // console.log(profile, "BEFORE TRY")
    try {
        const res = await Client.put(`social/profiles/${id}/`, profile)
        console.log(res, "UPDATE RES")
        return res
      } catch (err) {throw err}
}


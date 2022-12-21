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
        const res = await Client.get('profiles/')
        return res.data
    }catch(err){throw err}
}

export const GetProfileDetail = async (id) => {
    try{
        const res = await Client.get(`profiles/${id}/`)
        return res
    }catch(err){throw err}
}

export const UpdateProfile = async (id, profileDetails) => {
    try {
        const res = await Client.put(`profiles/${id}/`, profileDetails)
        return res.data
      } catch (err) {throw err}
}

export const RemoveProfile = async (id) => {
    try{
        await Client.delete(`profiles/${id}`)
        .then((res) => console.log(res, "Successfully removed user"))
        .catch((err) => console.log(err))
    } catch (err) {throw err}
}
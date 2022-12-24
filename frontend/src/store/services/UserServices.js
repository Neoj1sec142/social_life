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


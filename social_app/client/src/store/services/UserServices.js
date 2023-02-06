// User Services
import Client from './api'

export const GetUsers = async () => {
    try{
        const res = await Client.get('users/')
        return res
    }catch(err){console.log(err)}
}

export const GetUserDetail = async (id) => {
    try{
        const res = await Client.get(`users/${id}/`)
        return res
    }catch(err){console.log(err)}
}
export const GetAllUserDetail = async (id) => {
    try{
        const res = await Client.get(`users/${id}/`)
        return res
    }catch(err){console.log(err)}
}

export const UpdateUser = async (id, userDetails) => {
    console.log(userDetails, "DETS b4 TRY")
    try {
        const res = await Client.put(`users/${id}/`, userDetails)
        console.log(res, "AFTER CALL")
        return res
      } catch (err) {throw err}
}

export const RemoveUser = async (id) => {
    try{
        const res = await Client.delete(`users/${id}/`)
        return res
    } catch (err) {throw err}
}

export const FollowUser = async (fol) => {
    try{
        const data = {
            follower: fol.follower,
            followee: fol.followee
        }
        const res = await Client.post('follows/', data)
        return res
    }catch(err){ console.log(err, "err") }
}
export const UnfollowUser = async (id) => {
    try{
        const res = await Client.delete(`follows/${id}/`)
        return res
    } catch (err) {console.log(err, "Err")}
}

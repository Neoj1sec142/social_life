import Client from './api'
// Profile Services

export const GetProfiles = async () => {
    try{
        const res = await Client.get('profiles/')
        return res
    }catch(err){throw err}
}

export const GetProfileDetail = async (id) => {
    try{
        const res = await Client.get(`profiles/${id}/`)
        console.log(res, "User Profile RES")
        return res
    }catch(err){throw err}
}

export const UpdateProfile = async (id, profile) => {
    // console.log(profile, "BEFORE TRY")
    try {
        const data = {
            user: profile.user,
            name: profile.name,
            location: profile.location,
            birth_date: profile.birth_date,
            bio: profile.bio
        }
        const res = await Client.put(`profiles/${id}/`, data)
        console.log(res, "UPDATE RES")
        return res
      } catch (err) {throw err}
}



export const FollowUser = async (id, follower_id) => {
    try{
        const data = {
            user_id: id,
            following_user_id: follower_id
        }
        const res = Client.post(`followers/`, data)
        console.log(res, "Follow User Res")
        return res
    }catch(err){throw err}
}
export const UnfollowUser = async (id) => {
    try{
        const res = Client.delete(`followers/${id}/unfollow/`)
        console.log(res, "Follow User Res")
        return res
    }catch(err){throw err}
}
export const GetUserFollowing = async (id) => {
    try{
        const res = Client.get(`followers/${id}/`)
        console.log(res, "Follow User Res")
        return res
    }catch(err){throw err}
}
export const GetAllFollowings = async () => {
    try{
        const res = Client.get(`followers/`)
        console.log(res, "Follow User Res")
        return res
    }catch(err){throw err}
}
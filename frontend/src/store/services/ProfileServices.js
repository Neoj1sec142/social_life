import Client from './api'
// Profile Services

export const GetProfiles = async () => {
    try{
        const res = await Client.get('profiles/')
        return res
    }catch(err){console.log(err)}
}

export const GetProfileDetail = async (id) => {
    try{
        const res = await Client.get(`profiles/${id}/`)
        console.log(res, "User Profile RES")
        return res
    }catch(err){console.log(err)}
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
      } catch (err){console.log(err)}
}



export const FollowUser = async (id, follower_id) => {
    // console.log(id, "BEfore TRY")
    try{
        const data = {
            user: id,
            following_user: follower_id
        }
        
        const res = await Client.post(`following/`, data)
        console.log(res, "Follow User Res")
        return res
    }catch(err){console.log(err)}
}
export const UnfollowUser = async (id) => {
    try{
        const res = await Client.delete(`following/${id}/unfollow/`)
        console.log(res, "UnFollow User Res")
        return res
    }catch(err){console.log(err)}
}
export const GetUserFollowing = async (id) => {
    try{
        const res = await Client.get(`following/${id}/`)
        console.log(res, "Get UserFollowing Res")
        return res
    }catch(err){console.log(err)}
}
export const GetAllFollowings = async () => {
    try{
        const res = await Client.get(`following/`)
        console.log(res, "Get All Followers Res")
        return res
    }catch(err){console.log(err)}
}
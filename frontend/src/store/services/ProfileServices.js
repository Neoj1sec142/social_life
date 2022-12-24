import Client from './api'
// Profile Services

export const GetProfiles = async () => {
    try{
        const res = await Client.get('social/profile/')
        return res
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
        const data = {
            user: profile.user,
            name: profile.name,
            location: profile.location,
            birth_date: profile.birth_date,
            bio: profile.bio
        }
        const res = await Client.put(`social/profiles/${id}/`, data)
        console.log(res, "UPDATE RES")
        return res
      } catch (err) {throw err}
}


// Thread Services
import Client from './api'

export const GetThread = async (id) => {
    try{
        const res = await Client.get(`social/inbox/${id}/delete/`)
        console.log(res, "POST RES")
        return res
    }catch(err){console.log(err)}
}

export const GetThreadByUser = async (id) => {
    try{
        const res = await Client.get(`social/inbox/${id}/`)
        return res
    }catch(err){console.log(err)}
}

export const CreateThread = async (thread) => {
    console.log(thread, "BEfore TRY")
    try {
        const data = {
            user: thread.user,
            reciever: thread.reciever
        }
        console.log(data, "Before axios")
        const res = await Client.post(`social/inbox/`, data)
        return res
    } catch (err) {console.log(err)}
}
    
export const RemoveThread = async (id) => {
    try{
        const res = await Client.delete(`social/inbox/${id}/delete/`)
        return res
    } catch (err) {console.log(err)}
}

// export const UpdateThread = async (id, threadDetails) => {
//     try {
//         const res = await Client.put(`social/inbox/${id}/`, threadDetails)
//         console.log(res, "UPDATE RES")
//         return res
//       } catch (err) {console.log(err)}
// }
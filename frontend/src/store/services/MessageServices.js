import Client from "./api";
// Message Services
export const GetMessagesByThread = async (id) => {
    try{
        const res = await Client.get(`inbox/${id}/messages/`)
        console.log(res, "MSG RES")
        return res
    }catch(err){console.log(err)}
}

// export const GetPostById = async (id) => {
//     try{
//         const res = await Client.get(`social/posts/${id}/`)
//         return res
//     }catch(err){console.log(err)}
// }

export const SendMessage = async (msg) => {
    console.log(msg, "BEfore TRY")
    try {
        const data = {
            body: msg.body,
            image: msg.image,
            sender_user: msg.sender_user,
            reciever_user: msg.reciever_user,
            thread: msg.thread,
            is_read: msg.is_read
        }
        console.log(data, "Before axios")
        const res = await Client.post(`inbox/${data.thread}/messages/`, data)
        return res
    } catch (err) {console.log(err)}
}
    
export const RemoveMsg = async (id) => {
    try{
        const res = await Client.delete(`messages/${id}/`)
        return res
    } catch (err) {console.log(err)}
}

// export const UpdateMsg = async (id, postDetails) => {
//     try {
//         const res = await Client.put(`social/posts/${id}/`, postDetails)
//         console.log(res, "UPDATE RES")
//         return res
//       } catch (err) {console.log(err)}
// }
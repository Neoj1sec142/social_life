import Client from "./api";
// Comment Services
export const GetComments = async (post_id) => {
    try{
        const res = await Client.get(`social/posts/${post_id}/comments/`)
        console.log(res, "Comment RES")
        return res
    }catch(err){console.log(err)}
}

export const GetCommentById = async (post_id, id) => {
    try{
        const res = await Client.get(`social/posts/${post_id}/comments/${id}/`)
        return res
    }catch(err){console.log(err)}
}

export const CreateComment = async (post_id, comment) => {
    console.log(comment, "BEfore TRY")
    try {
        const data = {
            comment: comment.comment,
            author: comment.author,
            post: comment.post
        }
        console.log(data, "Before axios")
        const res = await Client.post(`social/posts/${post_id}/comments/`, data)
        return res
    } catch (err) {console.log(err)}
}
    
export const RemoveComment = async (post_id, id) => {
    try{
        const res = await Client.delete(`social/posts/${post_id}/comments/${id}/`)
        return res
    } catch (err) {console.log(err)}
}
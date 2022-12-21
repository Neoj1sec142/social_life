import Client from "./api";
// Post Services
export const GetPosts = async () => {
    try{
        const res = await Client.get('social/posts/')
        console.log(res, "BLOG RES")
        return res
    }catch(err){console.log(err)}
}

export const GetPostById = async (id) => {
    try{
        const res = await Client.get(`blog/posts/${id}/`)
        return res
    }catch(err){console.log(err)}
}

// export const GetBlogByUserId = async (id) => {
//     try{
//         const res = await Client.get(`blog/user/posts/${id}/`)
//         // console.log(res)
//         return res
//     }catch(err){console.log(err)}
// }

export const CreatePost = async (post) => {
    console.log(post, "BEfore TRY")
    try {
        const data = {
            body: post.body,
            image: post.image,
            author: post.author
        }
        console.log(data, "Before axios")
        const res = await Client.post(`social/posts/`, data)
        return res
    } catch (err) {console.log(err)}
}
    
export const RemovePost = async (id) => {
    try{
        const res = await Client.delete(`social/posts/${id}/`)
        return res
    } catch (err) {console.log(err)}
}

export const UpdatePost = async (id, postDetails) => {
    try {
        const res = await Client.put(`social/posts/${id}/`, postDetails)
        console.log(res, "UPDATE RES")
        return res
      } catch (err) {console.log(err)}
}

export const AddLike = async (post_id) => {
    
    try{
        const res = await Client.put(`social/posts/${post_id}/like/`)
        console.log(res, "UPDATE RES")
        return res
    } catch (err) {console.log(err)}
}
export const AddDislike = async (post_id) => {
    
    try{
        const res = await Client.put(`social/posts/${post_id}/dislike/`)
        console.log(res, "UPDATE RES")
        return res
    } catch (err) {console.log(err)}
}
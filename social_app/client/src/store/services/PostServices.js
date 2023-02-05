// Post Services
import Client from './api'

export const GetPosts = async () => {
    try{
        const res = await Client.get('s/posts/')
        return res
    }catch(err){console.log(err)}
}

export const GetPostDetail = async (id) => {
    try{
        const res = await Client.get(`s/posts/${id}/`)
        return res
    }catch(err){console.log(err)}
}

export const UpdatePost = async (id, port) => {
    try {
        const res = await Client.put(`s/posts/${id}/`, port)
        return res
      } catch (err) {throw err}
}

export const RemovePost = async (id) => {
    try{
        const res = await Client.delete(`s/posts/${id}/`)
        return res
    } catch (err) {throw err}
}

export const CreatePost = async (post) => {
    console.log(post, "BEfore TRY")
    try {
        const data = {
            title: post.title,
            author: post.author,
            text: post.text,
            image: post.image
        }
        console.log(data, "Before axios")
        const res = await Client.post(`s/posts/`, data)
        return res
    } catch (err) {console.log(err)}
}

export const GetPostComments = async (post_pk) => {
    try{
        const res = await Client.get(`s/posts/${post_pk}/comments/`)
        return res
    }catch(err){console.log(err)}
}
export const CreateComment = async (comment) => {
    console.log(comment, "BEfore TRY")
    try {
        const data = {
            author: comment.user,
            post: comment.post,
            text: comment.content
        }
        console.log(data, "Before axios")
        const res = await Client.post(`s/comments/`, data)
        return res
    } catch (err) {console.log(err)}
}
export const GetCommentById = async (id) => {
    try{
        const res = await Client.get(`s/comments/${id}/`)
        return res
    }catch(err){console.log(err)}
}
export const RemoveComment = async (id) => {
    try{
        const res = await Client.delete(`s/comments/${id}/`)
        return res
    } catch (err) {throw err}
}
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
        const res = await Client.get(`s/posts/${id}/comments/`)
        return res
    }catch(err){console.log(err)}
}

export const GetProfileList = async (username) => {
    console.log(username, 'username before try in service')
    try{
        const res = await Client.get(`s/user/posts/${username}/`)
        console.log(res, "res after call in service")
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
    let headers = {
        "Authorization": "JWT " + localStorage.getItem('access_token'),
        "accept": "application/json",
        "Content-Type": "multipart/form-data"
    }
    try {
        const data = {
            title: post.title,
            author: post.author,
            text: post.text,
            image: post.image
        }
        console.log(data, "Before axios")
        const res = await Client.post(`s/posts/`, data, {headers: headers})
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
            author: comment.author,
            post: comment.post,
            text: comment.text
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

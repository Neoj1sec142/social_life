export const isEmpty = (array) => {
    return !Array.isArray(array) || !array.length
}

export const isFollowing = (current_id, followers) => {
    followers.foreach(item => { 
        if(item.following_user === current_id){ return true }
    })
    return false
}
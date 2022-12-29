export const isEmpty = (array) => {
    return !Array.isArray(array) || !array.length
}

export const isFollowing = (current_id, followers) => {
    let res = false;
    for(let i=0; i<followers.length; i++){
        const user = parseInt(current_id)
        const follower = followers[i].following_user
        if(user === follower){
            res = true
        }
    }
    return res;
}
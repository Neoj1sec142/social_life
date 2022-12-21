import React from 'react'



const PostCard = ({post}) => {
    if(post){
        const {body, image, author, date_created, id} = post;
        return (
            <a className="nol streched-link" href={`/post/${id}/`}><div className='card m-3 p-3 shadow-sm'>
                <h3 className='card-header'><a href='!#'>@{author} </a>&nbsp;&nbsp;&nbsp; {date_created}</h3>
                {image ? <img src={image} alt='' /> : null}
                <p className='text-center m-1'>{body}</p>
            </div></a>
        )
    }
}
export default PostCard
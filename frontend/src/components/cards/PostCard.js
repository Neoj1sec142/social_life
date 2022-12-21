import React from 'react'
import { classSheet } from '../../styles/classSheet';


const PostCard = ({post}) => {
    const {row} = classSheet;
    if(post){
        const {body, image, author, date_created} = post;
        return (
            <div className={`card ${row} m-3 p-3 shadow-sm`}>
                <h3 className='card-header'><a href='!#'>@{author} </a>&nbsp;&nbsp;&nbsp; {date_created}</h3>
                {image ? <img src={image} alt='' /> : null}
                <p className='text-center m-1'>{body}</p>
            </div>
        )
    }
}
export default PostCard
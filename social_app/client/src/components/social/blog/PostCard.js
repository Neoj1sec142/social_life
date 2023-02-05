import React from 'react'
import { connect } from 'react-redux';

const PostCard = ({user_id, post}) => {
  if(post && user_id){
    const {title, text, author, id, date_created} = post;
    return (
      <a href={`view-post/${id}/`} className="nol">
        <div className='row w-75 shadow-sm border mt-3'>
          <p className='fs-4'>{title} &nbsp;&nbsp;|&nbsp;&nbsp; {date_created ? date_created.slice(0, 10) : ""}</p>
          <p className='fs-5 text-center m-2 p-2'>{text}</p>
          {user_id === author ? (
            <button className='w-25 btn btn-danger'>Delete Post</button>
          ):( <button className='btn btn-primary'>Like</button> )}
        </div>
      </a>
    )
  }else{ return( <div>Loading...</div> ) }
}

export default connect(null, {})(PostCard);
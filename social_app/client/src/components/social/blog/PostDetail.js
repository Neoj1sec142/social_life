import React, {Fragment, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import CommentForm from './CommentForm'
import { connect } from 'react-redux'
import { load_post_by_id, destroy_post } from '../../../store/actions/social'
import { delay } from '../../../utils/utils'

const PostDetail = ({
  load_post_by_id, current_user, post, comments, postAuthor
}) => {
  const [loading, setLoading] = useState(true)
  const [openForm, setOpenForm] = useState(false)
  const params = useParams()
  const fetchData = async () => {
    load_post_by_id(params.id)
    await delay(750)
    setLoading(false)
  }
  
  useEffect(() => {if(loading) fetchData()},[])
  
  console.log(post, "post")
  console.log(postAuthor, "author")
  console.log(comments, "comms")
  if(!loading){
    const {date_created, image, text, title} = post;
    const {id, username, is_active} = postAuthor;
    return (
      <div className='container-fluid'>
        <div className='d-flex justify-content-center'>
          <div className='row w-75 shadow-sm border mt-3'>
            <p className='fs-4 header'>
            <a className='nol' href={`profile/${id}`}><strong>{username}</strong></a>&nbsp;&nbsp; Active:{is_active ? '🟢' : '🔴'}
            </p>
            {image ? <img className='post-img' src={image} alt=" " /> : null}
            <p className='fs-4 text-center m-2 p-3'><strong>{title}</strong></p>
            <p className='fs-5 text-center m-2 p-3'>{text}</p>
            <p className='fs-5 text-center text-muted m-2 p-3'>Posted On:{date_created ? date_created.slice(0,10) : ''}</p>
          </div>
        </div>
        {current_user.id === postAuthor.id ? (
        <div className='d-flex justify-content-center'>
          <button className='w-25 btn btn-danger'>Delete Post</button>
          <button className='w-25 btn btn-primary'>View Likes</button>
        </div>):(
        <div className='d-flex justify-content-center'>
          {!openForm ? (<Fragment><button className='w-25 btn btn-primary'>Like</button>
           <button className='w-25 btn btn-success' 
            onClick={() =>setOpenForm(!openForm)}>Comment</button> </Fragment>)
            : <CommentForm post_id={params.id} fetchData={fetchData} />}
          
        </div>
        )}
        <div className='d-flex justify-content-center mb-5'>
          <ul className='list-group w-75'>
            {comments && comments.length >= 1 ? (comments.map((item,index) => (
            <li className='list-group-item mt-1' key={index}>
              <p className='fs-4 header'><a href={`profile/${item.author}`}>{item.username}</a> &nbsp;&nbsp;|&nbsp;&nbsp;Commented On: {item.date_created ? item.date_created.slice(1,10) : " "}</p>
              <p className='fs-5 text-center'>{item.text}</p>
              {current_user.id === item.author ? (
                <div className='row d-flex justify-content-evenly'>
                  <button className='btn btn-danger w-25'>Delete</button>
                  <button className='btn btn-primary w-25'>View Likes</button>
                </div>
              ) : (
                <div className='row d-flex justify-content-center'>
                  <button className='btn btn-primary w-25'>Like</button>
                </div>
              )}
            </li>))):<li className='list-group-item mt-1 text-center'>No Comments</li>}
          </ul>
        </div>
      </div>
    )
  }else{ return( <div>Loading...</div> ) }
}

const mapStateToProps = state => ({
  current_user: state.auth.current_user,
  postAuthor: state.social.postAuthor,
  post: state.social.post,
  comments: state.social.comments
})

export default connect(mapStateToProps, { load_post_by_id })(PostDetail);
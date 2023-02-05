import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { load_post_by_id, load_post_comments } from '../../../store/actions/social'
import {load_user_by_id} from '../../../store/actions/auth'
import { delay } from '../../../utils/utils'

const PostDetail = ({
  load_post_by_id, load_post_comments, load_user_by_id,
  current_user, post, comments, userDetail
}) => {
  const [loading, setLoading] = useState(true)
  const params = useParams()
  const fetchData = async () => {
    load_post_by_id(params.id)
    await delay(750)
    setLoading(false)
  }
  
  useEffect(() => {if(loading) fetchData()},[])
  
  console.log(post, "post")
  if(!loading){
    const {date_created, image, text, title} = post.post;
    const {id, username, is_active, followers} = post.author;
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
        {current_user.id === id ? (
        <div className='d-flex justify-content-center'>
          <button className='w-25 btn btn-danger'>Delete Post</button>
          <button className='w-25 btn btn-primary'>Edit Post</button>
        </div>):(
        <div className='d-flex justify-content-center'>
          <button className='w-25 btn btn-primary'>Like</button>
          <button className='w-25 btn btn-success'>Comment</button>
        </div>
        )}
        <div className='d-flex justify-content-center mb-5'>
          <ul className='list-group w-75'>
            {post && post.comments.length >= 1 ? (post.comments.map((item,index) => (
            <li className='list-group-item mt-1' key={index}>
              <p className='fs-4 header'><a href={`profile/item.author`}>{item.author}</a> &nbsp;&nbsp;|&nbsp;&nbsp;Commented On: {item.date_created ? item.date_created.slice(1,10) : " "}</p>
              <p className='fs-5 text-center'>{item.text}</p>
            </li>))):<li className='list-group-item mt-1 text-center'>No Comments</li>}
          </ul>
        </div>
      </div>
    )
  }else{ return( <div>Loading...</div> ) }
}

const mapStateToProps = state => ({
  current_user: state.auth.current_user,
  userDetail: state.auth.userDetail,
  post: state.social.post,
  comments: state.social.comments
})

export default connect(mapStateToProps, {
  load_post_by_id, load_post_comments, load_user_by_id
})(PostDetail);
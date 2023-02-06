import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import {delay} from '../utils/utils'
import {load_user_by_id} from '../store/actions/auth'
import {load_profile_list} from '../store/actions/social'
import { useParams } from 'react-router-dom'

const ProfilePage = ({load_user_by_id, load_profile_list, current_user, userDetail, posts}) => {
  const {username} = useParams();
  const [loading, setLoading] = useState(true)
  
  const fetchUser = async () => {
    load_user_by_id(username)
    await delay(400)
    load_profile_list(username)
    setLoading(false)
  }
  
  useEffect(() => {if(loading) fetchUser()},[])
  console.log(userDetail, "IN THE DETS")
  console.log(posts, "POSTS THE DETS")
  if(!loading){
    const {email, first_name, last_name, username, is_active, followers} = userDetail;
    return (
      <div className="container my-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3 className="mb-0">{username}</h3>
          <div className="d-flex align-items-center">
            <p className="mr-3">Followers: {followers.length}</p>
            {/* <p>Following: following.length</p> */}
          </div>
        </div>
        <h2>{first_name}&nbsp;{last_name}</h2>
        <p className="mr-3">Email: {email} {current_user.id === userDetail.id ? <a href='/profile-update' className='float-end btn btn-primary'>Edit Profile</a> 
          : <button className='btn btn-primary'>Follow</button>}
        </p>
        <p className="mr-3">Active: &nbsp; {is_active ? '🟢' : '🔴'}</p>
        <hr />
        <h4 className="mb-3">Posts</h4>
        <div style={{ overflowX: 'scroll' }}>
          <div className="d-flex">
            {posts.map(post => (
              <div key={post.id} className="card m-3" style={{ width: '18rem' }}>
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">{post.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }else{ return(<div>Loading....</div> ) }
}

const mapStateToProps = state => ({
  userDetail: state.auth.userDetail,
  posts: state.social.posts,
  current_user: state.auth.current_user
})

export default connect(mapStateToProps, {load_user_by_id, load_profile_list})(ProfilePage);
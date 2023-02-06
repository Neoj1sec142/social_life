import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import {delay} from '../utils/utils'
import {load_user_by_id, follow_user, unfollow_user} from '../store/actions/auth'
import {load_profile_list} from '../store/actions/social'
import { useParams } from 'react-router-dom'

const ProfilePage = ({load_user_by_id, load_profile_list, follow_user, current_user, userDetail, posts}) => {
  const {username} = useParams();
  const [loading, setLoading] = useState(true)
  const [followBtn, setFollowBtn] = useState(null)
  const [formData, setFormData] = useState({
    follower: null,
    followee: null
  })
  const {followee, follower} = formData;
  const fetchUser = async () => {
    load_user_by_id(username)
    await delay(400)
    load_profile_list(username)
    await delay(200)
    getBtn()
    if(userDetail && current_user &&
      userDetail.id && current_user.id){
        setFormData({
          follower: current_user.id,
          followee: userDetail.id
        })
      }
    setLoading(false)
  }
  const follow = e => {
    e.preventDefault()
    if(!followee || !follower){
      formData.follower = current_user.id;
      formData.follower = userDetail.id;
    }
    follow_user(formData);
  }

  const getBtn = () => {
    if(current_user && userDetail &&
      current_user.id !== userDetail.id){
        const {id} = userDetail;
        const {followers} = current_user;
        for(let i=0; i<followers.length; i++){
          if(followers[i].follower === id){
            setFollowBtn(
              <button onClick={()=>{}} className='float-end btn btn-danger'>UnFollow</button>
            )
          }
        }
        setFollowBtn(
        <button onClick={e=>follow(e)} className='float-end btn btn-primary'>Follow</button>
        )
      }
  }
  
  

  
  useEffect(() => {if(loading) fetchUser()},[])
  
  if(!loading){
    const {email, first_name, last_name, username, is_active, followers} = userDetail;
    return (
      <div className="container my-5">
        <form hidden onSubmit={e=>follow(e)}>
          <input hidden name='follower' value={follower} />
          <input hidden name='followee' value={followee} />
        </form>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3 className="mb-0">{username}</h3>
          <div className="d-flex align-items-center">
            <p className="mr-3">Followers: {followers.length}</p>
            {/* <p>Following: following.length</p> */}
          </div>
        </div>
        <h2>{first_name}&nbsp;{last_name}</h2>
        <p className="mr-3">Email: {email} {current_user.id === userDetail.id ? <a href='/profile-update' className='float-end btn btn-primary'>Edit Profile</a> 
          : followBtn}
        </p>
        <p className="mr-3">Active: &nbsp; {is_active ? '🟢' : '🔴'}</p>
        <hr />
        <h4 className="mb-3">Posts</h4>
        <div style={{ overflowX: 'scroll' }}>
          <div className="d-flex">
            {posts.map(post => (
              <div key={post.id} className="card m-3" style={{ width: '18rem' }}>
                <a href={`/view-post/${post.id}`} className="nol"> 
                  <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.text}</p>
                  </div>
                </a>
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

export default connect(mapStateToProps, {
  load_user_by_id, load_profile_list, follow_user
})(ProfilePage);
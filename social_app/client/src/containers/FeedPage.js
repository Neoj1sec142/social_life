import React, { Fragment, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import PostCard from '../components/social/blog/PostCard'
import PostForm from '../components/social/blog/PostForm'
import { load_posts } from '../store/actions/social'
import { delay } from '../utils/utils'

const FeedPage = ({load_posts, current_user, posts}) => {
  const [loading, setLoading] = useState(true)
  const fetchPosts = async () => {
    load_posts()
    await delay(750)
    setLoading(false)
  }
  useEffect(() => {if(loading) fetchPosts()},[])
  
  if(!loading){
    return (
      <Fragment>
        <div className='container mt-3'>
          {(posts && posts.length >= 1 && current_user) ? (posts.map((item,index) => (
          <div className='d-flex justify-content-center' key={index}>
            <PostCard user_id={current_user.id} post={item} />
          </div>))):<h1 className='text-center mt-3'>No Posts Yet</h1>}
        </div>
        <PostForm />
      </Fragment>
    )
  }else{ return( <div>Loading...</div> ) }
}

const mapStateToProps = state => ({
  current_user: state.auth.current_user,
  posts: state.social.posts
})

export default connect(mapStateToProps, {load_posts})(FeedPage)
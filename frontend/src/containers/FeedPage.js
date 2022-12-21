import React, { useEffect, useState } from 'react';
import { classSheet } from '../styles/classSheet';
import { connect } from 'react-redux';
import PostForm from '../components/forms/PostForm';
import PostCard from '../components/cards/PostCard'
import {get_posts} from '../store/actions/post'

const FeedPage = ({posts, get_posts}) => {
    const {con, flexCtr, row} = classSheet;
    const [submitted, setSubmitted] = useState(false)
    useEffect(() => get_posts(), [])
    return (
      <div className={`${con}`}>
          {!submitted ? (
            <div className={`${flexCtr}`}>
              <div className={`card ${row}`}>
                <button className="btn btn-primary" onClick={()=>setSubmitted(true)}>Create Post</button>
              </div>
            </div>
          ): <PostForm setSubitted={setSubmitted} />}
          {posts.length ? ( posts.map((item, index) => (
            <div className={`${flexCtr}`}  key={index}>
              <div className={`${row}`}>
                <PostCard post={item} />
              </div>
            </div>))):null}
      </div>
    )
};
const mapStateToProps = state => ({
  posts: state.post.posts
})

export default connect(mapStateToProps, {get_posts})(FeedPage);
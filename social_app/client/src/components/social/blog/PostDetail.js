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
  const {id} = useParams()
  const fetchData = async () => {
    load_post_by_id(id)
    await delay(750)
    setLoading(false)
  }
  
  useEffect(() => {if(loading) fetchData()},[])
  
  console.log(post, "post")
  if(!loading){
    return (
      <div>
        {/* Map Data */}
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
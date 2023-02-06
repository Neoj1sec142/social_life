import React, { useState } from 'react'
import { connect } from 'react-redux';
import { upload_comment } from '../../../store/actions/social';
import { delay } from '../../../utils/utils';

const CommentForm = ({upload_comment, current_user, post_id, fetchData}) => {
  const [formData, setFormData] = useState({
    post: null,
    author: null,
    text: ''
  })
  const {text, author, post} = formData;
  const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})
  const onSubmit = async e => {
    e.preventDefault()
    formData.author = current_user.id;
    formData.post = post_id;
    upload_comment(formData)
    await delay(750)
    setFormData({
      post: null,
      author: null,
      text: ''
    })
    fetchData()
  }
  
  if(current_user && post_id){
    return (
      <div className='container-fluid'>
        <form onSubmit={e=>onSubmit(e)} className='d-flex justify-content-center'>
          <input hidden name='author' value={author}/>
          <input hidden name='post' value={post} />
          <div className='row w-75'>
          <input className='form-control w-75'
            name='text' value={text} 
            type='text' required
            onChange={e=>onChange(e)}
            placeholder='Enter comment here...'/>
          <button type="Submit" className='btn btn-success w-25'>Post</button></div>
        </form>
      </div>
    )
  }else{ return( <div>Loading...</div> ) }
}

const mapStateToProps = state => ({
  current_user: state.auth.current_user
})

export default connect(mapStateToProps, {upload_comment})(CommentForm)
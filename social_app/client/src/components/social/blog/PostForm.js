import React, {useState} from 'react'
import { connect } from 'react-redux'
import { upload_post } from '../../../store/actions/social'
import {delay} from '../../../utils/utils'

const PostForm = ({upload_post, current_user}) => {
  const [img, setImg] = useState(null)
  const [formData, setFormData] = useState({
    title: '',
    author: null,
    text: '',
    image: null
  })
  const {title, author, text} = formData;

  const handleImageChange = e => setImg(e.target.files[0]);
  const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})
  const onSubmit = async e => {
    e.preventDefault()
    if(img !== null){ 
      formData.image = img; 
    }else{
      formData.image = ''; 
    };
    formData.author = current_user.id;  
    upload_post(formData)
    await delay(750)
    setFormData({
      title: '',
      author: null,
      text: '',
      image: null
    })
    setImg(null)
  }

  return (
    <div className='fixed-bottom container'>
      <form encType='multipart/form-data' onSubmit={e=>onSubmit(e)}>
        <input hidden name="author" value={author} />
        <div className='form-group'>
          <input className='form-control' 
            name='title' value={title} 
            placeholder="Place your thoughts here...."
            onChange={e=>onChange(e)}  />
        </div>
        <div className='form-group'>
          <textarea className='form-control' 
            name='text' value={text} 
            placeholder="Place your thoughts here...."
            onChange={e=>onChange(e)}  />
        </div>
        <div className='form-group'>
          <input type='file' className='form-control'
            onChange={e=>handleImageChange(e)}/>
        </div>
        <button type='Submit' className='btn btn-primary w-100'>Submit</button>
      </form>
    </div>
  )
}

const mapStateToProps = state => ({
  current_user: state.auth.current_user
})

export default connect(mapStateToProps, {upload_post})(PostForm);
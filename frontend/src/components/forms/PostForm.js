import React, { useEffect, useState } from 'react';
import { classSheet } from '../../styles/classSheet';
import { FileUploader } from "react-drag-drop-files";
import { connect } from 'react-redux';
import {upload_post} from '../../store/actions/post'

const PostForm = ({upload_post, current_user, setSubitted, update}) => {
    const {con, flexCtr, row, formG} = classSheet;
    const fileTypes = ["JPG", "PNG", "GIF"];
    const [formData, setFormData] = useState({
        body: '',
        image: null,
        author: null
    })
    useEffect(() => {if(current_user)setFormData({...formData, author: current_user.id})},[])
    const { body, image, author } = formData;
    useEffect(() => {
        if(update !== undefined){
            setFormData({body: update.body, 
                image: update.image, 
                author: update.author})
        }
    },[])
    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})
    const onSubmit = e => {
        e.preventDefault()
        upload_post(formData)
        setSubitted(true)
    }
    
    return (
        <div className={`${con}`}>
            <div className={`${flexCtr}`}>
                <div className={`${row}`}>
                    Post Form Banner
                </div>
            </div>

            <div className={`${flexCtr}`}>
                <div className={`${row}`}>
                    <form onSubmit={e=>onSubmit(e)}  enctype='multipart/form-data'>                 
                        <input type="text" className="form-control" hidden
                            name="author" value={author} />
                        <div class={`${formG}`}>                            
                            <textarea type="text" className="form-control" 
                                name="body" value={body}
                                maxLength={50} placeholder="Thoughts go here*"
                                onChange={e=>onChange(e)} />
                        </div>
                        <div class={`${formG}`}>                            
                            <FileUploader handleChange={e=>onChange(e)} name="image" 
                                types={fileTypes} value={image}/>
                        </div>
                    
                        <div className={`${row}`}>
                            <div className='col col-md-12 col-sm-5 p-2'>
                                <button className='btn btn-success m-2' type='submit'>Post</button>
                            </div>
                            <div className='col col-md-12 col-sm-5 p-2'>
                            {/* <button className='btn btn-danger m-2' type='cancel' 
                                onClick={e=>cancel(e)}>Cancel</button> */}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};
const mapStateToProps = state => ({
  current_user: state.auth.current_user
})

export default connect(mapStateToProps, {upload_post})(PostForm);
import React, { useEffect, useState } from 'react';
import { classSheet } from '../../styles/classSheet';
import { connect } from 'react-redux';
import {upload_comment} from '../../store/actions/comment'

const CommentForm = ({
    upload_comment, current_user, setSubmitted, update, post_id
}) => {
    const {con, flexCtr, row, formG} = classSheet;
    const [formData, setFormData] = useState({
        comment: '',
        author: null,
        post: null
    })
    useEffect(() => {if(current_user)setFormData({...formData, author: current_user.id, post: post_id})},[])
    const { comment, post, author } = formData;
    useEffect(() => {
        if(update !== undefined){
            setFormData({...formData, comment: update.comment, 
                author: update.author, 
                post: update.post})
        }
    },[])
    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})
    const onSubmit = e => {
        e.preventDefault()
        console.log(post_id, "POST_ID")
        console.log(formData, "FORM")
        upload_comment(post_id, formData)
        if(setSubmitted !== undefined){
            setSubmitted(false)
        }
    }
    console.log(post, "POSt")
    return (
        <div className={`${con}`}>
            <div className={`${flexCtr}`}>
                <div className={`${row}`}>
                    <form onSubmit={e=>onSubmit(e)}>
                        <input type="text" className="form-control" hidden
                            name="author" value={author} />
                        <input type="text" className="form-control" hidden
                            name="post" value={post} />
                        <div class={`${formG}`}>                            
                            <textarea type="text" className="form-control" 
                                name="comment" value={comment}
                                maxLength={50} placeholder="Comment goes here*"
                                onChange={e=>onChange(e)} />
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

export default connect(mapStateToProps, {upload_comment})(CommentForm);
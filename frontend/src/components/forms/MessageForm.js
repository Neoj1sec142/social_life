import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { load_thread_by_id } from '../../store/actions/threadModel'
import { upload_msg } from '../../store/actions/message'
import { classSheet } from '../../styles/classSheet'

const MessageForm = ({ upload_msg, load_thread_by_id, current_user, threadModel, thread_id }) => {
    const {formG} = classSheet;
    useEffect(() => { if(thread_id)load_thread_by_id(thread_id) },[])
    const [formData, setFormData] = useState({
        thread: '',
        sender_user: '',
        reciever_user: '',
        body: '',
        image: ''
    })
    const {thread, sender_user, reciever_user, body, image} = formData;
    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})
    const onSubmit = e => {
        e.preventDefault()
        upload_msg(formData)
    }
    useEffect(() => {
        if(current_user && threadModel){
            console.log(threadModel, "thread model")
            setFormData({
                ...formData, 
                thread: threadModel.id,
                sender_user: threadModel.user, 
                reciever_user: threadModel.reciever
            })
        }
    },[threadModel, current_user])
    // const r = parseInt(threadModel.reciever)
    // const s = threadModel.user
    // const cur = current_user.id
    console.log(threadModel, "Thread Model by Auth")
    if(current_user.id === threadModel.user || current_user.id === threadModel.reciever){
        return (
            <div className='row'>
                <form className={`${formG}`} onSubmit={e=>onSubmit(e)}>
                    <input hidden name='thread' value={thread} required />
                    <input hidden name='sender_user' value={sender_user} required />
                    <input hidden name='reciever_user' value={reciever_user} required />
                    <div className='row m-3 sbr'>
                    <textarea className='form-control w-75 float-left' 
                        value={body} onChange={e=>onChange(e)}
                        name='body' maxLength={254} />
                    <button type='submit' className='btn btn-success w-25 float-right'>Send</button>
                    </div>
                </form>
            </div>
        )
    }else{
        return(
            <div>Unauthorized</div>
        )
    }
}

const mapStateToProps = state => ({
    current_user: state.auth.current_user,
    threadModel: state.threadModel.threadModel
})

export default connect(mapStateToProps, {upload_msg, load_thread_by_id})(MessageForm)
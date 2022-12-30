import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { haltNav } from '../../utils/utils'
import {upload_thread} from '../../store/actions/threadModel'
import { useNavigate, useParams } from 'react-router-dom'
import {useStateContext} from '../../utils/ContextProvider'
const ThreadForm = ({upload_thread, current_user, new_thread}) => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [submitted, setSubmitted] = useState(false)
    const [formData, setFormData] = useState({
        user: null,
        reciever: null
    })
    const {user, reciever} = formData;
    const {setTime, time} = useStateContext()
    // useEffect(() => {
    //     if(submitted) navigate(`/thread/${new_thread.id}`)
    // },[submitted])
    const onSubmit = e => {
        e.preventDefault()
        upload_thread(formData)
        let session = setInterval(() => {
            setTime((prevTime) => prevTime - 1);
        }, 1000);
        if(time <= 0){
            clearInterval(session)
            navigate(`/thread/${new_thread.id}`)
        }
        
    }
    
    useEffect(() => {
        if(current_user){setFormData({...formData, user: current_user.id, reciever: id})}
    },[])
    
    if(user && reciever){
        return (
            <div>
                <h5 className='text-center'>Send message?</h5>
                <form onSubmit={e=>onSubmit(e)}>
                    <input hidden value={user} name="user" required />
                    <input hidden value={reciever} name="reciever" required />
                    <div className='col'>
                        <button type='submit' className='btn btn-success m-3'>Start Dialog</button>
                        <a href='/inbox' className='btn btn-success m-3'>Cancel</a>
                    </div>
                </form>
            </div>
        )
    }else{
        return(
            <div className='text-center mt-3'>Loading......</div>
        )
    }
}

const mapStateToProps = state => ({
    current_user: state.auth.current_user,
    new_thread: state.threadModel.new_thread
})

export default connect(mapStateToProps, {upload_thread})(ThreadForm);
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { haltNav } from '../../utils/utils'
import {upload_thread} from '../../store/actions/threadModel'
import { useParams } from 'react-router-dom'

const ThreadForm = ({upload_thread, current_user}) => {
    const {id} = useParams()
    const [formData, setFormData] = useState({
        user: null,
        reciever: null
    })
    const {user, reciever} = formData;
    
    const onSubmit = e => {
        e.preventDefault()
        upload_thread(formData)
        // if(() => haltNav()){
        //     navigate('/')
        // }
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
    current_user: state.auth.current_user
})

export default connect(mapStateToProps, {upload_thread})(ThreadForm);
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {update_user} from '../../store/actions/auth'
import { delay } from '../../utils/utils';

const ProfileUpdate = ({update_user, current_user}) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true)
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        first_name: '',
        last_name: '',
        password: ''
    })
    const {username, email, first_name, last_name, password} = formData;

    const handlePageLoad = () => {
        setFormData({
            username: current_user.username,
            email: current_user.email,
            first_name: current_user.first_name,
            last_name: current_user.last_name,
        })
        setLoading(false)
    }
    useEffect(() => { if(current_user) handlePageLoad() },[])
    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})
    const onSubmit = async e => {
        e.preventDefault()
        let data = current_user;
        const {id} = current_user;
        data.username = username;
        data.first_name = first_name;
        data.last_name = last_name;
        data.email = email;
        data.password = password;
        update_user(id, data)
        await delay(750)
        navigate(`/profile/${id}`)
    }
    if(!loading){
        return (
            <div className='container-fluid'>
                <div className='d-flex justify-content-center'>
                    <form onSubmit={e=>onSubmit(e)} className="row w-75 shadow-sm border mt-5 mb-5">
                        <div className='form-group'>
                            <input className='form-control'
                                name='username' type='text' value={username}
                                placeholder='Username'
                                onChange={e=>onChange(e)}
                                maxLength={100}/>
                        </div>
                        <div className='form-group'>
                            <input className='form-control'
                                name='first_name' type='text' value={first_name}
                                placeholder='First Name'
                                onChange={e=>onChange(e)}
                                maxLength={100}/>
                        </div>
                        <div className='form-group'>
                            <input className='form-control'
                                name='last_name' type='text' value={last_name}
                                placeholder='Last Name'
                                onChange={e=>onChange(e)}
                                maxLength={100}/>
                        </div>
                        <div className='form-group'>
                            <input className='form-control'
                                name='email' type='email' value={email}
                                placeholder='Email'
                                onChange={e=>onChange(e)}
                                maxLength={100}/>
                        </div>
                        <div className='form-group'>
                            <input className='form-control'
                                name='password' type='password' value={password}
                                placeholder='Enter your password to confirm'
                                onChange={e=>onChange(e)}
                                maxLength={100}/>
                        </div>
                        <div className='row w-100 d-flex justfiy-content-evenly'>
                            <button className='btn btn-primary w-25'>Update</button>
                            <button className='btn btn-danger w-25'>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }else{ return( <div>Loading...</div> ) }
}
const mapStateToProps = state => ({
    current_user: state.auth.current_user
})

// 'username', 'password', 'is_active',
// 'is_staff', 'email', 'id', 'first_name', 
//'last_name', 'followers'
export default connect(mapStateToProps, {update_user})(ProfileUpdate)
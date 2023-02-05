import React, { useState } from 'react';
import { signup } from '../../store/actions/auth';
import { connect } from 'react-redux';
import { delay } from '../../utils/utils';
import { useNavigate } from 'react-router-dom';

const Register = ({signup, setPage}) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    first_name: '',
    last_name: '',
    username: '',
    password: '',
    confirm: ''
  })
  const { email, first_name, last_name, username, password, confirm } = formData;
  const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})
  const cancel = e => {
    e.preventDefault()
    setFormData({ email: '', first_name: '', last_name: '', 
      username: '', password: '', confirm: '' })
  }
  const onSubmit = async e => {
    e.preventDefault()
    signup(formData)
    await delay(750) 
    setPage(false)
  }

  return (
    <div className='container-fluid'>
        <div className='d-flex justify-content-center'>
          
            
            <form onSubmit={e=>onSubmit(e)}>
              <p className='fs-2'>Create an Account</p>
              <div class='form-group'>
                <input type="email" className='form-control'
                  name="email" value={email}
                  maxLength={50} placeholder="Email*"
                  onChange={e=>onChange(e)} required />
              </div>
              <div class='form-group'>                           
                <input type="text" className='form-control'
                  name="first_name" value={first_name}
                  maxLength={50} placeholder="First Name*"
                  onChange={e=>onChange(e)} required />
              </div>
              <div class='form-group'>                        
                <input type="text" className='form-control'
                  name="last_name" value={last_name}
                  maxLength={50} placeholder="Last Name*"
                  onChange={e=>onChange(e)} required />
              </div>
              <div className='form-group'>                           
                <input type="text" className='form-control'
                  name="username" value={username}
                  maxLength={50} placeholder="Username*"
                  onChange={e=>onChange(e)} required />
              </div>
              <div class='form-group'>                            
                <input type="password" className='form-control'
                  name="password" value={password}
                  maxLength={50} placeholder="Make a Password*"
                  onChange={e=>onChange(e)} required />
              </div>
              <div class='form-group'>                            
                <input type="password" className='form-control'
                  name="confirm" value={confirm}
                  maxLength={50} placeholder="Confirm Password*"
                  onChange={e=>onChange(e)} required />
              </div>
              <div className='row'>
                <div className='col'>
                  <button className='btn btn-success m-2' disabled={password !== confirm} type='Submit'>Sign Up!</button>
                </div>
                <div className='col'>
                  <button className='btn btn-danger m-2' type='cancel' 
                    onClick={e=>cancel(e)}>Cancel</button>
                </div>
              </div>
              <p className='text-muted'>Already have an account? 
                <button className='btn btn-primary btn-sm mt-2 m-1' onClick={()=>setPage(false)}>Click Here</button> to login.
              </p>
            </form>
        </div>
    </div>
  )
};

export default connect(null, {signup})(Register);
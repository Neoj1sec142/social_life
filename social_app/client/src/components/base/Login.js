import React, { useState } from 'react';

import { login } from '../../store/actions/auth';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {delay} from '../../utils/utils'

const Login = ({login, setPage}) => {
  
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const { username, password } = formData;
  const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})
  const cancel = e => {
    e.preventDefault()
    setFormData({ username: '', password: '' })
  }
  const onSubmit = async e => {
    e.preventDefault()
    login(formData)
    await delay(750)
    navigate('/')
  }
  

  return (
    <div className='container-fluid'>
      <div className='d-flex justify-content-center'>
          <form onSubmit={e=>onSubmit(e)}>
          <p className='fs-2'>Login !❤️</p>
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
            <div className='row'>
              <div className='col'>
                <button className='btn btn-success m-2' type='submit'>Login</button>
              </div>
              <div className='col'>
                <button className='btn btn-danger m-2' type='cancel' 
                  onClick={e=>cancel(e)}>Cancel</button>
              </div>
            </div>
            <p className='text-muted'>Don't have an account? 
              <button className='btn btn-primary btn-sm mt-2 m-1' onClick={()=>setPage(true)}>Click Here</button> to signup.
            </p>
          </form>
        {/* </div> */}
      </div>
    </div>
  )
};


export default connect(null, {login})(Login);
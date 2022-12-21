import React, { useState } from 'react';
import { classSheet } from '../../styles/classSheet';
import { signup } from '../../store/actions/auth';
import { connect } from 'react-redux';
const Register = ({signup, setPage}) => {
  const {con, flexCtr, row, formG} = classSheet;
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
  const onSubmit = e => {
    e.preventDefault()
    signup(formData)
  }

  return (
    <div className={`${con}`}>
        <div className={`${flexCtr}`}>
          <div className={`${row}`}>
            Register Banner
          </div>
        </div>
        <div className={`${flexCtr}`}>
          <div className={`${row}`}>
            <form onSubmit={e=>onSubmit(e)}>
              <div class={`${formG}`}>                          
                <input type="email" className="form-control" 
                  name="email" value={email}
                  maxLength={50} placeholder="Email*"
                  onChange={e=>onChange(e)} />
              </div>
              <div class={`${formG}`}>                           
                <input type="text" className="form-control" 
                  name="first_name" value={first_name}
                  maxLength={50} placeholder="First Name*"
                  onChange={e=>onChange(e)} />
              </div>
              <div class={`${formG}`}>                        
                <input type="text" className="form-control" 
                  name="last_name" value={last_name}
                  maxLength={50} placeholder="Last Name*"
                  onChange={e=>onChange(e)} />
              </div>
              <div className={`${formG}`}>                           
                <input type="text" className="form-control" 
                  name="username" value={username}
                  maxLength={50} placeholder="Username*"
                  onChange={e=>onChange(e)} />
              </div>
              <div class={`${formG}`}>                            
                <input type="password" className="form-control" 
                  name="password" value={password}
                  maxLength={50} placeholder="Make a Password*"
                  onChange={e=>onChange(e)} />
              </div>
              <div class={`${formG}`}>                            
                <input type="password" className="form-control" 
                  name="confirm" value={confirm}
                  maxLength={50} placeholder="Confirm Password*"
                  onChange={e=>onChange(e)} />
              </div>
              <div className={`${row}`}>
                <div className='col col-md-12 col-sm-5 p-2'>
                  <button className='btn btn-success m-2' type='submit'>Sign Up!</button>
                </div>
                <div className='col col-md-12 col-sm-5 p-2'>
                  <button className='btn btn-danger m-2' type='cancel' 
                    onClick={e=>cancel(e)}>Cancel</button>
                </div>
                <p className='ms-2 text-muted'>Already have an account? 
                  <button className='link-btn' onClick={()=>setPage(false)}>Click Here</button> to login.
                </p>
              </div>
            </form>
          </div>
        </div>
    </div>
  )
};

export default connect(null, {signup})(Register);
import React, { useEffect, useState } from 'react';
import { classSheet } from '../../styles/classSheet';
import { login } from '../../store/actions/auth';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = ({login, setPage, isAuthenticated}) => {
  const {con, flexCtr, row, formG} = classSheet;
  const navigate = useNavigate()
  const [submitted, setSubitted] = useState(false)
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
  const onSubmit = e => {
    e.preventDefault()
    login(formData)
    setSubitted(true)
  }
  useEffect(() => {if(submitted)navigate('/dashboard')}, [submitted])

  return (
    <div className={`${con}`}>
        <div className={`${flexCtr}`}>
          <div className={`${row}`}>
            Login Banner
          </div>
        </div>
        <div className={`${flexCtr}`}>
          <div className={`${row}`}>
            <form onSubmit={e=>onSubmit(e)}>
              
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
              
              <div className={`${row}`}>
                <div className='col col-md-12 col-sm-5 p-2'>
                  <button className='btn btn-success m-2' type='submit'>Login</button>
                </div>
                <div className='col col-md-12 col-sm-5 p-2'>
                  <button className='btn btn-danger m-2' type='cancel' 
                    onClick={e=>cancel(e)}>Cancel</button>
                </div>
                <p className='ms-2 text-muted'>Don't have an account? 
                  <button className='link-btn' onClick={()=>setPage(true)}>Click Here</button> to signup.
                </p>
              </div>
            </form>
          </div>
        </div>
    </div>
  )
};
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {login})(Login);
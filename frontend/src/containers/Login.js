import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../store/actions/auth'
import CSRFToken from '../components/CSRFToken'

const Login = ({isAuthenticated, login}) => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })
    
    const { username, password } = formData
    
    const onChange = (e) => {setFormData({...formData, [e.target.name]: e.target.value})}

    const onSubmit = (e) => {
        e.preventDefault()
        login(username, password)
    }
    if(isAuthenticated){
        return navigate('/dashboard')
    }

    return(
        <div className='container mt-5'>
            <div className='card text-center bg-light'>
                <br />
            <h1>Sign Into Your Account</h1>
            <p>Sign in with Social Life:</p>
            <form onSubmit={e => onSubmit(e)}>
                <CSRFToken />
                <div className='form-group'>
                    <br />
                    <input className='form-control'
                        type='text'
                        placeholder='Username*'
                        name='username'
                        value={username}
                        onChange={e => onChange(e)}
                        required />
                </div>
                <div className='form-group mt-3'>
                    <br/>
                    <input className='form-control'
                        type='password'
                        placeholder='Password*'
                        name='password'
                        value={password}
                        minLength='6'
                        onChange={e => onChange(e)}
                        required />
                </div>
                <button className='btn btn-primary mt-3' type='submit'>Login</button>
            </form>
            <br />
            </div>
            <p className='mt-3 text-center'>Dont have an account? <Link to='/register'>Click Here</Link> to sign up!</p>
        </div>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated  
})

export default connect(mapStateToProps, {login})(Login)
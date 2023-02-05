import React, { useState, useEffect } from 'react'
import Register from '../components/base/Register'
import Login from '../components/base/Login'
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AuthPage = ({isAuthenticated}) => {
  const navigate = useNavigate()
  
  const [page, setPage] = useState(null)
  useEffect(() => {if(isAuthenticated) navigate('/dashboard')},[])

  return (
    <div className='container-fluid'>
      <h3 className='text-center text-semibold mt-3 align-items-center'>~ Test Suite ~</h3>
      {page === null ? (    
      <div className='d-flex justify-content-evenly'>
        <button className='btn btn-dark m-2' type='button' 
          onClick={()=>setPage(false)}>Login</button>
        <button className='btn btn-primary m-2' type='button'
          onClick={()=>setPage(true)}>Sign Up!</button>
      </div>) : (
        page ? <Register setPage={setPage}/> : <Login setPage={setPage}/>
      )}
    </div>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {})(AuthPage);
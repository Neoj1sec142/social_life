import React, { useState, useEffect } from 'react'
import Register from '../components/base/Register'
import Login from '../components/base/Login'
import { classSheet } from '../styles/classSheet';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AuthPage = ({isAuthenticated}) => {
  const navigate = useNavigate()
  const {con, flexCtr, row} = classSheet;
  const [page, setPage] = useState(null)
  useEffect(() => {if(isAuthenticated) navigate('/dashboard')},[])

  return (
    <div className={`${con}`}>
      {page === null ? (
      <div className={`${flexCtr}`}>
        <div className={`card ${row}`}>
          <h3 className='text-center text-semibold mt-3'>Welcome to the Social Earth</h3>
          <div className={`${row}`}>
            <div className={`col ${flexCtr}`}>
              <button className='btn btn-dark m-2' type='button' 
                onClick={()=>setPage(false)}>Login</button>
            </div>
            <div className={`col ${flexCtr}`}>
              <button className='btn btn-primary m-2' type='button'
                onClick={()=>setPage(true)}>Sign Up!</button>
            </div>
          </div>
        </div> 
      </div>) : (
        page === true ? <Register setPage={setPage}/> : <Login setPage={setPage}/>
      )}
    </div>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {})(AuthPage);
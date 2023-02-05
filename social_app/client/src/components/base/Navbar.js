import React, { Fragment } from 'react'
import Alert from '../../utils/Alert'
import { connect } from 'react-redux';


const Navbar = ({isAuthenticated}) => {
  
  
  let authBar;
  if(isAuthenticated){
    authBar = (
      <Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">Test Suite</a>
            {/* <p className='mt-2 dkbtn'>Dark Mode:&nbsp;&nbsp;<input className='form-radio' onClick={e=>handleDark(e)} type='radio' /></p> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    <i className='fa fa-home'></i>&nbsp;Home
                  </a>
                </li>
                
                <li className="nav-item">
                  <a className="nav-link text-muted" href="/logout" tabIndex="-1">
                    <i className='fa fa-sign-out'></i>&nbsp;Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      <Alert />
    </Fragment>
    )
  }
  const publicBar = (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="!#">Test Suite</a>
          {/* <p className='mt-2 dkbtn'>Dark Mode:&nbsp;&nbsp;<input className='form-radio' onClick={e=>handleDark(e)} type='radio' /></p> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <i className='fa fa-sign-in'></i>&nbsp;Create Account
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <i className='fa fa-sign-in'></i>&nbsp;Login
                </a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
  )
  

  return (<Fragment>{isAuthenticated ? authBar : publicBar}</Fragment>)
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {})(Navbar)
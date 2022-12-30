import React, { Fragment, useEffect, useState } from 'react'
import Alert from '../../utils/Alert'
import { connect } from 'react-redux';
import {load_user_profiles} from '../../store/actions/userProfile'
import { isEmpty } from '../../utils/utils';
const Navbar = ({isAuthenticated, userProfiles, load_user_profiles}) => {
  const [search, setSearch] = useState({
    query: '',
    results: []
  })
  const {results, query} = search;
  const [requested, setRequested] = useState(false)
  const onChange = e => setSearch({...search, [e.target.name]: e.target.value})
  const loadCheck = e => {
    // e.preventDefault()
    if (!Array.isArray(userProfiles) || !userProfiles.length) {
      if(requested){
        return
      }
      load_user_profiles()
      setRequested(true)
    }
  }
  
  const onSubmit = async (e) => {
    e.preventDefault()        
    const searches = userProfiles.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()))
    setSearch({...search, results: searches, query: ''})
    // console.log("RESULTS", searches)
  }
  // console.log(search, "SEARCH")
  // console.log(userProfiles, "User Profiles")
  let authBar;
  if(isAuthenticated){
    authBar = (
      <Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="!#">Social Earth</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/feed">Your Feed</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/dashboard">Account Dashboard</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/dashboard">Inbox</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-muted" href="/logout" tabIndex="-1">Logout</a>
                </li>
              </ul>
              {/* Search Users Bar */}
              <form className="d-flex" onSubmit={e=>onSubmit(e)}>
                <input className="form-control me-2" value={query} name='query' onChange={e=>onChange(e)} type="search" placeholder="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
              {query !== '' && loadCheck()}
              <li className="nav-item dropdown" >
                  <ul className="list-group" hidden={!requested}>
                     {results ? results.map((item, index) => (
                    <li key={index}><a className="list-group-item" href={`/profile/${item.user.id}`}>{item.name}&nbsp;&nbsp;{item.location}&nbsp; something &nbsp; something </a></li>)) : null}
                  </ul>
                </li>
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
          <a className="navbar-brand" href="!#">Social Earth</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Create Account</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
  

  return (<Fragment>{isAuthenticated ? authBar : publicBar}</Fragment>)
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  userProfiles: state.userProfile.userProfiles
})

export default connect(mapStateToProps, {load_user_profiles})(Navbar)
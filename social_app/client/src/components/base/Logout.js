import React, { useEffect } from 'react';
import {logout} from '../../store/actions/auth'
import { connect } from 'react-redux';

const Logout = ({logout}) => {
    useEffect(() => { logout() },[])
    

    return(
      <div className='container-fluid'>
        <div className=''>
          <div className=''>
            <h1 className='card-header'>You Have Been Logged Out.</h1>
            <p className='ms-2 fs-4 m-2'><a href='/'>Click Here</a> to log back in.</p>
          </div>
        </div>
      </div>
    )
}

export default connect(null, {logout})(Logout);
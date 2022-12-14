import React, {useEffect} from 'react'
import { classSheet } from '../../styles/classSheet';
import { connect } from 'react-redux';
import {load_user_profile_by_id} from '../../store/actions/userProfile'
import { useStateContext } from '../../utils/ContextProvider';

const Profile = ({load_user_profile_by_id, userProfile, current_user}) => {
  const {con, flexCtr, lst, lstI} = classSheet;
  // console.log(userProfile, "Profile User")
  
  useEffect(() => {if(current_user) load_user_profile_by_id(current_user.id)},[])
  const {setDashboard} = useStateContext()
  if(userProfile){
    const {bio, birth_date, date_created, location, name, picture} = userProfile;
    if(bio !== '' && location !== '' && name !== ''){
      return(
        <div className={`${con} top-0 mb-3`}>
          <div className={`${flexCtr} mb-3`}>
            <div className='card w-50 p-3 profile-card'>
              <img className='img-thumbnail profile-img' src={picture} alt='' />
              <h3 className='text-center'>{name}'s Profile</h3>
              <p className='fs-4 ms-2'>Location: {location}</p>
              {/* <p className='m-2 p-3'>Followers: {followers !== [] ? followers.Length : '0'}</p> */}
              <p className='m-2 p-3'><strong>About Me:</strong><br /> {bio}</p>
              <button className='btn btn-primary m-2' onClick={()=>setDashboard('accountForm')}>Edit Account</button>
            </div>
          </div>
          <div className='card m-3 p-3'>
            <h4 className='card-header text-center'>Following:</h4>
            <ul className={`${lst}`}>
              {/* {followers.length && followers.map((item, index) => (
              <li className={`${lstI}`} key={index}>Item</li>))}
               : <li className={`${lstI}`}>No Followers at this Time</li>} */}
            </ul>
            <h5 className='card-footer'>Date Joined: {date_created}</h5>
          </div>
        </div>
      )
    }else{
      return(
        <div>
          <h1 className='text-center'>You have not set up your account</h1>
          <button className='btn btn-primary m-2' onClick={()=>setDashboard('accountForm')}>Set Up Account</button>
        </div>
        )
    }
  }else{
    return(<div>Loading...</div>)
  }
}

const mapStateToProps = state => ({
  current_user: state.auth.current_user,
  userProfile: state.userProfile.userProfile
})

export default connect(mapStateToProps, {load_user_profile_by_id})(Profile)

// bio
// birth_date
// date_created :  "2022-12-23T18:13:53.605038Z"
// followers : []
// location: null
// name: null
// picture: "http://localhost:8000/media/uploads/profile_pictures/default.jpg"
// user: 1
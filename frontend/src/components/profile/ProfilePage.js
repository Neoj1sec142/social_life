import React, {useEffect} from 'react'
import { classSheet } from '../../styles/classSheet';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
    load_user_profile_by_id, follow_user_profile
} from '../../store/actions/userProfile'
// NEED TO REFOCUS MY FOLLOWING ON THE NEW BACKEND FOLLOWING SYSTEM
const ProfilePage = ({
    load_user_profile_by_id, follow_user_profile, userProfile,
    current_user
}) => {
    const {con, flexCtr, lst, lstI} = classSheet;
    // console.log(userProfile, "Profile User")
    const {id} = useParams()
    
    useEffect(() => {if(id) load_user_profile_by_id(id)},[])
    const followUser = e => {
        e.preventDefault()
        if(current_user.id !== undefined){
            follow_user_profile(userProfile.user.id, current_user.id)
        }
    }
    
    if(userProfile && current_user){
        const {bio, birth_date, date_created, location, name, picture} = userProfile;
       
        return(
            <div className={`${con} top-0 mb-3`}>
            <div className={`${flexCtr} mb-3`}>
                <div className='card w-50 p-3 profile-card'>
                <img className='img-thumbnail profile-img' src={picture} alt='' />
                <h3 className='text-center'>{name}'s Profile</h3>
                <p className='fs-4 ms-2'>Location: {location}</p>
                {/* <p className='m-2 p-3'>Followers: {followers !== [] ? followers.Length : '0'}</p> */}
                <p className='m-2 p-3'><strong>About Me:</strong><br /> {bio}</p>
                {current_user.id && userProfile.user ? (
                current_user.id === userProfile.user.id 
                ? <button onClick={e=>followUser(e)} className='btn btn-primary m-2'>Follow</button> : <button>To Dashboard</button>) : null}
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
            <div>Loading .....</div>
        )
    }
}

const mapStateToProps = state => ({
    userProfile: state.userProfile.userProfile,
    current_user: state.auth.current_user,
    
})

export default connect(mapStateToProps, {load_user_profile_by_id, follow_user_profile})(ProfilePage)
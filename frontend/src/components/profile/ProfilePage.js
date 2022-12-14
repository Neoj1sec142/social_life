import React, {useEffect, useState} from 'react'
import { classSheet } from '../../styles/classSheet';
import { connect } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import {
    load_user_profile_by_id, follow_user, load_user_following,
    unfollow_user
} from '../../store/actions/userProfile'
import { haltNav } from '../../utils/utils';

const ProfilePage = ({
    load_user_profile_by_id, follow_user, load_user_following, unfollow_user,
    userProfile, current_user, user_followers
}) => {
    const {con, flexCtr, lst, lstI} = classSheet;
    const {id} = useParams();
    
    const [following, setFollowing] = useState(false);
    const [followerId, setFollowerId] = useState({});
    useEffect(() => {if(id) load_user_profile_by_id(id)},[]);
    useEffect(() => {
        if(id){
            load_user_following(id)
        }
    }, []);
    
    
    
    const followUser = e => {
        e.preventDefault()
        const user = parseInt(userProfile.user.id)
        const follower = parseInt(current_user.id)
        follow_user(user, follower)
        if(() => haltNav()){
            window.location.reload(false)
        }
    }
    const unfollowUser = e => {
        e.preventDefault()
        unfollow_user(followerId.id)
        if(() => haltNav()){
            window.location.reload(false)
        }
    }
    
    useEffect(() => {
        let res = null;
        if(user_followers.length){
            for(let i=0; i<user_followers.length; i++){
                if(parseInt(current_user.id) === parseInt(user_followers[i].following_user)){
                    res = user_followers[i]
                }
            }
        }
        if(res !== null){ 
            setFollowerId(res)
            setFollowing(true)
        }
    },[user_followers])
    // useEffect(() => {
    //     if(current_user && userProfile){
    //         const current = parseInt(current_user.id)
    //         const owner = parseInt(userProfile.user.id)
    //         if(current === owner){ return () => navigate('/dashboard') };
    //     }
    // },[current_user, userProfile])
    if(userProfile.user && current_user.id && user_followers){
        
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
                <p className='m-2 p-3'><strong>Followers: </strong>{user_followers.length ? user_followers.length : '0'}</p>
                {current_user.id === userProfile.user.id ? (
                    <a className='btn btn-primary' href='/dashboard'>To Dashboard</a>
                ):(<button onClick={e=>{following ? 
                        unfollowUser(e) : followUser(e)}} 
                        className='btn btn-primary m-2'>{following ? "Unfollow" : "Follow"}</button>)
                }
                
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
    user_followers: state.userProfile.user_followers
})

export default connect(mapStateToProps, {
    load_user_profile_by_id, follow_user, load_user_following,
    unfollow_user
})(ProfilePage)
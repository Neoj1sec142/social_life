import React, { useEffect, useState } from 'react';
import { classSheet } from '../../styles/classSheet';
import { FileUploader } from "react-drag-drop-files";
import { connect } from 'react-redux';
import {load_user_profile_by_id, update_user_profile} from '../../store/actions/userProfile'
import { useStateContext } from '../../utils/ContextProvider';

const ProfileForm = ({load_user_profile_by_id, update_user_profile, current_user, userProfile}) => {
    const {con, flexCtr, row, formG, lst, lstI} = classSheet;
    // const fileTypes = ["JPG", "PNG", "GIF"];
    const {setDashboard} = useStateContext();
    const [formData, setFormData] = useState({
        bio: '',
        birth_date: '',
        location: '',
        name: '',
        // picture: null,
        user: null
    })
    useEffect(() => {if(current_user) load_user_profile_by_id(current_user.id)},[])
    useEffect(() => {
        if(userProfile.date_created){
            setFormData({...formData, 
                bio: userProfile.bio,
                birth_date: userProfile.birth_date,
                location: userProfile.location,
                name: userProfile.name,
                // picture: userProfile.picture,
                user: current_user.id
            })
        }
    },[])
    const { bio, birth_date, location, name, user } = formData;
    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})
    const onSubmit = e => {
        e.preventDefault()
        update_user_profile(current_user.id, formData) 
    }
    const cancel = e => {
        e.preventDefault()
        setDashboard('profile')
    }
    
    return (
        <div className={`${con}`}>
            <div className={`${flexCtr}`}>
                <div className={`${row}`}>
                    User Profile Form Banner
                </div>
            </div>

            <div className={`${flexCtr}`}>
                <div className={`${row}`}>
                    <form onSubmit={e=>onSubmit(e)}  enctype='multipart/form-data'>                 
                        <input type="text" className="form-control" hidden
                            name="author" value={user} />
                        <div class={`${formG}`}>                            
                            <input type="text" className="form-control" 
                                name="name" value={name}
                                maxLength={50} placeholder={name ? name : "Name Here"}
                                onChange={e=>onChange(e)} />
                        </div>
                        <div class={`${formG}`}>                            
                            <input type="text" className="form-control" 
                                name="location" value={location}
                                maxLength={50} placeholder={location ? location : "Where are you located"}
                                onChange={e=>onChange(e)} />
                        </div>
                        <div class={`${formG}`}>                            
                            <input type="text" className="form-control" 
                                name="birth_date" value={birth_date}
                                maxLength={50} placeholder={birth_date ? birth_date : "Birth Date"}
                                onChange={e=>onChange(e)} />
                        </div>
                        {/* <div class={`${formG}`}>                            
                            <FileUploader handleChange={e=>onChange(e)} name="picture" 
                                types={fileTypes} value={picture}/>
                        </div> */}
                        <div class={`${formG}`}>                            
                            <textarea type="text" className="form-control" 
                                name="bio" value={bio}
                                maxLength={50} placeholder={bio ? bio : "About you here*"}
                                onChange={e=>onChange(e)} />
                        </div>
                        <div className={`${row}`}>
                            <div className='col col-md-12 col-sm-5 p-2'>
                                <button className='btn btn-success m-2' type='submit'>Update</button>
                            </div>
                            <div className='col col-md-12 col-sm-5 p-2'>
                            <button className='btn btn-danger m-2' type='cancel' 
                                onClick={e=>cancel(e)}>Cancel</button>
                            </div>
                        </div>
                    </form>
                    {/* <div className={`${row}`}>
                        <h5 className='text-center m-1'>Followers: {followers ? followers.length : '0'}</h5>
                        {followers.length && 
                        <ul className={`${lst}`}>
                            {followers.map((item, index) => (
                            <li className={`${lstI}`} key={index}>{item}</li>))}
                        </ul>}
                    </div> */}
                </div>
            </div>
        </div>
    )
};
const mapStateToProps = state => ({
  current_user: state.auth.current_user,
  userProfile: state.userProfile.userProfile
})

export default connect(mapStateToProps, {load_user_profile_by_id, update_user_profile})(ProfileForm);
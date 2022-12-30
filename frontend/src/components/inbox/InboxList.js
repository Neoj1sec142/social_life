import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { classSheet } from '../../styles/classSheet';
import {load_threads, upload_thread} from '../../store/actions/threadModel'

const InboxList = ({
  load_threads, upload_thread, current_user, threadModels
}) => {
  const {con, flexCtr, lst, lstI} = classSheet;
  
  useEffect(() => {
    if(current_user){setFormData({...formData, user: current_user.id})}
  },[])
  useEffect(() => load_threads(),[])
  
  console.log(threadModels, "threads")
  return (
    <div className={`${con}`}>
      <h3 className='card-header text-center m-3 p-3'>Inbox</h3>
      <ul className={`${lst}`}>
        <li className={`${lstI}`}></li>
      </ul>
    </div>
  )
}

const mapStateToProps = state => ({
  current_user: state.auth.current_user,
  threadModels: state.threadModel.threadModels
})

export default connect(mapStateToProps, {load_threads, upload_thread})(InboxList)
  // For Message Form
  // const [formData, setFormData] = useState({
  //   thread: '',
  //   sender_user: '',
  //   reciever_user: '',
  //   body: '',
  //   image: ''
  // })
import React, { useEffect, useState, Fragment } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import MessageForm from '../components/forms/MessageForm'
import { classSheet } from '../styles/classSheet'
import {load_thread_msgs} from '../store/actions/message'
import Card403 from '../components/cards/403Card'

const Dialog = ({load_thread_msgs, messages, current_user}) => {
  const {id} = useParams()
  const [authorized, setAuthorized] = useState(true)
  const [init, setInit] = useState(false)
  useEffect(() => {if(id)load_thread_msgs(id)},[])
  const {con, flexCtr, lst, lstI} = classSheet;
  useEffect(() => {
    if(messages.length > 0){
      const s = parseInt(messages[0].sender_user)
      const r = parseInt(messages[0].reciever_user)
      const cur = parseInt(current_user.id)
      if(s !== cur && r !== cur){
        setAuthorized(false)
      }else{
        setAuthorized(true)
      }
    }else{
      setInit(true)
    }
  },[messages])
  
  if(messages && id && authorized){
    return (
      <Fragment>
      {init ? (
      <div className={`${con}`}>
        <div className='msg-box m-2 mt-3 p-2'>
          {messages.length ? (messages.map((item, index) => (
            item.sender_user === current_user.id ?
          <div className='row w-100 mb-3'>
            <div key={index} className='col-md-6 col-sm-12 card shadow-sm send'>
              <p className='text-center p-2 m-1'>{item.body}</p>
              <p className='fs-8 text-muted'>Sent: {item.date_created.slice(0,10)}</p>
            </div>
          </div>
          : <div className='row w-100 mb-3'>
              <div className='col-md-6 col-sm-12 card shadow-sm rec'>
              <p className='text-center p-2 m-1'>{item.body}</p>
              <p className='fs-8 text-muted'>Sent: {item.date_created.slice(0,10)}</p>
              <p className='text-center p-2 m-1'>Sent By Visited</p>
              </div>
            </div>))): <p>No Messages Yet</p>}
        </div>
        <div className='fixed-bottom w-100 msg-form'>
          <MessageForm thread_id={id}/>
        </div>
      </div>) : (<div className={`${con}`}>
        <div className='m-2 mt-3 p-2'>
            <h1 className='m-3 text-center'>You have not started a conversation.</h1>
            <div className='fixed-bottom w-100 msg-form'>
              <MessageForm thread_id={id}/>
            </div>
        </div>
      </div>)}
      </Fragment>
    )
  }else if(messages && id && !authorized){ return(<Card403 />)
  }else{ return( <div className='m-3 text-center'><p>Loading....</p></div> ) 
  }
}

const mapStateToProps = state => ({
  messages: state.message.messages,
  current_user: state.auth.current_user
})

export default connect(mapStateToProps, {load_thread_msgs})(Dialog);
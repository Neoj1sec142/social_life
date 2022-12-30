import React, {useState} from 'react'
import InboxSearch from '../components/inbox/InboxSearch'
import { connect } from 'react-redux'
import {classSheet} from '../styles/classSheet'
import InboxList from '../components/inbox/InboxList'
const InboxPage = () => {
  const {con, flexG} = classSheet;
  const [search, setSearch] = useState(false)
  
  return (
    <>
    {!search ? (
      <div className={`${con+' '+flexG} m-3`}>
        <InboxList />
        <button onClick={()=>setSearch(!search)} className='btn btn-success m-3'>Search Users</button>
      </div>
    ) : (
      <div>
        <InboxSearch />
        <button onClick={()=>setSearch(!search)} className='btn btn-success m-3'>Back to Inbox</button>  
      </div>)}
    </>
  )
}

export default connect(null, {})(InboxPage);
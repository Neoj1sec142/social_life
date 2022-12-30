import React from 'react'
import InboxSearch from '../components/inbox/InboxSearch'
import { connect } from 'react-redux'
const InboxPage = () => {
  return (
    <div>
     <InboxSearch />
    </div>
  )
}

export default connect(null, {})(InboxPage);
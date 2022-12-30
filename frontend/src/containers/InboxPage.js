import React, {useState, useEffect} from 'react'
import InboxSearch from '../components/inbox/InboxSearch'
import { connect } from 'react-redux'

const InboxPage = () => {
  
  const [search, setSearch] = useState(false)
  
  return (
    <div>
     <InboxSearch />
    </div>
  )
}

export default connect(null, {})(InboxPage);
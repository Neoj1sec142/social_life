import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { load_all_users } from '../../store/actions/auth';
import {
  GridComponent, ColumnsDirective, ColumnDirective,
  Page, Search, Inject, Toolbar
} from '@syncfusion/ej2-react-grids'
import { contextMenuItems, usersGrid } from './tableData'
const InboxSearch = ({load_all_users, users}) => {
  const [formData, setFormData] = useState({
    user: null,
    reciever: null
  })
  useEffect(() => {
    load_all_users()
  },[])
  if(users){
    return (
      <div className='m-2 p-2 bg-white rounded-3xl'>
        <h3 className='card-header text-center m-3 p-3'>Search Users</h3>
        <GridComponent id="gridcomp" 
          allowPaging
          allowSorting
          toolbar={['Search']}
          width="auto"
          contextMenuItems={contextMenuItems}
          dataSource={users}>
          <ColumnsDirective>
            {usersGrid.map((item, index) => (
              <ColumnDirective key={index} {...item} />
            ))}
          </ColumnsDirective>
          <Inject services={[Page, Search, Toolbar]} />
        </GridComponent>
      </div>
    )
  }else{
    return(<div>Loading......</div>)
  }
}

const mapStateToProps = state => ({
  current_user: state.auth.current_user,
  users: state.auth.users
})

export default connect(mapStateToProps, {load_all_users})(InboxSearch);
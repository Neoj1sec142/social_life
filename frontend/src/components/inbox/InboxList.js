import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import {load_threads_by_user} from '../../store/actions/threadModel'
import {
  GridComponent, ColumnsDirective, ColumnDirective,
  Page, Search, Inject, Toolbar
} from '@syncfusion/ej2-react-grids'
import { contextMenuItems, threadsGrid } from './tableData'

const InboxList = ({
  load_threads_by_user, current_user, threadModels
}) => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    if(current_user){
      load_threads_by_user(current_user.id)
      setLoading(false)
    }
  },[])
  
  if(threadModels && !loading){
    return (
      <div className='m-2 p-2 bg-white rounded-3xl'>
          <h3 className='card-header text-center m-3 p-3'>Inbox</h3>
          <GridComponent id="gridcomp" 
            allowPaging
            allowSorting
            toolbar={['Search']}
            width="auto"
            contextMenuItems={contextMenuItems}
            dataSource={threadModels}>
            <ColumnsDirective>
              {threadsGrid.map((item, index) => (
                <ColumnDirective key={index} {...item} />
              ))}
            </ColumnsDirective>
            <Inject services={[Page, Search, Toolbar]} />
          </GridComponent>
        </div>
    )
  }
}

const mapStateToProps = state => ({
  current_user: state.auth.current_user,
  threadModels: state.threadModel.threadModels
})

export default connect(mapStateToProps, {load_threads_by_user})(InboxList)

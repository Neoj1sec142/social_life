import React, { Fragment, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import DataSelectionGrid from '../components/earth/pages/DataSelectionGrid'
// import LineChart from '../components/earth/charts/LineChart'





const EarthPage = () => {
  
  
  
  
  return (
    <Fragment>
      <div className='container-fluid'>
        <div className='d-flex justify-content-center mt-5'>
          <div className='row w-75 shadow-sm'>
            <DataSelectionGrid />
          </div>
        </div>
      </div>

    </Fragment>
  )
}

// const mapStateToProps = state => ({
//   // data: state.earth.data
// })

export default connect(null, {})(EarthPage);
import React, { Fragment, useEffect, useState } from 'react'
import { connect } from 'react-redux'
// import LineChart from '../components/earth/charts/LineChart'
// import {load_data} from '../store/actions/earth'

// const data = require("../components/earth/data/tasMax.json")
import { getCO2Emissions } from '../store/services/EarthServices'

const EarthPage = () => {
  const [loading, setLoading] = useState(true)
  const [stuff, setStuff] = useState(null)
  const fetchData = async () => {
    const res = require('../components/earth/data/co2Emissions.json')
    console.log(res, "RESSS")
    if(res){
      setStuff(res)
    }
    setLoading(false)
  }
  useEffect(() => { if(loading) fetchData() },[])
  console.log(stuff)
  return (
    <Fragment>
      <div className='container-fluid'>
        <div className='d-flex justify-content-center mt-5'>
          <div className='row w-75 shadow-sm'>
            {/* Data Selection Grid mapped through 
            useState / switch on data defaulted on DSG */}
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
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import LineChart from '../components/earth/charts/LineChart'
// import {load_data} from '../store/actions/earth'
const data = require("../components/earth/data/tasMax.json")
const EarthPage = () => {
  const [loading, setLoading] = useState(true)
  // const fetchData = () => {
  //   load_data("minPr")
  //   setLoading(false)
  // }
  // useEffect(() => { if(loading) fetchData() },[])
  console.log(data)
  return (
    <div>
      <LineChart />
    </div>
  )
}

// const mapStateToProps = state => ({
//   // data: state.earth.data
// })

export default connect(null, {})(EarthPage);
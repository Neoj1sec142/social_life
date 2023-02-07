import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import {load_data} from '../store/actions/earth'

const EarthPage = ({load_data, data}) => {
  const [loading, setLoading] = useState(true)
  const fetchData = () => {
    load_data("minPr")
    setLoading(false)
  }
  useEffect(() => { if(loading) fetchData() },[])
  console.log(data)
  return (
    <div>
      Something
    </div>
  )
}

const mapStateToProps = state => ({
  data: state.earth.data
})

export default connect(mapStateToProps, {load_data})(EarthPage);
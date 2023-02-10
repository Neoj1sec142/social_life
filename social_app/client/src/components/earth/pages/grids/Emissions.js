import React, { useState, useEffect } from 'react'
import { resMap, resKey } from '../../../../utils/utils'
const co2 = require('../../data/co2Emissions.json')
const nos = require('../../data/nitrous_oxcide_emissions.json')
const methane = require('../../data/methane_emissions.json')
const totalG = require('../../data/total_green_house_emissions.json')

const Emissions = () => {
  const gases = [co2, nos, methane, totalG]
  const [capitals, setCapitals] = useState([])
  const [loading, setLoading] = useState(true)
  const [emiss, setEmiss] = useState(null)
  const [selection, setSelection] = useState('')
  
  const handleGasses = e => {
    const target = e.target.value
    switch(target){
      case 'Carbon Dioxcide Emissions':
        // setEmiss(co2)
        setCapitals(resMap(co2))
        setLoading(false)
        break;
      case 'Nitrous Oxcide Emissions':
        // setEmiss(nos)
        setCapitals(resKey(nos))
        setLoading(false)
        break;
      case 'Methane Emissions':
        // setEmiss(methane)
        setCapitals(resKey(methane))
        setLoading(false)
        break;
      case 'Total Greenhouse Emissions':
        // setEmiss(totalG)
        setCapitals(resKey(totalG))
        setLoading(false)
        break;
      default:
        // setEmiss(null)
        setLoading(false)
        break;
    }
  }
  console.log(gases)
  // useEffect(() => { if(loading) handleGasses() },[])
  const onChange = e => setSelection(e.target.value)
  // if(loading){
    return (
      <div className='container-fluid w-100'>
        <div className='row w-100 m-3 shadow-sm'>
        <p className='card-header mb-2'>Filter Emissions By Capital: </p>
        <select name="gasses" onChange={e=>handleGasses(e)} className="form-control">
          <option>Types Of Emissions</option>
          <option>Carbon Dioxcide Emissions</option>
          <option>Nitrous Oxcide Emissions</option>
          <option>Methane Emissions</option>
          <option>Total Greenhouse Emissions</option>
        </select>
        <select name="" onChange={e=>onChange(e)} className="form-control">
          {capitals.length >= 1 ? capitals.map((item, index) => (
          <option key={index}>{item}</option>))
          : <option>Choose An Emission Type Above</option>}
        </select>
        </div>
      </div>
    )
  // }else{ return( <div>Loading....</div> ) }
}

export default Emissions
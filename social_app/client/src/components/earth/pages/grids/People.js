import React, { useState } from 'react'
import { resKey, getObjectBySelection } from '../../../../utils/utils'
const popGrowth = require('../../data/annual_population_growth.json')
const People = () => {
  const [countrys, setCountrys] = useState([])
  const [selection, setSelection] = useState(null)
  const handlePeople = e => {
    const target = e.target.value;
    switch(target){
      case 'Annual Popluation Growth':
        setCountrys(resKey(popGrowth))
        break;
      default:
        break;
    }
  }
  const onChange = e => setSelection(getObjectBySelection(popGrowth, e.target.value))
  

  return (
    <div className='container-fluid'>
      <div className='row w-100 m-3 shadow-sm'>
        <p className='card-header mb-2'>Filter People Data Types: </p>
        <select name="people" onChange={e=>handlePeople(e)} className="form-control">
          <option>Select An Option</option>
          <option>Annual Popluation Growth</option>
          <option>Loading...</option>
        </select>
        <select name="" onChange={e=>onChange(e)} className="form-control">
          {countrys.length >= 1 ? countrys.map((item, index) => (
          <option key={index}>{item}</option>))
          : <option>Choose A Data Type Above</option>}
        </select>
      </div>
      {selection !== null ? 
      <div className='row mt-3 w-100 shadow-sm'>
        {selection.null.length >= 1 ? selection.null.map((item, index) => (
        <div className='border col' key={index}>
          <p>{item}</p>
        </div>)):null}
      </div>:null}
    </div>
  )
}

export default People
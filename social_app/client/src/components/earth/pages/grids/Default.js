import React from 'react'

const Default = ({onGridChange}) => {
  return (
    <div>
        <p className='card-header'>DataType</p>
        <select name="selection" onChange={e=>onGridChange(e)}>
            <option>Select a Data Type</option>
            <option>Forest</option>
            <option>Emissions</option>
            <option>Water</option>
            <option>Plants</option>
            <option>Electricity & Fuel</option>
            <option>Animals</option>
            <option>People</option>
        </select>
    </div> 
  )
}

export default Default
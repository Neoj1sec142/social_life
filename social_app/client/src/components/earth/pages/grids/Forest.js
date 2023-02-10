import React, { useEffect, useState } from 'react'

const Forest = () => {
  const [loading, setLoading] = useState(true)
  const [countrys, setCountrys] = useState([])
  const [selection, setSelection] = useState('')
  const fetchCaptials = () => {
    const forest = require('../../data/forest_total.json')
    const res = () => forest.map(obj => obj[Object.keys(obj)[0]]);
    setCountrys(res)
    setLoading(false)
  }
  useEffect(() => {if(loading) fetchCaptials()},[])
  const onChange = e => setSelection(e.target.value)
  if(!loading){
    return (
      <div className='container-fluid'>
        <div className='row w-100 m-3 shadow-sm'>
          <p className='card-header mb-2'>Filter Forest area (sq. km) By Country: </p>
          <select name="region" onChange={e=>onChange(e)}>
            {countrys.length >= 1 ? countrys.map((item, index) => (
            <option key={index}>{item}</option>))
            : <option>Loadind....</option>}
          </select>
        </div>
      </div>
    )
  }else{ return( <div>Loading....</div> ) }
}

export default Forest
import React, { useState } from 'react'

const Animals = () => {
  const [selectedValue, setSelectedValue] = useState('All');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div>
      <div className='container w-100'>
        <div className='row w-100'>
            <div className='card m-3 shadow-sm'>
                <p className='card-header mb-2'>Filter Animals: </p>
                <div className='form-group'>
                  <label htmlFor='#AN_ALL' className='form-label'>All &nbsp;&nbsp;</label>
                  <input
                    type="radio"
                    id="#AN_ALL"
                    className='form-radio'
                    value="All"
                    checked={selectedValue === 'All'}
                    onChange={handleChange}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='#AN_FIS' className='form-label'>Water Life &nbsp;&nbsp;</label>
                  <input
                    type="radio"
                    id="#AN_FIS"
                    className='form-radio'
                    value="Fish"
                    checked={selectedValue === 'Fish'}
                    onChange={handleChange}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='#AN_MAM' className='form-label'>Mammal Life &nbsp;&nbsp;</label>
                  <input
                    type="radio"
                    id="#AN_MAM"
                    className='form-radio'
                    value="Mammals"
                    checked={selectedValue === 'Mammals'}
                    onChange={handleChange}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='#AN_BIRD' className='form-label'>Bird Life &nbsp;&nbsp;</label>
                  <input
                    type="radio"
                    id="#AN_BIRD"
                    className='form-radio'
                    value="Birds"
                    checked={selectedValue === 'Birds'}
                    onChange={handleChange}
                  />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Animals
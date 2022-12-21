import React, { useState } from 'react';
import { classSheet } from '../../styles/classSheet';
const Register = ({ }) => {
  const {con, flexCtr} = classSheet;
  const [formData, setFormData] = useState({
    email: '',
    first_name: '',
    last_name: '',
    username: '',
    password: '',
    confirm: ''
})
  return (
    <div className={`${con}`}>
        <div className={`${flexCtr}`}>
          <div className='row w-75 mt-3 m-2 p-2 shadow-sm'>
            Register Banner
          </div>
        </div>
    </div>
  )
};

export default Register;
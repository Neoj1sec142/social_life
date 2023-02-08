import React, { useState, useEffect } from 'react';

const DataSelectionGrid = () => {
    const [dataType, setDataType] = useState(null);
    const [selection, setSelection] = useState('');
    useEffect(() => {
        switch(selection){
            case 'Precipitation':
                setDataType('')
                break;
            case 'Co2 Emissions':
                setDataType('')
                break;
            case 's':
                setDataType('')
                break;
            default:
                setDataType(null)
                break;
        }
    },[selection]);

    return (
        <div className='container w-100'>
            <div className='row w-100'>
                <div className='card m-3 shadow-sm'>
                    <p className='card-header'>DataType</p>
                </div>
                <div className='card m-3 shadow-sm'>
                    <p className='card-header'>Country</p>
                </div>
                <div className='card m-3 shadow-sm'>
                    <p className='card-header'>State - ONLY FOR US RELATED DATA</p>
                </div>
                <div className='card m-3 shadow-sm'>
                    <p className='card-header'>Available Charts - ONLY AFTER OTHER OPTIONS SUBMITTED</p>
                </div>
            </div>
        </div>
    )
}

export default DataSelectionGrid
import React, { useState, useEffect, Fragment } from 'react';
import { useStateContext } from '../../../utils/StateContext';
import Animals from './grids/Animals'
import Emissions from './grids/Emissions'
import Forest from './grids/Forest'
import Fuel from './grids/Fuel'
import People from './grids/People'
import Plants from './grids/Plants'
import Water from './grids/Water'
import Default from './grids/Default'

const DataSelectionGrid = () => {
    const [selection, setSelection] = useState('');
    const onGridChange = e => setSelection(e.target.value)
    const [gridType, setGridType] = useState(<Default onGridChange={onGridChange}/>);
    // const {setDataType} = useStateContext();
    useEffect(() => {
        switch(selection){
            case 'Forest':
                setGridType(<Forest/>)
                break;
            case 'Emissions':
                setGridType(<Emissions/>)
                break;
            case 'Water':
                setGridType(<Water/>)
                break;
            case 'Plants':
                setGridType(<Plants/>)
                break;
            case 'Electricity & Fuel':
                setGridType(<Fuel/>)
                break;
            case 'Animals':
                setGridType(<Animals/>)
                break;
            case 'People':
                setGridType(<People/>)
                break;
            default:
                setGridType(<Default onGridChange={onGridChange}/>)
                break;
        }
    },[selection]);
    
    return (
        <div className='container w-100'>
            <div className='row w-100'>
                <div className='card m-3 shadow-sm'>
                    {gridType}
                </div>
            </div>
        </div>  
        )
}

export default DataSelectionGrid
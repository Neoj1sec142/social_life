import React, { useEffect, useState } from 'react'
import { Chart, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, Legend, Tooltip, ChartComponent, LineSeries } from '@syncfusion/ej2-react-charts'
import { getlineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis, getlineChartData } from './chartContext/lineChartContext'

const LineChart = () => {
    const [loading, setLoading] = useState(true)  
    const [data, setData] = useState([])  
    const [lineCustomSeries, setLineCustomSeries] = useState(null)
    const fetchData = () => {
        const res = getlineChartData()
        setData(res)
        const series = getlineCustomSeries(res)
        setLineCustomSeries(series)
        setLoading(false)
    }
    useEffect(() => {
        if(loading) fetchData()
    },[])
    
    if(!loading){
        return (
        <ChartComponent id="line-chart"
            height="420px"
            primaryXAxis={LinePrimaryXAxis}
            primaryYAxis={LinePrimaryYAxis}
            chartArea={{ border: {width: 0}}}
            tooltip={{enable: true}}
            selectedDataIndexes={{series: 0}}
            background={'#33373E'}>
            <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
            <SeriesCollectionDirective>
            {lineCustomSeries.map((item, index) => (
                <SeriesDirective key={index} {...item}/>
            ))}
            </SeriesCollectionDirective>
        </ChartComponent>
        )
    }else{ return( <div>Loading....</div> ) }
  }
  
  export default LineChart
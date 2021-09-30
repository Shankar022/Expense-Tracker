import React from 'react'
import  './Chart.css'
import ChartBar from './ChartBar';

const Chart = ({ dataPoints }) => {
    const dataPointsValues = dataPoints.map(dataPoint => dataPoint.value);
    const totalmaximum = Math.max(...dataPointsValues);
    return (
        <div className='chart'>
            {
                dataPoints.map((dataPoint) => (
                    <ChartBar
                        key={dataPoint.label}
                        label={dataPoint.label}
                        maxValue={totalmaximum}
                        value={dataPoint.value}
                    />
                ))
            }
        </div>
    )
}

export default Chart;

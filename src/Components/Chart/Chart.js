import React from 'react'
import  './Chart.css'
import { Bar } from "react-chartjs-2";

const Chart = ({ dataPoints,year }) => {
    const dataPointsValues = dataPoints.map(dataPoint => dataPoint.value);
    // const totalmaximum = Math.max(...dataPointsValues);
    return (
        // <div className='chart'>
        //     {
        //         dataPoints.map((dataPoint) => (
        //             <ChartBar
        //                 key={dataPoint.label}
        //                 label={dataPoint.label}
        //                 maxValue={totalmaximum}
        //                 value={dataPoint.value}
        //             />
        //         ))
        //     }
        // </div>
        <>
            
          <Bar
              
              data={{
                  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Sep', 'Oct', 'Nov', 'Dec'],
                  datasets: [
                    {
                      label: "Expenses",
                      backgroundColor: ['rgba(255, 0, 0, 0.8)'],
                      data: dataPointsValues,
                    },
                  ],
                }}
                options={{
                  legend: { display: false },
                  title: { display: true, text: `Current year in ${year}` },

                }}
          />
      </>
    )
}

export default Chart;

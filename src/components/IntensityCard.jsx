import React from 'react'
import {useMemo} from 'react'


export  default function IntensityCard({data}){
     let avg = useMemo(()=>{
        let intensities = data.data.map(d=>d.intensity.average);
        return Math.round(intensities.reduce((a,b)=>a+b,0)/intensities.length);


     })
     const {peak,low} = useMemo(()=>{
        let peak= data.data[0],low = data.data[0];
        for(let entry of data.data){
            if(entry.intensity.average > peak.intensity.average){
                peak = entry;
            }
            if(entry.intensity.average < low.intensity.average){
                low = entry;
            }
        }
        return {peak, low};
     },[data]);
     const index = avg >200 ? "High" : avg > 100 ? "Moderate" : "Good";

  return (
    <>
     <div className='colorClass'>
          <h2>Average Intensity : {avg} gCO2/kWh ({index})</h2>
          <p>Peak: {peak.from} - {peak.intensity.average}</p>
          <p>Low: {low.from} -{low.intensity.average}</p>
     </div>
    </>
  )
}

import React from 'react'
import {useMemo} from 'react'
import { saveBookmarkWithIndex } from "../firebase/firebase";

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
     const colorClass = index === "High" ? "bg-red-600" : index === "Moderate" ? "bg-orange-400" : "bg-green-200";

     const handleBookmark = () => {
        saveBookmarkWithIndex(data.date, avg, index);
    };

  return (
    <>
     <div className={`p-4 ${colorClass}`}>
          <h2>Average Intensity : {avg} gCO2/kWh ({index})</h2>
          <p>Peak: {peak.from} - {peak.intensity.average}</p>
          <p>Low: {low.from} -{low.intensity.average}</p>
          <button onClick={handleBookmark} className="mt-4 py-2 px-4 bg-black text-white">Bookmark</button>
     </div>
    </>
  )
}

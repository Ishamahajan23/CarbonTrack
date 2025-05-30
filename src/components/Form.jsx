import React, { useEffect } from 'react'
import { useRef ,useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'


export  default function Form(){
    let navigate = useNavigate();
    const inputRef = useRef(null);
    let [date, setdate] = useState("");

    const handleChange=(e)=>{
       
        if(e.target.value){
            setdate(e.target.value);
        }

    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(date){
            navigate(`/intensity/${date}`);
        }else{
            alert("Please enter a valid date");
        }
    }
    useEffect(()=>{
        inputRef.current.focus();
    },[])
    
  return (
    <>
      <div className=' w-full flex flex-col items-center justify-center'>
        <form className='flex flex-col items-center justify-center gap-4 mt-10 border p-4 w-1/2 shadow-md ' onSubmit={handleSubmit}>
        <label className='text-xl font-bold'> Enter Date </label>
        <input type="date"  ref={inputRef}  className='border py-1 px-2' onChange={handleChange}/>
        <button type='submit' className='py-2 px-4 bg-black text-white '>Add</button>
        </form>
        
      </div>
    </>
  )
}

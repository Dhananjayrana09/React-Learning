import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Spinner } from './Spinner'
import { usegif } from './Hooks/usegif'

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY
export const Random = () => {

    
    // values custom hook jo hamne banaya h usse nikali h yaha
    const {gif, loading, fetchData} = usegif

    function clickHandler() {
        fetchData();
    }

  return (
    <div className=' w-1/2 bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
        
        <h1 className=' mt-[15px] text-2xl underline uppercase font-bold'>A Random GIF</h1>

        {
            loading ? (<Spinner/>) : (<img src={gif} alt='error' width={450}/>)
        }
        

        <button onClick={clickHandler}
        className='mb-[20px] w-10/12 bg-red-500 text-lg py-2 rounded-lg'>
            Generate
        </button>
    </div>
  )
}

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Spinner } from './Spinner'

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY
export const Tag = () => {

    const[tag, setTag] = useState("")

  return (
    <div className=' w-1/2 bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
        
        <h1 className=' mt-[15px] text-2xl underline uppercase font-bold'>Random GIF {tag}</h1>

        {
            loading ? (<Spinner/>) : (<img src={gif} alt='error' width={450}/>)
        }
        
        <input className='w-10/12 mb-[3px] bg-red-500 text-lg py-2 rounded-lg'
        value={tag} onChange={(event) => setTag(event.target.value)}>
        
           
        </input>


        <button onClick={() => fetchData()}
        className='mb-[20px] w-10/12 bg-red-500 text-lg py-2 rounded-lg'>
            Generate
        </button>
    </div>
  )
}

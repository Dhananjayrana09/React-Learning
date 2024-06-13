import React from 'react'
import { useNavigate } from 'react-router-dom';

 const Support = () => {
    const navigate = useNavigate()

    function clickHandler() {
        navigate('/labs')
    }
  return (
    <>
    <div>Support</div>
    <button onClick={clickHandler}>Go To Labs</button>
    </>
  )
}
export default Support;

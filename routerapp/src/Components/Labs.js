import React from 'react'
import { useNavigate } from 'react-router-dom';

 const Labs = () => {
    const navigate = useNavigate()
    function clickHandler() {
        navigate('/about')
    }
  return (
    <>
    <div>labs</div>
    <button onClick={clickHandler}>Go To About</button>
    </>
  )
}
export default Labs;

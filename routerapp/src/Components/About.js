import React from 'react'
import { useNavigate } from 'react-router-dom';



 const About = () => {
    const navigate = useNavigate()
    function clickHandler() {
        navigate('/Home')
    }

  return (
    <>
    <div>About</div>
    <button onClick={clickHandler}>GO to Home</button>
    </>
  )
}
export default About;

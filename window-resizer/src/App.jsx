import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [windowSize, setWindowSize] = useState({ 
    width: window.innerWidth,
    height: window.innerHeight
  })

  useEffect( () => {
    const handleResize = () => {
      setWindowSize({ 
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleResize)

    return() => {
      window.removeEventListener('resize', handleResize)
    }
  },[]) 

  return (
    <>
      <h1>Window Size</h1>
      <p>Width: {windowSize.width}px</p>
      <p>Height: {windowSize.height}px</p> 
    </>
  )
}

export default App

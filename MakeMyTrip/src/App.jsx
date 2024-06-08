import { useState } from 'react'
import './App.css'
import Tours from './Components/Tours'
import data from './data'

const App = () => {
  const [tours, setTours] = useState(data)

  return (
    <>
      <Tours tours={tours}></Tours>
    </>
  )
}

export default App

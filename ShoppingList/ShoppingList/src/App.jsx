import { useState } from 'react'
import Shopping from './Components/Shopping'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Shopping List</h1>
        <Shopping />
      </div>
    </>
  )
}

export default App

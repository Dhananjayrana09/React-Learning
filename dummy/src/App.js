
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const[text,setText] = useState('')

  function changeHandler(event) {
    console.log(text);
    setText(event.target.value)
  }

  // Variation 1 - on every render

  useEffect(() => {
    console.log("Change Observed");
  })

   // Variation 2 - only on First render

   useEffect(() => {
    console.log("change observed");
   }, [])

    // Variation 3 - on first render + whenever dependency change

    useEffect(() => {
      console.log("change observed");
    }, [text])

    // Variation 4 - To handle unmounting of a component

    useEffect(() => {
      console.log("Listener added");

      return() => {
        console.log("Listener removed");
      }
    })


  return (
    <div className="App">
      <input type='text' onChange={changeHandler}></input>
    </div>
  );
}

export default App;

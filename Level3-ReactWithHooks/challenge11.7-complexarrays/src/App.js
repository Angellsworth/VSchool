import './App.css';
import React from 'react'


function App() {
  /**
  use thingsarray and set as values you get back from react.usestate. Initialize values thing 1 and thing 2
   */
  const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])
  
  function addItem() {
      setThingsArray(prevState => {
        return [...prevState,`Thing ${prevState.length +1}`]
      })
  }
  
  const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
  
  return (
      <div>
        {/* When button is clicked run addItem */}
          <button onClick={addItem}>Add Item</button>
          {thingsElements}
      </div>
  )
}



export default App;

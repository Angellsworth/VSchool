import './App.css';
import React from "react"
/**
     * Challenge: 
     * - Initialize state for `isGoingOut` as a boolean
     * - Make it so clicking the div.state--value flips that
     *   boolean value (true -> false, false -> true)
     * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
     */

function App() {

  const [isGoingOut, setIsGoingOut] = React.useState(true)

  function changeMind() {
    setIsGoingOut(prevState => !prevState)
  }

  return (

    <div className="state">
      <h1 className = "state--title">Does Angie feel like going out tonight?</h1>
      <div onClick={changeMind} className = "state--value">
        <h1>{isGoingOut ? 'Yes' : 'No'} </h1>
      </div>

        
      
    </div>
  );
}

export default App;

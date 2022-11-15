import React from 'react';
import './App.css';

function App() {

  const [color, setColor] = React.useState({})
  const [count, setCount] = React.useState(0)

  React.useEffect(function() {
    console.log("Effect Ran")
    fetch(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
      .then(res => res.json())
      .then(res => setColor(res.colors[0].hex))
  }, [count])



  return (
    <div className="App">

      <h1>Random Color</h1>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>New Color</button>
        <div className="color-square" style={{background: `#${color}`}} ></div>
       
    </div>
  );
}

export default App;


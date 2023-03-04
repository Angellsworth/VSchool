import React from "react"
import './App.css';
import Header from "./Header"
import Generator from "./Generator"

//App is parent - only parent can share state (information) down
//Header and Generator are siblings - direct children of App
function App() {
  //State needs to live here
  // const [colorOne, setColorOne] = React.useState("")
  // const [colorTwo, setColorTwo] = React.useState("")
  // const [colorThree, setColorThree] = React.useState("")
  // const [angle, setAngle] = React.useState("")

  const [inputs, setInputs] = React.useState({
    colorOne: "#ddd5ef", 
    colorTwo: "#cb3697", 
    colorThree: "#510c5c",
    angle: 0
  })

  function handleChange(e) {
    console.log("This is information about the input field: ", e.target)
    const {name, value} = e.target

    // when setting state we have 2 options: 
    // 1. passing in a new value (if you dont care about previous values in the state)
    // 2. passing in a cb function that gives you access to previous state 
    setInputs((prevInputs)=>{
      return {
        ...prevInputs,
        [name]: value,
      }
    })
  }

  return (
    <div className="App">
      
        <Header inputs={inputs}/>
        <Generator inputs={inputs} handleChange={handleChange}/>
    </div>
  );
}

export default App;

import './App.css';
import React from "react"
import Navbar from "./components/Navbar.js"
import Hero from "./components/Hero.js"
import Card from "./components/Card.js"
import data from "./data.js"





function App() {

  const cards = data.map(item => {
    return (
        <Card
            key={item.id}
            item={item}
        />
    )
  })
    
  return (
    <div>
      <Navbar /> 
      <Hero />
     {cards}
    </div>
    
  );
}

export default App;

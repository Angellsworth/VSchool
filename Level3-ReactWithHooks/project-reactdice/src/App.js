import React from "react"
import './App.css';
import Header from "./components/Header"
import DiceBox from "./components/DiceBox"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
        <Header />
      <div className="DiceBox">
        <DiceBox />
      </div>
        <Footer />
    </div>
  );
}

export default App;

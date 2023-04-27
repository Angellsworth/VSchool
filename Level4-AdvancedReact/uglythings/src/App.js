import React, {useState} from "react"
import Header from "./Header"
import Form from "./Form"
import UglyCardList from "./UglyCardList"
import Footer from "./Footer"


import './App.css';

function App() {
  return (

      <div className="App"> 
            <Header />
            <Form />
            <UglyCardList />
            <Footer /> 
      </div>
   
  );
}

export default App;

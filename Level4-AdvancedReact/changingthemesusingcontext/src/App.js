import React, {useState} from "react"
import './App.css';
import Navbar from "./Navbar"
import Main from "./Main"
import Footer from "./Footer"
import {ThemeContextProvider} from "./themeContext";


function App(props) {

  return (
    <ThemeContextProvider>
      <Navbar />
      <Main />
      <Footer />
    </ThemeContextProvider>
  );
}

export default App;

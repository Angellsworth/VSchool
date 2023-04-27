import React from "react"
import Contact from "./Contact"
import './App.css';
import Charlotte from "./images/charlotte.jpeg"
import Echo from "./images/echo.png"
import Frank from "./images/frank.jpg"
import Kween from "./images/kween.jpg"


function App() {
  return (
    <div className="contacts">
      <Contact 
                img={Charlotte}
                name="Ms. Whiskerson"
                phone="(800) 555-1234"
                email="ms.whiskaf@catnap.meow"
            />
            <Contact 
                img={Frank}
                name="Frank"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
            />
            <Contact 
                img={Echo}
                name="Echo"
                phone="(212) 555-2345"
                email="fluff@me.com"
            />
            
            <Contact 
                img={Kween}
                name="Kween"
                phone="(800) CATDIVA"
                email="kween@scrimba.com"
            />

      
    </div>
  );
}

export default App;

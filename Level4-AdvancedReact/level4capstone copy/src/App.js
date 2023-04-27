import React from "react";
import NasaImage from "./components/images/nasaImage.png";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import NasaPhoto from "./components/NasaPhoto";
import Search from "./components/Search";

import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <header>
        <img src={NasaImage} className="headerImage" />
        <h1 className="headerTitle">Mars Rover</h1>
        <h4 className="headerProject">Level 4 Capstone</h4>
      </header>
      <nav>
        <Link className="links" to="/" style={{ padding: 5 }}>
          Home
        </Link>
        <Link className="links" to="/NasaPhoto" style={{ padding: 5 }}>
          Photo Of the Day
        </Link>
        <Link className="links" to="/search" style={{ padding: 5 }}>
          Rover Photos
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/NasaPhoto" element={<NasaPhoto />} />
        <Route path="/Search" element={<Search />} />
      </Routes>

      {/* <Footer /> */}
    </div>
  );
};

export default App;

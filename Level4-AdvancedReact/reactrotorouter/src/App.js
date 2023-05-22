import React from "react";
// import {Routes, Route, Link} from react router dom
import { Routes, Route, Link } from "react-router-dom";
// import components you will be using from components folder
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <h1 className="header">Roto Routing Plumbers</h1>
      {/* create navbar to place your links */}
      <nav>
        <h3>
          Click the links to see the Router Roto Routing <em>Magic</em>
        </h3>
        {/* links take prop called "to" which directs to location*/}
        {/* link to Route home page*/}
        <Link className="links" to="/" style={{ padding: 5 }}>
          Home
        </Link>
        {/* link to Route about page*/}
        <Link className="links" to="/about" style={{ padding: 5 }}>
          About
        </Link>
        {/* link to Route services page */}
        <Link className="links" to="/services" style={{ padding: 5 }}>
          Services
        </Link>
      </nav>

      <Routes>
        {/* self closing Route component */}
        {/* Route has 2 require props - path(define end point of URL) and element(which component to render)*/}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>

      <Footer />
    </div>
  );
}
export default App;

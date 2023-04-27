import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <h1 className="header">Roto Routing Plumbers</h1>
      <nav>
        <h3>
          Click the links to see the Router Roto Routing <em>Magic</em>
        </h3>
        <Link className="links" to="/" style={{ padding: 5 }}>
          Home
        </Link>
        <Link className="links" to="/about" style={{ padding: 5 }}>
          About
        </Link>
        <Link className="links" to="/services" style={{ padding: 5 }}>
          Services
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>

      <Footer />
    </div>
  );
}
export default App;

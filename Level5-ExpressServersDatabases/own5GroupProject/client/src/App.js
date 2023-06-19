import { Router, Routes, Route, Link } from "express";
import React from "react";
import Home from "./components/Home";
import DogPage from "./components/DogPage";
import WalkerPage from "./components/WalkerPage";
import "./App.css";

const App = () => {
  return (
    <Router>
      <nav style={{ margin: 10 }}>
        <Link to="/" style={{ padding: 5 }}>
          Home
        </Link>
        <Link to="/DogPage" style={{ padding: 5 }}>
          Dogs
        </Link>
        <Link to="/WalkerPage" style={{ padding: 5 }}>
          Walkers
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/DogPage" element={<DogPage />} />
        <Route path="/WalkerPage" element={<WalkerPage />} />
      </Routes>
    </Router>
  );
};

export default App;

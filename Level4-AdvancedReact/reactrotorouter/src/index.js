import React from "react";
import ReactDOM from "react-dom/client";
// #1 import BrowserRouter from react router dom
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // #2 wrap router around app
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

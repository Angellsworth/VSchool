import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import {ContextProvider}from './Context.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <ContextProvider>
     <App /> 
    </ContextProvider>
    
  </React.StrictMode>
);

// [] Create Context inside Context.js (React.createContext())
// [] Provide the Context
// 
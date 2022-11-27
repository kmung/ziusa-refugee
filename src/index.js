import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import Browser Router for routing pages
// the router component should be used once
// and placed near the root of our component tree
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //BrowserRouter must wrap App
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
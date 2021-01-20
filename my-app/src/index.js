import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./index.css";

ReactDOM.render(
  <div className="rootClass">
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </div>,
  document.getElementById('root')
);

reportWebVitals();

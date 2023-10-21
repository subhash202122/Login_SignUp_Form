import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import App from './App';
// Set the base URL for API requests
axios.defaults.baseURL = 'http://localhost:5000';
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

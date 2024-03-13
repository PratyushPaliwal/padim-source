import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Router } from "@reach/router";

ReactDOM.render(
  <Router>
          <App default />
  </Router>,
  document.getElementById('root')
);

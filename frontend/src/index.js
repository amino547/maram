// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';  // For React 18
import './index.css';  // Tailwind CSS or default styles
import App from './App';
import reportWebVitals from './reportWebVitals';  // Web Vitals import

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Log web vitals (if you want to measure performance)
reportWebVitals();

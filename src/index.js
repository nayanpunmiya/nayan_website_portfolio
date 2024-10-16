import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Add viewport resize listener for responsive adjustments
const handleResize = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

// Initial call and event listener
handleResize();
window.addEventListener('resize', handleResize);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Clean up resize listener on unmount
window.removeEventListener('resize', handleResize);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Navbar';
import Main from './Main';
import './css/styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="my-container">
      <Navbar />
      <Main />
    </div>
  </React.StrictMode>
);

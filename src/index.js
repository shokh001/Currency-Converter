import React from 'react';
import ReactDOM from 'react-dom';
import CurrencyConverte from './components/CurrencyConverte';
import Navbar from './components/Navbar';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <CurrencyConverte />
  </React.StrictMode>,
  document.getElementById('root')
);


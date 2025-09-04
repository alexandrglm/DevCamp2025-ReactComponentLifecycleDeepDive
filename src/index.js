// Guide 07 React Components' Lifecycle

/*

Configuramos de manera manual nuestro server


*/


import React from 'react';
import ReactDOM from 'react-dom';

// Adiciones ROUTER !
import {  BrowserRouter, Route, Link } from 'react-router-dom'

import App from './components/app';



ReactDOM.render(

  <React.StrictMode>
      {/* PRINCIPAL -> METEMOS EL ROUTER BROWSER */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </React.StrictMode>, document.querySelector('.app-wrapper'));
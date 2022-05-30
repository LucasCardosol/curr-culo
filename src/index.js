import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router.js'
import {GlobalStyle} from './globalStyle'

ReactDOM.render(
  <React.StrictMode>
    <Router/>
    <GlobalStyle/>
  </React.StrictMode>,
  document.getElementById('root')
);




import React from 'react';
import ReactDOM from 'react-dom';
import Register from './pages/Register/Register';

import { GlobalStyle } from './styles/global';

import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3333';
axios.defaults.headers.post['Content-Type'] = 'application/json';

ReactDOM.render(
  <React.StrictMode>
    <>
      <GlobalStyle />
      <Register />
    </>
  </React.StrictMode>,
  document.getElementById('root')
);

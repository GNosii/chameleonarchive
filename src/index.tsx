import React from 'react';
import ReactDOM from 'react-dom';

import './styles/style.scss';
import './styles/keyframes.scss';

import './scripts/Globals';
import './scripts/Frontend';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

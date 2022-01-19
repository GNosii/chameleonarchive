import React from 'react';
import ReactDOM from 'react-dom';

import './styles/style.scss';
import './styles/keyframes.scss';

import './scripts/Globals';
import './scripts/Frontend';

import App from './App';

import { register } from './ServiceWorkerRegistration';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

register(process.env.PUBLIC_URL + '/service-worker.js');

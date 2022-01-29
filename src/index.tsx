import React from 'react';
import ReactDOM from 'react-dom';

import './styles/main.scss';
import './styles/keyframes.scss';

import App from './App';

import { register } from './ServiceWorkerRegistration';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

register(process.env.PUBLIC_URL + '/service-worker.js');

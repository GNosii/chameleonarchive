import React from 'react'
import ReactDOM from 'react-dom'

import './styles/style.scss'
import './styles/keyframes.scss'

import './scripts/Globals'
import './scripts/Frontend'

import App from './App'

import { unregister } from './serviceWorkerRegistration.js'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

unregister()

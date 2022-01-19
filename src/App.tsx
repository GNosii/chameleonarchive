import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Sidebar from './components/Sidebar'
import FrontendWrapper from './components/FrontendWrapper'

import Listing from './views/base/Listing'

const base = 'http://127.0.0.1:3085/api'

function App() {
  return (
    <>
      <Sidebar />
      <FrontendWrapper>
        <BrowserRouter>
          <Switch>
            <Route path="/residents">
              <Listing name="Residents" dataEndpoint={base + '/residents'} />
            </Route>
            <Route path="/towns">
              <Listing name="Towns" dataEndpoint={base + '/towns'} />
            </Route>
            <Route path="/nations">
              <Listing name="Nations" dataEndpoint={base + '/nations'} />
            </Route>
            <Route exact path="/">
              <h2>Homepage</h2>
            </Route>
          </Switch>
        </BrowserRouter>
      </FrontendWrapper>
    </>
  )
}

export default App

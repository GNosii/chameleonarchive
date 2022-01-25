import { Component } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import FrontendWrapper from './components/FrontendWrapper';

import Listing from './views/base/Listing';

import { bake_cookie, read_cookie } from 'sfcookies';
import Error from './views/Error';

export default class App extends Component {
  componentDidMount() {
    //bake_cookie('base', 'https://61e82144e32cd90017acc083.mockapi.io/api/');
    bake_cookie('base', 'http://127.0.0.1:3085/api/');
  }

  render() {
    return (
      <>
        <Sidebar />
        <FrontendWrapper>
          <BrowserRouter>
            <Switch>
              <Route exact path="/residents">
                <Listing
                  name="Residents"
                  type="residents"
                  dataEndpoint={read_cookie('base') + 'residents'}
                />
              </Route>
              <Route exact path="/towns">
                <Listing
                  name="Towns"
                  type="towns"
                  dataEndpoint={read_cookie('base') + 'towns'}
                />
              </Route>
              <Route exact path="/nations">
                <Listing
                  name="Nations"
                  type="nations"
                  dataEndpoint={read_cookie('base') + 'nations'}
                />
              </Route>
              <Route exact path="/">
                <h2>Homepage</h2>
              </Route>
              <Route>
                <Error error={404} />
              </Route>
            </Switch>
          </BrowserRouter>
        </FrontendWrapper>
      </>
    );
  }
}

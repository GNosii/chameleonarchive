import { Component } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import FrontendWrapper from './components/FrontendWrapper';

import Listing from './views/base/Listing';

import { bake_cookie, read_cookie } from 'sfcookies';

export default class App extends Component {
  componentDidMount() {
    bake_cookie('base', 'https://61e82144e32cd90017acc083.mockapi.io/api/');
  }

  render() {
    return (
      <>
        <Sidebar />
        <FrontendWrapper>
          <BrowserRouter>
            <Switch>
              <Route path="/residents">
                <Listing
                  name="Residents"
                  dataEndpoint={read_cookie('base') + 'residents'}
                />
              </Route>
              <Route path="/towns">
                <Listing
                  name="Towns"
                  dataEndpoint={read_cookie('base') + 'towns'}
                />
              </Route>
              <Route path="/nations">
                <Listing
                  name="Nations"
                  dataEndpoint={read_cookie('base') + 'nations'}
                />
              </Route>
              <Route exact path="/">
                <h2>Homepage</h2>
              </Route>
            </Switch>
          </BrowserRouter>
        </FrontendWrapper>
      </>
    );
  }
}

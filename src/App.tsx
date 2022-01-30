import { Component } from 'react';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import FrontendWrapper from './components/FrontendWrapper';

import { bake_cookie, read_cookie } from 'sfcookies';

import Error from './views/commonview/Error';
import SetServerView from './views/SetServerView';
import Homepage from './views/Homepage';
import Listing from './views/Listing';

export default class App extends Component {
  componentDidMount() {
    if (read_cookie('newUser').length === 0) {
      bake_cookie('newUser', 'true');
    }
    //bake_cookie('base', 'http://127.0.0.1:3085/api/');
  }

  render() {
    return (
      <>
        <Sidebar />
        <FrontendWrapper>
          <BrowserRouter>
            {read_cookie('base').length === 0 ? (
              <Switch>
                <Route exact path="/residents">
                  <Redirect to={'/ssv'} />
                </Route>
                <Route exact path="/towns">
                  <Redirect to={'/ssv'} />
                </Route>
                <Route exact path="/nations">
                  <Redirect to={'/ssv'} />
                </Route>
                <Route exact path="/ssv">
                  <SetServerView />
                </Route>
                <Route exact path="/">
                  <Redirect to={'/ssv'} />
                </Route>
                <Route>
                  <Error error={404} />
                </Route>
              </Switch>
            ) : (
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
                <Route exact path="/ssv">
                  <Error error={-1} />
                </Route>
                <Route exact path="/">
                  <Homepage />
                </Route>
                <Route>
                  <Error error={404} />
                </Route>
              </Switch>
            )}
          </BrowserRouter>
        </FrontendWrapper>
      </>
    );
  }
}

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import FrontendWrapper from './components/FrontendWrapper';
import ListingContainer from './components/ListingContainer';

const base = 'http://127.0.0.1:3085/api'

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path="/">
          <FrontendWrapper>
            <h2>Testing, yk</h2>
          </FrontendWrapper>
        </Route>
        <Route path="/residents">
          <h2>Residents</h2>
          <ListingContainer endpoint={base + '/residents'} />
        </Route>
        <Route path="/towns">
          <h2>Towns</h2>
          <ListingContainer endpoint={base + '/towns'} />
        </Route>
        <Route path="/nations">
          <h2>Nations</h2>
          <ListingContainer endpoint={base + '/nations'} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import FrontendWrapper from './components/FrontendWrapper';

import Listing from './views/base/Listing';

const base = 'http://127.0.0.1:3085/api'

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <FrontendWrapper>
        <Routes>
          <Route path="/" element={<h2>Homepage</h2>} />
          <Route path="/residents" element={<Listing name='Residents' dataEndpoint={base + '/residents'} />} />
          <Route path="/towns" element={<Listing name='Towns' dataEndpoint={base + '/towns'} />} />
          <Route path="/nations" element={<Listing name='Nations' dataEndpoint={base + '/nations'} />} />
        </Routes>
      </FrontendWrapper>
    </BrowserRouter>
  );
}

export default App;

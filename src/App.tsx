import Sidebar from './components/Sidebar';
import FrontendWrapper from './components/FrontendWrapper';
import ListingContainer from './components/ListingContainer';

const base = 'http://127.0.0.1:3085/api'

function App() {
  return (
    <div>
      <Sidebar />
      <FrontendWrapper>
        <h2>Testing, yk</h2>
        <ListingContainer endpoint={base + '/towns'}>
        </ListingContainer>
      </FrontendWrapper>
    </div>
  );
}

export default App;

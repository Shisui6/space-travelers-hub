import { Outlet } from 'react-router-dom';
import Header from '../features/Header/Header';

const App = () => (
  <div className="App">
    <Header />
    <div id="detail">
      <Outlet />
    </div>
  </div>
);

export default App;

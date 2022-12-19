import { Outlet } from 'react-router-dom';

const App = () => (
  <div className="App">
    {/* Add Navbar component here */}

    <div id="detail">
      <h1>Space Travelers Hub</h1>
      <Outlet />
    </div>
  </div>
);

export default App;

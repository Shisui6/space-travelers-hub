import { Outlet } from 'react-router-dom';

const App = () => (
  <div className="App">
    <h1>Space Travelers Hub</h1>
    {/* Replace above element with navbar  */}

    <div id="detail">
      <Outlet />
    </div>
  </div>
);

export default App;

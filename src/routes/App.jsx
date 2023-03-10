import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Header from '../features/Header/Header';
import { getMissions } from '../features/Mission/missionSlice';
import { fetchRockets } from '../features/RocketList/rocketsSlice';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
    dispatch(getMissions());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />

      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
};

export default App;

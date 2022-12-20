import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rocket from '../Rocket/Rocket';
import { fetchRockets, selectRockets } from './rocketsSlice';
import './RocketList.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector(selectRockets);

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <>
      <div className="RocketList">
        {rockets.map((rocket) => <Rocket key={rocket.id} rocket={rocket} />)}
      </div>
    </>
  );
};

export default Rockets;

import { useSelector } from 'react-redux';
import Rocket from '../Rocket/Rocket';
import { selectRockets } from './rocketsSlice';
import './RocketList.css';

const Rockets = () => {
  const rockets = useSelector(selectRockets);

  return (
    <>
      <div className="RocketList">
        {rockets.map((rocket) => <Rocket key={rocket.id} rocket={rocket} />)}
      </div>
    </>
  );
};

export default Rockets;

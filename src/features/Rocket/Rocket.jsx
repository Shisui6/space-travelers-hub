import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserve } from '../RocketList/rocketsSlice';
import './Rocket.css';

const Rocket = ({ rocket }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(reserve(rocket.id));
  };

  return (
    <div className="Rocket">
      <div>
        <img src={rocket.flickr_images[0]} alt="rocket" />
      </div>
      <div>
        <h2>{rocket.name}</h2>
        <p>{rocket.desc}</p>
        <button type="button" onClick={handleClick}>Reserve Rocket</button>
      </div>
    </div>
  );
};

export default Rocket;

Rocket.propTypes = {
  rocket: PropTypes.shape().isRequired,
};

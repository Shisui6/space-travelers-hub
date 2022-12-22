import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { cancel, reserve } from '../RocketList/rocketsSlice';
import './Rocket.css';

const Rocket = ({ rocket }) => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    if (e.target.className === 'reserve') {
      dispatch(reserve(rocket.id));
    } else {
      dispatch(cancel(rocket.id));
    }
  };

  return (
    <div className="Rocket">
      <div>
        <img src={rocket.flickr_images[0]} alt="rocket" />
      </div>
      <div>
        <h2>{rocket.name}</h2>
        <p>
          {rocket.reserved && <span>Reserved</span>}
          {rocket.desc}
        </p>
        {rocket.reserved ? <button type="button" className="cancel" onClick={handleClick}>Cancel Reservation</button> : <button type="button" className="reserve" onClick={handleClick}>Reserve Rocket</button>}
      </div>
    </div>
  );
};

export default Rocket;

Rocket.propTypes = {
  rocket: PropTypes.shape().isRequired,
};

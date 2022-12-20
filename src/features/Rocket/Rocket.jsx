import PropTypes from 'prop-types';
import './Rocket.css';

const Rocket = ({ rocket }) => (
  <div className="Rocket">
    <div>
      <img src={rocket.flickr_images[0]} alt="rocket" />
    </div>
    <div>
      <h2>{rocket.name}</h2>
      <p>{rocket.desc}</p>
      <button type="button">Reserve Rocket</button>
    </div>
  </div>
);

export default Rocket;

Rocket.propTypes = {
  rocket: PropTypes.shape().isRequired,
};

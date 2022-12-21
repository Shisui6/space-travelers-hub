import { useSelector } from 'react-redux';
import { selectReservedRockets } from '../RocketList/rocketsSlice';
import './Profile.css';

const Profile = () => {
  const reservedRockets = useSelector(selectReservedRockets);
  const renderRockets = () => {
    if (reservedRockets.length) {
      return reservedRockets.map((rocket) => <p key={rocket.id}>{rocket.name}</p>);
    }

    return <span>No rockets reserved</span>;
  };

  return (
    <div className="Profile">
      <div>
        <h2>My Missions</h2>
      </div>
      <div>
        <h2>My Rockets</h2>
        <div className="rocket-list">
          {renderRockets()}
        </div>
      </div>
    </div>
  );
};

export default Profile;

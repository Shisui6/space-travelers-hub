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

  const missions = useSelector((state) => state.missions);
  const reservedMissions = missions.filter((mission) => mission.reserved !== false);
  const renderMissions = () => {
    if (reservedMissions.length) {
      return reservedMissions.map((mission) => (
        <p key={mission.id}>{mission.name}</p>
      ));
    }

    return <span>No missions reserved</span>;
  };

  return (
    <div className="Profile">
      <div>
        <h2>My Missions</h2>
        <div className="rocket-list">
          {renderMissions()}
        </div>
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

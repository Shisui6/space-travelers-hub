/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from './missionSlice';
import './mission.css';

const Mission = ({ mission }) => {
  const { id, name, description, reserved } = mission;

  const dispatch = useDispatch();

  return (
    <tr>
      <td className="centerAlign">{name}</td>
      <td className="description">{description}</td>
      <td className="centerAlign">
        <span>
          {reserved ? (
            <span className="badge-leave">ACTIVE MEMBER</span>
          ) : (
            <span className="badge-join">NOT A MEMBER</span>
          )}
        </span>
      </td>
      <td className="centerAlign">
        {reserved
          ? <button type="submit" className="btn-leave" onClick={() => dispatch(leaveMission({ id }))}>Leave Mission</button>
          : <button type="submit" className="btn-join" onClick={() => dispatch(joinMission({ id }))}>Join Mission</button>}
      </td>
    </tr>
  );
};

Mission.propTypes = {
  mission: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    reserved: PropTypes.bool,
  }),
};

Mission.defaultProps = {
  mission: null,
};

export default Mission;

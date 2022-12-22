import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Mission from './Mission';
import './mission.css';
import { getMissions } from './missionSlice';

const MissionList = () => {
  const missions = useSelector((state) => state.missions.missions);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!missions.length) {
      dispatch(getMissions());
    }
  }, [dispatch, missions.length]);

  return (
    <section className="section">
      <table className="mission-table">
        <thead>
          <tr>
            <th className="width-10">Mission</th>
            <th className="width-60">Description</th>
            <th className="width-15">Status</th>
            <th className="width-15">Action</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <Mission key={mission.id} mission={mission} />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default MissionList;

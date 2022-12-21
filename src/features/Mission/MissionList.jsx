import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Mission from './Mission';
import { getMissions } from './missionSlice';
import './mission.css';

const MissionList = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  return (
    <section className="section">
      <table className="mission-table">
        <thead>
          <th className="width-10">Mission</th>
          <th className="width-60">Description</th>
          <th className="width-15">Status</th>
          <th className="width-15">Action</th>
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

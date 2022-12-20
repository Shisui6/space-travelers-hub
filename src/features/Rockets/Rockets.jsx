import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchRockets } from './rocketsSlice';

const Rockets = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <>
      <div className="Rockets">
        <h1>Rockets</h1>
      </div>
    </>
  );
};

export default Rockets;

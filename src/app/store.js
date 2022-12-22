import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from '../features/RocketList/rocketsSlice';
import missionReducer from '../features/Mission/missionSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionReducer,
  },
});

export default store;

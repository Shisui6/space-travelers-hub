import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from '../features/RocketList/rocketsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
  },
});

export default store;

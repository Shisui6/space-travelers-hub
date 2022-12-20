import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from '../features/Rockets/rocketsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
  },
});

export default store;

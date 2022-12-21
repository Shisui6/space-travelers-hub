/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const GET_MISSIONS = 'missions/getMissions';

const API_URL = 'https://api.spacexdata.com/v3/missions';

const fetchMissions = async () => {
  const response = await fetch(API_URL);
  const missions = await response.json();

  return missions.map((obj) => ({
    id: obj.mission_id,
    name: obj.mission_name,
    description: obj.description,
    reserved: false,
  }));
};

export const getMissions = createAsyncThunk(GET_MISSIONS,
  async () => {
    const response = await fetchMissions();
    return response;
  });

const slice = createSlice({
  name: 'missions',
  initialState: [],
  reducers: {
    joinMission(missions, action) {
      const id = missions.findIndex(((mission) => (mission.id === action.payload.id)));
      missions[id].reserved = true;
    },
    leaveMission(missions, action) {
      const id = missions.findIndex(((mission) => (mission.id === action.payload.id)));
      missions[id].reserved = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMissions.fulfilled, (state, action) => {
      state.push(...action.payload);
    });
  },
});

export const { joinMission, leaveMission } = slice.actions;
export default slice.reducer;

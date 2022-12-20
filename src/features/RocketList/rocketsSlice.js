import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const URL = 'https://api.spacexdata.com/v3/rockets';

const initialState = {
  rockets: [],
  status: 'idle',
};

export const fetchRockets = createAsyncThunk(
  'rockets/fetchRockets',
  async () => {
    const response = await fetch(URL);
    let json = await response.json();
    json = json.map((obj) => {
      const newObj = {};
      newObj.id = obj.id;
      newObj.name = obj.rocket_name;
      newObj.type = obj.rocket_type;
      newObj.flickr_images = obj.flickr_images;
      newObj.desc = obj.description;

      return newObj;
    });
    return json;
  },
);

export const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserve: (state, action) => {
      const state1 = state;
      state1.rockets = state.rockets.map((rocket) => {
        if (rocket.id === action.payload) {
          const rocket1 = rocket;
          rocket1.reserved = true;
          return rocket1;
        }
        return rocket;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.pending, (state) => {
        const state1 = state;
        state1.status = 'loading';
      })
      .addCase(fetchRockets.fulfilled, (state, action) => {
        const state1 = state;
        state1.status = 'idle';
        state1.rockets = action.payload;
      });
  },
});

export const { reserve } = rocketsSlice.actions;

export const selectRockets = (state) => state.rockets.rockets;

export default rocketsSlice.reducer;

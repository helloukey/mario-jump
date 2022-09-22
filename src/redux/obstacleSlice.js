import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  obstacle1: null,
  obstacle2: null,
};

export const obstacleSlice = createSlice({
  name: "obstacle",
  initialState,
  reducers: {
    obstacle1Position: (state, action) => {
      state.obstacle1 = action.payload;
    },
    obstacle2Position: (state, action) => {
      state.obstacle2 = action.payload;
    },
  },
});

export const { obstacle1Position, obstacle2Position } = obstacleSlice.actions;
export default obstacleSlice.reducer;

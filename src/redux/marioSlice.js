import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bottom: null,
  height: null,
  left: null,
  right: null,
  top: null,
  width: null,
  x: null,
  y: null,
};

export const marioSlice = createSlice({
  name: "mario",
  initialState,
  reducers: {
    marioBottom: (state, action) => {
      state.bottom = action.payload;
    },
    marioHeight: (state, action) => {
      state.height = action.payload;
    },
    marioLeft: (state, action) => {
      state.left = action.payload;
    },
    marioRight: (state, action) => {
      state.right = action.payload;
    },
    marioTop: (state, action) => {
      state.top = action.payload;
    },
    marioWidth: (state, action) => {
      state.width = action.payload;
    },
    marioX: (state, action) => {
      state.x = action.payload;
    },
    marioY: (state, action) => {
      state.y = action.payload;
    },
  },
});

export const {
  marioBottom,
  marioHeight,
  marioLeft,
  marioRight,
  marioTop,
  marioWidth,
  marioX,
  marioY,
} = marioSlice.actions;
export default marioSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: null,
}

export const marioSlice = createSlice({
    name: "mario",
    initialState,
    reducers: {
        marioPosition: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { marioPosition } = marioSlice.actions;
export default marioSlice.reducer;
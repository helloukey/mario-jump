import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    play: false,
    die: false,
    speed: 0,
    score: 0,
    lastScore: 0
}

export const engineSlice = createSlice({
    name: "engine",
    initialState,
    reducers: {
        setReady: (state, action) => {
            state.play = action.payload; 
        },
        setDie: (state, action) => {
            state.die = action.payload;
        },
        setSpeed: (state, action) => {
            state.speed += action.payload;
        },
        setScore: (state, action) => {
            state.score = action.payload;
        },
        setLastScore: (state, action) => {
            state.lastScore = action.payload;
        },
    }
});

export const { setReady, setDie, setSpeed, setScore, setLastScore } = engineSlice.actions;
export default engineSlice.reducer;
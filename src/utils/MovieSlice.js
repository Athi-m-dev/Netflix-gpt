import { createSlice } from "@reduxjs/toolkit";
const movieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlaying: [],
        movieTailer: [],
    },
    reducers: {
        setNowPlaying: (state, action) => {
            state.nowPlaying = action.payload;
        },
        addTailer : (state , action) => {
            state.movieTailer = action.payload;
        }
    }
})

export const { setNowPlaying , addTailer } = movieSlice.actions;
export default movieSlice.reducer;
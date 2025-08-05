import { createSlice } from "@reduxjs/toolkit";
const movieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlaying: [],
        movieTailer: [],
        popularMovies: [],
        topRatedMovies: [],
    },
    reducers: {
        setNowPlaying: (state, action) => {
            state.nowPlaying = action.payload;
        },
        addTailer : (state , action) => {
            state.movieTailer = action.payload;
        },
        addPopularMovies: (state , action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
    }
})

export const { setNowPlaying , addTailer , addPopularMovies, addTopRatedMovies} = movieSlice.actions;
export default movieSlice.reducer;
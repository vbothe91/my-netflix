import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        backgroundVideo: null
    },
    reducers:{
        addNowPlayingMovies: (state, acction) => {
            state.nowPlayingMovies = acction.payload
        },
        addPopularMovies: (state, acction) => {
            state.popularMovies = acction.payload
        },
        addTopRatedMovies: (state, acction) => {
            state.topRatedMovies = acction.payload
        },
        addUpcomingMovies: (state, acction) => {
            state.upcomingMovies = acction.payload
        },
        addBackgroundVideo: (state, action) => {
            state.backgroundVideo = action.payload;
        }
    }
})

export const {addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addUpcomingMovies, addBackgroundVideo} = movieSlice.actions;
export default movieSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        backgroundVideo: null
    },
    reducers:{
        addNowPlayingMovies: (state, acction) => {
            state.nowPlayingMovies = acction.payload
        },
        addBackgroundVideo: (state, action) => {
            state.backgroundVideo = action.payload;
        }
    }
})

export const {addNowPlayingMovies, addBackgroundVideo} = movieSlice.actions;
export default movieSlice.reducer;

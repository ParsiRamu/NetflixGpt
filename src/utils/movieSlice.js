import { createSlice } from "@reduxjs/toolkit";



const movieSlice = createSlice({
  name: "movies",
  initialState: {
    NowPlayingMovies: null,
    TrailorVideo:null,
  },
  reducers: {
    addNowPlayingMovies:(state,action)=>{
        state.NowPlayingMovies = action.payload
    },
    addTrailerVideo:(state,action)=>{
      state.TrailorVideo = action.payload

    }
  },
});

export const {addNowPlayingMovies,addTrailerVideo} = movieSlice.actions
export default movieSlice.reducer
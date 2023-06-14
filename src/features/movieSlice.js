import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movie: [],
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addMovie: (state, { payload }) => {
      return (state.movie = payload);
    },
  },
});

export const { addMovie } = movieSlice.actions;
export default movieSlice.reducer;

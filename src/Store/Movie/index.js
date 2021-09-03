import {createAction, createReducer} from '@reduxjs/toolkit';

const initialState = {
  movie: {},
};

const setMovies = createAction('movies/setMovie');

export const movieModel = createReducer(initialState, builder => {
  builder.addCase(setMovies, (state, action) => {
    state.movie = action.payload;
  });
});

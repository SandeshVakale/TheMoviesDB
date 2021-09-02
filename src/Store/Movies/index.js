import {createAction, createReducer} from '@reduxjs/toolkit';

const initialState = {
  movies: [],
};

const setMovies = createAction('movies/setMovies');

export const moviesModel = createReducer(initialState, builder => {
  builder.addCase(setMovies, (state, action) => {
    state.movies = action.payload;
  });
});

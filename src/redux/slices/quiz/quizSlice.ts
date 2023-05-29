// authSlice.js

import { createSlice } from '@reduxjs/toolkit';
import { SLICES } from '../../../constants';
import { getQuizzes, handleGetQuizzesFulfilled, handleGetQuizzesPending, handleGetQuizzesRejected } from './thunk';

const initialState = SLICES.QUIZ_SLICE.INITIAL_STATE;
const quizSlice = createSlice({
  name: SLICES.QUIZ_SLICE.NAME,
  initialState,
    reducers: {
      //
  },
  extraReducers: (builder) => {
    // get quizzes
    builder
      .addCase(getQuizzes.pending, handleGetQuizzesPending)
      .addCase(getQuizzes.fulfilled, handleGetQuizzesFulfilled)
      .addCase(getQuizzes.rejected, handleGetQuizzesRejected);

    },
});
// if needed to export thunk


export default quizSlice.reducer;

// authSlice.js

import { createSlice } from '@reduxjs/toolkit';
import { SLICES } from '../../../constants';

const quizSlice = createSlice({
  name: SLICES.QUIZ_SLICE.NAME,
  initialState: {
    isLoggedIn: false,
    user: null,
    error: null,
    token: null,
  },
    reducers: {
      //
  },
  extraReducers: () => {
    //
    },
});
// if needed to export thunk


export default quizSlice.reducer;

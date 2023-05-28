// authSlice.js

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SLICES } from '../../../constants';
import { ResultsState } from '../../../types';

const initialState = SLICES.RESULTS_SLICE.INITIAL_STATE


const increaseScoreFunc = (state: ResultsState) => {
    const score = state.score;
    return (
        {
            ...state,
            score: score + 1,
        }
    )
}

const resetScoreFunc = (state: ResultsState) => {
    return (
        {
            ...state,
            score: 0,
            total: 0,
        }
    )
}

const setFinishedFunc = (state: ResultsState, action: PayloadAction<boolean>) => {
    return (
        {
            ...state,
            finished: action.payload,
        }
    )
}

const setTotalScoreFunc = (state: ResultsState, action: PayloadAction<number>) => {
    return (
        {
            ...state,
            total: action.payload,
        }
    )
}

const setNameFunc = (state: ResultsState, action: PayloadAction<string>) => {
    return (
        {
            ...state,
            name: action.payload,
        }
    )
}

const resultsSlice = createSlice({
  name: SLICES.RESULTS_SLICE.NAME,
  initialState,
    reducers: {
        increaseScore: increaseScoreFunc,
        resetScore: resetScoreFunc,
        setTotalScore: setTotalScoreFunc,
        setFinished: setFinishedFunc,
        setUserName: setNameFunc,
  },
  extraReducers: () => {
    // thunk
    },
});
// if needed to export thunk

export const { increaseScore, resetScore, setTotalScore, setFinished, setUserName } = resultsSlice.actions;

export default resultsSlice.reducer;

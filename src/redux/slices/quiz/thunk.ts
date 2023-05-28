import { PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Question, QuizState } from "../../../types";
import { getQuizzesFromApi } from "../../api/quizApi";

export const getQuizzes = createAsyncThunk<
  Question[],
  void,
  {
    rejectValue: string;
  }
  >(
    'quiz/getQuizzes',
    async (_, { rejectWithValue }) => {
      const response = await getQuizzesFromApi();
      if (response.length !== 0) {
        return response;
      }
      return rejectWithValue(response.message);
    }
)

// thunk action handlers
export const handleGetQuizzesPending = (state: QuizState) => {
    return {
      ...state,
      loading: true,
    };
};

export const handleGetQuizzesFulfilled = (state: QuizState, action: PayloadAction<Question[]>) => {
    return {
      ...state,
      loading: false,
      questions: action.payload,
    };
}

export const handleGetQuizzesRejected = (state: QuizState, action: PayloadAction<string|undefined>) => {
    return {
      ...state,
      loading: false,
      error: action.payload || '',
    };
}

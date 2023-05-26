import { combineReducers } from "@reduxjs/toolkit";
import quizReducer from "../slices/quiz/quizSlice";


export default combineReducers({
    quiz: quizReducer,
});

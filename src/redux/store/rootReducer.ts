import { combineReducers } from "@reduxjs/toolkit";
import quizReducer from "../slices/quiz/quizSlice";


const rootReducer = combineReducers({
    quiz: quizReducer,
});


export default rootReducer;

import { combineReducers } from "@reduxjs/toolkit";
import quizReducer from "../slices/quiz/quizSlice";
import resultReducer from "../slices/results/resultSlice";


const rootReducer = combineReducers({
    quiz: quizReducer,
    results: resultReducer
});


export default rootReducer;

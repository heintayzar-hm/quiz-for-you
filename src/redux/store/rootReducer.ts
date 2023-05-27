import { combineReducers } from "@reduxjs/toolkit";
import quizReducer from "../slices/quiz/quizSlice";
import resultReducer from "../slices/results/resultSlice";
import storage from 'redux-persist/lib/storage'
// store in redux persist
import { persistReducer } from "redux-persist";

const persistConfig = {
	// Root
	key: "root",
	storage,
	whitelist: [
		"results",
	],
};


const rootReducer = combineReducers({
    quiz: quizReducer,
    results: resultReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);


export type RootState = ReturnType<typeof rootReducer>;


export default persistedReducer;

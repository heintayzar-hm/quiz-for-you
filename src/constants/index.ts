import { ResultsState } from '../types';
export const SLICES = {
    QUIZ_SLICE: {
        NAME: 'quiz',
    },
    RESULTS_SLICE: {
        NAME: 'results',
        INITIAL_STATE: {
            loading: false,
            score: 0,
            total: 0,
        } as ResultsState,
    }
    // other slices
}


export const ROUTES = {
    HOME: '/',
    QUIZ: '/quiz',
    RESULTS: '/results',
    // other routes
}

export const API = {
    BASE_URL: '.',
    ENDPOINTS: {
        QUIZ: '/quiz.json',
    }
}


export const QUIZ = {
    timer: 0.5, // in minutes
}

import { Question, QuizState, ResultsState } from '../types';
export const SLICES = {
    ROOT_SLICE: {
        NAME: 'root',
    },
    QUIZ_SLICE: {
        NAME: 'quiz',
        INITIAL_STATE: {
            loading: false,
            questions: [] as Question[],
            error: "",
        } as QuizState,
        THUNKS_NAMES: {
            GET_QUIZZES: 'quiz/getQuizzes',
        }
    },
    RESULTS_SLICE: {
        NAME: 'results',
        INITIAL_STATE: {
            loading: false,
            score: 0,
            total: 0,
            finished: false,
            name: '',
        } as ResultsState,
    }
    // other slices
}

export const APP = {
    email: "heintayzarhm@gmail.com",
    animation: {
        y: '-100px',
    },
    requiredMarksPercent: 10,
    certifcateName: "certificate.png"
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

export const COMPONENTS = {
    WelcomeComponent: {
        id: 'component-1',
        title: 'Welcome to the Challenge!',
        description: 'Let\'s see how much you want to save the world.',
        button: 'Start',
    },
    NameComponent: {
        id: 'component-2',
        title: "What's your name, Warrior?",
        button: "That's my name."
    },
    Explanation: {
        id: 'component-3',
        title: "In a world plagued by demons, your mission is to save humanity by answering a series of questions. Time is of the essence, as you'll have 30 seconds to respond to each question. If you excel in the quiz, you will be rewarded with a powerful shield that can protect the world from further harm.",
        button: "Start Your Quiz"
    },
    Quiz: {
        id: "component-4",
        skippable: false,
        button1: "Submit",
        button2: "Next",
        canSkipAlertText: "Are you sure you want to skip this question?",
        cannotSkipAlertText: "You cannot skip this question.",
    },
    RESULTS: {
        id: "component-5",
        successText: "Congratulations!You have successfully completed the quiz and saved the world from the evil forces.",
        failText: "Sorry! You have failed to save the world!! Don't worry gods are merciful and give you a second chance.",
        retakeButton: "Retake.",
        getYourCertificate: "Get Your Certificate.",
        downLoadText: "Download Your Certificate."
    }
}

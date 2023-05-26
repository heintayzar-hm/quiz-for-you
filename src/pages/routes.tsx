import React from "react"
import { ROUTES } from "../constants"
import Home from "./HomePage/HomePage"
import ResultPage from "./ResultPage/ResultPage"
import Loading from "../components/Loading/Loading"

export const routes = [
    {
        path: ROUTES.HOME,
        element: <Home />,
    },
    {
        path: ROUTES.RESULTS,
        element: <ResultPage />,
    }
]

// eslint-disable-next-line react-refresh/only-export-components
const QuizPage = React.lazy(() => import("./QuizPage/QuizPage"))
export const lazyRoutes = [
    {
        path: ROUTES.QUIZ,
        element: <QuizPage />,
        fallback: <Loading />
    }
]

export const invalidRoute = {
    path: "*",
    element: <>404</>,
}

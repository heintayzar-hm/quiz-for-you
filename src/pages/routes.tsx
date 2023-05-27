/* eslint-disable react-refresh/only-export-components */
import React from "react"
import { ROUTES } from "../constants"
import Loading from "../components/Loading/Loading"

export const routes = [

]

const QuizPage = React.lazy(() => import("./QuizPage/QuizPage"))
const Home = React.lazy(() => import("./HomePage/HomePage"))
const ResultPage = React.lazy(() => import("./ResultPage/ResultPage"))

export const lazyRoutes = [
    {
        path: ROUTES.QUIZ,
        element: <QuizPage />,
        fallback: <Loading />
    },
    {
        path: ROUTES.HOME,
        element: <Home />,
    },
    {
        path: ROUTES.RESULTS,
        element: <ResultPage />,
    }
]

export const invalidRoute = {
    path: "*",
    element: <>404</>,
}

/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react"
import { ROUTES } from "../constants"
import Loading from "../components/Loading/Loading"

export const routes = [

]

const QuizPage = lazy(() => import("./QuizPage/QuizPage"))
const Home = lazy(() => import("./HomePage/HomePage"))
const ResultPage = lazy(() => import("./ResultPage/ResultPage"))

export const lazyRoutes = [
    {
        path: ROUTES.QUIZ,
        element: <QuizPage />,
        fallback: <Loading />
    },
    {
        path: ROUTES.HOME,
        element: <Home />,
        fallback: <Loading />
    },
    {
        path: ROUTES.RESULTS,
        element: <ResultPage />,
        fallback: <Loading />
    }
]

export const invalidRoute = {
    path: "*",
    element: <>404</>,
}

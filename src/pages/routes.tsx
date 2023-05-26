import { ROUTES } from "../constants"
import Home from "./HomePage/HomePage"
import QuizPage from "./QuizPage/QuizPage"

export const routes = [
    {
        path: ROUTES.HOME,
        element: <Home />,
    },
    {
        path: ROUTES.QUIZ,
        element: <QuizPage />,
    }
]

export const layoutRoutes = [
    {
        path: "/protected",
        element: <>protected</>,
        layout: <></>,
    }
]

export const invalidRoute = {
    path: "*",
    element: <>404</>,
}

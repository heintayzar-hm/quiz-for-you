export const routes = [
    {
        path: "/",
        element: <>Hein</>,
    },
    {
        path: "/home",
        element: <>home</>,
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

import { BrowserRouter, Route, Routes } from "react-router-dom"
import { routes, invalidRoute, lazyRoutes } from "./pages/routes"
import { Suspense } from "react"
import {withErrorBoundary} from 'react-error-boundary'
import Error from "./components/Error/Error"

const App = ()  => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {
            routes.map((route, index) => {
              return (
                <Route key={index} path={route.path} element={route.element} />
              )
            })

          }
          {
            // lazy routes
            lazyRoutes.map((route, index) => {
              return (

                <Route key={index} path={route.path} element={
                  <Suspense fallback={route.fallback}>
                    {route.element}
                  </Suspense>
                  } />
              )
            })
          }
          {
            // if there is no route, then we need a 404 page.
            <Route path={invalidRoute.path} element={invalidRoute.element} />
          }

        </Routes>
      </BrowserRouter>
    </>
  )
}

const AppErrorBoundary = withErrorBoundary(App, {
  fallback: <Error />
})

export default AppErrorBoundary

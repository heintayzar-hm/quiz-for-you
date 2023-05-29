import { HashRouter, Route, Routes } from "react-router-dom"
import { invalidRoute, lazyRoutes } from "./pages/routes"
import { Suspense } from "react"
import {withErrorBoundary} from 'react-error-boundary'
import Error from "./components/Error/Error"

const App = ()  => {
  return (
    <>
    <div className="bg-primary text-white tracking-widest font-primary">
            {/* Instead of Browser Router let's use hashRouter for all platforms */}
          <HashRouter>
        <Routes>
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
      </HashRouter>
    </div>

    </>
  )
}

const AppErrorBoundary = withErrorBoundary(App, {
  fallback: <Error />
})

export default AppErrorBoundary

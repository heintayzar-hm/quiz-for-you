import { BrowserRouter, Route, Routes } from "react-router-dom"
import { routes, layoutRoutes, invalidRoute } from "./pages/routes"

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
            // if the roues is protected or authenticated, then we need a Layout.
            layoutRoutes.map((route, index) => {
              return (
                <Route element={route.layout} key={index}>
                  <Route path={route.path} element={route.element} />
                </Route>
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

export default App

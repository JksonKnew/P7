import { Link, RouterProvider, createBrowserRouter } from "react-router-dom"
import AboutPage from "./Pages/About/index"
import HomePage from "./Pages/Home/index"
import ErrorPage from "./Pages/Error"

function RouterApp() {
    const router = createBrowserRouter([
        {
          path: '/',
          element: <HomePage/>
        },
        {
          path: '/about',
          element: <AboutPage/>
        },
        {
          path: '*',
          element: <ErrorPage/>
        }
      ]) 
      return <RouterProvider router={router}/>
}

export default RouterApp;
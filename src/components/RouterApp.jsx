import { Link, RouterProvider, createBrowserRouter } from "react-router-dom"
import AboutPage from "../Pages/About/index"
import HomePage from "../Pages/Home/index"
import ErrorPage from "../Pages/Error/index"
import LogementPage from "../Pages/Logement"

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
        },
        {
          path: 'logement/:id',
          element: <LogementPage/>
        }
      ]) 
      return <RouterProvider router={router}/>
}

export default RouterApp;
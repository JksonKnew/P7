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
          path: '/logement/:id',
          element: <LogementPage/>
        }
      ]) 
      return<RouterProvider router={router}/>
}

// export default RouterApp;


// import { Router } from "react-router-dom"
// import { Routes } from "react-router-dom"
// import { Route } from "react-router-dom"
// import AboutPage from "../Pages/About/index"
// import HomePage from "../Pages/Home/index"
// import ErrorPage from "../Pages/Error/index"
// import LogementPage from "../Pages/Logement"
// import Header from "./Header"
// import Footer from "./Footer"

// function RouterApp() {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/about" element={<AboutPage />} />
//         <Route path="/fiche-logement/:id" element={<LogementPage />} />
//         <Route path="*" element={<ErrorPage />} />
//       </Routes>
//       <Footer />
//     </Router>
//   )
// }

// export default RouterApp;

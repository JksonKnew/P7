import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from "../Pages/About/index"
import HomePage from "../Pages/Home/index"
import ErrorPage from "../Pages/Error/index"
import LogementPage from "../Pages/Logement"
import Header from "./Header"

function RouterApp() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/logement/:id" element={<LogementPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  )
}

export default RouterApp;

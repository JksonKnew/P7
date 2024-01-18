import Footer from "./components/Footer";
import RouterApp from "./components/RouterApp"
import React from "react";
import '/src/utils/styles/mediaqueries.scss' // Media Queries

function App() {
  return (<React.Fragment>
    <RouterApp />
    <Footer/>
    </React.Fragment>)
} 

export default App;

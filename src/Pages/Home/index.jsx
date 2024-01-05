import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import Banner from "../../components/Banner";
import React, { Fragment } from "react";

function HomePage() {
    return (<React.Fragment>
    <Header/>
    <div>Page D'accueil</div>
    <Banner/>
    <Footer/>
    </React.Fragment>)
}

export default HomePage;
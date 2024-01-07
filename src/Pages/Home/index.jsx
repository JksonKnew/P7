import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import Banner from "../../components/Banner";
import React, { Fragment } from "react";
import CardGallery from "../../components/CardGallery";

function HomePage() {
    return (<React.Fragment>
    <Header/>
    <Banner/>
    <CardGallery/>
    <Footer/>
    </React.Fragment>)
}

export default HomePage;
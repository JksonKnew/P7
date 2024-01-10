import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import React, { Fragment } from "react";
import Folding from "../../components/Folding";
import Banner from "../../components/Banner";

import "./about.scss";

const equipement = ["Clim", "Wifi", "Cuisine"]

function AboutPage() {
    return (<React.Fragment>
    <Header/>
    <Banner/>
    <div className="listContainer">
    <Folding title="Équipements" content={equipement}/>
    <Folding title="Équipements" content={equipement}/>
    <Folding title="Équipements" content={equipement}/>
    <Folding title="Équipements" content={equipement}/>
    </div>
    <Footer/>
    </React.Fragment>)
}

export default AboutPage;
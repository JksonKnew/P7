import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import React, { Fragment } from "react";
import Folding from "../../components/Folding";
import Carousel from "../../components/Carousel";


function LogementPage() {
    return (<React.Fragment>
        <Header/>
        <section className="logementSection">
            <Carousel/>
            <div className="infoContainer">
                <div className="rightPart">

                </div>
                <div className="leftPart">

                </div>
            </div>
            <div className="foldingParts">
                <Folding/>
                <Folding/>
            </div>
            
        </section>
        <Footer/>
    </React.Fragment>)
}

export default LogementPage;
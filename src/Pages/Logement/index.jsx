import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import React, { Fragment } from "react";
import Folding from "../../components/Folding";
import Carousel from "../../components/Carousel";
import { useParams } from "react-router-dom";


function LogementPage() {
    const {id} = useParams()

    // use effect pour verifier que l'id existe et si non redirect 404 (useNavigate)

    return (<React.Fragment>
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
    </React.Fragment>)
}

export default LogementPage;
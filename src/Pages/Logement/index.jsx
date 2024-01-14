import React from "react";
import Folding from "../../components/Folding";
import Carousel from "../../components/Carousel";
import { useParams } from "react-router-dom";
import { logements } from '../../data/logements'
import '/src/Pages/Logement/logement.scss'



function LogementPage() {

    const {id} = useParams()
    const thisLogament = logements.find(obj => {
        return obj.id === id;
    })

    console.log(thisLogament)
    // use effect pour verifier que l'id existe et si non redirect 404 (useNavigate)

    return (<React.Fragment>
        <div>{id}</div>
        <section className="logementSection">
            <Carousel i={thisLogament.pictures}/>
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
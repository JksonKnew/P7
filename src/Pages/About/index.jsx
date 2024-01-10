import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import React, { Fragment } from "react";
import Folding from "../../components/Folding";
import Banner from "../../components/Banner";

import "./about.scss";

const fiabilité = ["Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes"];
const respect = ["La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme"];
const service = ["La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme"];
const securite = ["La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaques logement correspond aux critères de séurité établi pas nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."]


function AboutPage() {
    return (<React.Fragment>
    <Header/>
    <Banner src="src/Assets/homeBannerImg.png" span=''/>
    <div className="listContainer">
    <Folding title="Fiabilité" content={fiabilité}/>
    <Folding title="Respect" content={respect}/>
    <Folding title="Service" content={service}/>
    <Folding title="Sécurité" content={securite}/>
    </div>
    <Footer/>
    </React.Fragment>)
}

export default AboutPage;
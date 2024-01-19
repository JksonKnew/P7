import React from "react";
import Folding from "../../components/Folding";
import Banner from "../../components/Banner";
import { about } from "../../data/aboutPage";

import "./about.scss";


function AboutPage() {
    return (<React.Fragment>
    <Banner src="src/Assets/b9995860bb6384a77ca7dc9bf52da3be.jpeg" span=''/>
    <div className="listContainer">
        {about.map((params)=> (
            <Folding key={params.id} title={params.title} content={params.content}/>
        ))}
    </div>
    </React.Fragment>)
}

export default AboutPage;
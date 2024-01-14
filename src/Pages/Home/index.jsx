import Banner from "../../components/Banner";
import React from "react";
import CardGallery from "../../components/CardGallery";

function HomePage() {
    return (<React.Fragment>
    <Banner src="src/Assets/homeBannerImg.png" span='Chez vous, partout et ailleurs'/>
    <CardGallery/>
    </React.Fragment>)
}

export default HomePage;
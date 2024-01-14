import React from "react";
import Folding from "../../components/Folding";
import Carousel from "../../components/Carousel";
import { useParams } from "react-router-dom";
import { logements } from '../../data/logements'
import '/src/Pages/Logement/logement.scss'
import Tags from "../../components/Tags";
import Host from "../../components/Host";
import RatingStars from "../../components/Rating";



function LogementPage() {

    const {id} = useParams()
    const thisLogement = logements.find(obj => {
        return obj.id === id;
    })

    console.log(thisLogement)
    // use effect pour verifier que l'id existe et si non redirect 404 (useNavigate)

    return (<React.Fragment>
        <section className="logementSection">
            <Carousel i={thisLogement.pictures}/>
            <div className="infoContainer">
                <div className="rightPart">
                    <div className="info">
                        <span className="logementTitle">{thisLogement.title}</span>
                        <span className="logementLocation">{thisLogement.location}</span>
                    </div>
                    <div className="tagsContainer">
                        {thisLogement.tags.map((tag, index) => (
                            <Tags key={index} tag={tag} />
                        ))}
                    </div>
                </div>
                <div className="leftPart">
                    <Host name={thisLogement.host.name} hostPicture={thisLogement.host.picture}/>
                    <RatingStars rating={thisLogement.rating}/>
                </div>
            </div>
            <div className="foldingParts">
                <Folding title="Description" content={thisLogement.description}/>
                <Folding title="Équipements" content={thisLogement.equipments}/>
            </div>
            

        </section>
    </React.Fragment>)
}

export default LogementPage;
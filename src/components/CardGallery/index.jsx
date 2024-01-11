import './cardGallery.scss'
import React from 'react'
import Card from '../Card'
import { logements } from '../../data/logements'



function CardGallery() {
    return (
        <section className='CardGallery'>
            <div className='CardContainer'>
                {logements.map((logement)=> (
                    <Card key={logement.id} src={logement.cover} title={logement.title} location={logement.location} id={logement.id}/>
                ))}
            </div>
        </section>
    )
}


export default CardGallery
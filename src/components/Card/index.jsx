import './card.scss'
import React from 'react'

function Card() {
    return ( 
    <article className='Card'>
        <div className='Gradient'></div>
        <img src="src/Assets/homeBannerImg.png" alt="img" />
        <div className='CardText'>
            <span className='CardTitle'>Titre de la location</span>
            <span className='CardLocation'>Location</span>
        </div>
    </article>
    )
}

export default Card
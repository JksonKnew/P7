import { useNavigate } from 'react-router-dom'
import { logements } from '../../data/logements'
import './card.scss'
import React from 'react'


function Card(props) {

    const navigate = useNavigate()
    const logementsDirection = () => {
        navigate(`/logement/${props.id}`)
    }

    return ( 
    <article onClick={logementsDirection} className='Card'>
        <div className='Gradient'></div>
        <img src={props.src} alt="img" />
        <div className='CardText'>
            <span className='CardTitle'>{props.title}</span>
            <span className='CardLocation'>{props.location}</span>
        </div>
    </article>
    )
}

export default Card




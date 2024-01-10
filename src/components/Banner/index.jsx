import './banner.scss'
import React from 'react'

function Banner(props) {
    return (
        <div className='banner-container'>
            <img src={props.src} alt="" />
            <span>{props.span}</span>
        </div>
    )
}

export default Banner
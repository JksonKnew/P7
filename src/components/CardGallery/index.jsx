import './cardGallery.scss'
import React from 'react'
import Card from '../Card'

function CardGallery() {
    return (
        <section className='CardGallery'>
            <div className='CardContainer'>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </section>
    )
}

export default CardGallery
import './cardGallery.scss'
import React from 'react'
import Card from '../Card'

// let content = [];

// function getWorks() {
//     fetch("./logements.json")
//     .then(response => response.json())
//     .then(json => {
//         content = json;
//         CardCreating(content)
//     })
//     .catch(error => console.error(error))
// }

// function CardCreating(content) {
//     return content.map((item, index) => (
//       <Card key={index} src={item.cover} title={item.title} location={item.location} />
//     ));
// }

function CardGallery() {
    return (
        <section className='CardGallery'>
            <div className='CardContainer'>
                <Card src="src/Assets/homeBannerImg.png" title="Joli appartememnt" location="Paris"/>
                <Card src="src/Assets/homeBannerImg.png" title="Joli appartememnt" location="Paris"/>
                <Card src="src/Assets/homeBannerImg.png" title="Joli appartememnt" location="Paris"/>
                <Card src="src/Assets/homeBannerImg.png" title="Joli appartememnt" location="Paris"/>
                <Card src="src/Assets/homeBannerImg.png" title="Joli appartememnt" location="Paris"/>
                <Card src="src/Assets/homeBannerImg.png" title="Joli appartememnt" location="Paris"/>
                <Card src="src/Assets/homeBannerImg.png" title="Joli appartememnt" location="Paris"/>
                <Card src="src/Assets/homeBannerImg.png" title="Joli appartememnt" location="Paris"/>
            </div>
        </section>
    )
}


export default CardGallery
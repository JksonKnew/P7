import React, { useState } from 'react';
import './carousel.scss';

const images = [
    "/src/Assets/homeBannerImg.png",
    "/src/Assets/b9995860bb6384a77ca7dc9bf52da3be.jpeg",
    "/src/Assets/homeBannerImg.png",
    "/src/Assets/b9995860bb6384a77ca7dc9bf52da3be.jpeg"
];


const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const NextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const PrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carouselContainer">
        <div className='overlayCarousel'>
            <button className='left' onClick={PrevSlide}>Prev</button>
            <span className='carouselCounter'>{currentIndex + 1}/{images.length}</span>
            <button className='rightCarouselBtn' onClick={NextSlide}>Next</button>
        </div>
      <img src={images[currentIndex]} />

    </div>
  );
};
console.log(images.length)

export default Carousel;

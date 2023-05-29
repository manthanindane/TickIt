import 'react-responsive-carousel/lib/styles/carousel.min.css';
import batman from './assets/batman.jpg';
import armaan from './assets/armaan malik.jpg';
import concert from './assets/concert.png';
import './MyCarousel.css';

import React, { useState } from 'react';

const MyCarousel = () => {
  const images = [batman, armaan, concert];
  const [currentImage, setCurrentImage] = useState(0);

  const goToPrevious = () => {
    setCurrentImage((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1));
  };

  const goToNext = () => {
    setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
  };

  return (
    <div className="carousel">
      <button className='prev' onClick={goToPrevious}>&lt;</button>
      <div className="imgbox">
      <img src={images[currentImage]} alt={`Image ${currentImage + 1}`} />
      </div>
      <div className="carbtn">
      <button className='next' onClick={goToNext}>&gt;</button>
      </div>
    </div>
  );
};

export default MyCarousel;

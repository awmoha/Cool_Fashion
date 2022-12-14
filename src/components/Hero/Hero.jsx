import React from 'react';
import ImageGallery from 'react-image-gallery';
import './Hero.css';

const Hero = () => {
  const images = [
    {
      original: 'https://picsum.photos/id/157/1000/600/',
    },
    {
      original: 'https://picsum.photos/id/22/1000/600/',
    },
    {
      original: 'https://picsum.photos/id/26/1000/600/',
    },
  ];
  return (
    <div>
      <ImageGallery items={images} />
    </div>
  );
};

export default Hero;

import React from 'react';
import './Hero.css';

import HeroBanner from '../../assets/images/ds-talks-banner.jpg';

const Hero = () => {
  return (
    <section
      className="hero-image"
      style={{ backgroundImage: `url(${HeroBanner})` }}
    />
  );
};

export default Hero;

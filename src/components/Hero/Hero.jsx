import React from 'react';
import './Hero.css';

import HeroBanner from '../../assets/images/ds-talks-banner.jpg';

const Hero = () => {
  return (
    <section className="hero-section">
      <figure className="hero-container">
        <img src={HeroBanner} alt="hero" className="hero-image" />
      </figure>
    </section>
  );
};

export default Hero;

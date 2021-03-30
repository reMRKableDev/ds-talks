import React from 'react';

import { StyledHeroSection, StyledFigure, StyledImage } from './HeroStyles';

import HeroBanner from '../../assets/images/ds-talks-banner.jpg';

const Hero = () => {
  return (
    <StyledHeroSection>
      <StyledFigure>
        <StyledImage src={HeroBanner} alt="hero" className="hero-image" />
      </StyledFigure>
    </StyledHeroSection>
  );
};

export default Hero;

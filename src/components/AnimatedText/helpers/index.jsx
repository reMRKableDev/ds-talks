import React from 'react';
import { StyledSection, StyledH2 } from '../AnimatedTextStyles';

const renderStyledSection = (incomingSlogan) => incomingSlogan.includes('stories') ? (
    <StyledSection className="text-section" finalSection>
      <StyledH2>{incomingSlogan}</StyledH2>
    </StyledSection>
  ) : (
    <StyledSection className="text-section">
      <StyledH2>{incomingSlogan}</StyledH2>
    </StyledSection>
  );

export default renderStyledSection;

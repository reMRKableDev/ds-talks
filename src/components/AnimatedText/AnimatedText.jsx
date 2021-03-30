import React from 'react';
import PropTypes from 'prop-types';

import { StyledSection, StyledH2 } from './AnimatedTextStyles';

const AnimatedText = ({ slogan }) => {
  return (
    <StyledSection className="text-section">
      <StyledH2>{slogan}</StyledH2>
    </StyledSection>
  );
};

export default AnimatedText;

AnimatedText.propTypes = {
  slogan: PropTypes.string.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import './AnimatedText.css';

const AnimatedText = ({ slogan }) => {
  return (
    <section className="text-section">
      <h2>{slogan}</h2>
    </section>
  );
};

export default AnimatedText;

AnimatedText.propTypes = {
  slogan: PropTypes.string.isRequired,
};

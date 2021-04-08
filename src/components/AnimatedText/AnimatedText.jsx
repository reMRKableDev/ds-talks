import PropTypes from 'prop-types';

import renderStyledSectionHelper from './helpers';

const AnimatedText = ({ slogan }) => renderStyledSectionHelper(slogan);

export default AnimatedText;

AnimatedText.propTypes = {
  slogan: PropTypes.string.isRequired,
};

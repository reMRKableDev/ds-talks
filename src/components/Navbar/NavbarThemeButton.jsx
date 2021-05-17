import React from 'react';
import PropTypes from 'prop-types';

import { StyledThemeButtonContainer, StyledThemeButton } from './NavbarStyles';

const NavbarThemeButton = ({ theme, handleThemeToggle }) => (
    <StyledThemeButtonContainer>
      <StyledThemeButton onClick={handleThemeToggle}>
        {theme.mode === 'dark' ? 'Light Mode 🌕' : 'Dark Mode 🌑'}
      </StyledThemeButton>
    </StyledThemeButtonContainer>
  );

export default NavbarThemeButton;

NavbarThemeButton.propTypes = {
  theme: PropTypes.objectOf(PropTypes.string).isRequired,
  handleThemeToggle: PropTypes.func.isRequired,
};

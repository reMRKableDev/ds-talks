import React from 'react';
import {StyledThemeButtonContainer, StyledThemeButton} from './NavbarThemeButtonStyles';

const NavbarThemeButton = () => {
  return <StyledThemeButtonContainer>
      <StyledThemeButton onClick={handleThemeToggle}>
      {theme.mode === "dark" ? "Light Mode 🌕" : "Dark Mode 🌑"}
    </StyledThemeButton>
  </StyledThemeButtonContainer>;
};

export default NavbarThemeButton;

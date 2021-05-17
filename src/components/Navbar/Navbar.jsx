import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { slide as Menu } from 'react-burger-menu';
import './Navbar.css';

import { StyledHeader, StyledThemeButtonContainer } from './NavbarStyles';
import NavbarThemeButton from './NavbarThemeButton';

import BurgerIcon from '../../assets/icons/menu.svg';
import CrossIcon from '../../assets/icons/close.svg';

const renderCustomNavIcon = (icon) => <img src={icon} alt="nav-icon" />;

const Navbar = ({ theme, handleThemeToggle }) => (
    <StyledHeader>
      <Menu
        customBurgerIcon={renderCustomNavIcon(BurgerIcon)}
        customCrossIcon={renderCustomNavIcon(CrossIcon)}
        width="70%"
      >
        <Link to="/" data-testid="home-link">
          Home
        </Link>
        <Link to="map" data-testid="map-link">
          See Map
        </Link>
      </Menu>
      <StyledThemeButtonContainer>
        <NavbarThemeButton
          theme={theme}
          handleThemeToggle={handleThemeToggle}
        />
      </StyledThemeButtonContainer>
    </StyledHeader>
  );

export default Navbar;

Navbar.propTypes = {
  theme: PropTypes.objectOf(PropTypes.string).isRequired,
  handleThemeToggle: PropTypes.func.isRequired,
};

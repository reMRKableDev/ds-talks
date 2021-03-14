import React from 'react';
import { Link } from '@reach/router';
import { slide as Menu } from 'react-burger-menu';
import './Navbar.css';

import BurgerIcon from '../../assets/icons/menu.svg';
import CrossIcon from '../../assets/icons/close.svg';

const renderCustomNavIcon = (icon) => <img src={icon} alt="nav-icon" />;

const Navbar = () => {
  return (
    <nav>
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
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { Link } from '@reach/router';
import { bubble as Menu } from 'react-burger-menu';
import './Navbar.css';

const Navbar = () => (
  <Menu>
    <Link to="/" data-testid="home-link">
      Home
    </Link>
    <Link to="map" data-testid="map-link">
      See Map
    </Link>
  </Menu>
);

export default Navbar;

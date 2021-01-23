import React from 'react';
import { Link } from '@reach/router';

const Navbar = () => (
  <nav data-testid="navigation-bar">
    <Link to="/" data-testid="home-link">
      Home
    </Link>
    <Link to="map" data-testid="map-link">
      See Map
    </Link>
  </nav>
);

export default Navbar;

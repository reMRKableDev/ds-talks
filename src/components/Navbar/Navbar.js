import React from "react";
import { Link } from "@reach/router";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="map">See Map</Link>
    </nav>
  );
};

export default Navbar;

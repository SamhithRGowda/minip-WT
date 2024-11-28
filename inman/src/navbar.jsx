import React from "react";
import { Link } from "react-router-dom";
import "../src/navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">DASHBOARD</Link>
        </li>
        <li>
          <Link to="/inventory">INVENTORY</Link>
        </li>
        <li>
          <Link to="/settings">SETTINGS</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

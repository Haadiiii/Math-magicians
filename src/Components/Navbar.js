import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <div className="navbar">
    <h1>Math Magicians</h1>
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/calculator">Calculator</NavLink>
        </li>
        <li>
          <NavLink to="/quote">Quote</NavLink>
        </li>
      </ul>
    </nav>
  </div>
);
export default Navbar;

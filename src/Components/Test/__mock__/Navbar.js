import React from "react";
import { BrowserRouter, NavLink } from "react-router-dom";

const Navbar = () => (
  <div className="navbar">
    <h1>Math Magicians</h1>
    <nav>
      <ul>
        <BrowserRouter>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/calculator">Calculator</NavLink>
          </li>
          <li>
            <NavLink to="/quote">Quote</NavLink>
          </li>
        </BrowserRouter>
      </ul>
    </nav>
  </div>
);
export default Navbar;

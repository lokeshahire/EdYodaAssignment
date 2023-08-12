import React from "react";
import "./Navbar.css";
import LOGO from "../Images/LOGO.png";

function Navbar() {
  return (
    <nav className="main">
      <div className="logoImg">
        <img src={LOGO} alt="logo" />
      </div>
      <div className="container">
        <li>
          <a href="#">Courses</a>
        </li>
        <i className="fa-solid fa-angle-down"></i>
        <li>
          <a href="#">Programs</a>
        </li>
        <i className="fa-solid fa-angle-down"></i>
      </div>
      <ul className="listItem">
        <i className="fa-solid fa-magnifying-glass"></i>
        <li className="items">
          <a href="#" className="link1">
            Log in
          </a>
        </li>
        <li className="items">
          <a href="#" className="links navButton">
            JOIN NOW
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

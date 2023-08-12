import React from "react";
import "./Navbar.css";
import LOGO from "../Images/LOGO.png";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io/";

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
        <IoIosArrowDown />
        <li>
          <a href="#">Programs</a>
        </li>
        <IoIosArrowDown />
      </div>
      <ul className="listItem">
        <AiOutlineSearch />
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

import React from 'react';
import logo from "../contents/logo.png";
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="nav_section">
    <div className="logo">
      <img src={logo} alt="logo" />
    </div>
    <div className="nav-items">
      <li>Courses</li><i className="fa-solid fa-angle-down"></i>
      <li>Programs</li><i className="fa-solid fa-angle-down"></i>
    </div>
    <ul className="nav__list">
      <i className="fa-solid fa-magnifying-glass"></i>
      <li className="nav__item">Log in</li>
      <li className="nav__item">
        <button className="nav__link2 nav__link--button">JOIN NOW</button>
      </li>
    </ul>
  </nav>
  );
};

export default Navbar;

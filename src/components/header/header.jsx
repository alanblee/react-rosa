import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Nav } from "./navStyled";
import logo from "../../images/logo-rosa.png";
const Header = () => {
  const [toggleClass, setToggleClass] = useState(false);
  const toggle = () => {
    setToggleClass(!toggleClass);
  };
  return (
    <header className="">
      <div className="container">
        <Nav toggled={toggleClass}>
          <div className="menu-toggle" onClick={() => toggle()}>
            <i className="fas fa-bars"></i>
            <i className="fas fa-times"></i>
          </div>
          <Link to="/" className="logo">
            <img src={logo} alt="app logo" />
          </Link>
          <ul className={toggleClass ? "nav-list open" : "nav-list"}>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Menu
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Reservations
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                News
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </Nav>
      </div>
    </header>
  );
};

export default Header;

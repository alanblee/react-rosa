import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo-rosa.png";
const Header = () => {
  return (
    <header className="">
      <div className="container">
        <nav className="nav">
          <div className="menu-toggle">
            <i className="fas fa-bars"></i>
            <i className="fas fa-times"></i>
          </div>
          <Link to="/" className="logo">
            <img src={logo} alt="app logo" />
          </Link>
          <ul className="nav-list">
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
        </nav>
      </div>
    </header>
  );
};

export default Header;

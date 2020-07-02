import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Nav } from "./navStyled";
import logo from "../../images/logo-rosa.png";
const Header = () => {
  const [toggleClass, setToggleClass] = useState(false);
  const toggle = () => {
    setToggleClass(!toggleClass);
  };
  const linkName = ["Home", "Menu", "Reservations", "News", "Shop", "Contact"];
  const renderItems = () => {
    return linkName.map((names, indx) => {
      return (
        <li className="nav-item" key={indx}>
          <Link to={`/`} className="nav-link">
            {names}
          </Link>
        </li>
      );
    });
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
          <ul className="nav-list">{renderItems()}</ul>
        </Nav>
      </div>
    </header>
  );
};

export default Header;

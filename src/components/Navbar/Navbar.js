import React, { useState } from "react";

import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";

import logo from "../../images/logo.svg";
import "./Navbar.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav__center">
        <div className="nav__header">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <button type="button" className="nav__btn" onClick={toggleNav}>
            <FaAlignRight className="nav__icon" />
          </button>
        </div>
        <ul className={isOpen ? "nav__links nav__links_show" : "nav__links"}>
          <li>
            <Link to="/" onClick={closeNav}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/rooms" onClick={closeNav}>
              Rooms
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu

  return (
    <div className="navbar-container">
      <div className="logo">
        <h1>
          LAIBA <span className="span">AMD.</span>
        </h1>
      </div>
      {/* Menu Icon */}
      <FontAwesomeIcon
        icon={menuOpen ? faTimes : faBars}
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      />
      {/* Nav Links */}
      <div className={`navlinks-container ${menuOpen ? "open" : ""}`}>
        <Link to="/" className="navlinks" onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        <Link
          to="/websites"
          className="navlinks"
          onClick={() => setMenuOpen(false)}
        >
          E-Commerce Websites
        </Link>
        <Link
          to="/contact"
          className="navlinks"
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </Link>
      </div>
      {/* Button */}
      <div className="button-container">
        <div className="button">
          <div className="btn">
            <h3>Get Started</h3>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

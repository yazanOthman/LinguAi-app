import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="custom-navbar">
      <div className="container">
        <a className="logo" href="/">
          LinguAI
        </a>
        <ul className={`nav ${isOpen && "show"}`}>
          <li className="item">
            <a className="link" href="#home">
              Home
            </a>
          </li>
          <li className="item">
            <a className="link" href="#about">
              About
            </a>
          </li>
        </ul>
        <button
          id="nav-toggle"
          className={`hamburger hamburger--elastic ${isOpen && "is-active"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="hamburger-box">
            <div className="hamburger-inner"></div>
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

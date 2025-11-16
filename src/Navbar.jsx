import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">EmpowerHer Tech</div>
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <a href="#hero">Accueil</a>
        <a href="#services">Services</a>
        <a href="#join-us">Rejoignez-nous</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;

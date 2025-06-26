// src/components/Header.jsx
import React from 'react';

const Header = () => (
  <header className="header">
    <a href="#" className="logo">Ahmed</a>
    <nav className="navbar">
      <a href="#Home" className="active">Home</a>
      <a href="#About">About</a>
      <a href="#Education">Education</a>
      <a href="#Experience">Experience</a>
      <a href="#Skills">Skills</a>
      <a href="#Contact">Contact</a>
      <a href="#Projects">Projects</a>
      <a href="/resume.pdf" download className="resume-btn">Download Resume</a>

    </nav>
  </header>
);

export default Header;
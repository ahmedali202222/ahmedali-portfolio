import React from 'react';
import InteractiveCanvas from './InteractiveCanvas';
import profileImg from '../assets/profile.webp';
import { FaBriefcase, FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Home = () => {
  return (
    <section className="Home" id="Home" aria-label="Introduction">
      <InteractiveCanvas />
      <div className="Home-content" data-aos="fade-right" data-aos-delay="200">
        <div className="greeting-badge" data-aos="fade-up" data-aos-delay="100">
          <span className="wave">👋</span>
          <span>Welcome to my portfolio</span>
        </div>
        <h1>
          Hi, I'm <span className="name-highlight">Ahmed Ali</span>
        </h1>
        <h3>
          <span className="multiple-text">Full-Stack Software Engineer</span>
        </h3>
        <p className="Home-description" data-aos="fade-up" data-aos-delay="400">
          I build full-stack web products with React, Python, PHP and Firebase, and I bring hands-on
          experience keeping automated production systems running on the factory floor.
        </p>
        <div className="stats-preview" data-aos="fade-up" data-aos-delay="500">
          <div className="stat-item">
            <span className="stat-number">4</span>
            <span className="stat-label">Featured Projects</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">B.S.</span>
            <span className="stat-label">Computer Science</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">2+ yrs</span>
            <span className="stat-label">Technical Experience</span>
          </div>
        </div>
        <div className="Home-actions" data-aos="fade-up" data-aos-delay="600">
          <a
            href="mailto:ahmedaliofficial90@gmail.com"
            className="btn primary-btn"
            aria-label="Send email to Ahmed Ali"
          >
            <FaEnvelope aria-hidden="true" />
            Contact Me
          </a>
          <a
            href="#Projects"
            className="btn secondary-btn"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('Projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            aria-label="View Ahmed Ali's projects"
          >
            <FaBriefcase aria-hidden="true" />
            View Projects
          </a>
        </div>
        <div className="social-links" data-aos="fade-up" data-aos-delay="800">
          <a
            href="https://www.linkedin.com/in/ahmedaliofficial90/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Visit Ahmed Ali's LinkedIn profile"
          >
            <FaLinkedinIn aria-hidden="true" />
          </a>
          <a
            href="https://github.com/ahmedali202222"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Visit Ahmed Ali's GitHub profile"
          >
            <FaGithub aria-hidden="true" />
          </a>
          <a
            href="mailto:ahmedaliofficial90@gmail.com"
            className="social-link"
            aria-label="Send email to Ahmed Ali"
          >
            <FaEnvelope aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="Home-img" data-aos="fade-left" data-aos-delay="300">
        <div className="img-wrapper">
          <div className="spinning-ring"></div>
          <div className="pulse-ring r1"></div>
          <div className="pulse-ring r2"></div>
          <div className="img-container">
            <img
              src={profileImg}
              alt="Ahmed Ali - Software Engineer and Full-Stack Developer"
              loading="eager"
              fetchPriority="high"
              width="640"
              height="960"
            />
          </div>
          <div className="availability-badge">
            <span className="badge-dot"></span>
            <span>Available for hire</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

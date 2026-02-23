import React, { useEffect, useState } from 'react';
import InteractiveCanvas from './InteractiveCanvas';
import profileImg from '../assets/profile.jpeg';

const Home = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    'Full-Stack Developer',
    'Motivated Engineer',
    'Software Engineer',
    'Problem Solver'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section className="Home" id="Home" role="main" aria-label="Introduction">
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
          I'm a{' '}
          <span
            className="multiple-text"
            key={currentRole}
            aria-live="polite"
            aria-label={`Current role: ${roles[currentRole]}`}
          >
            {roles[currentRole]}
          </span>
        </h3>
        <p className="Home-description" data-aos="fade-up" data-aos-delay="400">
          Passionate about building scalable web applications and innovative solutions.
          I specialize in React, Python, and cloud technologies to deliver exceptional
          digital experiences that drive business growth.
        </p>
        <div className="stats-preview" data-aos="fade-up" data-aos-delay="500">
          <div className="stat-item">
            <span className="stat-number">15+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">5+</span>
            <span className="stat-label">Years Exp.</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">20+</span>
            <span className="stat-label">Team Projects</span>
          </div>
        </div>
        <div className="Home-actions" data-aos="fade-up" data-aos-delay="600">
          <a
            href="mailto:ahmedaliofficial90@gmail.com"
            className="btn primary-btn"
            aria-label="Send email to Ahmed Ali"
          >
            <i className='bx bx-envelope'></i>
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
            <i className='bx bx-briefcase'></i>
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
            <i className='bx bxl-linkedin'></i>
          </a>
          <a
            href="https://github.com/ahmedali202222"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Visit Ahmed Ali's GitHub profile"
          >
            <i className='bx bxl-github'></i>
          </a>
          <a
            href="mailto:ahmedaliofficial90@gmail.com"
            className="social-link"
            aria-label="Send email to Ahmed Ali"
          >
            <i className='bx bx-envelope'></i>
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

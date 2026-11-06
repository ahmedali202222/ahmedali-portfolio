import React from 'react';
import { FaAward, FaCheckCircle, FaCode, FaCommentDots, FaRocket, FaUsers } from 'react-icons/fa';

const About = () => {
  const achievements = [
    {
      icon: <FaRocket />,
      number: "30–40%",
      label: "Faster Page Loads",
      description: "Optimizing Promofly's React components and Firestore queries"
    },
    {
      icon: <FaAward />,
      number: "0–100",
      label: "Website Audit Scores",
      description: "PrimeOrbit's live SEO, conversion, trust and technical scoring"
    },
    {
      icon: <FaCode />,
      number: "2+ yrs",
      label: "Technical Experience",
      description: "Systems engineering and software support"
    },
    {
      icon: <FaUsers />,
      number: "B.S.",
      label: "Computer Science",
      description: "Wayne State University, 2024"
    }
  ];

  return (
    <section className="About" id="About" data-aos="fade-up">
      <div className="about-container">
        <div className="about-content" data-aos="fade-right">
          <h2>About Me</h2>
          <div className="about-text">
            <h3 className="about-subtitle">
              Software Engineer with a hardware background
            </h3>
            <p className="about-main">
              I'm a Computer Science graduate from Wayne State University who builds web
              applications and automation tools. Alongside my degree I've worked as a Machine
              Technician, troubleshooting machine-control software and PLC-connected equipment, so I'm used
              to software that has to work on real machines.
            </p>
            <p className="about-secondary">
              I work across the frontend and backend, mostly with React, Python and Firebase, and
              I've shipped projects ranging from a RAG-based history app to a website audit tool.
            </p>
            <div className="about-highlights">
              <div className="highlight-item">
                <FaCheckCircle aria-hidden="true" />
                <span>Full-Stack Development (React, Flask, PHP)</span>
              </div>
              <div className="highlight-item">
                <FaCheckCircle aria-hidden="true" />
                <span>Cloud & Data (Firebase, Firestore, MySQL, AWS)</span>
              </div>
              <div className="highlight-item">
                <FaCheckCircle aria-hidden="true" />
                <span>Git, Docker & CI/CD</span>
              </div>
              <div className="highlight-item">
                <FaCheckCircle aria-hidden="true" />
                <span>AI Search with RAG & LLMs</span>
              </div>
            </div>
          </div>
        </div>

        <div className="about-achievements" data-aos="fade-left">
          <h3>Key Achievements</h3>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="achievement-card"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="achievement-icon">
                  {achievement.icon}
                </div>
                <div className="achievement-content">
                  <h4 className="achievement-number">{achievement.number}</h4>
                  <h5 className="achievement-label">{achievement.label}</h5>
                  <p className="achievement-description">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="about-cta" data-aos="fade-up" data-aos-delay="600">
            <h4>Ready to collaborate?</h4>
            <p>Let's discuss how we can bring your ideas to life with cutting-edge technology.</p>
            <a href="#Contact" className="cta-button">
              <FaCommentDots aria-hidden="true" />
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

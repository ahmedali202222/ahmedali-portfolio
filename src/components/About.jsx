import React from 'react';
import { FaAward, FaCheckCircle, FaCode, FaCommentDots, FaRocket, FaUsers } from 'react-icons/fa';

const About = () => {
  const achievements = [
    {
      icon: <FaCode />,
      number: "7",
      label: "Projects Shown",
      description: "Web, AI, mobile and analytics"
    },
    {
      icon: <FaUsers />,
      number: "30%",
      label: "Fewer Operator Errors",
      description: "Through hands-on training"
    },
    {
      icon: <FaRocket />,
      number: "17%",
      label: "Lower Inventory Costs",
      description: "Refurbishing damaged parts"
    },
    {
      icon: <FaAward />,
      number: "26%",
      label: "Downtime Reduction",
      description: "Calibration and repair"
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
              Technician, maintaining AI camera systems and production equipment, so I'm used
              to software that has to work on real machines.
            </p>
            <p className="about-secondary">
              I work across the frontend and backend, mostly with React, Python and Firebase, and
              I've shipped projects ranging from a RAG-based history app to a website audit tool.
            </p>
            <div className="about-highlights">
              <div className="highlight-item">
                <FaCheckCircle aria-hidden="true" />
                <span>Full-Stack Development (MERN, Python/Django)</span>
              </div>
              <div className="highlight-item">
                <FaCheckCircle aria-hidden="true" />
                <span>Cloud Computing (AWS, Firebase, Azure)</span>
              </div>
              <div className="highlight-item">
                <FaCheckCircle aria-hidden="true" />
                <span>DevOps & CI/CD Implementation</span>
              </div>
              <div className="highlight-item">
                <FaCheckCircle aria-hidden="true" />
                <span>Performance Optimization & Scalability</span>
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

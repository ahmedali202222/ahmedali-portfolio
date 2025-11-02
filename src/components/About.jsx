import React from 'react';
import { FaCode, FaRocket, FaUsers, FaAward } from 'react-icons/fa';

const About = () => {
  const achievements = [
    {
      icon: <FaCode />,
      number: "15+",
      label: "Projects Completed",
      description: "Full-stack applications"
    },
    {
      icon: <FaRocket />,
      number: "30%",
      label: "Performance Boost",
      description: "Average improvement"
    },
    {
      icon: <FaUsers />,
      number: "5+",
      label: "Team Collaborations",
      description: "Cross-functional projects"
    },
    {
      icon: <FaAward />,
      number: "26%",
      label: "Downtime Reduction",
      description: "System optimization"
    }
  ];

  return (
    <section className="About" id="About" data-aos="fade-up">
      <div className="about-container">
        <div className="about-content" data-aos="fade-right">
          <h2>About Me</h2>
          <div className="about-text">
            <h3 className="about-subtitle">
              Passionate Software Engineer & Full-Stack Developer
            </h3>
            <p className="about-main">
              I'm a dedicated Software Engineer with expertise in building scalable, 
              high-performance web applications and automation solutions. My technical 
              journey spans full-stack development, cloud computing, and modern UI/UX design, 
              enabling me to create seamless digital experiences from concept to deployment.
            </p>
            <p className="about-secondary">
              With a strong foundation in both frontend and backend technologies, I specialize 
              in React, Python, and cloud platforms. I'm passionate about writing clean, 
              maintainable code and implementing best practices that ensure optimal performance, 
              security, and user experience.
            </p>
            <div className="about-highlights">
              <div className="highlight-item">
                <i className='bx bx-check-circle'></i>
                <span>Full-Stack Development (MERN, Python/Django)</span>
              </div>
              <div className="highlight-item">
                <i className='bx bx-check-circle'></i>
                <span>Cloud Computing (AWS, Firebase, Azure)</span>
              </div>
              <div className="highlight-item">
                <i className='bx bx-check-circle'></i>
                <span>DevOps & CI/CD Implementation</span>
              </div>
              <div className="highlight-item">
                <i className='bx bx-check-circle'></i>
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
              <i className='bx bx-message-dots'></i>
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

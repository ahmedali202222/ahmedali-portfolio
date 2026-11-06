import React from 'react';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaTools, FaCode } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Machine / Controls Technician",
      company: "Wolverine Mailing Solution Group",
      location: "Detroit, MI",
      duration: "Dec 2022 - Present",
      type: "Full-time",
      current: true,
      icon: <FaTools />,
      achievements: [
        "Troubleshoot Windows-based machine-control software and PLC-connected equipment to maintain high system availability and resolve critical technical faults",
        "Analyze control-system behavior and diagnostic logs to support software updates for legacy production systems and reduce operational downtime",
        "Maintain comprehensive technical documentation and support systems integration in line with modern engineering principles"
      ],
      skills: ["PLC Systems", "Machine-Control Software", "Diagnostics & Log Analysis", "Systems Integration", "Technical Documentation"]
    },
    {
      id: 2,
      title: "Software Engineering Trainee (Part-Time)",
      company: "Global Tech",
      location: "Remote",
      duration: "Jan 2024 – May 2024",
      type: "Part-time",
      current: false,
      icon: <FaCode />,
      achievements: [
        "Develop JavaScript and SQL workflows using object-oriented programming to transform CSV/JSON data for QA analysis and internal tools",
        "Participate in peer code reviews with Git and manage documentation throughout the development lifecycle",
        "Support adoption of modern practices like CI/CD and Docker to improve development on legacy codebases"
      ],
      skills: ["JavaScript", "SQL", "OOP", "Git", "CI/CD", "Docker"]
    }
  ];

  return (
    <section className="Experience" id="Experience" data-aos="fade-up">
      <div className="experience-container">
        <div className="experience-header">
          <h2>Professional Experience</h2>
          <p className="experience-subtitle">
            Combining technical expertise with practical problem-solving across software development and hardware integration
          </p>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              className={`experience-item ${exp.current ? 'current' : 'completed'}`}
              data-aos="fade-up" 
              data-aos-delay={index * 200}
            >
              <div className="experience-icon">
                {exp.icon}
              </div>

              <div className="experience-content">
                <div className="experience-header-info">
                  <div className="title-section">
                    <h3 className="job-title">{exp.title}</h3>
                    {exp.current && <span className="current-badge">Current</span>}
                  </div>
                  <h4 className="company-name">{exp.company}</h4>
                </div>

                <div className="experience-meta">
                  <div className="meta-item">
                    <FaMapMarkerAlt className="meta-icon" />
                    <span>{exp.location}</span>
                  </div>
                  <div className="meta-item">
                    <FaCalendarAlt className="meta-icon" />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="meta-item">
                    <FaBriefcase className="meta-icon" />
                    <span>{exp.type}</span>
                  </div>
                </div>

                <div className="achievements">
                  <h5>Key Achievements:</h5>
                  <ul className="achievements-list">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="achievement-item">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="experience-skills">
                  <h5>Skills & Technologies:</h5>
                  <div className="skills-tags">
                    {exp.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

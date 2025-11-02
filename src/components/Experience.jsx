import React from 'react';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaTools, FaCode, FaCogs } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Machine Technician",
      company: "Wolverine Mailing Solution Group",
      location: "Detroit, MI",
      duration: "Dec 2022 - Present",
      type: "Full-time",
      current: true,
      icon: <FaTools />,
      achievements: [
        "Optimized AI-driven camera and barcode systems, enhancing real-time hardware/software sync and boosting accuracy by 9%",
        "Supported maintenance team in equipment repairs, part replacements, and calibration of automated systems",
        "Authored technical documentation and workflow procedures supporting configuration management, permissions, and audit traceability (transferable to SharePoint administration)",
        "Developed 15+ barcode generation templates using GUI application, increasing throughput by 18%",
        "Trained operators, improving proficiency and reducing system errors by 30%"
      ],
      skills: ["Hardware/Software Integration", "Technical Documentation", "System Optimization", "Team Training", "GUI Development"]
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
        "Designed and implemented ETL-style data pipelines using SQL and JavaScript, integrating CSV/JSON datasets for QA analysis and improving accuracy by 40%",
        "Authored technical documentation and UI/UX guides, increasing internal tool adoption by 40%",
        "Collaborated in an Agile team environment, contributing to feature delivery and resolving client issues efficiently"
      ],
      skills: ["ETL Pipelines", "SQL", "JavaScript", "Technical Documentation", "Agile Development", "UI/UX Design"]
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

        <div className="experience-summary" data-aos="fade-up" data-aos-delay="600">
          <h3>Professional Highlights</h3>
          <div className="highlights-grid">
            <div className="highlight-item">
              <FaCogs className="highlight-icon" />
              <h4>System Optimization</h4>
              <p>Improved system accuracy by 9% and throughput by 18% through technical innovations</p>
            </div>
            <div className="highlight-item">
              <FaCode className="highlight-icon" />
              <h4>Software Development</h4>
              <p>Built ETL pipelines and data analysis tools, improving accuracy by 40%</p>
            </div>
            <div className="highlight-item">
              <FaTools className="highlight-icon" />
              <h4>Cross-functional Skills</h4>
              <p>Unique combination of hardware expertise and software development capabilities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

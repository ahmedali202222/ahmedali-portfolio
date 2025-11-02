import React, { useState } from 'react';
import { FaCode, FaDatabase, FaCloud, FaCogs, FaTools, FaMobile } from 'react-icons/fa';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      icon: <FaCode />,
      color: '#61dafb',
      skills: [
        { name: 'React.js', level: 95, experience: '3+ years' },
        { name: 'JavaScript/ES6+', level: 92, experience: '3+ years' },
        { name: 'HTML5/CSS3', level: 90, experience: '4+ years' },
        { name: 'Tailwind CSS', level: 88, experience: '2+ years' },
        { name: 'Next.js', level: 85, experience: '2+ years' },
        { name: 'TypeScript', level: 80, experience: '1+ years' }
      ]
    },
    backend: {
      title: 'Backend Development',
      icon: <FaDatabase />,
      color: '#4caf50',
      skills: [
        { name: 'Python', level: 95, experience: '4+ years' },
        { name: 'Django/Flask', level: 90, experience: '3+ years' },
        { name: 'Node.js', level: 85, experience: '2+ years' },
        { name: 'SQL/PostgreSQL', level: 88, experience: '3+ years' },
        { name: 'Firebase', level: 92, experience: '2+ years' },
        { name: 'REST APIs', level: 90, experience: '3+ years' }
      ]
    },
    cloud: {
      title: 'Cloud & DevOps',
      icon: <FaCloud />,
      color: '#ff9800',
      skills: [
        { name: 'AWS', level: 85, experience: '2+ years' },
        { name: 'Docker', level: 80, experience: '2+ years' },
        { name: 'GitHub Actions', level: 88, experience: '2+ years' },
        { name: 'Azure DevOps', level: 75, experience: '1+ years' },
        { name: 'CI/CD', level: 85, experience: '2+ years' },
        { name: 'Heroku', level: 90, experience: '2+ years' }
      ]
    },
    tools: {
      title: 'Tools & Technologies',
      icon: <FaTools />,
      color: '#9c27b0',
      skills: [
        { name: 'Git/GitHub', level: 95, experience: '4+ years' },
        { name: 'VS Code', level: 95, experience: '4+ years' },
        { name: 'Figma/Design', level: 80, experience: '2+ years' },
        { name: 'Postman', level: 88, experience: '3+ years' },
        { name: 'Tableau', level: 85, experience: '2+ years' },
        { name: 'SCRUM/Agile', level: 90, experience: '3+ years' }
      ]
    }
  };

  const SkillBar = ({ skill }) => (
    <div className="skill-item" data-aos="fade-up">
      <div className="skill-header">
        <span className="skill-name">{skill.name}</span>
        <span className="skill-experience">{skill.experience}</span>
      </div>
      <div className="skill-bar">
        <div 
          className="skill-progress" 
          style={{ 
            width: `${skill.level}%`,
            backgroundColor: skillCategories[activeCategory].color
          }}
        >
          <span className="skill-percentage">{skill.level}%</span>
        </div>
      </div>
    </div>
  );

  return (
    <section className="Skills" id="Skills" data-aos="fade-up">
      <div className="skills-container">
        <div className="skills-header">
          <h2>Technical Expertise</h2>
          <p className="skills-subtitle">
            Comprehensive skill set with hands-on experience in modern technologies
          </p>
        </div>

        {/* Category Navigation */}
        <div className="skills-nav" data-aos="fade-up" data-aos-delay="200">
          {Object.entries(skillCategories).map(([key, category]) => (
            <button
              key={key}
              className={`nav-btn ${activeCategory === key ? 'active' : ''}`}
              onClick={() => setActiveCategory(key)}
              style={{ 
                '--accent-color': category.color,
                borderColor: activeCategory === key ? category.color : 'transparent'
              }}
            >
              <span className="nav-icon">{category.icon}</span>
              <span className="nav-text">{category.title}</span>
            </button>
          ))}
        </div>

        {/* Skills Display */}
        <div className="skills-content" data-aos="fade-up" data-aos-delay="400">
          <div className="category-header">
            <div className="category-icon" style={{ color: skillCategories[activeCategory].color }}>
              {skillCategories[activeCategory].icon}
            </div>
            <h3 className="category-title">{skillCategories[activeCategory].title}</h3>
          </div>

          <div className="skills-grid">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <div key={skill.name} style={{ animationDelay: `${index * 100}ms` }}>
                <SkillBar skill={skill} />
              </div>
            ))}
          </div>
        </div>

        {/* Additional Skills */}
        <div className="additional-skills" data-aos="fade-up" data-aos-delay="600">
          <h4>Additional Technologies & Frameworks</h4>
          <div className="tech-tags">
            {['C/C++', 'Java', 'Ruby', 'C#', 'Pandas', 'NumPy', 'Matplotlib', 'OpenAI API', 'Tesseract-OCR', 'YOLO', 'Android Studio', 'Mobile Development'].map((tech, index) => (
              <span 
                key={tech} 
                className="tech-tag"
                data-aos="zoom-in"
                data-aos-delay={600 + (index * 50)}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

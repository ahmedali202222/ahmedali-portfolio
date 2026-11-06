import React from 'react';
import { FaCloud, FaCode, FaDatabase, FaTools } from 'react-icons/fa';

const skillGroups = [
  {
    title: 'Frontend',
    icon: <FaCode />,
    skills: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Vite', 'Next.js', 'React Native']
  },
  {
    title: 'Backend',
    icon: <FaDatabase />,
    skills: ['Java', 'Python', 'C++', 'Flask', 'Django', 'PHP', 'Node.js', 'REST APIs', 'PostgreSQL', 'MySQL', 'Firebase Auth', 'Firestore']
  },
  {
    title: 'Cloud & DevOps',
    icon: <FaCloud />,
    skills: ['Git', 'AWS', 'Docker', 'GitHub Actions', 'CI/CD', 'Linux', 'Shell Scripting']
  },
  {
    title: 'Testing & Data',
    icon: <FaTools />,
    skills: ['Selenium', 'TestRail', 'Jira', 'SQL', 'Tableau', 'Power BI', 'Pandas', 'OpenAI API', 'RAG']
  }
];

const Skills = () => (
  <section className="Skills" id="Skills" data-aos="fade-up">
    <div className="skills-container">
      <div className="skills-header">
        <h2>Technical Skills</h2>
        <p className="skills-subtitle">The tools I use across my projects and work</p>
      </div>

      <div className="skill-groups">
        {skillGroups.map((group) => (
          <div key={group.title} className="skill-group">
            <h3>
              <span aria-hidden="true">{group.icon}</span> {group.title}
            </h3>
            <div className="tech-tags">
              {group.skills.map((skill) => (
                <span key={skill} className="tech-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;

// src/components/Skills.jsx
import React from 'react';

const Skills = () => (
  <section className="Skills" id="Skills">
    <h2>My Technical Skills</h2>
    <div className="Skills-container">

      <div className="category">
        <h3>💻 Programming Languages</h3>
        <div className="Skill-bubble">C</div>
        <div className="Skill-bubble">C++</div>
        <div className="Skill-bubble">Java</div>
        <div className="Skill-bubble">Python</div>
        <div className="Skill-bubble">JavaScript</div>
        <div className="Skill-bubble">Ruby</div>
        <div className="Skill-bubble">C#</div>
        <div className="Skill-bubble">SQL</div>
      </div>

      <div className="category">
        <h3>📊 Data Analysis & Machine Learning</h3>
        <div className="Skill-bubble">Pandas</div>
        <div className="Skill-bubble">NumPy</div>
        <div className="Skill-bubble">Matplotlib</div>
        <div className="Skill-bubble">Tesseract-OCR</div>
        <div className="Skill-bubble">YOLO</div>
        <div className="Skill-bubble">OpenAI API</div>
      </div>

      <div className="category">
        <h3>🚀 Application Development</h3>
        <div className="Skill-bubble">React</div>
        <div className="Skill-bubble">Django</div>
        <div className="Skill-bubble">Flask</div>
        <div className="Skill-bubble">Heroku</div>
        <div className="Skill-bubble">Firebase</div>
        <div className="Skill-bubble">Android Studio</div>
        <div className="Skill-bubble">AWS</div>
        <div className="Skill-bubble">WIX</div>
      </div>

      <div className="category">
        <h3>⚙️ DevOps & Agile</h3>
        <div className="Skill-bubble">Git</div>
        <div className="Skill-bubble">GitHub Actions</div>
        <div className="Skill-bubble">Docker</div>
        <div className="Skill-bubble">Azure DevOps</div>
        <div className="Skill-bubble">CI/CD</div>
        <div className="Skill-bubble">SCRUM</div>
      </div>

    </div>
  </section>
);

export default Skills;

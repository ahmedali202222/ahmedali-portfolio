// src/components/Experience.jsx
import React from 'react';

const Experience = () => (
  <section className="Experience" id="Experience">
    <h2>Experience</h2>

    <div className="Experience-item">
      <h3>Machine Technician</h3>
      <h4>Wolverine Mailing Solution Group | Detroit, MI | Dec 2022 - Present</h4>
      <ul>
        <li>Diagnosed and resolved electrical & mechanical issues, reducing service interruptions by 20%.</li>
        <li>Reduced downtime by 26% through calibration, component replacement, and repair.</li>
        <li>Optimized inventory costs by 17% through refurbishment and reuse of damaged machine parts.</li>
        <li>Developed and programmed a Jet Engine GUI template for IMB barcode generation.</li>
        <li>Fine-tuned machine controls, improving system response times and reducing cycle time by 10 seconds per operation.</li>
        <li>Led operator training workshops, reducing error rates among the team by 30%.</li>
      </ul>
    </div>

  <div className="Experience-item">
  <h3>Software Engineering Trainee (Part-Time)</h3>
  <h4>Global Tech | Remote | Jan 2024 – May 2024</h4>
  <ul>
    <li>Developed lightweight internal web tools using SQLPad and JavaScript to analyze Instacart order data and flag inconsistencies between reported issues and customer ratings.</li>
    <li>Collaborated with the data team to implement a “Resolved Issue Rate” and “Disabled Interactions” metric, improving user behavior insights for YouTube and Instacart case studies.</li>
    <li>Created internal guides and refined UI elements, boosting tool usage by 40% and accelerating new analyst onboarding.</li>
  </ul>
</div>

  </section>
);

export default Experience;

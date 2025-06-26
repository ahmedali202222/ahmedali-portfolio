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
      <h3>Data Analysis Trainee (Part-Time)</h3>
      <h4>Global Tech | Remote | Jan 2024 - May 2024</h4>
      <ul>
        <li>Analyzed Instacart order data, identifying a 15% discrepancy between reported issues and customer ratings.</li>
        <li>Conducted YouTube engagement analysis, finding that 10% of high-view videos lacked interactions.</li>
        <li>Developed user-friendly guides for analytical tools, increasing adoption by 40% within three weeks.</li>
      </ul>
    </div>
  </section>
);

export default Experience;

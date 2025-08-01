
// src/components/Projects.jsx
import React from 'react';

const Projects = () => (
  <section className="Projects" id="Projects">
    <h2>Projects</h2>

    <div className="Project-item">
  <h3>Promofly – Local Business Promo Automation Platform</h3>
  <p>A full-stack web app that enables small businesses to submit promo offers and automatically generates marketing videos published to TikTok, Instagram, and Facebook, with admin review and analytics tools.</p>
  <p><strong>Technologies:</strong> React, Firebase (Auth, Firestore, Cloud Functions), Tailwind CSS, Recharts</p>
  </div>


    <div className="Project-item">
      <h3>Contemporary History of Iran Web Application</h3>
      <p>A Full-stack web application using AI-powered Retrieval-Augmented Generation (RAG) to provide real-time historical insights. Includes user authentication, transcription management, and Firebase integration.</p>
      <p><strong>Technologies:</strong> React, Firebase, Flask, Python, SQL, LLM, AWS</p>
    </div>

    <div className="Project-item">
      <h3>Intel Data Center – Energy Analysis for Site Selection</h3>
      <p>A data-driven study analyzing energy sustainability to determine ideal locations for Intel data centers in the U.S.</p>
      <p><strong>Technologies:</strong> SQL, SQLPad, Tableau</p>
    </div>

    <div className="Project-item">
      <h3>Grammys Website Performance Analysis</h3>
      <p>Compared user engagement metrics across Grammy and AMA websites to identify UX improvements.</p>
      <p><strong>Technologies:</strong> Python, Pandas, Plotly, SQL</p>
    </div>

    <div className="Project-item">
      <h3>Wix Website – Luxe Touch E-commerce</h3>
      <p>Designed and deployed a product-centered Wix e-commerce site for Luxe Touch with automated uploads and optimized UI/UX.</p>
      <p><strong>Technologies:</strong> Wix, JavaScript (Velo)</p>
    </div>
  </section>
);

export default Projects;

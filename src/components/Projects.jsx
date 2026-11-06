
import React from 'react';
import primeorbitImg from '../assets/projects/primeorbit.svg';
import promoflyImg from '../assets/projects/promofly.svg';
import lchiiImg from '../assets/projects/lchii.svg';
import androidImg from '../assets/projects/android.svg';
import { FaBrain, FaChartBar, FaCode, FaCommentDots, FaExternalLinkAlt, FaGithub, FaMobileAlt, FaPaintBrush, FaUsers } from 'react-icons/fa';

const categoryIcons = {
  fullstack: <FaCode />,
  ai: <FaBrain />,
  analytics: <FaChartBar />,
  mobile: <FaMobileAlt />,
  webdesign: <FaPaintBrush />
};

const ProjectCard = ({ project }) => {
  const metrics = Object.entries(project.metrics ?? {});
  const { live, github, report } = project.links ?? {};

  return (
    <div className={`project-card ${project.featured ? 'featured' : ''}`} data-aos="fade-up">
      {project.image ? (
        <div className="project-thumb">
          <img
            src={project.image}
            alt={`Preview of ${project.title.split(' – ')[0]}`}
            loading="lazy"
            width="800"
            height="450"
          />
        </div>
      ) : (
        <div className={`project-banner ${project.category}`} aria-hidden="true">
          {categoryIcons[project.category]}
        </div>
      )}
      <div className="project-status">
        <span className={`status-badge ${project.status.toLowerCase().replace(/\s+/g, '-')}`}>
          {project.status}
        </span>
      </div>

      <div className="project-content">
        <div className="project-header">
          <h3 className="project-title">{project.title}</h3>
          {project.featured && <span className="featured-badge">Featured</span>}
        </div>

        <p className="project-description">{project.description}</p>

        <div className="project-features">
          <h4>Key Features:</h4>
          <ul>
            {project.keyFeatures.slice(0, 3).map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>

        {metrics.length > 0 && (
          <div className="project-metrics">
            {metrics.map(([key, value]) => (
              <div key={key} className="metric">
                <span className="metric-value">{value}</span>
                <span className="metric-label">{key}</span>
              </div>
            ))}
          </div>
        )}

        <div className="project-tech">
          <h4>Technologies:</h4>
          <div className="tech-stack">
            {project.technologies.map((tech) => (
              <span key={tech} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>

        {(live || github || report) && (
          <div className="project-links">
            {live && (
              <a href={live} className="project-link" target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt aria-hidden="true" /> Live site
              </a>
            )}
            {github && (
              <a href={github} className="project-link" target="_blank" rel="noopener noreferrer">
                <FaGithub aria-hidden="true" /> Code
              </a>
            )}
            {report && (
              <a href={report} className="project-link" target="_blank" rel="noopener noreferrer">
                <FaChartBar aria-hidden="true" /> Report
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const Projects = () => {

  const projects = [
    {
      id: 0,
      title: "PrimeOrbit – Lead Generation & Website Audit Tool",
      image: primeorbitImg,
      category: "fullstack",
      featured: true,
      description: "Full-stack PHP/MySQL platform for managing leads, auditing business websites, and organizing personalized outreach — live website analysis scores each site 0–100 across SEO, conversion, trust, and technical factors.",
      technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap", "Docker", "REST APIs", "cURL", "Google SERP API", "WHOIS API"],
      keyFeatures: [
        "Real-time website audit pipeline — SEO, conversion, trust & technical scoring (0–100)",
        "Google SERP scraping + WHOIS API contact enrichment with multi-page detection",
        "AI-assisted personalised outreach email generation from real audit findings",
        "Bulk mass-mail sending & Smartlead-compatible CSV export",
        "Responsive Bootstrap dashboard — modals, async progress, sortable domain tables"
      ],
      metrics: {
        scoring: "4-dimension scoring",
        export: "Smartlead CSV",
        pipeline: "Fully async"
      },
      links: {},
      status: "Production"
    },
    {
      id: 1,
      title: "Promofly – Marketing Automation SaaS",
      image: promoflyImg,
      category: "fullstack",
      featured: true,
      description: "A React/Vite web app backed by Firebase Authentication and Cloud Firestore for submitting, managing, and tracking promotional campaigns.",
      technologies: ["React", "Vite", "Firebase Auth", "Cloud Firestore", "Recharts"],
      keyFeatures: [
        "Role-based access with admin approvals",
        "Real-time campaign status updates and full CRUD on Firestore",
        "Analytics dashboards built with Recharts"
      ],
      metrics: {
        "initial page load": "~30–40% faster"
      },
      links: {},
      status: "In Development"
    },
    {
      id: 2,
      title: "L-CHI – AI-Powered History Search Application",
      image: lchiiImg,
      category: "ai",
      featured: true,
      description: "Senior capstone: a Python/Flask application that uses retrieval-augmented generation (RAG) and an LLM to answer history questions from sources.",
      technologies: ["Python", "Flask", "RAG", "LLM", "Firebase Realtime Database", "Selenium", "TestRail", "Jira"],
      keyFeatures: [
        "Led frontend development of the search experience",
        "Flask endpoints with Firebase for auth, search, source management and admin features",
        "Selenium functional tests, with defects tracked in TestRail and Jira"
      ],
      metrics: {
        "functional tests": "7 test cases"
      },
      links: {
        github: "https://github.com/4996wsu/LLM-for-the-Contemporary-History-of-Iran"
      },
      status: "Completed"
    },
    {
      id: 5,
      title: "Android App Projects",
      image: androidImg,
      category: "mobile",
      featured: true,
      description: "Comprehensive collection of 4+ experimental Android applications built with Java and Android Studio, showcasing practical UI/UX implementation, user input handling, and system-level integrations.",
      technologies: ["Android Studio", "Java", "XML", "Android SDK", "Mobile UI/UX"],
      keyFeatures: [
        "Food delivery mock app with user selection and notifications",
        "Interactive sports gallery with adaptive layouts",
        "Native Android integrations (camera, maps, messaging)",
        "Responsive design tested across 3 screen sizes"
      ],
      metrics: {
        apps: "4+ applications",
        testing: "3 screen sizes",
        features: "Multiple integrations"
      },
      links: {},
      status: "Completed"
    }
  ];

  return (
    <section className="Projects" id="Projects" data-aos="fade-up">
      <div className="projects-container">
        <div className="projects-header">
          <h2>Projects</h2>
          <p className="projects-subtitle">
            The products I've built, from lead-generation tools to AI search
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid" data-aos="fade-up" data-aos-delay="400">
          {projects.map((project, index) => (
            <div key={project.id} style={{ animationDelay: `${index * 100}ms` }}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="projects-cta" data-aos="fade-up" data-aos-delay="600">
          <h3>Interested in collaborating?</h3>
          <p>Let's discuss how we can bring your next project to life with innovative technology solutions.</p>
          <a href="#Contact" className="cta-button">
            <FaCommentDots aria-hidden="true" />
            Start a Conversation
          </a>
        </div>
    </div>
  </section>
);
};

export default Projects;

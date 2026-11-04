
import React, { useState } from 'react';
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
      <div className={`project-banner ${project.category}`} aria-hidden="true">
        {categoryIcons[project.category]}
      </div>
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
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      id: 0,
      title: "PrimeOrbit – Lead Generation & Website Audit Tool",
      category: "fullstack",
      featured: true,
      description: "Full-stack internal SaaS tool for SEO-based lead generation — discovers domains via Google SERP, audits websites in real time, scores them across SEO/conversion/trust/technical dimensions, and generates personalised outreach emails.",
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
      title: "Promofly – Social Media Scheduling Platform",
      category: "fullstack",
      featured: true,
      description: "A social media management app I'm building to help small businesses schedule and publish content across multiple platforms from one place.",
      technologies: ["React", "Firebase", "Cloud Functions", "Firestore"],
      keyFeatures: [
        "Multi-platform post scheduling",
        "Instagram, Facebook and TikTok integrations",
        "Serverless publishing pipeline on Cloud Functions"
      ],
      links: {},
      status: "In Development"
    },
    {
      id: 2,
      title: "L-CHII – AI-Powered History of Iran",
      category: "ai",
      featured: true,
      description: "A web application that uses an LLM with Retrieval-Augmented Generation (RAG) to answer questions about the contemporary history of Iran in real time.",
      technologies: ["React", "Flask", "Python", "Firebase", "RAG", "TestRail", "Selenium"],
      keyFeatures: [
        "LLM answers grounded with RAG",
        "Led front-end development in React",
        "Test cases managed with TestRail and Selenium"
      ],
      metrics: {
        "bug resolution": "60% faster"
      },
      links: {
        github: "https://github.com/4996wsu/LLM-for-the-Contemporary-History-of-Iran"
      },
      status: "Completed"
    },
    {
      id: 3,
      title: "Data Center Site Selection Analysis",
      category: "analytics",
      featured: false,
      description: "An analysis exercise using energy and sustainability data to compare locations for an Intel data center, identifying the Northwest as a leader in renewable resources.",
      technologies: ["SQL", "SQLPad", "Tableau"],
      keyFeatures: [
        "Energy data compared across all 50 states",
        "Sustainability analysis by region",
        "Tableau visualizations and recommendations"
      ],
      metrics: {
        coverage: "50 states"
      },
      links: {},
      status: "Completed"
    },
    {
      id: 4,
      title: "Entertainment Industry UX Analysis",
      category: "analytics",
      featured: false,
      description: "Comparative analysis of user engagement patterns between Grammy and AMA websites, identifying UX improvement opportunities.",
      technologies: ["Python", "Pandas", "Plotly", "SQL", "Data Visualization"],
      keyFeatures: [
        "Cross-platform engagement analysis",
        "User behavior pattern identification",
        "Interactive dashboard creation",
        "UX improvement recommendations"
      ],
      links: {},
      status: "Completed"
    },
    {
      id: 5,
      title: "Android App Projects",
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
    },
    {
      id: 6,
      title: "Luxe Touch E-commerce Website",
      category: "webdesign",
      featured: false,
      description: "An online store built on Wix, with curated product pages, a streamlined checkout, and a focus on mobile design and SEO.",
      technologies: ["Wix", "SEO", "E-commerce", "UI/UX"],
      keyFeatures: [
        "Curated product pages",
        "Streamlined checkout and payment integration",
        "Mobile design and SEO optimization"
      ],
      metrics: {
        "organic traffic": "+25%"
      },
      links: {
        live: "https://shopluxetouch.com"
      },
      status: "Production"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', icon: <FaCode /> },
    { id: 'fullstack', label: 'Full-Stack', icon: <FaCode /> },
    { id: 'ai', label: 'AI/ML', icon: <FaChartBar /> },
    { id: 'analytics', label: 'Analytics', icon: <FaChartBar /> },
    { id: 'mobile', label: 'Mobile Apps', icon: <FaUsers /> },
    { id: 'webdesign', label: 'Web Design', icon: <FaExternalLinkAlt /> }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section className="Projects" id="Projects" data-aos="fade-up">
      <div className="projects-container">
        <div className="projects-header">
          <h2>Projects</h2>
          <p className="projects-subtitle">
            A selection of the products and analysis I've worked on
          </p>
        </div>

        {/* Category Filter */}
        <div className="projects-filter" data-aos="fade-up" data-aos-delay="200">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              <span className="filter-icon">{category.icon}</span>
              <span className="filter-text">{category.label}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid" data-aos="fade-up" data-aos-delay="400">
          {filteredProjects.map((project, index) => (
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

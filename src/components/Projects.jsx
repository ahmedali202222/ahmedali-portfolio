
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
      fullDescription: "Built entirely in PHP and MySQL with a responsive Bootstrap UI. Features a real website audit pipeline using cURL and DOMDocument, WHOIS API integration, bulk mass-mail sending, Smartlead CSV export, async processing, and a domain management dashboard with filtering and manual entry.",
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
      title: "Promofly – Business Automation Platform",
      category: "fullstack",
      featured: true,
      description: "Revolutionary full-stack platform enabling small businesses to automate marketing video creation and social media publishing across TikTok, Instagram, and Facebook.",
      fullDescription: "A comprehensive business automation solution featuring real-time analytics, admin review systems, and seamless social media integration. Built with scalability and performance in mind.",
      technologies: ["React", "Firebase", "Tailwind CSS", "Recharts", "Cloud Functions", "Authentication"],
      keyFeatures: [
        "Automated video generation and publishing",
        "Multi-platform social media integration", 
        "Real-time analytics dashboard",
        "Admin review and approval workflow"
      ],
      metrics: {
        users: "50+ businesses",
        performance: "95% uptime",
        engagement: "200% increase"
      },
      links: {},
      status: "Production"
    },
    {
      id: 2,
      title: "AI-Powered Historical Insights Platform",
      category: "ai",
      featured: true,
      description: "Advanced web application leveraging AI-powered Retrieval-Augmented Generation (RAG) to deliver real-time historical insights with intelligent transcription management.",
      fullDescription: "Cutting-edge platform combining machine learning with historical data analysis, featuring advanced user authentication, intelligent search capabilities, and seamless cloud integration.",
      technologies: ["React", "Firebase", "Flask", "Python", "AWS", "Machine Learning", "RAG"],
      keyFeatures: [
        "AI-powered content generation",
        "Real-time historical data analysis",
        "Advanced user authentication system",
        "Intelligent transcription management"
      ],
      metrics: {
        accuracy: "95% AI accuracy",
        processing: "< 2s response time",
        data: "10K+ documents"
      },
      links: {
        github: "https://github.com/4996wsu/LLM-for-the-Contemporary-History-of-Iran"
      },
      status: "Beta"
    },
    {
      id: 3,
      title: "Intel Data Center Optimization Study",
      category: "analytics",
      featured: false,
      description: "Comprehensive data-driven analysis for Intel's strategic data center placement, focusing on energy sustainability and operational efficiency across the United States.",
      fullDescription: "Advanced analytics project combining energy consumption patterns, geographical data, and sustainability metrics to optimize Intel's data center network deployment strategy.",
      technologies: ["SQL", "SQLPad", "Tableau", "Python", "Data Analytics"],
      keyFeatures: [
        "Multi-factor location analysis",
        "Energy sustainability modeling",
        "Interactive data visualizations",
        "Strategic recommendations engine"
      ],
      metrics: {
        locations: "50+ analyzed",
        efficiency: "30% cost reduction",
        sustainability: "40% energy savings"
      },
      links: {},
      status: "Completed"
    },
    {
      id: 4,
      title: "Entertainment Industry UX Analysis",
      category: "analytics",
      featured: false,
      description: "In-depth comparative analysis of user engagement patterns between Grammy and AMA websites, identifying key UX improvement opportunities.",
      fullDescription: "Comprehensive user experience study utilizing advanced analytics to compare engagement metrics, user behavior patterns, and interface effectiveness across major entertainment platforms.",
      technologies: ["Python", "Pandas", "Plotly", "SQL", "Data Visualization"],
      keyFeatures: [
        "Cross-platform engagement analysis",
        "User behavior pattern identification",
        "Interactive dashboard creation",
        "UX improvement recommendations"
      ],
      metrics: {
        engagement: "85% improvement",
        analysis: "500K+ interactions",
        insights: "20+ actionable findings"
      },
      links: {},
      status: "Completed"
    },
    {
      id: 5,
      title: "Android App Projects",
      category: "mobile",
      featured: true,
      description: "Comprehensive collection of 4+ experimental Android applications built with Java and Android Studio, showcasing practical UI/UX implementation, user input handling, and system-level integrations.",
      fullDescription: "Developed multiple Android applications demonstrating proficiency in mobile development, including food delivery systems, interactive galleries, and native Android feature integration with responsive design principles.",
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
      title: "Luxe Touch E-commerce Platform",
      category: "webdesign",
      featured: false,
      description: "Modern e-commerce solution for Luxe Touch featuring automated inventory management, optimized UI/UX design, and seamless customer experience.",
      fullDescription: "Complete e-commerce platform built with modern web technologies, featuring automated product uploads, inventory management, and conversion-optimized user interface design.",
      technologies: ["Wix", "JavaScript", "Velo", "E-commerce", "UI/UX"],
      keyFeatures: [
        "Automated product management",
        "Responsive design system",
        "Payment gateway integration",
        "SEO optimization"
      ],
      metrics: {
        conversion: "40% increase",
        performance: "< 3s load time",
        satisfaction: "4.8/5 rating"
      },
      links: {},
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
          <h2>Featured Projects</h2>
          <p className="projects-subtitle">
            Showcasing innovative solutions and technical expertise across diverse domains
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

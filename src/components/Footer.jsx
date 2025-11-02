import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaHeart, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const quickLinks = [
    { name: 'About', href: '#About' },
    { name: 'Skills', href: '#Skills' },
    { name: 'Projects', href: '#Projects' },
    { name: 'Experience', href: '#Experience' },
    { name: 'Testimonials', href: '#Testimonials' },
    { name: 'Contact', href: '#Contact' }
  ];

  const services = [
    'Full-Stack Development',
    'React Applications',
    'Backend APIs',
    'Database Design',
    'Cloud Deployment',
    'Performance Optimization'
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-section brand-section" data-aos="fade-up">
            <div className="footer-logo">
              <h3>Ahmed Ali</h3>
              <p className="footer-tagline">Full-Stack Software Engineer</p>
            </div>
            <p className="footer-description">
              Passionate about creating innovative digital solutions with modern technologies. 
              Specializing in React, Python, and cloud platforms to build scalable applications 
              that make a difference.
            </p>
            <div className="footer-social">
              <a 
                href="https://github.com/ahmedali202222" 
                className="social-icon"
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit Ahmed's GitHub profile"
              >
                <FaGithub />
              </a>
              <a 
                href="https://www.linkedin.com/in/ahmedaliofficial90/" 
                className="social-icon"
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit Ahmed's LinkedIn profile"
              >
                <FaLinkedin />
              </a>
              <a 
                href="mailto:ahmedaliofficial90@gmail.com" 
                className="social-icon"
                aria-label="Send email to Ahmed"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section" data-aos="fade-up" data-aos-delay="100">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(link.href.substring(1))?.scrollIntoView({ 
                        behavior: 'smooth' 
                      });
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section" data-aos="fade-up" data-aos-delay="200">
            <h4>Services</h4>
            <ul className="footer-services">
              {services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section" data-aos="fade-up" data-aos-delay="300">
            <h4>Get In Touch</h4>
            <div className="footer-contact">
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <a href="mailto:ahmedaliofficial90@gmail.com">
                  ahmedaliofficial90@gmail.com
                </a>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <a href="tel:3133986279">
                  (313) 398-6279
                </a>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span>Detroit, MI, USA</span>
              </div>
            </div>
            
            <div className="footer-availability">
              <div className="availability-status">
                <div className="status-indicator available"></div>
                <span>Available for new projects</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>
                &copy; {currentYear} Ahmed Ali. Made with{' '}
                <FaHeart className="heart-icon" />{' '}
                in Detroit, MI
              </p>
            </div>
            
            <div className="footer-bottom-links">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
              <a href="#Contact">Hire Me</a>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button 
          className="scroll-to-top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;

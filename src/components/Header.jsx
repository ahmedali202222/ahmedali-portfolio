import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['Home', 'About', 'Education', 'Experience', 'Skills', 'Projects', 'Testimonials', 'Contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#Home', label: 'Home' },
    { href: '#About', label: 'About' },
    { href: '#Education', label: 'Education' },
    { href: '#Experience', label: 'Experience' },
    { href: '#Skills', label: 'Skills' },
    { href: '#Projects', label: 'Projects' },
    { href: '#Testimonials', label: 'Testimonials' },
    { href: '#Contact', label: 'Contact' }
  ];

  const handleNavClick = (href) => {
    setIsMenuOpen(false);
    // Smooth scroll to section
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header" role="banner">
      <div className="header-container">
        <div className="logo">
          <a href="#Home" onClick={() => handleNavClick('#Home')} aria-label="Ahmed Ali - Home">
            Ahmed Ali
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="navbar desktop-nav" role="navigation" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`nav-link ${activeSection === link.label ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              aria-current={activeSection === link.label ? 'page' : undefined}
            >
              {link.label}
            </a>
          ))}
          <a 
            href="./Ahmed_Ali_Software_Engineer_Resume-4.pdf" 
            download 
            className="resume-btn"
            aria-label="Download Ahmed Ali's Resume"
          >
            <i className='bx bx-download'></i>
            Resume
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav 
            id="mobile-nav"
            className="mobile-nav" 
            role="navigation" 
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`mobile-nav-link ${activeSection === link.label ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                aria-current={activeSection === link.label ? 'page' : undefined}
              >
                {link.label}
              </a>
            ))}
            <a 
              href="./Ahmed_Ali_Software_Engineer_Resume-4.pdf" 
              download 
              className="mobile-resume-btn"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Download Ahmed Ali's Resume"
            >
              <i className='bx bx-download'></i>
              Download Resume
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
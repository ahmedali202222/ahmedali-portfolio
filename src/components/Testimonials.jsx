import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaCommentDots, FaQuoteLeft, FaUser } from 'react-icons/fa';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Sara",
      position: "Team Member",
      company: "Wayne State University",
      text: "Working alongside Ahmed has been incredible. His technical leadership in React and Firebase, combined with his collaborative approach, makes him an outstanding team member. He consistently delivers high-quality solutions and mentors junior developers with patience and expertise.",
      project: "Business Automation Platform"
    },
    {
      id: 2,
      name: "Akram",
      position: "Team Member",
      company: "Wayne State University",
      text: "Ahmed is the kind of colleague every team needs. His ability to bridge the gap between complex machine learning concepts and practical implementation is exceptional. He's always willing to share knowledge and collaborate on challenging problems.",
      project: "AI Historical Platform"
    },
    {
      id: 3,
      name: "Nick",
      position: "Team Member",
      company: "Wayne State University",
      text: "As Ahmed's teammate, I can confidently say he's one of the most dedicated and skilled developers I've worked with. His analytical thinking and attention to detail consistently improve our team's output. He's a natural problem-solver and great mentor.",
      project: "Data Center Analysis"
    },
    {
      id: 4,
      name: "Leo",
      position: "Team Member",
      company: "Wayne State University",
      text: "Ahmed brings both technical excellence and positive energy to our development team. His code reviews are thorough and constructive, and he's always ready to help teammates tackle complex challenges. A pleasure to work with and learn from.",
      project: "E-commerce Platform"
    }
  ];

  // Auto-advance testimonials
  useEffect(() => {
    if (isPaused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  const currentTest = testimonials[currentTestimonial];

  return (
    <section className="testimonials" id="Testimonials" data-aos="fade-up">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2>Team Member Testimonials</h2>
          <p className="testimonials-subtitle">
            What colleagues and team members say about working with me
          </p>
        </div>

        <div className="testimonials-content">
          {/* Main Testimonial Display */}
          <div
            className="testimonial-main"
            data-aos="fade-up"
            data-aos-delay="200"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
          >
            <div className="testimonial-card">
              <div className="quote-icon">
                <FaQuoteLeft />
              </div>
              
              <div className="testimonial-text">
                <p>"{currentTest.text}"</p>
              </div>

              <div className="testimonial-author">
                <div className="author-image">
                  <span className="author-initial" aria-hidden="true">{currentTest.name.charAt(0)}</span>
                </div>
                <div className="author-info">
                  <h4 className="author-name">{currentTest.name}</h4>
                  <p className="author-position">{currentTest.position}</p>
                  <p className="author-company">{currentTest.company}</p>
                  <div className="author-project">
                    <span>Project: {currentTest.project}</span>
                  </div>
                </div>
                <div className="teammate-icon">
                  <FaUser aria-hidden="true" />
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="testimonial-controls">
              <button 
                className="control-btn prev" 
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
              >
                <FaChevronLeft />
              </button>
              
              <div className="testimonial-indicators">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`indicator ${index === currentTestimonial ? 'active' : ''}`}
                    onClick={() => goToTestimonial(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                className="control-btn next" 
                onClick={nextTestimonial}
                aria-label="Next testimonial"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="testimonials-cta" data-aos="fade-up" data-aos-delay="600">
          <h3>Ready to add me to your team?</h3>
          <p>Let's discuss how I can contribute to your team with the same level of collaboration, expertise, and dedication.</p>
          <a href="#Contact" className="cta-button">
            <FaCommentDots aria-hidden="true" />
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

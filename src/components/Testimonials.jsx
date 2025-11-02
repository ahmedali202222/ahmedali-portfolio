import React, { useState, useEffect } from 'react';
import { FaQuoteLeft, FaLinkedin, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sara",
      position: "Team Member",
      company: "Wayne State University",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "Working alongside Ahmed has been incredible. His technical leadership in React and Firebase, combined with his collaborative approach, makes him an outstanding team member. He consistently delivers high-quality solutions and mentors junior developers with patience and expertise.",
      project: "Business Automation Platform"
    },
    {
      id: 2,
      name: "Akram",
      position: "Team Member",
      company: "Wayne State University",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "Ahmed is the kind of colleague every team needs. His ability to bridge the gap between complex machine learning concepts and practical implementation is exceptional. He's always willing to share knowledge and collaborate on challenging problems.",
      project: "AI Historical Platform"
    },
    {
      id: 3,
      name: "Nick",
      position: "Team Member",
      company: "Wayne State University",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "As Ahmed's teammate, I can confidently say he's one of the most dedicated and skilled developers I've worked with. His analytical thinking and attention to detail consistently improve our team's output. He's a natural problem-solver and great mentor.",
      project: "Data Center Analysis"
    },
    {
      id: 4,
      name: "Leo",
      position: "Team Member",
      company: "Wayne State University",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "Ahmed brings both technical excellence and positive energy to our development team. His code reviews are thorough and constructive, and he's always ready to help teammates tackle complex challenges. A pleasure to work with and learn from.",
      project: "E-commerce Platform"
    }
  ];

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  const StarRating = ({ rating }) => (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => (
        <FaStar 
          key={index} 
          className={index < rating ? 'star filled' : 'star'} 
        />
      ))}
    </div>
  );

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
          <div className="testimonial-main" data-aos="fade-up" data-aos-delay="200">
            <div className="testimonial-card">
              <div className="quote-icon">
                <FaQuoteLeft />
              </div>
              
              <div className="testimonial-text">
                <p>"{currentTest.text}"</p>
              </div>

              <div className="testimonial-rating">
                <StarRating rating={currentTest.rating} />
                <span className="rating-text">Outstanding</span>
              </div>

              <div className="testimonial-author">
                <div className="author-image">
                  <img src={currentTest.image} alt={currentTest.name} />
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
                  <i className='bx bx-user'></i>
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

          {/* Testimonial Summary Stats */}
          <div className="testimonial-stats" data-aos="fade-up" data-aos-delay="400">
            <div className="stat-item">
              <h3>5.0</h3>
              <p>Average Rating</p>
              <div className="stat-stars">
                <StarRating rating={5} />
              </div>
            </div>
            <div className="stat-item">
              <h3>15+</h3>
              <p>Team Projects</p>
            </div>
            <div className="stat-item">
              <h3>100%</h3>
              <p>Project Success</p>
            </div>
            <div className="stat-item">
              <h3>95%</h3>
              <p>Team Satisfaction</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="testimonials-cta" data-aos="fade-up" data-aos-delay="600">
          <h3>Ready to add me to your team?</h3>
          <p>Let's discuss how I can contribute to your team with the same level of collaboration, expertise, and dedication.</p>
          <a href="#Contact" className="cta-button">
            <i className='bx bx-message-dots'></i>
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

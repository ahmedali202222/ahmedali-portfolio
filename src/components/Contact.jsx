import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(formData.subject || 'Portfolio Contact Form');
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      
      // Open default email client
      window.location.href = `mailto:ahmedaliofficial90@gmail.com?subject=${subject}&body=${body}`;
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
          setSubmitStatus('error');
        } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact" id="Contact" data-aos="fade-up">
      <h2>Get In Touch</h2>
      
      <div className="contact-container">
        {/* Contact Info */}
        <div className="contact-info" data-aos="fade-right">
          <div className="contact-info-item">
            <FaEnvelope className="contact-icon" />
            <div>
              <h3>Email</h3>
              <a
                href="mailto:ahmedaliofficial90@gmail.com"
                className="contact-link"
                aria-label="Send email to Ahmed Ali"
              >
                ahmedaliofficial90@gmail.com
              </a>
            </div>
          </div>

          <div className="contact-info-item">
            <FaPhone className="contact-icon" />
            <div>
              <h3>Phone</h3>
              <a
                href="tel:3133986279"
                className="contact-link"
                aria-label="Call Ahmed Ali"
              >
                (313) 398-6279
              </a>
            </div>
          </div>

          <div className="contact-info-item">
            <FaLinkedin className="contact-icon" />
            <div>
              <h3>LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/ahmedaliofficial90/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
                aria-label="Visit Ahmed Ali's LinkedIn profile"
              >
                /in/ahmedaliofficial90
              </a>
            </div>
          </div>

          <div className="contact-info-item">
            <FaGithub className="contact-icon" />
            <div>
              <h3>GitHub</h3>
              <a
                href="https://github.com/ahmedali202222"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
                aria-label="Visit Ahmed Ali's GitHub profile"
              >
                github.com/ahmedali202222
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit} data-aos="fade-left">
          <h3>Send me a message</h3>
          
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              aria-required="true"
              placeholder="Your full name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              aria-required="true"
              placeholder="your.email@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="Brief subject line"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              aria-required="true"
              rows="6"
              placeholder="Tell me about your project or just say hello!"
            ></textarea>
          </div>

          <button
            type="submit"
            className="submit-btn"
            disabled={isSubmitting}
            aria-label="Send message"
          >
            <FaPaperPlane />
            {isSubmitting ? 'Opening Email Client...' : 'Send Message'}
          </button>

          {submitStatus === 'success' && (
            <div className="status-message success" role="status" aria-live="polite">
              Email client opened successfully! Please send the email from your email app.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="status-message error" role="alert" aria-live="assertive">
              Something went wrong. Please try emailing me directly at ahmedaliofficial90@gmail.com
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;

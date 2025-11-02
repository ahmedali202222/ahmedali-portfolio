import React from 'react';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaStar } from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science",
      institution: "Wayne State University",
      location: "Detroit, MI",
      gpa: "3.3/4.0",
      graduationDate: "Dec 2024",
      coursework: [
        "Data Structures and Algorithms",
        "Object-Oriented Programming (OOP)",
        "Operating Systems",
        "Web and Mobile App Development"
      ],
      type: "bachelors"
    },
    {
      id: 2,
      degree: "Associate of Science in Pre-Engineering",
      institution: "Wayne County Community College District",
      location: "Detroit, MI", 
      gpa: "3.3/4.0",
      graduationDate: "Nov 2021",
      coursework: [
        "Engineering Mathematics",
        "Physics and Chemistry",
        "Computer Programming Fundamentals",
        "Technical Communication"
      ],
      type: "associates"
    }
  ];

  return (
    <section className="Education" id="Education" data-aos="fade-up">
      <div className="education-container">
        <div className="education-header">
          <h2>Education</h2>
          <p className="education-subtitle">
            Strong academic foundation in Computer Science and Engineering with hands-on experience in modern software development
          </p>
        </div>

        <div className="education-timeline">
          {educationData.map((edu, index) => (
            <div 
              key={edu.id} 
              className="education-item"
              data-aos="fade-up" 
              data-aos-delay={index * 200}
            >
              <div className="education-icon">
                <FaGraduationCap />
              </div>
              
              <div className="education-content">
                <div className="education-header-info">
                  <h3 className="degree-title">{edu.degree}</h3>
                  <div className="education-badge">
                    <span className={`degree-type ${edu.type}`}>
                      {edu.type === 'bachelors' ? "Bachelor's" : "Associate's"}
                    </span>
                  </div>
                </div>

                <div className="institution-info">
                  <h4 className="institution-name">{edu.institution}</h4>
                  <div className="education-meta">
                    <div className="meta-item">
                      <FaMapMarkerAlt className="meta-icon" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="meta-item">
                      <FaCalendarAlt className="meta-icon" />
                      <span>Graduated: {edu.graduationDate}</span>
                    </div>
                    <div className="meta-item">
                      <FaStar className="meta-icon" />
                      <span>GPA: {edu.gpa}</span>
                    </div>
                  </div>
                </div>

                <div className="coursework">
                  <h5>Key Coursework:</h5>
                  <div className="coursework-list">
                    {edu.coursework.map((course, courseIndex) => (
                      <span key={courseIndex} className="course-tag">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="education-summary" data-aos="fade-up" data-aos-delay="600">
          <h3>Academic Achievements</h3>
          <div className="achievements-grid">
            <div className="achievement-item">
              <h4>Consistent Performance</h4>
              <p>Maintained 3.3 GPA across both undergraduate and pre-engineering programs</p>
            </div>
            <div className="achievement-item">
              <h4>Technical Foundation</h4>
              <p>Strong grounding in algorithms, data structures, and software engineering principles</p>
            </div>
            <div className="achievement-item">
              <h4>Practical Application</h4>
              <p>Hands-on experience in web and mobile app development through coursework</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

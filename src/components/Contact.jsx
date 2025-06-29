// src/components/Contact.jsx
import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';

const Contact = () => (
  <div className="text-white text-center py-4 flex flex-col sm:flex-row justify-center items-center gap-4 text-sm sm:text-base">
    <div className="flex items-center gap-2">
      <FaEnvelope />
      <a
        href="mailto:ahmedaliofficial90@gmail.com"
        className="underline text-blue-400 hover:text-blue-300"
      >
        ahmedaliofficial90@gmail.com
      </a>
    </div>
    <div className="flex items-center gap-2">
      <FaPhone />
      <a
        href="tel:3133986279"
        className="underline text-blue-400 hover:text-blue-300"
      >
        (313) 398-6279
      </a>
    </div>
    <div className="flex items-center gap-2">
      <FaLinkedin />
      <a
        href="https://www.linkedin.com/in/ahmedaliofficial90/"
        target="_blank"
        rel="noopener noreferrer"
        className="underline text-blue-400 hover:text-blue-300"
      >
        linkedin.com/in/ahmedaliofficial90
      </a>
    </div>
  </div>
);

export default Contact;

// src/App.jsx
import React, { useEffect } from 'react';
import './index.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './style.css'; // or './index.css' depending on file name
import AOS from 'aos';
import 'aos/dist/aos.css';

import './style.css'; // your custom styles

// import components

// ... other components

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>

      <Header />
      <Home />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
  
    </>
  );
}
<div className="bg-red-500 text-white p-4 text-xl">
  Tailwind is working!
</div>

export default App;

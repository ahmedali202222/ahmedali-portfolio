import React, { useEffect } from 'react';
import './style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
      once: true,
      offset: 100,
      easing: 'ease-out-cubic'
    });
  }, []);

  return (
    <>
      <Header />
      <main>
      <Home />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Education />
      <Testimonials />
      <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;

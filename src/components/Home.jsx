 // src/components/Home.jsx
import React from 'react';
import profileImg from '../assets/profile.jpeg'; // ✅ Put imports at the top, outside of JSX

const Home = () => (
  <section className="Home" id="Home">
    <div className="Home-content">
      <h3>Welcome To My Portfolio</h3>
      <h1>Ahmed Ali</h1>
      <h3>Software Engineer <span className="multiple-text"></span></h3>
      <a href="mailto:ahmedaliofficial90@gmail.com" className="btn">Contact Me</a>
    </div>
    <div className="Home-img">
      <img src={profileImg} alt="Ahmed's Profile" />
    </div>
  </section>
);

export default Home;

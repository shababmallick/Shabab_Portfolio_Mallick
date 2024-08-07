import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Import the CSS file for styling

const HomePage = () => {
  return (
    <div className="home">
      <div className="home-content">
        <h1>Welcome to My Portfolio</h1>
        <p>Hi, I'm Shabab Mallick, a Full Stack Developer.</p>
        <div className="home-buttons">
          <Link to="/about" className="btn">About Me</Link>
          <Link to="/projects" className="btn">My Projects</Link>
          <Link to="/contact" className="btn">Contact Me</Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

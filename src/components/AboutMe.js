import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className="about-me">
      <div className="about-me-content">
        <h1>About Me</h1>
        <p>
          Hi, I'm Shabab Mallick, a passionate Full Stack Developer with experience in building web applications using modern technologies. I enjoy creating user-friendly, responsive, and efficient applications that provide great user experiences.
        </p>
        <p>
          <strong>Skills:</strong>
          <ul>
            <li>JavaScript, React js, Redux</li>
            <li>HTML5, CSS3, SASS</li>
            <li>Node.js, .Net Framework</li>
            <li>.Net Core Framework, MS SQL</li>
            <li>Git, GitHub</li>
          </ul>
        </p>
        <p>
          I am constantly learning and keeping up with the latest trends in web development to ensure that I am using the best tools and practices available. In my free time, I enjoy contributing to open-source projects and writing technical blogs.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;

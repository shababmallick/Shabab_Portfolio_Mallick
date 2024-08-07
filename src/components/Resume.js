import React from 'react';
import './Resume.css'; // Import the CSS file for styling

const Resume = () => {
  return (
    <div className="resume">
      <h1>My Resume</h1>
      <div className="resume-content">
        <h2>Summary</h2>
        <p>
          Experienced Full Stack Developer with a demonstrated history of working
          in the software industry. Skilled in React, Node.js, and MongoDB with
          a passion for building innovative and efficient web applications.
        </p>

        <h2>Education</h2>
        <ul>
          <li>Bachelor's Degree in Computer Science - XYZ University</li>
          <li>Certification in Full Stack Web Development - ABC Institute</li>
        </ul>

        <h2>Experience</h2>
        <ul>
          <li>
            <strong>Full Stack Developer - Company A</strong> (Jan 2021 - Present)
            <p>Developed and maintained web applications using React and Node.js. Worked on optimizing performance and improving user experience.</p>
          </li>
          <li>
            <strong>Software Engineer Intern - Company B</strong> (Jun 2020 - Dec 2020)
            <p>Assisted in developing front-end features and fixing bugs in a large-scale web application. Gained experience in collaborative software development.</p>
          </li>
        </ul>

        <h2>Skills</h2>
        <ul>
          <li>React</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>MongoDB</li>
          <li>JavaScript</li>
          <li>HTML & CSS</li>
        </ul>

        <h2>Projects</h2>
        <ul>
          <li><a href="/projects">View My Projects</a></li>
        </ul>

        <h2>Download Resume</h2>
        <a href="OneDrive/Desktop/Shabab.pdf" className="btn" download>Download PDF</a>
      </div>
    </div>
  );
};

export default Resume;




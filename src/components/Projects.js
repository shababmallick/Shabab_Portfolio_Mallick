import React from 'react';
import './Projects.css'; // Import the CSS file for styling

const Projects = () => {
  const projects = [
    {
      title: 'Project One',
      description: 'Description of Project One. This project involves...',
      github: 'https://github.com/username/project-one',
      deployment: 'https://project-one-deployment-link.com',
    },
    {
      title: 'Project Two',
      description: 'Description of Project Two. This project is about...',
      github: 'https://github.com/username/project-two',
      deployment: 'https://project-two-deployment-link.com',
    },
    {
      title: 'eCommerce Website',
      description: 'An eCommerce website built with React, Node.js, and MongoDB. Features include user authentication, product search, shopping cart, and checkout functionality.',
      github: 'https://github.com/username/ecommerce-website',
      deployment: 'https://ecommerce-website-deployment-link.com',
    },
    {
      title: 'Fitpeo',
      description: 'Fitpeo is a fitness tracking app that helps users monitor their workouts, set goals, and track progress over time. Built with React and Node.js.',
      github: 'https://github.com/shababmallick/Fitpeo',
      deployment: 'https://shababmallick.github.io/Fitpeo/',
    },
    // Add more projects as needed
  ];

  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="project-links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  GitHub Repo
                </a>
              )}
              {project.deployment && (
                <a href={project.deployment} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

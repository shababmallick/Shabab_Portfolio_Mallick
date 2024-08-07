import React from 'react';
import './Blog.css'; // Import the CSS file for styling

const Blog = () => {
  const blogPosts = [
    {
      title: 'Understanding React Hooks',
      description: 'A deep dive into React hooks and how they can be used to manage state and side effects in functional components.',
      link: '/blog/understanding-react-hooks',
    },
    {
      title: 'JavaScript ES6 Features',
      description: 'An overview of the new features introduced in JavaScript ES6 and how they can improve your code.',
      link: '/blog/javascript-es6-features',
    },
    {
      title: 'Building a Full-Stack Application with Node.js',
      description: 'A step-by-step guide to building a full-stack application using Node.js, Express, and MongoDB.',
      link: '/blog/full-stack-application-nodejs',
    },
    // Add more blog posts as needed
  ];

  return (
    <div className="blog">
      <h1>My Blog</h1>
      <div className="blog-list">
        {blogPosts.map((post, index) => (
          <div key={index} className="blog-card">
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <a href={post.link} className="btn">Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

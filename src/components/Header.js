import React from "react";
import {Link} from "react-router-dom";
import "./Header.css"

const Header = () => {
    return(
       <header className="header">
          <div className="logo">
            <Link to="/">My Portfolio</Link>

          </div>
           <nav>
            <ul className="nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Me</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/resume">Resume</Link></li>
            
            </ul>
           </nav>
       
       
       
       </header>


    );

}

export default Header;
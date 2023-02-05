import { Link } from "react-router-dom";
import "./AboutContentStyles.css"

import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am import</h1>
            <p>I am a front-end developer with a passion for creating visually appealing and user-friendly interfaces. My expertise lies in UI and UX design, where I strive to create intuitive and seamless experiences for users. I am well-versed in a variety of front-end technologies including CSS, HTML, React, and JavaScript</p>
            <Link to="/contact" className="btn">Contact</Link>
        
        </div>
    </div>
  );
};

export default AboutContent;
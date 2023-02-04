import "./FooterStyles.css"
import React from 'react'
import {FaHome , FaPhone , FaMailBulk ,FaInstagram, FaTwitter,FaLinkedin, FaGithub} from 'react-icons/fa'
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
    <div className="left">
        <div className="location">
            <FaHome size={20} style={{color:"#EEEEEE", marginRight:"2rem"}}/> 
            <div>
                <p>Srinagar , J&K</p>
                <p>India</p>
            </div>
        </div>
        <div className="phone">
            <h4> <FaPhone size={20} style={{color:"#EEEEEE", marginRight:"2rem"}}/> 
        +91 7780874084</h4>
       
        </div>

        <div className="email">
            <h4> <FaMailBulk size={20} style={{color:"#EEEEEE", marginRight:"2rem"}}/> 
        mirusman21421@gmail.com</h4>
       
        </div>
    </div>
    <div className="right">
        <h4>About Me</h4>
        <p>Front-end Developer specializing in UI/UX design || Skilled in CSS, HTML, React, JavaScript || Passionate about creating user-friendly web apps and staying up to date with the latest design trends </p>
        <div className="social">
        <Link to={'https://www.instagram.com/mirusman_/'}> <FaInstagram size={20} style={{color:"#EEEEEE", marginRight:"2rem"}}/> </Link>
        <Link to={'https://twitter.com/usman21421'}> <FaTwitter size={20} style={{color:"#EEEEEE", marginRight:"2rem"}}/> </Link>
        <Link to={'https://www.linkedin.com/in/mohammad-usman-mir-12270221b/'}> <FaLinkedin size={20} style={{color:"#EEEEEE", marginRight:"2rem"}}/> </Link>
        <Link to={'https://github.com/usman21421'}> <FaGithub size={20} style={{color:"#EEEEEE", marginRight:"2rem"}}/> </Link>
        </div>
    </div>

        </div>
         </div>
  )
}

export default Footer;
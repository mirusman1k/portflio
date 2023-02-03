import "./HeroImgStyles.css"; 
import IntroImg from "../assets/intro.jpg";
import React from 'react'
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
        <img className="intro-img" src={IntroImg} alt="img"/>
        </div>
       <div className="content">
        <p>Hi! My Name Is Usman
        </p>
        <h1>FrontEnd Developer.</h1>
        <div>
            <Link to="/Project" className="btn">Projects</Link>
            <Link to="/Conatct" className=" btn btn-light">Contact</Link>
        </div>
       </div>
       
    </div>
  )
}

export default HeroImg;





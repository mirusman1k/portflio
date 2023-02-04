import React from 'react'
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import HeroImg2 from '../components/HeroImg2';
import PricingCard from '../components/PricingCard';

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2  heading="Projects" text="My Recent Projects"/>
      <PricingCard />
      <Footer />
    </div>
  )
}

export default Project
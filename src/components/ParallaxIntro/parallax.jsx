import React from 'react';
import './parallax.css';
import Navbar from '../NavBar/navbar';

function ParallaxIntro() {
  return (
    <div className="parallax-container">
      <Navbar />
      <div className="parallax-content">
        <h1 className='frontTitle'> Unlocking 
        <span className="highlighted"> Sustainable </span> 
         Futures <br></br> with 
        <span className="highlighted"> Agroforestry</span>
        </h1>
        <p>Microsoft Hackathon 2023</p>
      </div>
    </div>
  );
}

export default ParallaxIntro;

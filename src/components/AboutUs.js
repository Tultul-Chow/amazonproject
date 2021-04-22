import React from 'react'
import img1 from '../images/kadeemSir.jpg'

const AboutUs = () => {
    return (
        <>
        <div className="about-section">
  <h1>All About Amzon</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
</div>

<h2 style={{textAlign:"center"}}>Our Team</h2>
<div className="about-row">
  <div className="about-column">
    <div className="about-card">
      <img src={img1} alt="Jane" style={{width:"100%"}}/>
      <div className="about-container">
        <h2>Tultul Chowdhury</h2>
        <p className="about-title">Web Developer</p>
        <p>Lorem ipsum ipsum lorem.</p>
        <p>tultul@example.com</p>
        <p><button className="about-button">Contact</button></p>
      </div>
    </div>
  </div>

  <div className="about-column">
    <div className="about-card">
      <img src={img1}  alt="Mike" style={{width:"100%"}}/>
      <div className="about-container">
        <h2>Kadeem Best</h2>
        <p className="about-title">My Mentor</p>
        <p>Lorem ipsum ipsum lorem.</p>
        <p>Kadeem@example.com</p>
        <p><button className="about-button">Contact</button></p>
      </div>
    </div>
  </div>
</div>
</>
    )
}

export default AboutUs

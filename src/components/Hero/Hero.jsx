import React from 'react';
import './Hero.css';
import landingBg from '../../assets/landing.png';

const Hero = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${landingBg})` }}>
      <div className="hero-content">
        <h3 className="hero-subtitle">- HIGH PERFORMANCE MINECRAFT SERVERS -</h3>
        <h1 className="hero-title">
          THE ULTIMATE<br/>
          SERVERS FOR MINECRAFT
        </h1>
        <p className="hero-description">
          Launch your Minecraft server instantly with powerful dedicated<br/>
          hardware, low latency, and full mod support.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary">GET STARTED</button>
          <button className="btn btn-secondary">VIEW PLANS</button>
        </div>
      </div>
      <div className="hero-fog-overlay"></div>
    </section>
  );
};

export default Hero;

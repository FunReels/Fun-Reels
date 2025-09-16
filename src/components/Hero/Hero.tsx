import React from 'react';
import SocialLinks from './SocialLinks';

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Fun Reels</h1>
        <div className="hero-description">
          <p>
            Welcome to the wildest corner of the crypto universe where serious investing 
            goes to die and fun comes to party. Fun Reels isn't just another meme coin - 
            it's your ticket to the most entertaining financial rollercoaster ever created.
          </p>
        </div>
        <SocialLinks />
      </div>
    </section>
  );
};

export default Hero;
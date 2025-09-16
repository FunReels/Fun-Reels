import React from 'react';

const About: React.FC = () => {
  return (
    <section className="content-section">
      <div className="section-content">
        <h2 className="section-title">About Fun Reels</h2>
        <div className="about-grid">
          <div className="content-block">
            <p>
              Fun Reels is the ultimate meme coin that brings pure entertainment 
              to the crypto space. We're all about creating hilarious content 
              and building the most fun community in crypto.
            </p>
          </div>
          <div className="content-block">
            <p>
              Every day with Fun Reels is a new adventure filled with memes, 
              laughs, and the kind of energy that makes crypto actually 
              enjoyable instead of stressful.
            </p>
          </div>
          <div className="content-block">
            <p>
              We believe crypto should be fun first and everything else second. 
              That's why Fun Reels exists - to prove that you can have the 
              time of your life in the crypto space.
            </p>
          </div>
          <div className="content-block">
            <p>
              Join our growing community of crypto enthusiasts who choose fun 
              over fear and memes over stress. Fun Reels is where crypto 
              comedy comes to life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
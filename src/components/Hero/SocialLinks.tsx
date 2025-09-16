import React from 'react';

const SocialLinks: React.FC = () => {
  return (
    <div className="social-links">
      <a 
        href="https://x.com/funreels_" 
        target="_blank" 
        rel="noopener noreferrer"
        className="social-link"
      >
        Follow on X
      </a>
      <a 
        href="https://github.com/FunReels/Fun-Reels" 
        target="_blank" 
        rel="noopener noreferrer"
        className="social-link"
      >
        View on GitHub
      </a>
    </div>
  );
};

export default SocialLinks;
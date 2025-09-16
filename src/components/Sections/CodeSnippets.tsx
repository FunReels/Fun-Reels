import React from 'react';

const CodeSnippets: React.FC = () => {
  return (
    <section className="code-section">
      <div className="section-content">
        <h2 className="section-title">Code Previews</h2>
        <div className="code-grid">
          <div className="code-item">
            <div className="code-block">
              <pre><code>{`// Fun Reels Token Contract
contract FunReels {
    string public name = "Fun Reels";
    string public symbol = "FUN";
    
    function laugh() public {
        emit Laughter("HAHA!");
    }
}`}</code></pre>
            </div>
          </div>
          <div className="code-item">
            <div className="code-block">
              <pre><code>{`// Meme Generator
function generateMeme() {
    const memes = [
        "To the moon!",
        "HODL strong!",
        "Fun Reels forever!"
    ];
    return memes[Math.floor(Math.random() * memes.length)];
}`}</code></pre>
            </div>
          </div>
          <div className="code-item">
            <div className="code-block">
              <pre><code>{`// Community Rewards
function distributeRewards() {
    for (let user of community) {
        if (user.isActive) {
            user.balance += funReward;
            user.happiness += 100;
        }
    }
}`}</code></pre>
            </div>
          </div>
          <div className="code-item">
            <div className="code-block">
              <pre><code>{`// Fun Metrics
const funLevel = {
    memes: "Maximum",
    vibes: "Immaculate", 
    energy: "Through the roof",
    community: "Unstoppable"
};

console.log("Fun Reels:", funLevel);`}</code></pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeSnippets;
import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is Fun Reels?",
      answer: "Fun Reels is the ultimate meme coin designed to bring pure entertainment and joy to the crypto space. We're building the most fun and engaging community where memes meet cryptocurrency in the most hilarious way possible."
    },
    {
      question: "How can I get involved with Fun Reels?",
      answer: "Join our amazing community by following us on X and checking out our GitHub! Participate in our meme contests, share your funniest crypto jokes, and become part of the most entertaining project in the crypto universe."
    },
    {
      question: "What makes Fun Reels different from other meme coins?",
      answer: "While other projects focus on serious investing, Fun Reels is all about making crypto genuinely entertaining. We prioritize community fun, creative content, and building something that brings joy to everyone involved."
    },
    {
      question: "Is Fun Reels safe to invest in?",
      answer: "Fun Reels is designed for entertainment first! As with any crypto project, please only invest what you can afford to lose and always do your own research. Our focus is on creating the most fun experience in crypto."
    },
    {
      question: "What are the future plans for Fun Reels?",
      answer: "We're constantly developing new ways to make crypto more entertaining! Expect regular community events, meme competitions, exciting partnerships, and innovative features that keep the Fun Reels experience fresh and hilarious."
    }
  ];

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="content-section">
      <div className="section-content">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div 
                className="faq-question"
                onClick={() => toggleExpand(index)}
              >
                <h3>{faq.question}</h3>
                <span className={`faq-toggle ${expandedIndex === index ? 'expanded' : ''}`}>
                  {expandedIndex === index ? '−' : '+'}
                </span>
              </div>
              <div className={`faq-answer ${expandedIndex === index ? 'expanded' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
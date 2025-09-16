import React from 'react';
import Hero from '../Hero/Hero';
import About from '../Sections/About';
import Community from '../Sections/Community';
import Features from '../Sections/Features';
import CodeSnippets from '../Sections/CodeSnippets';
import FAQ from '../Sections/FAQ';
import DevMessage from '../Sections/DevMessage';
import JoinTheFun from '../Sections/JoinTheFun';

const Layout: React.FC = () => {
  return (
    <div className="app-container">
      <Hero />
      <About />
      <Community />
      <Features />
      <CodeSnippets />
      <FAQ />
      <JoinTheFun />
      <DevMessage />
    </div>
  );
};

export default Layout;
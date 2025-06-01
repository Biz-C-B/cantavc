import React from 'react';
import { Hero } from '../components/home/Hero';
import { AboutSection } from '../components/home/AboutSection';
import { HowItWorks } from '../components/home/HowItWorks';
import { InvestmentFocus } from '../components/home/InvestmentFocus';
import { Team } from '../components/home/Team';
import { Contact } from '../components/home/Contact';

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <InvestmentFocus />
      <Team />
      <HowItWorks />   
      <Contact />
    </div>
  );
};

export default Home;
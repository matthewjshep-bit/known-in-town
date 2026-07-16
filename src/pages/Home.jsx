import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import System from '../components/System';
import Stats from '../components/Stats';
import WhyUs from '../components/WhyUs';
import WhoWeServe from '../components/WhoWeServe';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <System />
      <Stats />
      <WhyUs />
      <WhoWeServe />
      <CTA />
    </main>
  );
}

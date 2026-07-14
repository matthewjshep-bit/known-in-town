import React from 'react';
import Portfolio from '../components/Portfolio';
import './Portfolio.css';

export default function PortfolioPage() {
  return (
    <div className="portfolio-page">
      <div className="portfolio-hero">
        <div className="container">
          <h1 className="portfolio-hero__title animate-fade-in-up">
            Our <span className="text-gradient">work.</span>
          </h1>
          <p className="portfolio-hero__subtitle animate-fade-in-up delay-100">
            Real projects, real results. See what we've built for businesses like yours.
          </p>
        </div>
      </div>

      <Portfolio />
    </div>
  );
}

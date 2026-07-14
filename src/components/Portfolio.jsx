import React from 'react';
import { ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Portfolio.css';

const projects = [
  {
    name: 'Shepherd Mortgage',
    url: 'https://www.shepmo.com',
    logo: '/portfolio/shepmo-logo.png',
    screenshot: '/portfolio/shepmo-screenshot.png',
    description: 'A modern, conversion-focused website for a mortgage lending company — built to establish trust, capture leads, and simplify the loan process.',
    tags: ['Website Design', 'Lead Generation', 'Financial Services'],
  },
];

export default function Portfolio() {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Work that speaks for itself.</h2>
          <p className="section-subtitle">
            Real results for real businesses. Here's what we've built.
          </p>
        </div>

        <div className="portfolio__grid" ref={ref}>
          {projects.map((project, index) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`portfolio__card glass-card ${isVisible ? 'is-visible' : ''}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="portfolio__preview">
                <img
                  src={project.screenshot}
                  alt={`${project.name} website preview`}
                  className="portfolio__screenshot"
                  loading="lazy"
                />
                <div className="portfolio__overlay">
                  <span className="portfolio__visit">
                    Visit Site <ExternalLink size={16} />
                  </span>
                </div>
              </div>

              <div className="portfolio__info">
                <div className="portfolio__brand">
                  <img
                    src={project.logo}
                    alt={`${project.name} logo`}
                    className="portfolio__logo"
                    loading="lazy"
                  />
                  <h3 className="portfolio__name">{project.name}</h3>
                </div>
                <p className="portfolio__desc">{project.description}</p>
                <div className="portfolio__tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="portfolio__tag">{tag}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

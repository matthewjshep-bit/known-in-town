import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { solutions } from '../data/solutions';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Solutions.css';

export default function Solutions() {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <div className="solutions-page">
      <div className="solutions-hero">
        <div className="container">
          <h1 className="solutions-hero__title animate-fade-in-up">
            Deep dive into our <span className="text-gradient">growth tools.</span>
          </h1>
          <p className="solutions-hero__subtitle animate-fade-in-up delay-100">
            Everything you need to dominate your local market, broken down in detail.
          </p>
        </div>
      </div>

      <div className="container" ref={ref}>
        <div className="solutions-list">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <Link
                key={solution.slug}
                to={`/solutions/${solution.slug}`}
                className={`solution-detail glass-card ${solution.featured ? 'solution-detail--featured' : ''} ${isVisible ? 'is-visible' : ''}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="solution-detail__header">
                  <div className="solution-detail__icon-wrap">
                    <Icon size={32} className="solution-detail__icon" />
                  </div>
                  <div>
                    <h2 className="solution-detail__title">{solution.title}</h2>
                    <span className="solution-detail__subtitle">{solution.subtitle}</span>
                  </div>
                </div>

                <p className="solution-detail__desc">
                  {solution.summary}
                </p>

                <div className="solution-detail__features">
                  <h3 className="solution-detail__features-title">What's Included:</h3>
                  <ul className="solution-detail__list">
                    {solution.highlights.map((feature, i) => (
                      <li key={i} className="solution-detail__list-item">
                        <CheckCircle2 size={18} className="solution-detail__check" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="solution-detail__actions">
                  <span className="btn-secondary solution-detail__link">
                    Learn More
                    <ArrowRight size={18} />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

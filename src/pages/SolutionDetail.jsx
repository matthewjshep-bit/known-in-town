import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, Phone } from 'lucide-react';
import { solutions } from '../data/solutions';
import { usePageMeta } from '../hooks/usePageMeta';
import { useFormModal } from '../context/FormModalContext';
import CTA from '../components/CTA';
import './SolutionDetail.css';

export default function SolutionDetail() {
  const { slug } = useParams();
  const { openForm } = useFormModal();

  const solution = solutions.find((s) => s.slug === slug);

  usePageMeta(solution?.title, solution?.cardDescription);

  if (!solution) {
    return <Navigate to="/solutions" replace />;
  }

  const Icon = solution.icon;
  const otherSolutions = solutions.filter((s) => s.slug !== slug);

  return (
    <div className="solution-page">
      {/* Hero */}
      <div className="solution-page__hero">
        <div className="container">
          <Link to="/solutions" className="solution-page__back animate-fade-in-up">
            <ArrowLeft size={16} />
            All Solutions
          </Link>
          <div className="solution-page__hero-icon animate-fade-in-up">
            <Icon size={36} />
          </div>
          <h1 className="solution-page__title animate-fade-in-up delay-100">
            {solution.title}
          </h1>
          <p className="solution-page__subtitle animate-fade-in-up delay-200">
            {solution.subtitle}
          </p>
          <p className="solution-page__intro animate-fade-in-up delay-300">
            {solution.heroIntro}
          </p>
          <div className="solution-page__hero-actions animate-fade-in-up delay-400">
            <button type="button" className="btn-primary" onClick={openForm}>
              Chat with Us
            </button>
            <a href="tel:+14256202863" className="btn-secondary">
              <Phone size={18} />
              +1 425-620-2863
            </a>
          </div>
        </div>
      </div>

      {/* The Problem */}
      <section className="solution-page__section">
        <div className="container container--narrow">
          <span className="section-label">The Problem</span>
          <h2 className="solution-page__section-title">{solution.problem.title}</h2>
          {solution.problem.paragraphs.map((para, i) => (
            <p key={i} className="solution-page__text">{para}</p>
          ))}
        </div>
      </section>

      {/* What You Get */}
      <section className="solution-page__section solution-page__section--alt">
        <div className="container">
          <div className="section-header">
            <span className="section-label">The Solution</span>
            <h2 className="section-title">What you get.</h2>
          </div>
          <div className="solution-page__groups">
            {solution.featureGroups.map((group) => (
              <div key={group.title} className="solution-page__group glass-card">
                <h3 className="solution-page__group-title">{group.title}</h3>
                {group.description && (
                  <p className="solution-page__group-desc">{group.description}</p>
                )}
                <ul className="solution-page__group-list">
                  {group.features.map((feature, i) => (
                    <li key={i} className="solution-page__group-item">
                      <CheckCircle2 size={18} className="solution-page__check" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="solution-page__section">
        <div className="container container--narrow">
          <div className="section-header">
            <span className="section-label">How It Works</span>
            <h2 className="section-title">{solution.stepsTitle || 'Up and running in days, not months.'}</h2>
          </div>
          <div className="solution-page__steps">
            {solution.steps.map((step, i) => (
              <div key={step.title} className="solution-page__step">
                <div className="solution-page__step-number">{i + 1}</div>
                <div>
                  <h3 className="solution-page__step-title">{step.title}</h3>
                  <p className="solution-page__step-desc">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore More */}
      <section className="solution-page__section solution-page__section--alt">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Keep Exploring</span>
            <h2 className="section-title">More ways to grow.</h2>
          </div>
          <div className="solution-page__more">
            {otherSolutions.map((other) => {
              const OtherIcon = other.icon;
              return (
                <Link
                  key={other.slug}
                  to={`/solutions/${other.slug}`}
                  className="solution-page__more-card glass-card"
                >
                  <div className="solution-page__more-icon">
                    <OtherIcon size={22} />
                  </div>
                  <div className="solution-page__more-body">
                    <h3 className="solution-page__more-title">{other.title}</h3>
                    <p className="solution-page__more-sub">{other.subtitle}</p>
                  </div>
                  <ArrowRight size={18} className="solution-page__more-arrow" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}

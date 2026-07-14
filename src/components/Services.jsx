import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { solutions } from '../data/solutions';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useFormModal } from '../context/FormModalContext';
import './Services.css';

export default function Services() {
  const { openForm } = useFormModal();

  return (
    <section id="how-it-works" className="services">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Solutions</span>
          <h2 className="section-title">Powerful tools to grow your business.</h2>
          <p className="section-subtitle">
            Choose the solutions that fit your business needs, or let us handle it all.
          </p>
        </div>

        <div className="services__grid">
          {solutions.map((solution, index) => (
            <ServiceCard key={solution.slug} solution={solution} index={index} />
          ))}
        </div>

        <div className="services__actions animate-fade-in-up delay-300" style={{ textAlign: 'center', marginTop: '4rem' }}>
          <button type="button" className="btn-primary" onClick={openForm}>
            Try it Out
          </button>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ solution, index }) {
  const [ref, isVisible] = useScrollAnimation(0.15);
  const Icon = solution.icon;

  return (
    <Link
      to={`/solutions/${solution.slug}`}
      ref={ref}
      className={`services__card glass-card ${solution.featured ? 'services__card--featured' : ''} scroll-reveal scroll-reveal-delay-${(index % 4) + 1} ${
        isVisible ? 'is-visible' : ''
      }`}
    >
      <div className="services__icon-wrap">
        <div className="services__icon-bg" />
        <Icon size={28} className="services__icon" />
      </div>
      <div className="services__card-body">
        <h3 className="services__card-title">{solution.title}</h3>
        <p className="services__card-desc">{solution.cardDescription}</p>
        <span className="services__card-more">
          Learn more <ArrowRight size={15} />
        </span>
      </div>
    </Link>
  );
}

import { Star, ArrowRight } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      {/* Animated gradient blobs */}
      <div className="hero__blobs" aria-hidden="true">
        <div className="hero__blob hero__blob--blue-1" />
        <div className="hero__blob hero__blob--blue-2" />
        <div className="hero__blob hero__blob--orange-1" />
        <div className="hero__blob hero__blob--orange-2" />
      </div>

      {/* Dot grid overlay */}
      <div className="hero__dots" aria-hidden="true" />

      <div className="hero__content container">
        <h1 className="hero__title animate-fade-in-up delay-100">
          Become the most <span className="text-gradient">known and trusted</span> pro in your town.
        </h1>

        <p className="hero__subtitle animate-fade-in-up delay-200">
          We help local home service businesses get more 5-star reviews, capture every lead 24/7, and turn past customers into repeat jobs.
        </p>

        <div className="hero__actions animate-fade-in-up delay-300">
          <a href="#contact" className="btn-primary hero__btn-primary">
            Get Known Today
          </a>
          <a href="#how-it-works" className="btn-secondary hero__btn-secondary">
            See How It Works
            <ArrowRight size={18} />
          </a>
        </div>

        <div className="hero__stats animate-fade-in-up delay-500">
          <div className="hero__stat">
            <span className="hero__stat-number">8.2K+</span>
            <span className="hero__stat-label">Customer Messages Sent</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-number">24/7</span>
            <span className="hero__stat-label">Lead Coverage</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-number">Auto</span>
            <span className="hero__stat-label">Review Requests</span>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="hero__fade" aria-hidden="true" />
    </section>
  );
}

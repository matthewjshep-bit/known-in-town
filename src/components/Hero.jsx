import { Phone } from 'lucide-react';
import { useFormModal } from '../context/FormModalContext';
import './Hero.css';

export default function Hero() {
  const { openForm } = useFormModal();

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
          <span className="text-gradient">Known In Town</span> makes you the most known and trusted pro in your area.
        </h1>

        <p className="hero__subtitle animate-fade-in-up delay-200">
          The local marketing platform for home service businesses—plumbers, roofers, HVAC, and electricians—that gets you more 5-star reviews, captures every lead 24/7, and turns past customers into repeat jobs.
        </p>

        <div className="hero__actions animate-fade-in-up delay-300">
          <button type="button" className="btn-primary hero__btn-primary" onClick={openForm}>
            Chat with Us
          </button>
          <a href="tel:+14256202863" className="btn-secondary hero__btn-secondary">
            <Phone size={18} />
            +1 425-620-2863
          </a>
        </div>

        <p className="hero__offer-note animate-fade-in-up delay-400">
          We build your new website <strong>before you pay a dollar</strong>—see it finished, then decide.
        </p>

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

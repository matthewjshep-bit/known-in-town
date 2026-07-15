import { Phone } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useFormModal } from '../context/FormModalContext';
import './CTA.css';

export default function CTA() {
  const [ref, isVisible] = useScrollAnimation(0.2);
  const { openForm } = useFormModal();

  return (
    <section id="contact" className="cta" ref={ref}>
      {/* Animated gradient background */}
      <div className="cta__bg" aria-hidden="true" />

      {/* Floating decorative shapes */}
      <div className="cta__shapes" aria-hidden="true">
        <div className="cta__shape cta__shape--1" />
        <div className="cta__shape cta__shape--2" />
        <div className="cta__shape cta__shape--3" />
        <div className="cta__shape cta__shape--4" />
      </div>

      <div className={`cta__content container ${isVisible ? 'is-visible' : ''}`}>
        <h2 className="cta__title">
          Ready to become the most known name in your town?
        </h2>
        <p className="cta__subtitle">
          You do the work. We make sure the whole town knows about it.
        </p>
        <div className="cta__actions">
          <button type="button" className="btn-primary cta__button" onClick={openForm}>
            Chat with Us
          </button>
          <a href="tel:+14256202863" className="btn-secondary cta__phone">
            <Phone size={20} />
            +1 425-620-2863
          </a>
        </div>
        <p className="cta__note">
          No contracts. No setup fees. Results in 30 days.
        </p>
      </div>
    </section>
  );
}

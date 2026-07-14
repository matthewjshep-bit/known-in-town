import React from 'react';
import { Star, MessageSquare, RefreshCcw, Globe } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useFormModal } from '../context/FormModalContext';
import './Services.css';

const services = [
  {
    icon: Globe,
    title: 'AI Website Design',
    description: 'Stunning, modern websites designed by AI—built to convert visitors into paying customers and dominate local search.',
    featured: true,
  },
  {
    icon: Star,
    title: 'Reputation Engine',
    description: 'Automate your review requests and build a 5-star reputation on Google without lifting a finger.',
  },
  {
    icon: MessageSquare,
    title: '24/7 Lead Capture',
    description: 'Never miss another job. Our AI-powered system answers calls, texts, and web inquiries instantly, booking leads around the clock.',
  },
  {
    icon: RefreshCcw,
    title: 'Customer Reactivation',
    description: 'Turn past customers into repeat business with automated seasonal reminders and personalized maintenance offers.',
  },
];

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
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
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

function ServiceCard({ service, index }) {
  const [ref, isVisible] = useScrollAnimation(0.15);
  const Icon = service.icon;

  return (
    <div
      ref={ref}
      className={`services__card glass-card ${service.featured ? 'services__card--featured' : ''} scroll-reveal scroll-reveal-delay-${index + 1} ${
        isVisible ? 'is-visible' : ''
      }`}
    >
      <div className="services__icon-wrap">
        <div className="services__icon-bg" />
        <Icon size={28} className="services__icon" />
      </div>
      <h3 className="services__card-title">{service.title}</h3>
      <p className="services__card-desc">{service.description}</p>
    </div>
  );
}

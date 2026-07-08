import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Stats.css';

const stats = [
  { value: '8.2K+', label: 'Customer Messages Sent' },
  { value: '24/7', label: 'Lead Coverage' },
  { value: '3x', label: 'More Repeat Business' },
  { value: 'Auto', label: 'Review Requests' },
];

export default function Stats() {
  const [ref, isVisible] = useScrollAnimation(0.2);

  return (
    <section className="stats" ref={ref}>
      <div className="stats__bg" aria-hidden="true" />
      <div className={`stats__inner container ${isVisible ? 'is-visible' : ''}`}>
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className="stats__item"
            style={{ transitionDelay: `${index * 120}ms` }}
          >
            <span className="stats__value text-gradient">{stat.value}</span>
            <span className="stats__label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

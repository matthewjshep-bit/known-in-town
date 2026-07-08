import { Zap, Shield, TrendingUp, Heart } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './WhyUs.css';

const benefits = [
  {
    icon: Zap,
    title: 'Set It & Forget It',
    description:
      'Everything runs automatically after setup. No apps to learn, no dashboards to check.',
  },
  {
    icon: Shield,
    title: 'Built for Trades',
    description:
      'We speak contractor, not corporate. Our systems are designed for plumbers, roofers, HVAC, and more.',
  },
  {
    icon: TrendingUp,
    title: 'Real Results',
    description:
      'Track your reviews, leads, and revenue growth with transparent monthly reports.',
  },
  {
    icon: Heart,
    title: 'No Contracts',
    description:
      'Month-to-month because we earn your business every single month.',
  },
];

export default function WhyUs() {
  const [sectionRef, sectionVisible] = useScrollAnimation(0.1);

  return (
    <section id="why-us" className="whyus" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">The Difference</span>
          <h2 className="section-title">Why local pros choose us</h2>
          <p className="section-subtitle">
            We&apos;re not a generic marketing agency. We&apos;re specialists built
            exclusively for home service businesses.
          </p>
        </div>

        <div className="whyus__layout">
          <div className="whyus__benefits">
            {benefits.map((benefit, index) => (
              <BenefitItem
                key={benefit.title}
                benefit={benefit}
                index={index}
                parentVisible={sectionVisible}
              />
            ))}
          </div>

          <div className={`whyus__visual ${sectionVisible ? 'is-visible' : ''}`}>
            <div className="whyus__glow-ring" aria-hidden="true" />
            <div className="whyus__glow-ring whyus__glow-ring--2" aria-hidden="true" />
            <div className="whyus__logo-wrap">
              <img
                src="/logo.png"
                alt="Known In Town"
                className="whyus__logo-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BenefitItem({ benefit, index, parentVisible }) {
  const Icon = benefit.icon;

  return (
    <div
      className={`whyus__item ${parentVisible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="whyus__item-icon">
        <Icon size={22} />
      </div>
      <div className="whyus__item-content">
        <h3 className="whyus__item-title">{benefit.title}</h3>
        <p className="whyus__item-desc">{benefit.description}</p>
      </div>
    </div>
  );
}

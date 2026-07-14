import React from 'react';
import { Star, MessageSquare, RefreshCcw, CheckCircle2, Globe } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Solutions.css';

const detailedSolutions = [
  {
    icon: Globe,
    title: 'AI Website Design',
    subtitle: 'Handcrafted Sites, Powered by AI',
    featured: true,
    features: [
      'Custom AI-designed websites tailored to your trade and local market.',
      'Mobile-first, lightning-fast pages optimized for Google search rankings.',
      'Built-in lead capture forms, click-to-call buttons, and booking integrations.',
      'AI-generated copy that speaks directly to your ideal customer.',
      'Ongoing design updates and A/B testing powered by performance data.'
    ],
    description: 'Your website is your digital storefront—and most contractor sites look like they were built in 2012. We handcraft modern, high-converting websites enhanced with AI intelligence—so every page is strategically built to turn visitors into customers and keep you at the top of Google.'
  },
  {
    icon: Star,
    title: 'Reputation Engine',
    subtitle: 'Automated 5-Star Reviews',
    features: [
      'Automated text & email review requests sent immediately after job completion.',
      'Direct links to your Google Business Profile for one-tap reviews.',
      'Internal feedback loops to catch unhappy customers before they leave public reviews.',
      'Customizable messaging to match your brand voice.',
      'Monthly reporting on review growth and average rating.'
    ],
    description: 'Stop hoping for reviews and start generating them systematically. Our Reputation Engine connects to your CRM or scheduling software to automatically ask happy customers for reviews at the exact moment they are most likely to say yes.'
  },
  {
    icon: MessageSquare,
    title: '24/7 Lead Capture',
    subtitle: 'Never Miss a Lead Again',
    features: [
      'AI-powered SMS auto-responder answers inquiries instantly.',
      'Web chat widget that captures phone numbers and books appointments.',
      'After-hours call routing and automated text follow-ups.',
      'Qualification questions asked automatically to filter out bad leads.',
      'Instant notifications sent to your team when a high-value lead comes in.'
    ],
    description: "When a homeowner needs help, they call down the Google list until someone answers. Our 24/7 Lead Capture system ensures you're always the first to respond, even if you're on a roof, under a sink, or asleep."
  },
  {
    icon: RefreshCcw,
    title: 'Customer Reactivation',
    subtitle: 'Turn Past Jobs into Future Revenue',
    features: [
      'Automated seasonal maintenance reminders (Spring AC checks, Fall furnace tune-ups).',
      'Personalized "anniversary" messages for past installations.',
      'Dormant customer re-engagement campaigns via text and email.',
      'Referral request campaigns with built-in incentives.',
      'List segmentation to send the right offer to the right customer.'
    ],
    description: "Your list of past customers is a goldmine. We set up automated systems to stay top-of-mind with people who already trust you, turning one-off jobs into lifelong customers and a steady stream of referrals."
  }
];

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
          {detailedSolutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div 
                key={solution.title} 
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
                  {solution.description}
                </p>

                <div className="solution-detail__features">
                  <h3 className="solution-detail__features-title">What's Included:</h3>
                  <ul className="solution-detail__list">
                    {solution.features.map((feature, i) => (
                      <li key={i} className="solution-detail__list-item">
                        <CheckCircle2 size={18} className="solution-detail__check" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

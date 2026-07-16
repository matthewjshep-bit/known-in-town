import { Link } from 'react-router-dom';
import { Globe, Smartphone, Zap, TrendingUp, Star, MessageSquare, RefreshCcw, ArrowRight, PhoneMissed, Clock, FileQuestion } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './System.css';

const leaks = [
  { icon: Clock, text: 'Leads that wait hours for a reply' },
  { icon: PhoneMissed, text: 'Missed calls that never get a text back' },
  { icon: Star, text: 'Finished jobs that never become reviews' },
  { icon: FileQuestion, text: 'Old estimates nobody ever re-contacts' },
];

const layers = [
  {
    icon: Globe,
    number: '01',
    title: 'Your Website',
    description:
      'A professional, mobile-first site—and we build it before you spend a dollar, so you see the finished product before you ever commit.',
    link: '/solutions/ai-website-design',
  },
  {
    icon: Smartphone,
    number: '02',
    title: 'Your App',
    description:
      'One inbox for every lead channel, a push alert the second a new lead comes in, and one-tap review requests right from the job site.',
    link: '/solutions/communications-app',
  },
  {
    icon: Zap,
    number: '03',
    title: 'The Engine',
    description:
      'Missed-call text-back, automatic lead follow-up, and the 5-star review funnel—running 24/7 in the background while you work.',
    link: '/solutions/lead-capture',
  },
  {
    icon: TrendingUp,
    number: '04',
    title: 'Room to Grow',
    description:
      'Campaigns that revive old estimate lists, personalized photo offers sent by text, and an AI assistant that answers every call.',
    link: '/solutions/customer-reactivation',
  },
];

const orbitNodes = [
  { icon: Globe, label: 'Website', className: 'system__node--1' },
  { icon: Star, label: 'Reviews', className: 'system__node--2' },
  { icon: MessageSquare, label: 'Lead Capture', className: 'system__node--3' },
  { icon: RefreshCcw, label: 'Reactivation', className: 'system__node--4' },
];

export default function System() {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section id="the-system" className="system" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">One System</span>
          <h2 className="section-title">
            You don&apos;t have a marketing problem.{' '}
            <span className="text-gradient">You have a follow-up problem.</span>
          </h2>
          <p className="section-subtitle">
            Agencies quote thousands a month for results you can&apos;t verify. Web shops
            sell $3,000 sites that just sit there. Meanwhile, local jobs go to whoever
            responds first and has the most reviews. We fix the leaks that actually cost you work:
          </p>
        </div>

        <div className={`system__leaks ${isVisible ? 'is-visible' : ''}`}>
          {leaks.map((leak, index) => {
            const Icon = leak.icon;
            return (
              <div
                key={leak.text}
                className="system__leak"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Icon size={18} className="system__leak-icon" />
                <span>{leak.text}</span>
              </div>
            );
          })}
        </div>

        <div className="system__layout">
          <div className={`system__layers ${isVisible ? 'is-visible' : ''}`}>
            {layers.map((layer, index) => {
              const Icon = layer.icon;
              return (
                <Link
                  key={layer.title}
                  to={layer.link}
                  className="system__layer"
                  style={{ transitionDelay: `${200 + index * 120}ms` }}
                >
                  <span className="system__layer-number">{layer.number}</span>
                  <div className="system__layer-icon">
                    <Icon size={22} />
                  </div>
                  <div className="system__layer-content">
                    <h3 className="system__layer-title">{layer.title}</h3>
                    <p className="system__layer-desc">{layer.description}</p>
                  </div>
                  <ArrowRight size={18} className="system__layer-arrow" />
                </Link>
              );
            })}
          </div>

          <div className={`system__visual ${isVisible ? 'is-visible' : ''}`} aria-hidden="true">
            <div className="system__orbit system__orbit--outer" />
            <div className="system__orbit system__orbit--inner" />

            <div className="system__phone">
              <div className="system__phone-notch" />
              <div className="system__phone-screen">
                <div className="system__phone-time">9:41</div>
                <div className="system__notification system__notification--lead">
                  <span className="system__notification-dot" />
                  <div>
                    <span className="system__notification-title">New Lead</span>
                    <span className="system__notification-body">
                      &ldquo;Need a quote for a roof repair&rdquo;
                    </span>
                  </div>
                </div>
                <div className="system__notification system__notification--review">
                  <span className="system__notification-stars">★★★★★</span>
                  <div>
                    <span className="system__notification-title">New Google Review</span>
                    <span className="system__notification-body">
                      &ldquo;Fast, honest, and professional!&rdquo;
                    </span>
                  </div>
                </div>
                <div className="system__notification system__notification--booked">
                  <span className="system__notification-check">✓</span>
                  <div>
                    <span className="system__notification-title">Job Booked</span>
                    <span className="system__notification-body">Tue 10:00 AM — Water heater install</span>
                  </div>
                </div>
              </div>
            </div>

            {orbitNodes.map((node) => {
              const Icon = node.icon;
              return (
                <div key={node.label} className={`system__node ${node.className}`}>
                  <div className="system__node-icon">
                    <Icon size={20} />
                  </div>
                  <span className="system__node-label">{node.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className={`system__footer ${isVisible ? 'is-visible' : ''}`}>
          <p className="system__footer-text">
            Your website brings them in. Your app keeps you on top of them. The engine
            never lets one slip. And it all shows up as one thing: <strong>more booked jobs</strong>.
          </p>
          <Link to="/solutions" className="system__footer-link">
            See how each piece works
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

import { 
  Droplet, 
  Home, 
  Wind, 
  Zap, 
  Leaf, 
  Paintbrush, 
  Bug, 
  Sparkles, 
  Wrench, 
  Waves, 
  Key, 
  Hammer, 
  Truck, 
  ShieldCheck 
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './WhoWeServe.css';

const industries = [
  { name: 'Plumbers', icon: Droplet },
  { name: 'Roofers', icon: Home },
  { name: 'HVAC Pros', icon: Wind },
  { name: 'Electricians', icon: Zap },
  { name: 'Landscapers', icon: Leaf },
  { name: 'Painters', icon: Paintbrush },
  { name: 'Pest Control', icon: Bug },
  { name: 'Cleaners', icon: Sparkles },
  { name: 'Garage Doors', icon: Wrench },
  { name: 'Pool Services', icon: Waves },
  { name: 'Locksmiths', icon: Key },
  { name: 'Handymen', icon: Hammer },
  { name: 'Movers', icon: Truck },
  { name: 'Restoration', icon: ShieldCheck },
];

export default function WhoWeServe() {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section id="who-we-serve" className="serve" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">Who We Serve</span>
          <h2 className="section-title">Built for home service pros.</h2>
          <p className="section-subtitle">
            Our systems are dialed in for local contractors and home service businesses. 
            If you work in a local market, we can help you dominate it.
          </p>
        </div>

        <div className={`serve__grid ${isVisible ? 'is-visible' : ''}`}>
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div 
                key={industry.name} 
                className="serve__item glass-card"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="serve__icon-wrap">
                  <Icon size={24} className="serve__icon" />
                </div>
                <span className="serve__name">{industry.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

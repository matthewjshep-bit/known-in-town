import { Star } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Testimonials.css';

const testimonials = [
  {
    quote:
      'Since working with Known In Town, our Google reviews went from 12 to over 80. We\'re now the top-rated plumber in our area.',
    name: 'Mike R.',
    role: 'Plumbing Company',
  },
  {
    quote:
      "We used to miss calls all the time on the job. Now every single lead gets answered. We've picked up at least 15 new jobs this month alone.",
    name: 'Sarah T.',
    role: 'Roofing Contractor',
  },
  {
    quote:
      "They reactivated customers I hadn't heard from in 2 years. Three of them turned into $5,000+ jobs.",
    name: 'James K.',
    role: 'HVAC Pro',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">What our clients say</h2>
          <p className="section-subtitle">
            Real results from real contractors who trusted us with their growth.
          </p>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial, index }) {
  const [ref, isVisible] = useScrollAnimation(0.15);

  return (
    <div
      ref={ref}
      className={`testimonials__card glass-card scroll-reveal scroll-reveal-delay-${index + 1} ${
        isVisible ? 'is-visible' : ''
      }`}
    >
      <div className="testimonials__quote-mark" aria-hidden="true">
        &ldquo;
      </div>

      <div className="testimonials__stars">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            fill="var(--color-orange)"
            color="var(--color-orange)"
            className="testimonials__star"
          />
        ))}
      </div>

      <blockquote className="testimonials__quote">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      <div className="testimonials__author">
        <div className="testimonials__avatar">
          {testimonial.name.charAt(0)}
        </div>
        <div className="testimonials__author-info">
          <span className="testimonials__name">{testimonial.name}</span>
          <span className="testimonials__role">{testimonial.role}</span>
        </div>
      </div>
    </div>
  );
}

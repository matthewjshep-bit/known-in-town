import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const quickLinks = [
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Who We Serve', href: '/#who-we-serve' },
  { label: 'Why Us', href: '/#why-us' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Get Started', href: '/#contact' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Brand Column */}
          <div className="footer__brand">
            <a href="#" className="footer__logo" aria-label="Known In Town Home">
              <img src="/logo.png" alt="Known In Town" className="footer__logo-img" />
            </a>
            <p className="footer__tagline">
              Making local home service pros the most known name in their town.
              More reviews. More leads. More repeat business.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer__col">
            <h4 className="footer__col-title">Quick Links</h4>
            <ul className="footer__links">
              {quickLinks.map((link) => {
                if (link.href.startsWith('/#')) {
                  return (
                    <li key={link.label}>
                      <a href={link.href} className="footer__link">
                        {link.label}
                      </a>
                    </li>
                  );
                }
                return (
                  <li key={link.label}>
                    <Link to={link.href} className="footer__link">
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h4 className="footer__col-title">Contact</h4>
            <ul className="footer__contact">
              <li className="footer__contact-item">
                <Mail size={16} className="footer__contact-icon" />
                <a href="mailto:hello@knownintown.com" className="footer__link">
                  hello@knownintown.com
                </a>
              </li>
              <li className="footer__contact-item">
                <Phone size={16} className="footer__contact-icon" />
                <a href="tel:+18005551234" className="footer__link">
                  (800) 555-1234
                </a>
              </li>
              <li className="footer__contact-item">
                <MapPin size={16} className="footer__contact-icon" />
                <span className="footer__contact-text">Serving pros nationwide</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; 2025 Known In Town. All rights reserved.
          </p>
          <p className="footer__love">
            Built with <span className="footer__heart">&hearts;</span> for local pros
          </p>
        </div>
      </div>
    </footer>
  );
}

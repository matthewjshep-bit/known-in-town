import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const navLinks = [
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Who We Serve', href: '/#who-we-serve' },
  { label: 'Why Us', href: '/#why-us' },
  { label: 'Solutions', href: '/solutions' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <Link to="/" className="navbar__logo">
          <img src="/logo.png" alt="Known In Town" className="navbar__logo-img" />
        </Link>

        <div className="navbar__links">
          {navLinks.map((link) => {
            if (link.href.startsWith('/#')) {
              return (
                <a key={link.label} href={link.href} className="navbar__link">
                  <span className="navbar__link-text">{link.label}</span>
                  <span className="navbar__link-underline" />
                </a>
              );
            }
            return (
              <Link key={link.label} to={link.href} className="navbar__link">
                <span className="navbar__link-text">{link.label}</span>
                <span className="navbar__link-underline" />
              </Link>
            );
          })}
        </div>

        <a href="/#contact" className="navbar__cta btn-primary">
          Get Started
        </a>

        <button
          className="navbar__hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <div className={`navbar__mobile ${mobileOpen ? 'navbar__mobile--open' : ''}`}>
        <div className="navbar__mobile-inner">
          {navLinks.map((link) => {
            if (link.href.startsWith('/#')) {
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="navbar__mobile-link"
                  onClick={handleLinkClick}
                >
                  {link.label}
                </a>
              );
            }
            return (
              <Link
                key={link.label}
                to={link.href}
                className="navbar__mobile-link"
                onClick={handleLinkClick}
              >
                {link.label}
              </Link>
            );
          })}
          <a href="/#contact" className="navbar__mobile-cta btn-primary" onClick={handleLinkClick}>
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}

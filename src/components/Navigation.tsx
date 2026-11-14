import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { MonogramLogo } from './MonogramLogo';
import { weddingConfig } from '../config/weddingConfig';

export const Navigation: React.FC = () => {
  const { isHindi, toggleLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#hero-section', labelEn: 'Home', labelHi: 'होम' },
    { href: '#traditional-invitation', labelEn: 'Invitation', labelHi: 'निमंत्रण' },
    { href: '#events-section', labelEn: 'Events', labelHi: 'कार्यक्रम' },
    { href: '#family-section', labelEn: 'Family', labelHi: 'परिवार' },
    { href: '#venue-section', labelEn: 'Venue', labelHi: 'स्थल' },
    { href: '#rsvp-section', labelEn: 'RSVP', labelHi: 'स्वीकृति' },
    { href: '#contact-section', labelEn: 'Contact', labelHi: 'संपर्क' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-ivory/95 backdrop-blur-md shadow-subtle border-b border-gold/20 py-2.5'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand / Monogram */}
        <a
          href="#hero-section"
          className="flex items-center gap-2 group"
          aria-label={weddingConfig.couple.title}
        >
          <MonogramLogo size="sm" theme="gold" className="transition-transform group-hover:scale-105" />
          <span className="font-display text-lg sm:text-xl font-normal text-espresso tracking-wide hidden min-[420px]:inline">
            {isHindi ? weddingConfig.couple.titleHi : weddingConfig.couple.title}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.href);
              }}
              className="text-xs lg:text-sm font-sans uppercase tracking-widest text-espresso/80 hover:text-gold-dark transition-colors duration-200"
            >
              {t(link.labelEn, link.labelHi)}
            </a>
          ))}
        </nav>

        {/* Right side controls: Language toggle + Mobile menu trigger */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Switcher Button */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gold/40 bg-ivory/80 text-espresso text-xs font-sans font-medium tracking-wider hover:bg-gold/10 hover:border-gold transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-gold"
            title={isHindi ? 'Switch to English' : 'हिंदी में देखें'}
            aria-label="Toggle language"
          >
            <Globe className="w-3.5 h-3.5 text-gold" />
            <span className="font-semibold">{isHindi ? 'English' : 'हिंदी'}</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-espresso/80 hover:text-espresso hover:bg-gold/10 transition-colors"
            aria-label="Open menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-ivory/98 border-b border-gold/20 backdrop-blur-md px-6 py-6 animate-fadeIn">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="text-sm font-sans uppercase tracking-widest text-espresso/90 hover:text-gold py-1.5 border-b border-gold/10"
              >
                {t(link.labelEn, link.labelHi)}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};


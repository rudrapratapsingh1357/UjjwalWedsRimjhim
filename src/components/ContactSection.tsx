import React from 'react';
import { Phone, MessageCircle, UserCheck } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { weddingConfig } from '../config/weddingConfig';
import { FloralDivider } from './FloralDecoration';

export const ContactSection: React.FC = () => {
  const { isHindi, t } = useLanguage();
  const { contacts } = weddingConfig;

  return (
    <section id="contact-section" className="relative w-full py-16 px-4 bg-ivory text-espresso">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-sans text-[11px] sm:text-xs uppercase tracking-luxury text-gold font-semibold mb-2">
          {t('Awaiting Your Gracious Presence', 'आपकी प्रतीक्षा में')}
        </p>
        <h2 className="font-display text-3xl sm:text-5xl text-espresso font-normal tracking-wide mb-4">
          {t('Family Contacts', 'संपर्क सूत्र')}
        </h2>
        <div className="w-16 h-px bg-gold/50 mx-auto mb-8" />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {contacts.map((contact, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-beige/20 border border-gold/30 shadow-subtle flex flex-col items-center text-center justify-between"
            >
              <div className="w-10 h-10 rounded-full bg-gold/15 text-gold flex items-center justify-center mb-3">
                <UserCheck className="w-5 h-5" />
              </div>

              <h4 className="font-serif text-lg sm:text-xl font-medium text-espresso mb-1">
                {isHindi ? contact.nameHi : contact.name}
              </h4>

              <p className="font-sans text-xs tracking-wider text-espresso/70 mb-4">
                +91 {contact.phone}
              </p>

              <div className="flex items-center gap-2 w-full pt-2 border-t border-gold/15">
                <a
                  href={`tel:+91${contact.phone}`}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-gold/15 text-gold-dark hover:bg-gold hover:text-white transition-all text-xs font-sans font-semibold"
                  title={`Call ${contact.name}`}
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{t('Call', 'कॉल')}</span>
                </a>
                <a
                  href={`https://wa.me/91${contact.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-sage/20 text-sage hover:bg-sage hover:text-white transition-all text-xs font-sans font-semibold"
                  title={`WhatsApp ${contact.name}`}
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Traditional closing note from the wedding card */}
        <div className="mt-10 p-5 rounded-2xl bg-beige/10 border border-gold/20 max-w-lg mx-auto">
          <p className="font-serif italic text-base sm:text-lg text-espresso/80"
             style={{ fontFamily: "'Noto Serif Devanagari', serif" }}>
            "{weddingConfig.traditional.closingNote}"
          </p>
        </div>

        <FloralDivider variant="simple" className="mt-10" />
      </div>
    </section>
  );
};

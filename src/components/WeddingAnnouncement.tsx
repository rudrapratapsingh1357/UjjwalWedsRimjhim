import React from 'react';
import { Clock } from 'lucide-react';
import { weddingConfig } from '../config/weddingConfig';
import { useLanguage } from '../hooks/useLanguage';
import { FloralDivider } from './FloralDecoration';
import { MonogramLogo } from './MonogramLogo';

export const WeddingAnnouncement: React.FC = () => {
  const { isHindi, t } = useLanguage();
  const { groom, bride } = weddingConfig.couple;

  return (
    <div className="w-full max-w-2xl mx-auto text-center pt-8 sm:pt-14 px-4 sm:px-8">
      {/* Small monogram at top of invitation card */}
      <MonogramLogo size="sm" theme="gold" className="mx-auto mb-4" />

      {/* Small introductory text */}
      <p className="font-serif italic text-base sm:text-lg text-espresso/80 tracking-wide mb-5">
        {t('With the blessings of our elders and families', 'परम पिता परमेश्वर एवं पूज्य गुरुजनों के शुभाशीर्वाद से')}
      </p>

      {/* ─── Main Announcement: Names as visual centerpiece ─── */}
      <div className="my-4">
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-espresso font-normal leading-[1.2] sm:leading-[1.15]">
          {isHindi ? groom.firstNameHi : groom.firstName}
        </h2>

        {/* Ornamental "Weds" with flanking lines */}
        <div className="flex items-center justify-center gap-3 my-3">
          <div className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent to-gold/50" />
          <span className="font-script text-2xl sm:text-3xl text-gold font-normal">
            {isHindi ? 'संग' : 'Weds'}
          </span>
          <div className="h-px w-10 sm:w-16 bg-gradient-to-l from-transparent to-gold/50" />
        </div>

        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-espresso font-normal leading-[1.2] sm:leading-[1.15]">
          {isHindi ? bride.firstNameHi : bride.firstName}
        </h2>
      </div>

      {/* Date & Time badge */}
      <div className="inline-flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 mt-4 px-5 py-2 rounded-full border border-gold/30 bg-white/40 shadow-xs">
        <div className="flex items-center gap-1.5">
          <svg width="14" height="14" viewBox="0 0 14 14" className="text-gold opacity-80" fill="none">
            <rect x="1" y="3" width="12" height="10" rx="2" stroke="currentColor" strokeWidth="1" />
            <line x1="1" y1="6" x2="13" y2="6" stroke="currentColor" strokeWidth="0.8" />
            <line x1="4.5" y1="1" x2="4.5" y2="4" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="9.5" y1="1" x2="9.5" y2="4" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
          </svg>
          <span className="font-sans text-xs uppercase tracking-widest text-gold-dark font-semibold">
            {t(weddingConfig.event.dateDisplay, weddingConfig.event.dateDisplayHi)}
          </span>
        </div>
        <span className="text-gold/40 text-xs hidden sm:inline">•</span>
        <div className="flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-gold opacity-80" />
          <span className="font-sans text-xs uppercase tracking-widest text-gold-dark font-semibold">
            {t(weddingConfig.event.timeDisplay, weddingConfig.event.timeDisplayHi)}
          </span>
        </div>
      </div>

      <FloralDivider variant="ornate" className="mt-8 mb-6" />

      {/* Heartfelt Invitation Message */}
      <div className="max-w-lg mx-auto my-4 space-y-4">
        <p className="font-serif text-base sm:text-lg text-espresso/80 leading-[1.8] tracking-wide">
          {t(
            'With immense joy and the blessings of our families, we invite you to join us in celebrating the holy union of Ujjwal and Rimjhim.',
            'असीम हर्ष और उल्लास के साथ, हम आपको उज्जवल एवं रिमझिम के पावन वैवाहिक उत्सव में सहर्ष आमंत्रित करते हैं।'
          )}
        </p>
        <p className="font-serif text-base sm:text-lg text-espresso/80 leading-[1.8] tracking-wide">
          {t(
            'Your gracious presence and heartfelt blessings will bestow auspiciousness upon our new journey.',
            'आपकी गरिमामयी उपस्थिति एवं शुभाशीर्वाद हमारे इस नवीन जीवन के शुभारम्भ को मंगलमय बनाएंगे।'
          )}
        </p>
      </div>

      <FloralDivider variant="simple" className="mt-8 mb-2" />
    </div>
  );
};

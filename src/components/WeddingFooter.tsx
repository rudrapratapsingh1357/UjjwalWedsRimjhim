import React from 'react';
import { MapPin, Heart, Share2 } from 'lucide-react';
import { weddingConfig } from '../config/weddingConfig';
import { useLanguage } from '../hooks/useLanguage';
import { MonogramLogo } from './MonogramLogo';
import { FloralDivider, CornerBotanical } from './FloralDecoration';

export const WeddingFooter: React.FC = () => {
  const { isHindi, t } = useLanguage();

  const handleShare = async () => {
    const shareData = {
      title: 'Ujjwal Weds Rimjhim | Wedding Invitation',
      text: 'You are cordially invited to celebrate the wedding of Ujjwal and Rimjhim on 4 December 2026.',
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {}
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <footer className="relative w-full bg-beige/35 pt-16 pb-12 px-4 sm:px-8 text-center select-none overflow-hidden">
      {/* Subtle top border line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      {/* Corner botanicals */}
      <CornerBotanical position="bottom-left" className="bottom-2 left-2 opacity-30" size="sm" />
      <CornerBotanical position="bottom-right" className="bottom-2 right-2 opacity-30" size="sm" />

      <div className="relative z-10 max-w-md mx-auto flex flex-col items-center">
        {/* Monogram */}
        <MonogramLogo size="lg" theme="gold" className="mb-5" />

        {/* Closing Title */}
        <p className="font-serif italic text-lg sm:text-xl text-espresso/80 tracking-wide mb-1">
          {t('With Love & Blessings', 'सस्नेह एवं शुभाशीर्वाद')}
        </p>

        <h3 className="font-display text-3xl sm:text-4xl text-espresso font-normal tracking-wide mb-2">
          {isHindi ? weddingConfig.couple.groom.firstNameHi : weddingConfig.couple.groom.firstName}{' '}
          <span className="text-gold font-script text-2xl sm:text-3xl">&amp;</span>{' '}
          {isHindi ? weddingConfig.couple.bride.firstNameHi : weddingConfig.couple.bride.firstName}
        </h3>

        <div className="h-px w-16 bg-gold/40 my-3" />

        <p className="font-serif text-sm sm:text-base text-espresso/75 max-w-xs mx-auto mb-6 leading-relaxed">
          {t(
            'Thank you for gracing our celebration with your presence.',
            'हमारे इस मांगलिक प्रसंग का अभिन्न अंग बनने हेतु आप सभी का हृदय से धन्यवाद।'
          )}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <a
            href={weddingConfig.event.venue.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-gold text-gold-dark font-sans text-xs font-semibold tracking-widest uppercase transition-all duration-300 hover:bg-gold hover:text-white"
          >
            <MapPin className="w-3.5 h-3.5 transition-transform group-hover:scale-110" />
            <span>{t('Directions', 'दिशा निर्देश')}</span>
          </a>

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-gold/40 bg-white/50 text-espresso font-sans text-xs font-semibold tracking-widest uppercase transition-all hover:bg-gold/15"
          >
            <Share2 className="w-3.5 h-3.5 text-gold" />
            <span>{t('Share', 'शेयर करें')}</span>
          </button>
        </div>

        <FloralDivider variant="minimal" className="my-3" />

        {/* Subtle Signature */}
        <div className="flex items-center justify-center gap-1.5 text-[11px] text-espresso/60 font-sans tracking-wider mt-2">
          <span>{t('Celebrating', 'महोत्सव')}</span>
          <Heart className="w-3 h-3 text-blush fill-blush inline" />
          <span>{isHindi ? weddingConfig.couple.titleHi : weddingConfig.couple.title}</span>
        </div>
      </div>
    </footer>
  );
};

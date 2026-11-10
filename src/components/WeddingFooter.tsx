import React from 'react';
import { MapPin, Heart } from 'lucide-react';
import { weddingConfig } from '../config/weddingConfig';
import { MonogramLogo } from './MonogramLogo';
import { FloralDivider } from './FloralDecoration';
import { CornerBotanical } from './FloralDecoration';

export const WeddingFooter: React.FC = () => {
  return (
    <footer className="relative w-full bg-beige/40 pt-16 pb-10 px-5 sm:px-8 text-center select-none overflow-hidden">
      {/* Subtle top border line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      {/* Corner botanicals */}
      <CornerBotanical position="bottom-left" className="bottom-2 left-2 opacity-40" size="sm" />
      <CornerBotanical position="bottom-right" className="bottom-2 right-2 opacity-40" size="sm" />

      <div className="relative z-10 max-w-md mx-auto flex flex-col items-center">
        {/* Monogram */}
        <MonogramLogo size="lg" theme="gold" className="mb-5" />

        {/* Closing Title */}
        <p className="font-serif italic text-lg sm:text-xl text-espresso-muted tracking-wide mb-1">
          With Love &amp; Blessings
        </p>

        <h3 className="font-display text-3xl sm:text-4xl text-espresso font-normal tracking-wide mb-2">
          {weddingConfig.couple.groom.firstName} &amp;{' '}
          {weddingConfig.couple.bride.firstName}
        </h3>

        <div className="h-px w-16 bg-gold/40 my-3" />

        <p className="font-serif text-sm sm:text-base text-espresso-muted max-w-xs mx-auto mb-8 leading-relaxed">
          Thank you for being a part of our celebration.
        </p>

        {/* Get Directions Button */}
        <a
          href={weddingConfig.event.venue.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2.5 px-7 py-3 rounded-full border-2 border-gold text-gold font-sans text-xs font-semibold tracking-widest uppercase transition-all duration-300 hover:bg-gold hover:text-ivory-light focus:outline-none focus:ring-2 focus:ring-gold/50 focus:ring-offset-2 mb-8"
        >
          <MapPin className="w-4 h-4 transition-transform group-hover:scale-110" />
          <span>Get Directions</span>
        </a>

        <FloralDivider variant="minimal" className="my-4" />

        {/* Subtle Signature */}
        <div className="flex items-center justify-center gap-1.5 text-[11px] text-espresso-light/60 font-sans tracking-wider mt-2">
          <span>Celebrating</span>
          <Heart className="w-3 h-3 text-blush fill-blush inline" />
          <span>{weddingConfig.couple.title}</span>
        </div>
      </div>
    </footer>
  );
};

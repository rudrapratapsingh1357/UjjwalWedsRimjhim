import React, { useState } from 'react';
import { CalendarHeart, ChevronDown, Clock } from 'lucide-react';
import { weddingConfig } from '../config/weddingConfig';
import { MonogramLogo } from './MonogramLogo';
import { CornerBotanical } from './FloralDecoration';
import { SaveTheDateModal } from './SaveTheDateModal';

export const WeddingHero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToInvitation = () => {
    const el = document.getElementById('invitation-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full min-h-[100svh] flex flex-col items-center justify-between overflow-hidden bg-ivory text-espresso px-4 py-8 sm:py-12 select-none">
      {/* ════════════════════════════════════════════════════════
          FULL-SCREEN BACKGROUND PHOTOGRAPH WITH LOW OPACITY
          - The whole photo spans behind the entire hero.
          - Lower opacity (0.28 - 0.35) so text has high contrast.
          - Positioned centered to keep both faces visible.
          ════════════════════════════════════════════════════════ */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/couple-hero.jpg"
          alt="Ujjwal and Rimjhim"
          className="w-full h-full object-cover object-[center_28%] opacity-30 sm:opacity-35 transition-transform duration-1000 scale-[1.02]"
          loading="eager"
        />

        {/* Soft Warm Ivory Gradients over the photo for editorial wedding card feel */}
        <div className="absolute inset-0 bg-gradient-to-b from-ivory/80 via-transparent to-ivory" />
        <div className="absolute inset-0 bg-gradient-to-r from-ivory/60 via-transparent to-ivory/60" />
      </div>

      {/* Corner Botanicals */}
      <CornerBotanical position="top-left" className="top-2 left-2 sm:top-5 sm:left-5 z-20" />
      <CornerBotanical position="top-right" className="top-2 right-2 sm:top-5 sm:right-5 z-20" />
      <CornerBotanical position="bottom-left" className="bottom-2 left-2 sm:bottom-5 sm:left-5 hidden sm:block z-20" />
      <CornerBotanical position="bottom-right" className="bottom-2 right-2 sm:bottom-5 sm:right-5 hidden sm:block z-20" />

      {/* ─── Top Section: Monogram & Family Introduction Line ─── */}
      <div className="relative z-10 flex flex-col items-center pt-2 sm:pt-4 text-center">
        <MonogramLogo size="hero" theme="dark" className="mb-3 sm:mb-4 drop-shadow-xs" />
        
        <p className="font-serif italic text-base sm:text-lg md:text-xl text-espresso tracking-wide">
          Together with our families
        </p>
      </div>

      {/* ─── Center Section: Couple Names & Invitation Details (Over photo) ─── */}
      <div className="relative z-10 flex flex-col items-center text-center my-auto py-4 sm:py-6 max-w-2xl px-2">
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-normal text-espresso tracking-tight leading-[1.15] mb-2 sm:mb-3">
          <span>{weddingConfig.couple.groom.firstName}</span>
          <span className="font-script text-3xl sm:text-5xl md:text-6xl text-gold mx-2.5 sm:mx-4 font-normal inline-block align-baseline">
            &amp;
          </span>
          <span>{weddingConfig.couple.bride.firstName}</span>
        </h1>

        <div className="h-px w-20 sm:w-28 bg-gold/60 mx-auto my-3" />

        <p className="font-sans text-[11px] sm:text-xs md:text-sm uppercase tracking-luxury text-espresso/90 font-medium mb-3">
          Invite You To Celebrate Their Wedding
        </p>

        {/* Date and Time */}
        <div className="flex flex-col items-center gap-1.5 mb-6">
          <p className="font-display text-2xl sm:text-3xl md:text-4xl text-gold-dark font-medium tracking-wide">
            {weddingConfig.event.dateDisplay}
          </p>
          <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-sans tracking-widest uppercase text-espresso/80 font-medium">
            <Clock className="w-3.5 h-3.5 text-gold" />
            <span>{weddingConfig.event.timeDisplay}</span>
          </div>
        </div>

        {/* Primary CTA: Save the Date */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="group relative inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full border-2 border-gold bg-ivory/80 backdrop-blur-xs text-gold-dark font-sans text-xs sm:text-sm font-semibold tracking-widest uppercase transition-all duration-300 shadow-sm hover:bg-gold hover:text-white hover:shadow-md hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
        >
          <CalendarHeart className="w-4 h-4 text-gold group-hover:text-white transition-colors" />
          <span>Save the Date</span>
        </button>
      </div>

      {/* ─── Bottom Section: Scroll to Invitation Card ─── */}
      <div className="relative z-10 flex flex-col items-center pb-2 sm:pb-3 text-center">
        <button
          onClick={scrollToInvitation}
          aria-label="Scroll to wedding invitation card"
          className="flex flex-col items-center gap-1 text-espresso/60 hover:text-espresso transition-colors duration-300 focus:outline-none"
        >
          <span className="font-sans text-[10px] sm:text-xs uppercase tracking-luxury font-medium">
            Read Invitation
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce text-gold" />
        </button>
      </div>

      {/* Save the Date Modal */}
      <SaveTheDateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

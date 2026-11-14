import React from 'react';
import { CalendarHeart, Clock, ArrowRight } from 'lucide-react';
import { weddingConfig } from '../config/weddingConfig';
import { useLanguage } from '../hooks/useLanguage';
import { MonogramLogo } from './MonogramLogo';

interface CoverPageProps {
  onSaveDate: () => void;
  onTurnPage: () => void;
}

export const CoverPage = React.forwardRef<HTMLDivElement, CoverPageProps>(
  ({ onSaveDate, onTurnPage }, ref) => {
    const { isHindi, t } = useLanguage();

    return (
      <div
        ref={ref}
        data-density="hard"
        className="relative w-full h-full bg-[#F8F4EB] text-espresso select-none overflow-hidden flex flex-col justify-between shadow-md"
        style={{ boxSizing: 'border-box' }}
      >
        {/* Subtle physical paper texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.035] mix-blend-multiply z-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Outer gold border */}
        <div className="absolute inset-2 sm:inset-3 border border-gold/40 rounded-xl pointer-events-none z-20" />
        <div className="absolute inset-3.5 sm:inset-4.5 border border-gold/20 rounded-lg pointer-events-none z-20" />

        {/* ════════════════════════════════════════════════════════
            COUPLE PHOTOGRAPH — 100% OPACITY, NATURAL COLORS
            - Bride and groom faces fully visible at top 15-35%
            - Masked only at the bottom (58% to 98%) into #F8F4EB
            ════════════════════════════════════════════════════════ */}
        <div className="relative w-full h-[54%] sm:h-[58%] overflow-hidden z-10">
          <img
            src="/couple-hero.jpg"
            alt="Ujjwal and Rimjhim"
            className="w-full h-full object-cover object-[center_22%]"
            style={{
              opacity: 1,
              filter: 'none',
              maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 56%, rgba(0,0,0,0) 98%)',
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 56%, rgba(0,0,0,0) 98%)',
            }}
          />

          {/* Top subtle emblem over image */}
          <div className="absolute top-4 left-0 right-0 flex justify-center pointer-events-none">
            <div className="px-3 py-1 rounded-full bg-ivory/80 backdrop-blur-xs border border-gold/30 shadow-xs">
              <span className="font-serif text-xs text-gold-dark font-medium tracking-widest">
                || श्री गणेशाय नमः ||
              </span>
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════
            BOTTOM CONTENT: COUPLE NAMES & INVITATION TYPOGRAPHY
            ════════════════════════════════════════════════════════ */}
        <div className="relative z-20 flex-1 flex flex-col justify-between items-center text-center px-4 sm:px-6 pb-4 sm:pb-6 pt-1">
          {/* Small Monogram */}
          <MonogramLogo size="sm" theme="gold" className="scale-85 -mt-3 mb-1" />

          {/* Intro line */}
          <p className="font-serif italic text-xs sm:text-sm text-espresso/80 tracking-wide">
            {t('Together with our families', 'परिवार एवं गुरुजनों के सान्निध्य में')}
          </p>

          {/* Couple Names */}
          <div className="my-1">
            <h1 className="font-display text-2xl sm:text-4xl text-espresso font-normal tracking-wide leading-tight">
              {isHindi ? weddingConfig.couple.groom.firstNameHi : weddingConfig.couple.groom.firstName}
              <span className="font-script text-2xl sm:text-3xl text-gold mx-2 inline-block">
                {isHindi ? 'संग' : '&'}
              </span>
              {isHindi ? weddingConfig.couple.bride.firstNameHi : weddingConfig.couple.bride.firstName}
            </h1>
          </div>

          {/* Thin divider */}
          <div className="w-14 h-px bg-gold/50 my-1" />

          {/* Date & Time */}
          <div className="flex flex-col items-center gap-0.5 my-1">
            <p className="font-display text-lg sm:text-xl text-gold-dark font-medium tracking-wide">
              {t(weddingConfig.event.dateDisplay, weddingConfig.event.dateDisplayHi)}
            </p>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-sans tracking-widest uppercase text-espresso/80 font-medium">
              <Clock className="w-3 h-3 text-gold" />
              <span>{t(weddingConfig.event.timeDisplay, weddingConfig.event.timeDisplayHi)}</span>
            </div>
          </div>

          {/* Action: Save the date button + Page turn hint */}
          <div className="flex items-center gap-3 mt-2">
            <button
              onClick={onSaveDate}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-gold bg-gold/10 text-gold-dark hover:bg-gold hover:text-white font-sans text-[11px] font-semibold tracking-wider uppercase transition-all duration-200"
            >
              <CalendarHeart className="w-3.5 h-3.5" />
              <span>{t('Save Date', 'तारीख सुरक्षित करें')}</span>
            </button>

            <button
              onClick={onTurnPage}
              className="inline-flex items-center gap-1 text-[11px] font-sans text-espresso/70 hover:text-gold-dark font-medium uppercase tracking-wider transition-colors"
            >
              <span>{t('Turn Page', 'पेज पलटें')}</span>
              <ArrowRight className="w-3.5 h-3.5 text-gold animate-pulse" />
            </button>
          </div>
        </div>
      </div>
    );
  }
);

CoverPage.displayName = 'CoverPage';

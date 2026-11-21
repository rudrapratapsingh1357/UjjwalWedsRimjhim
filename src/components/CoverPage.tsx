import React from 'react';
import { CalendarHeart, ArrowRight } from 'lucide-react';
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
          className="absolute inset-0 pointer-events-none opacity-[0.035] mix-blend-multiply z-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Outer gold decorative border */}
        <div className="absolute inset-2 sm:inset-3 border border-gold/40 rounded-xl pointer-events-none z-30" />
        <div className="absolute inset-3.5 sm:inset-4.5 border border-gold/20 rounded-lg pointer-events-none z-30" />

        {/* Top spacer (replaces removed Ganesh mantra) */}
        <div className="pt-3" />

        {/* ════════════════════════════════════════════════════════
            2. MIDDLE: ORIGINAL COUPLE PHOTOGRAPH
            - 100% full opacity, crisp natural original colors
            - object-position: center 0% ensures full heads & faces
              remain 100% visible with zero cropping
            - Bottom fade starts at ~68%–72% height, blending smoothly
              into the ivory background without touching the faces
            ════════════════════════════════════════════════════════ */}
        <div className="relative w-full h-[54%] sm:h-[57%] overflow-hidden z-10 px-3 sm:px-4">
          <img
            src="/couple-hero.jpg"
            alt="Ujjwal & Rimjhim"
            className="w-full h-full object-cover rounded-t-lg"
            style={{
              objectPosition: 'center 0%',
              opacity: 1,
              filter: 'none',
              maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 68%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 68%, rgba(0,0,0,0) 100%)',
            }}
          />
        </div>

        {/* ════════════════════════════════════════════════════════
            3. BELOW PHOTOGRAPH: REFINED TYPOGRAPHY HIERARCHY
            - U&R monogram
            - Ujjwal & Rimjhim (no surnames)
            - 4 December 2026
            - Save the Date button
            - Turn Page interaction
            ════════════════════════════════════════════════════════ */}
        <div className="relative z-20 flex-1 flex flex-col justify-between items-center text-center px-4 sm:px-6 pb-4 sm:pb-5 pt-1">
          {/* U&R Monogram */}
          <MonogramLogo size="sm" theme="gold" className="scale-85 -mt-2 mb-0.5" />

          {/* Couple Names (Without Surnames) */}
          <div className="my-0.5">
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl text-espresso font-normal tracking-wide leading-tight">
              {isHindi ? weddingConfig.couple.groom.firstNameHi : weddingConfig.couple.groom.firstName}
              <span className="font-script text-2xl sm:text-3xl text-gold mx-2 inline-block">
                {isHindi ? 'संग' : '&'}
              </span>
              {isHindi ? weddingConfig.couple.bride.firstNameHi : weddingConfig.couple.bride.firstName}
            </h1>
          </div>

          {/* Thin gold divider */}
          <div className="w-12 h-px bg-gold/50 my-0.5" />

          {/* Date */}
          <p className="font-display text-base sm:text-lg text-gold-dark font-medium tracking-wide">
            {t(weddingConfig.event.dateDisplay, weddingConfig.event.dateDisplayHi)}
          </p>

          {/* Save the Date button & Turn Page interaction */}
          <div className="flex items-center gap-3 mt-1.5">
            <button
              onClick={onSaveDate}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-gold bg-gold/10 text-gold-dark hover:bg-gold hover:text-white font-sans text-[11px] font-semibold tracking-wider uppercase transition-all duration-200 shadow-xs"
            >
              <CalendarHeart className="w-3.5 h-3.5" />
              <span>{t('Save the Date', 'तारीख सुरक्षित करें')}</span>
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

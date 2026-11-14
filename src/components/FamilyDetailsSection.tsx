import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { weddingConfig } from '../config/weddingConfig';
import { FloralDivider } from './FloralDecoration';

export const FamilyDetailsSection: React.FC = () => {
  const { isHindi, t } = useLanguage();
  const { brothers, sisters, elderCouples } = weddingConfig.family;
  const { darshanabhilashi, vineet, childrenPoems } = weddingConfig;

  return (
    <div id="family-section" className="w-full max-w-4xl mx-auto my-8 space-y-12 px-4 sm:px-8">
      {/* ─── SIBLINGS SECTION: BROTHERS & SISTERS ─── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 relative">
        <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-gold/25 to-transparent -translate-x-1/2" />

        {/* Brothers */}
        <div className="flex flex-col items-center text-center">
          <p className="font-sans text-[10px] uppercase tracking-luxury text-gold font-semibold mb-1">
            {t('With Affection', 'स्नेही')}
          </p>
          <h3 className="font-display text-2xl sm:text-3xl text-espresso font-normal tracking-wide mb-4">
            {t('Brothers', 'भ्राता')}
          </h3>
          <div className="w-full grid grid-cols-2 gap-x-4 gap-y-2.5 max-w-xs mx-auto">
            {brothers.map((name, index) => (
              <div key={index} className="flex items-center justify-center py-1.5 border-b border-gold/15">
                <span className="font-serif text-base sm:text-lg text-espresso tracking-wide">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="block md:hidden">
          <FloralDivider variant="minimal" className="my-0" />
        </div>

        {/* Sisters */}
        <div className="flex flex-col items-center text-center">
          <p className="font-sans text-[10px] uppercase tracking-luxury text-gold font-semibold mb-1">
            {t('With Love', 'स्नेहमयी')}
          </p>
          <h3 className="font-display text-2xl sm:text-3xl text-espresso font-normal tracking-wide mb-4">
            {t('Sisters', 'भगिनी')}
          </h3>
          <div className="w-full grid grid-cols-2 gap-x-4 gap-y-2.5 max-w-xs mx-auto">
            {sisters.map((name, index) => (
              <div key={index} className="flex items-center justify-center py-1.5 border-b border-gold/15">
                <span className="font-serif text-base sm:text-lg text-espresso tracking-wide">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <FloralDivider variant="ornate" />

      {/* ─── ELDERS / OUR FAMILY (Paired with divider lines as requested) ─── */}
      <div className="max-w-md mx-auto text-center">
        <p className="font-sans text-[10px] uppercase tracking-luxury text-gold font-semibold mb-1">
          {t('Warm Regards & Blessings', 'सस्नेह वंदना')}
        </p>
        <h3 className="font-display text-3xl sm:text-4xl text-espresso font-normal tracking-wide mb-6">
          {t('Our Family Elders', 'मार्गदर्शक एवं पूज्य स्वजन')}
        </h3>

        <div className="space-y-6">
          {elderCouples.map((couple, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-full max-w-sm space-y-2 py-1">
                {/* Husband line */}
                <div className="flex items-baseline justify-between px-4 sm:px-6">
                  <span className="font-sans text-[11px] uppercase tracking-wider text-gold font-semibold">
                    {isHindi ? couple.husband.relationHi : couple.husband.relation}
                  </span>
                  <span className="font-serif text-xl sm:text-2xl text-espresso font-medium tracking-wide">
                    {isHindi ? couple.husband.nameHi : couple.husband.name}
                  </span>
                </div>

                {/* Wife line (under husband name) */}
                <div className="flex items-baseline justify-between px-4 sm:px-6">
                  <span className="font-sans text-[11px] uppercase tracking-wider text-gold font-semibold">
                    {isHindi ? couple.wife.relationHi : couple.wife.relation}
                  </span>
                  <span className="font-serif text-xl sm:text-2xl text-espresso font-medium tracking-wide">
                    {isHindi ? couple.wife.nameHi : couple.wife.name}
                  </span>
                </div>
              </div>

              {/* Small thin line after each couple */}
              {idx < elderCouples.length - 1 && (
                <div className="w-36 sm:w-48 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent mt-4" />
              )}
            </div>
          ))}
        </div>
      </div>

      <FloralDivider variant="simple" />

      {/* ─── DARSHANABHILASHI & VINEET GROUPS (From physical card) ─── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
        {/* Darshanabhilashi */}
        <div className="p-6 rounded-2xl bg-beige/15 border border-gold/25 text-center">
          <h4 className="font-display text-xl sm:text-2xl text-gold-dark font-medium mb-3">
            {t('Darshanabhilashi', 'दर्शनाभिलाषी')}
          </h4>
          <p className="font-serif text-base sm:text-lg text-espresso/90 leading-relaxed">
            {darshanabhilashi.join(', ')}
          </p>
          <p className="font-serif italic text-gold font-medium mt-2">
            {t('and all family members', 'एवं समस्त परिवार')}
          </p>
        </div>

        {/* Vineet */}
        <div className="p-6 rounded-2xl bg-beige/15 border border-gold/25 text-center">
          <h4 className="font-display text-xl sm:text-2xl text-gold-dark font-medium mb-3">
            {t('Vineet', 'विनीत')}
          </h4>
          <p className="font-serif text-base sm:text-lg text-espresso/90 leading-relaxed">
            {vineet.join(', ')}
          </p>
        </div>
      </div>

      {/* ─── CHILDREN'S INVITATION POEMS (From physical card) ─── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
        <div className="p-5 rounded-xl bg-ivory border border-gold/20 shadow-xs text-center">
          <p className="text-xs sm:text-sm font-serif text-espresso/80 whitespace-pre-line leading-relaxed italic mb-3"
             style={{ fontFamily: "'Noto Serif Devanagari', serif" }}>
            {childrenPoems.left.poem}
          </p>
          <p className="font-sans text-xs font-semibold text-gold-dark tracking-wider">
            — {childrenPoems.left.names}
          </p>
        </div>

        <div className="p-5 rounded-xl bg-ivory border border-gold/20 shadow-xs text-center">
          <p className="text-xs sm:text-sm font-serif text-espresso/80 whitespace-pre-line leading-relaxed italic mb-3"
             style={{ fontFamily: "'Noto Serif Devanagari', serif" }}>
            {childrenPoems.right.poem}
          </p>
          <p className="font-sans text-xs font-semibold text-gold-dark tracking-wider">
            — {childrenPoems.right.names}
          </p>
        </div>
      </div>
    </div>
  );
};

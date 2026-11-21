import React from 'react';
import { BookPage } from './BookPage';
import { weddingConfig } from '../config/weddingConfig';
import { useLanguage } from '../hooks/useLanguage';
import { FloralDivider } from './FloralDecoration';

export const FamilyPage = React.forwardRef<HTMLDivElement, { pageNumber: number }>(
  ({ pageNumber }, ref) => {
    const { isHindi, t } = useLanguage();
    const { elderCouples, brothers, sisters } = weddingConfig.family;

    return (
      <BookPage ref={ref} pageNumber={pageNumber}>
        <div className="flex flex-col items-center justify-between text-center h-full py-1">
          {/* Header */}
          <div className="pt-1">
            <h2 className="font-display text-xl sm:text-2xl text-espresso font-normal tracking-wide">
              {t('Our Family', 'पूज्य स्वजन')}
            </h2>
            <div className="w-12 h-px bg-gold/50 mx-auto mt-1 mb-2" />
          </div>

          <div className="w-full max-w-sm flex-1 flex flex-col justify-between py-1">
            {/* Section A: ELDERS (पूज्य स्वजन) */}
            <div className="py-2 px-3 rounded-xl bg-white/80 border border-gold/35 shadow-xs">
              <span className="font-sans text-[10px] uppercase tracking-luxury text-gold-dark font-semibold block mb-1.5">
                {t('Elders', 'पूज्य स्वजन')}
              </span>
              <div className="space-y-1.5">
                {elderCouples.map((couple, idx) => (
                  <div key={idx} className="flex flex-col text-xs">
                    <div className="flex items-baseline justify-between px-1">
                      <span className="font-sans text-[10px] text-gold-dark font-medium uppercase">
                        {isHindi ? couple.husband.relationHi : couple.husband.relation}
                      </span>
                      <span className="font-serif text-xs sm:text-sm font-semibold text-espresso">
                        {isHindi ? couple.husband.nameHi : couple.husband.name}
                      </span>
                    </div>
                    <div className="flex items-baseline justify-between px-1 mt-0.5">
                      <span className="font-sans text-[10px] text-gold-dark font-medium uppercase">
                        {isHindi ? couple.wife.relationHi : couple.wife.relation}
                      </span>
                      <span className="font-serif text-xs sm:text-sm font-semibold text-espresso">
                        {isHindi ? couple.wife.nameHi : couple.wife.name}
                      </span>
                    </div>
                    {idx < elderCouples.length - 1 && (
                      <div className="w-24 h-px bg-gold/20 mx-auto my-1" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Subtle Divider */}
            <div className="w-20 h-px bg-gold/40 mx-auto my-1.5" />

            {/* Section B: BROTHERS (भ्राता) */}
            <div className="py-2 px-3 rounded-xl bg-beige/30 border border-gold/30">
              <span className="font-sans text-[10px] uppercase tracking-luxury text-gold-dark font-semibold block mb-1.5">
                {t('Brothers', 'भ्राता')}
              </span>
              <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-xs font-serif text-espresso">
                {brothers.map((name, i) => (
                  <div key={i} className="py-0.5 border-b border-gold/15 text-center">
                    <p className="leading-tight">{name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section C: SISTERS (भगिनी) */}
            <div className="py-2 px-3 rounded-xl bg-beige/30 border border-gold/30 mt-1.5">
              <span className="font-sans text-[10px] uppercase tracking-luxury text-gold-dark font-semibold block mb-1.5">
                {t('Sisters', 'भगिनी')}
              </span>
              <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-xs font-serif text-espresso">
                {sisters.map((name, i) => (
                  <div key={i} className="py-0.5 border-b border-gold/15 text-center">
                    <p className="leading-tight">{name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <FloralDivider variant="minimal" className="my-0 scale-70" />
        </div>
      </BookPage>
    );
  }
);

FamilyPage.displayName = 'FamilyPage';

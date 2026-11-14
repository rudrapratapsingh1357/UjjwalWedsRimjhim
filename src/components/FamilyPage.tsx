import React from 'react';
import { BookPage } from './BookPage';
import { weddingConfig } from '../config/weddingConfig';
import { useLanguage } from '../hooks/useLanguage';
import { FloralDivider } from './FloralDecoration';

export const FamilyPage = React.forwardRef<HTMLDivElement, { pageNumber: number }>(
  ({ pageNumber }, ref) => {
    const { isHindi, t } = useLanguage();
    const { brothers, sisters, elderCouples } = weddingConfig.family;

    return (
      <BookPage ref={ref} pageNumber={pageNumber}>
        <div className="flex flex-col items-center justify-between text-center h-full py-1">
          {/* Header */}
          <div>
            <p className="font-sans text-[10px] uppercase tracking-luxury text-gold font-semibold mb-0.5">
              {t('With Affection & Blessings', 'सस्नेह वंदना')}
            </p>
            <h2 className="font-display text-2xl sm:text-3xl text-espresso font-normal tracking-wide">
              {t('Our Family', 'हमारा परिवार')}
            </h2>
            <div className="w-12 h-px bg-gold/50 mx-auto mt-1 mb-2" />
          </div>

          {/* Siblings: Brothers & Sisters */}
          <div className="w-full max-w-sm grid grid-cols-2 gap-3 my-1">
            {/* Brothers */}
            <div className="p-2 rounded-xl bg-beige/25 border border-gold/20">
              <span className="font-sans text-[9px] uppercase tracking-wider text-gold-dark font-semibold">
                {t('Brothers', 'भ्राता')}
              </span>
              <div className="mt-1 space-y-0.5 text-xs font-serif text-espresso">
                {brothers.map((name, i) => (
                  <p key={i} className="leading-snug">{name}</p>
                ))}
              </div>
            </div>

            {/* Sisters */}
            <div className="p-2 rounded-xl bg-beige/25 border border-gold/20">
              <span className="font-sans text-[9px] uppercase tracking-wider text-gold-dark font-semibold">
                {t('Sisters', 'भगिनी')}
              </span>
              <div className="mt-1 space-y-0.5 text-xs font-serif text-espresso">
                {sisters.map((name, i) => (
                  <p key={i} className="leading-snug">{name}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Elders Section */}
          <div className="w-full max-w-sm my-1 py-1.5 px-3 rounded-xl bg-white/70 border border-gold/30">
            <span className="font-sans text-[9px] uppercase tracking-widest text-gold font-semibold mb-1 block">
              {t('Family Elders', 'मार्गदर्शक एवं पूज्य स्वजन')}
            </span>

            <div className="space-y-1.5">
              {elderCouples.map((couple, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="w-full flex items-baseline justify-between px-2 text-xs">
                    <span className="font-sans text-[10px] text-gold-dark font-medium">
                      {isHindi ? couple.husband.relationHi : couple.husband.relation}
                    </span>
                    <span className="font-serif text-sm font-medium text-espresso">
                      {isHindi ? couple.husband.nameHi : couple.husband.name}
                    </span>
                  </div>
                  <div className="w-full flex items-baseline justify-between px-2 text-xs">
                    <span className="font-sans text-[10px] text-gold-dark font-medium">
                      {isHindi ? couple.wife.relationHi : couple.wife.relation}
                    </span>
                    <span className="font-serif text-sm font-medium text-espresso">
                      {isHindi ? couple.wife.nameHi : couple.wife.name}
                    </span>
                  </div>

                  {idx < elderCouples.length - 1 && (
                    <div className="w-24 h-px bg-gold/25 my-1" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <FloralDivider variant="minimal" className="my-0 scale-75" />
        </div>
      </BookPage>
    );
  }
);

FamilyPage.displayName = 'FamilyPage';

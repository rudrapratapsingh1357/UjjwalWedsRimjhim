import React from 'react';
import { BookPage } from './BookPage';
import { weddingConfig } from '../config/weddingConfig';
import { useLanguage } from '../hooks/useLanguage';
import { FloralDivider } from './FloralDecoration';

export const FamilyPage = React.forwardRef<HTMLDivElement, { pageNumber: number }>(
  ({ pageNumber }, ref) => {
    const { isHindi, t } = useLanguage();
    const { elderCouples } = weddingConfig.family;

    return (
      <BookPage ref={ref} pageNumber={pageNumber}>
        <div className="flex flex-col items-center justify-between text-center h-full py-2">
          {/* Header */}
          <div className="pt-2">
            <p className="font-sans text-[10px] uppercase tracking-luxury text-gold font-semibold mb-1">
              {t('With Reverence & Blessings', 'सस्नेह वंदना')}
            </p>
            <h2 className="font-display text-2xl sm:text-3xl text-espresso font-normal tracking-wide">
              {t('Our Family', 'पूज्य स्वजन')}
            </h2>
            <div className="w-14 h-px bg-gold/50 mx-auto mt-1.5 mb-3" />
          </div>

          {/* Elders Section */}
          <div className="w-full max-w-sm my-auto py-3 px-4 rounded-2xl bg-white/80 border border-gold/35 shadow-card">
            <div className="space-y-3.5">
              {elderCouples.map((couple, idx) => {
                const wifeName = isHindi ? couple.wife.nameHi : couple.wife.name;
                const hasWifeName = wifeName && wifeName.trim().length > 0;

                return (
                  <div key={idx} className="flex flex-col items-center">
                    {/* Husband line */}
                    <div className="w-full flex items-baseline justify-between px-3 text-sm">
                      <span className="font-sans text-[11px] text-gold-dark font-semibold uppercase tracking-wider">
                        {isHindi ? couple.husband.relationHi : couple.husband.relation}
                      </span>
                      <span className="font-serif text-base sm:text-lg font-medium text-espresso">
                        {isHindi ? couple.husband.nameHi : couple.husband.name}
                      </span>
                    </div>

                    {/* Wife line (Taiji name kept blank per groom's requirement) */}
                    <div className="w-full flex items-baseline justify-between px-3 text-sm mt-0.5">
                      <span className="font-sans text-[11px] text-gold-dark font-semibold uppercase tracking-wider">
                        {isHindi ? couple.wife.relationHi : couple.wife.relation}
                      </span>
                      {hasWifeName ? (
                        <span className="font-serif text-base sm:text-lg font-medium text-espresso">
                          {wifeName}
                        </span>
                      ) : (
                        <span className="font-serif text-sm italic text-espresso/40">
                          {/* Blank per instruction */}
                        </span>
                      )}
                    </div>

                    {idx < elderCouples.length - 1 && (
                      <div className="w-32 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent my-2" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <FloralDivider variant="minimal" className="my-1 scale-75" />
        </div>
      </BookPage>
    );
  }
);

FamilyPage.displayName = 'FamilyPage';

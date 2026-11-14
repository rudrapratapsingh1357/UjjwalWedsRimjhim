import React from 'react';
import { BookPage } from './BookPage';
import { weddingConfig } from '../config/weddingConfig';
import { useLanguage } from '../hooks/useLanguage';
import { FloralDivider } from './FloralDecoration';

export const BlessingsPage = React.forwardRef<HTMLDivElement, { pageNumber: number }>(
  ({ pageNumber }, ref) => {
    const { t } = useLanguage();
    const { darshanabhilashi, vineet, childrenPoems } = weddingConfig;

    return (
      <BookPage ref={ref} pageNumber={pageNumber}>
        <div className="flex flex-col items-center justify-between text-center h-full py-1">
          {/* Header */}
          <div>
            <p className="font-sans text-[10px] uppercase tracking-luxury text-gold font-semibold mb-0.5">
              {t('Auspicious Well-Wishers', 'स्नेह निमंत्रण')}
            </p>
            <h2 className="font-display text-2xl sm:text-3xl text-espresso font-normal tracking-wide">
              {t('Blessings & Regard', 'दर्शनाभिलाषी एवं विनीत')}
            </h2>
            <div className="w-12 h-px bg-gold/50 mx-auto mt-1 mb-2" />
          </div>

          {/* Darshanabhilashi & Vineet */}
          <div className="w-full max-w-sm space-y-2 my-auto">
            {/* Darshanabhilashi */}
            <div className="p-2 sm:p-2.5 rounded-xl bg-beige/25 border border-gold/30">
              <span className="font-sans text-[10px] uppercase tracking-widest text-gold-dark font-semibold block mb-1">
                {t('Darshanabhilashi', 'दर्शनाभिलाषी')}
              </span>
              <p className="font-serif text-xs text-espresso leading-relaxed">
                {darshanabhilashi.join(', ')}
              </p>
              <p className="font-serif italic text-gold font-medium text-[11px] mt-1">
                {t('and all family members', 'एवं समस्त परिवार')}
              </p>
            </div>

            {/* Vineet */}
            <div className="p-2 sm:p-2.5 rounded-xl bg-beige/25 border border-gold/30">
              <span className="font-sans text-[10px] uppercase tracking-widest text-gold-dark font-semibold block mb-1">
                {t('Vineet', 'विनीत')}
              </span>
              <p className="font-serif text-xs text-espresso leading-relaxed">
                {vineet.join(', ')}
              </p>
            </div>

            {/* Children Poems */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              <div className="p-2 rounded-lg bg-white/70 border border-gold/20 text-center">
                <p className="text-[10px] sm:text-[11px] font-serif text-espresso/85 whitespace-pre-line leading-relaxed italic"
                   style={{ fontFamily: "'Noto Serif Devanagari', serif" }}>
                  {childrenPoems.left.poem}
                </p>
                <p className="font-sans text-[9px] font-semibold text-gold-dark mt-1">
                  — {childrenPoems.left.names}
                </p>
              </div>

              <div className="p-2 rounded-lg bg-white/70 border border-gold/20 text-center">
                <p className="text-[10px] sm:text-[11px] font-serif text-espresso/85 whitespace-pre-line leading-relaxed italic"
                   style={{ fontFamily: "'Noto Serif Devanagari', serif" }}>
                  {childrenPoems.right.poem}
                </p>
                <p className="font-sans text-[9px] font-semibold text-gold-dark mt-1">
                  — {childrenPoems.right.names}
                </p>
              </div>
            </div>
          </div>

          <FloralDivider variant="minimal" className="my-0 scale-75" />
        </div>
      </BookPage>
    );
  }
);

BlessingsPage.displayName = 'BlessingsPage';

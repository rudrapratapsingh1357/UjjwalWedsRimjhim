import React from 'react';
import { BookPage } from './BookPage';
import { weddingConfig } from '../config/weddingConfig';
import { useLanguage } from '../hooks/useLanguage';
import { FloralDivider } from './FloralDecoration';

export const SiblingsPage = React.forwardRef<HTMLDivElement, { pageNumber: number }>(
  ({ pageNumber }, ref) => {
    const { t } = useLanguage();
    const { brothers, sisters } = weddingConfig.family;

    return (
      <BookPage ref={ref} pageNumber={pageNumber}>
        <div className="flex flex-col items-center justify-between text-center h-full py-2">
          {/* Header */}
          <div className="pt-2">
            <p className="font-sans text-[10px] uppercase tracking-luxury text-gold font-semibold mb-1">
              {t('With Affection & Joy', 'स्नेह एवं प्रीति')}
            </p>
            <h2 className="font-display text-2xl sm:text-3xl text-espresso font-normal tracking-wide">
              {t('Brothers & Sisters', 'भ्राता एवं भगिनी')}
            </h2>
            <div className="w-14 h-px bg-gold/50 mx-auto mt-1.5 mb-3" />
          </div>

          {/* Sibling Sections */}
          <div className="w-full max-w-sm space-y-4 my-auto">
            {/* Brothers Section */}
            <div className="p-4 rounded-2xl bg-beige/25 border border-gold/30 shadow-subtle">
              <span className="font-sans text-[11px] uppercase tracking-luxury text-gold-dark font-semibold block mb-2.5">
                {t('Brothers', 'भ्राता')}
              </span>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm sm:text-base font-serif text-espresso">
                {brothers.map((name, i) => (
                  <div key={i} className="py-1 border-b border-gold/15">
                    <p className="leading-snug">{name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sisters Section */}
            <div className="p-4 rounded-2xl bg-beige/25 border border-gold/30 shadow-subtle">
              <span className="font-sans text-[11px] uppercase tracking-luxury text-gold-dark font-semibold block mb-2.5">
                {t('Sisters', 'भगिनी')}
              </span>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm sm:text-base font-serif text-espresso">
                {sisters.map((name, i) => (
                  <div key={i} className="py-1 border-b border-gold/15">
                    <p className="leading-snug">{name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <FloralDivider variant="minimal" className="my-1 scale-75" />
        </div>
      </BookPage>
    );
  }
);

SiblingsPage.displayName = 'SiblingsPage';

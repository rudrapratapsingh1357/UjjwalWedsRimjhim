import React from 'react';
import { BookPage } from './BookPage';
import { weddingConfig } from '../config/weddingConfig';
import { useLanguage } from '../hooks/useLanguage';
import { FloralDivider } from './FloralDecoration';

export const AnnouncementPage = React.forwardRef<HTMLDivElement, { pageNumber: number }>(
  ({ pageNumber }, ref) => {
    const { isHindi, t } = useLanguage();
    const { couple } = weddingConfig;

    return (
      <BookPage ref={ref} pageNumber={pageNumber}>
        <div className="flex flex-col items-center justify-center text-center h-full py-4 px-2">
          <FloralDivider variant="minimal" className="mb-4 scale-90" />

          {/* Couple Announcement Centerpiece (NO SURNAMES for bride & groom) */}
          <div className="w-full max-w-sm my-auto py-6 px-4 sm:px-6 rounded-2xl bg-white/80 border border-gold/35 shadow-card">
            {/* Groom: Ujjwal */}
            <h2 className="font-display text-3xl sm:text-4xl text-espresso font-normal tracking-wide">
              {isHindi ? couple.groom.firstNameHi : couple.groom.firstName}
            </h2>
            <p className="font-serif text-sm sm:text-base text-espresso/90 mt-2">
              <span className="text-gold-dark font-medium">{t('Son of: ', 'सुपुत्र: ')}</span>
              {isHindi ? couple.groom.motherHi : couple.groom.mother} &amp; {isHindi ? couple.groom.fatherHi : couple.groom.father}
            </p>
            <p className="font-sans text-xs text-espresso/60 tracking-wider mt-1">
              {isHindi ? couple.groom.residenceHi : couple.groom.residence}
            </p>

            {/* Weds Divider */}
            <div className="flex items-center justify-center gap-3 my-4">
              <div className="h-px w-14 bg-gradient-to-r from-transparent to-gold/60" />
              <span className="font-script text-3xl text-gold font-normal">
                {isHindi ? 'संग' : 'Weds'}
              </span>
              <div className="h-px w-14 bg-gradient-to-l from-transparent to-gold/60" />
            </div>

            {/* Bride: Rimjhim */}
            <h2 className="font-display text-3xl sm:text-4xl text-espresso font-normal tracking-wide">
              {isHindi ? couple.bride.firstNameHi : couple.bride.firstName}
            </h2>
            <p className="font-serif text-sm sm:text-base text-espresso/90 mt-2">
              <span className="text-gold-dark font-medium">{t('Daughter of: ', 'सुपुत्री: ')}</span>
              {isHindi ? couple.bride.motherHi : couple.bride.mother} &amp; {isHindi ? couple.bride.fatherHi : couple.bride.father}
            </p>
            <p className="font-sans text-xs text-espresso/60 tracking-wider mt-1">
              {isHindi ? couple.bride.residenceHi : couple.bride.residence}
            </p>
          </div>

          <FloralDivider variant="minimal" className="mt-4 scale-90" />
        </div>
      </BookPage>
    );
  }
);

AnnouncementPage.displayName = 'AnnouncementPage';

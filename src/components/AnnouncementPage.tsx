import React from 'react';
import { BookPage } from './BookPage';
import { weddingConfig } from '../config/weddingConfig';
import { useLanguage } from '../hooks/useLanguage';
import { FloralDivider } from './FloralDecoration';

export const AnnouncementPage = React.forwardRef<HTMLDivElement, { pageNumber: number }>(
  ({ pageNumber }, ref) => {
    const { isHindi, t } = useLanguage();
    const { couple, grandparents, traditional } = weddingConfig;

    return (
      <BookPage ref={ref} pageNumber={pageNumber}>
        <div className="flex flex-col items-center justify-between text-center h-full py-2">
          {/* Ganesh Shloka Box */}
          <div className="w-full max-w-sm pt-2">
            <div className="p-3 rounded-2xl bg-beige/35 border border-gold/30 inline-block w-full mx-auto shadow-xs">
              <p
                className="text-xs sm:text-sm text-espresso/90 whitespace-pre-line leading-relaxed font-serif"
                style={{ fontFamily: "'Noto Serif Devanagari', 'Cormorant Garamond', serif" }}
              >
                {traditional.ganeshShloka}
              </p>
            </div>
          </div>

          <FloralDivider variant="minimal" className="my-1 scale-80" />

          {/* Grandparents Blessing */}
          <div className="w-full max-w-sm my-1 py-2 px-4 rounded-xl bg-gold/10 border border-gold/25">
            <p className="font-serif text-sm sm:text-base text-espresso font-medium">
              {isHindi ? grandparents.grandfatherHi : grandparents.grandfather}
              <span className="font-serif text-gold-dark mx-1.5">&amp;</span>
              {isHindi ? grandparents.grandmotherHi : grandparents.grandmother}
            </p>
            <p className="font-sans text-[10px] uppercase tracking-widest text-gold-dark font-semibold mt-0.5">
              {t('Bless their beloved grandson', 'अपने प्रिय सुपौत्र')}
            </p>
          </div>

          {/* Couple Announcement Centerpiece (NO SURNAMES for bride & groom) */}
          <div className="w-full max-w-sm my-2 py-4 px-4 rounded-2xl bg-white/75 border border-gold/35 shadow-card">
            {/* Groom: Ujjwal */}
            <h2 className="font-display text-2xl sm:text-3xl text-espresso font-normal tracking-wide">
              {isHindi ? couple.groom.firstNameHi : couple.groom.firstName}
            </h2>
            <p className="font-serif text-xs sm:text-sm text-espresso/85 mt-1">
              <span className="text-gold-dark font-medium">{t('Son of: ', 'सुपुत्र: ')}</span>
              {isHindi ? couple.groom.motherHi : couple.groom.mother} &amp; {isHindi ? couple.groom.fatherHi : couple.groom.father}
            </p>
            <p className="font-sans text-[10px] text-espresso/60 tracking-wider mt-0.5">
              {isHindi ? couple.groom.residenceHi : couple.groom.residence}
            </p>

            {/* Weds Divider */}
            <div className="flex items-center justify-center gap-3 my-2.5">
              <div className="h-px w-10 bg-gradient-to-r from-transparent to-gold/50" />
              <span className="font-script text-2xl text-gold font-normal">
                {isHindi ? 'संग' : 'Weds'}
              </span>
              <div className="h-px w-10 bg-gradient-to-l from-transparent to-gold/50" />
            </div>

            {/* Bride: Rimjhim */}
            <h2 className="font-display text-2xl sm:text-3xl text-espresso font-normal tracking-wide">
              {isHindi ? couple.bride.firstNameHi : couple.bride.firstName}
            </h2>
            <p className="font-serif text-xs sm:text-sm text-espresso/85 mt-1">
              <span className="text-gold-dark font-medium">{t('Daughter of: ', 'सुपुत्री: ')}</span>
              {isHindi ? couple.bride.motherHi : couple.bride.mother} &amp; {isHindi ? couple.bride.fatherHi : couple.bride.father}
            </p>
            <p className="font-sans text-[10px] text-espresso/60 tracking-wider mt-0.5">
              {isHindi ? couple.bride.residenceHi : couple.bride.residence}
            </p>
          </div>

          <FloralDivider variant="minimal" className="my-1 scale-80" />
        </div>
      </BookPage>
    );
  }
);

AnnouncementPage.displayName = 'AnnouncementPage';

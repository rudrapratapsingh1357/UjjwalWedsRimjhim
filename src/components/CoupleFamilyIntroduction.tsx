import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { weddingConfig } from '../config/weddingConfig';
import { FloralDivider } from './FloralDecoration';

export const CoupleFamilyIntroduction: React.FC = () => {
  const { isHindi, t } = useLanguage();
  const { groom, bride } = weddingConfig.couple;

  return (
    <div className="w-full max-w-4xl mx-auto my-10 px-4 sm:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 items-start relative">
        {/* Subtle Vertical Divider on Desktop */}
        <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent -translate-x-1/2" />

        {/* LEFT COLUMN: GROOM & PARENTS */}
        <div className="flex flex-col items-center text-center py-4 md:pr-10">
          <span className="font-sans text-[11px] uppercase tracking-luxury text-gold font-semibold mb-1">
            {t('The Groom', 'वर पक्ष')}
          </span>
          <h3 className="font-display text-3xl sm:text-4xl text-espresso font-normal tracking-wide mb-1">
            {isHindi ? groom.fullNameHi : groom.fullName}
          </h3>

          <p className="font-script text-xl sm:text-2xl text-gold font-normal my-2">
            {t('Son of', 'सुपुत्र')}
          </p>

          <div className="space-y-1">
            <p className="font-serif text-lg sm:text-xl text-espresso font-medium tracking-wide">
              {isHindi ? groom.motherHi : groom.mother}
            </p>
            <p className="font-script text-base text-gold/80">&amp;</p>
            <p className="font-serif text-lg sm:text-xl text-espresso font-medium tracking-wide">
              {isHindi ? groom.fatherHi : groom.father}
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-gold/15 max-w-xs">
            <p className="font-sans text-xs text-espresso/70 tracking-wider">
              <span className="font-semibold text-gold-dark">{t('Residence: ', 'निवासी: ')}</span>
              {isHindi ? groom.residenceHi : groom.residence}
            </p>
          </div>
        </div>

        {/* Horizontal divider on mobile */}
        <div className="block md:hidden">
          <FloralDivider variant="minimal" className="my-0" />
        </div>

        {/* RIGHT COLUMN: BRIDE & PARENTS */}
        <div className="flex flex-col items-center text-center py-4 md:pl-10">
          <span className="font-sans text-[11px] uppercase tracking-luxury text-gold font-semibold mb-1">
            {t('The Bride', 'वधू पक्ष')}
          </span>
          <h3 className="font-display text-3xl sm:text-4xl text-espresso font-normal tracking-wide mb-1">
            {isHindi ? bride.fullNameHi : bride.fullName}
          </h3>

          <p className="font-script text-xl sm:text-2xl text-gold font-normal my-2">
            {t('Daughter of', 'सुपुत्री')}
          </p>

          <div className="space-y-1">
            <p className="font-serif text-lg sm:text-xl text-espresso font-medium tracking-wide">
              {isHindi ? bride.motherHi : bride.mother}
            </p>
            <p className="font-script text-base text-gold/80">&amp;</p>
            <p className="font-serif text-lg sm:text-xl text-espresso font-medium tracking-wide">
              {isHindi ? bride.fatherHi : bride.father}
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-gold/15 max-w-xs">
            <p className="font-sans text-xs text-espresso/70 tracking-wider">
              <span className="font-semibold text-gold-dark">{t('Residence: ', 'निवासी: ')}</span>
              {isHindi ? bride.residenceHi : bride.residence}
            </p>
          </div>
        </div>
      </div>

      <FloralDivider variant="simple" className="mt-10" />
    </div>
  );
};

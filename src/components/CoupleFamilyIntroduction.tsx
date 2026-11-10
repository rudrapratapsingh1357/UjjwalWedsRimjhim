import React from 'react';
import { weddingConfig } from '../config/weddingConfig';
import { FloralDivider } from './FloralDecoration';

export const CoupleFamilyIntroduction: React.FC = () => {
  const { groom, bride } = weddingConfig.couple;

  return (
    <div className="w-full max-w-3xl mx-auto my-10 px-5 sm:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 items-start relative">
        {/* Subtle Vertical Divider on Desktop */}
        <div className="hidden md:block absolute left-1/2 top-6 bottom-6 w-px bg-gradient-to-b from-transparent via-gold/25 to-transparent -translate-x-1/2" />

        {/* LEFT COLUMN: GROOM & PARENTS */}
        <div className="flex flex-col items-center text-center py-4 md:pr-8">
          <h3 className="font-display text-3xl sm:text-4xl text-espresso font-normal tracking-wide mb-1">
            {groom.firstName}
          </h3>

          <p className="font-script text-xl text-gold font-normal my-2">
            Son of
          </p>

          <div className="space-y-0.5">
            <p className="font-serif text-lg sm:text-xl text-espresso font-medium tracking-wide">
              {groom.father}
            </p>
            <p className="font-script text-base text-gold/80">&amp;</p>
            <p className="font-serif text-lg sm:text-xl text-espresso font-medium tracking-wide">
              {groom.mother}
            </p>
          </div>
        </div>

        {/* Horizontal divider on mobile between the two */}
        <div className="block md:hidden">
          <FloralDivider variant="minimal" className="my-0" />
        </div>

        {/* RIGHT COLUMN: BRIDE & PARENTS */}
        <div className="flex flex-col items-center text-center py-4 md:pl-8">
          <h3 className="font-display text-3xl sm:text-4xl text-espresso font-normal tracking-wide mb-1">
            {bride.firstName}
          </h3>

          <p className="font-script text-xl text-gold font-normal my-2">
            Daughter of
          </p>

          <div className="space-y-0.5">
            <p className="font-serif text-lg sm:text-xl text-espresso font-medium tracking-wide">
              {bride.father}
            </p>
            <p className="font-script text-base text-gold/80">&amp;</p>
            <p className="font-serif text-lg sm:text-xl text-espresso font-medium tracking-wide">
              {bride.mother}
            </p>
          </div>
        </div>
      </div>

      <FloralDivider variant="simple" className="mt-10" />
    </div>
  );
};

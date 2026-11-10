import React from 'react';
import { weddingConfig } from '../config/weddingConfig';
import { FloralDivider } from './FloralDecoration';

/* ───────────────────────────────────────────────
   Reusable section for siblings
   ─────────────────────────────────────────────── */

interface SiblingListProps {
  title: string;
  names: string[];
}

const SiblingSection: React.FC<SiblingListProps> = ({ title, names }) => (
  <div className="flex flex-col items-center text-center">
    <p className="font-sans text-[10px] uppercase tracking-luxury text-gold font-semibold mb-1">
      With Love
    </p>
    <h3 className="font-display text-2xl sm:text-3xl text-espresso font-normal tracking-wide mb-5">
      {title}
    </h3>

    <div className="w-full grid grid-cols-2 gap-x-4 gap-y-2.5 max-w-xs mx-auto">
      {names.map((name, index) => (
        <div
          key={index}
          className="flex items-center justify-center py-2 border-b border-gold/15"
        >
          <span className="font-serif text-lg text-espresso font-normal tracking-wide">
            {name}
          </span>
        </div>
      ))}
    </div>
  </div>
);

/* ───────────────────────────────────────────────
   Main Family Details Section
   ─────────────────────────────────────────────── */

export const FamilyDetailsSection: React.FC = () => {
  const { brothers, sisters, elderCouples } = weddingConfig.family;

  return (
    <div className="w-full max-w-3xl mx-auto my-6 space-y-10 px-5 sm:px-8">
      {/* Brothers & Sisters: side by side on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 relative">
        {/* Vertical divider on desktop */}
        <div className="hidden md:block absolute left-1/2 top-6 bottom-6 w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent -translate-x-1/2" />

        <div className="md:pr-6">
          <SiblingSection title="Brothers" names={brothers} />
        </div>

        {/* Horizontal divider on mobile */}
        <div className="block md:hidden">
          <FloralDivider variant="minimal" className="my-0" />
        </div>

        <div className="md:pl-6">
          <SiblingSection title="Sisters" names={sisters} />
        </div>
      </div>

      <FloralDivider variant="ornate" />

      {/* OUR FAMILY / ELDERS
          Arranged as requested:
          Tauji name & under Taiji name,
          then thin line,
          then Chachaji name & under Chachiji name,
          then thin line,
          and similarly for Buaji & Fufaji pairs.
      */}
      <div className="max-w-md mx-auto text-center">
        <p className="font-sans text-[10px] uppercase tracking-luxury text-gold font-semibold mb-1">
          Warm Regards
        </p>
        <h3 className="font-display text-3xl sm:text-4xl text-espresso font-normal tracking-wide mb-8">
          Our Family
        </h3>

        <div className="space-y-6">
          {elderCouples.map((couple, idx) => (
            <div key={idx} className="flex flex-col items-center">
              {/* Couple pair */}
              <div className="w-full max-w-sm space-y-2 py-1">
                {/* Husband line */}
                <div className="flex items-baseline justify-between px-4 sm:px-6">
                  <span className="font-sans text-[11px] uppercase tracking-wider text-gold font-semibold">
                    {couple.husband.relation}
                  </span>
                  <span className="font-serif text-xl sm:text-2xl text-espresso font-medium tracking-wide">
                    {couple.husband.name}
                  </span>
                </div>

                {/* Wife line (under husband name) */}
                <div className="flex items-baseline justify-between px-4 sm:px-6">
                  <span className="font-sans text-[11px] uppercase tracking-wider text-gold font-semibold">
                    {couple.wife.relation}
                  </span>
                  <span className="font-serif text-xl sm:text-2xl text-espresso font-medium tracking-wide">
                    {couple.wife.name}
                  </span>
                </div>
              </div>

              {/* Small thin line after each couple (except after last) */}
              {idx < elderCouples.length - 1 && (
                <div className="w-32 sm:w-44 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent mt-5" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

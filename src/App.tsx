import React from 'react';
import { WeddingHero } from './components/WeddingHero';
import { WeddingAnnouncement } from './components/WeddingAnnouncement';
import { CoupleFamilyIntroduction } from './components/CoupleFamilyIntroduction';
import { FamilyDetailsSection } from './components/FamilyDetailsSection';
import { WeddingFooter } from './components/WeddingFooter';
import { CornerBotanical } from './components/FloralDecoration';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-ivory text-espresso flex flex-col font-serif selection:bg-gold/20 selection:text-espresso overflow-x-hidden">
      {/* ═══════ SECTION 1: WELCOME & HERO ═══════ */}
      <WeddingHero />

      {/* ═══════ SECTION 2: THE WEDDING INVITATION CARD ═══════ */}
      <main
        id="invitation-section"
        className="relative z-10 w-full flex-grow bg-ivory"
      >
        {/* Outer card-like container with ornamental double border */}
        <div className="max-w-4xl mx-auto my-8 sm:my-14 px-3 sm:px-6">
          <div className="relative bg-ivory border border-gold/20 rounded-2xl sm:rounded-3xl overflow-hidden py-6 sm:py-10">
            {/* Inner double-border accent */}
            <div className="absolute inset-2 sm:inset-3 border border-gold/15 rounded-xl sm:rounded-2xl pointer-events-none" />

            {/* Corner botanical decoration on the card */}
            <CornerBotanical position="top-left" className="top-1 left-1 sm:top-3 sm:left-3" size="sm" />
            <CornerBotanical position="top-right" className="top-1 right-1 sm:top-3 sm:right-3" size="sm" />
            <CornerBotanical position="bottom-left" className="bottom-1 left-1 sm:bottom-3 sm:left-3" size="sm" />
            <CornerBotanical position="bottom-right" className="bottom-1 right-1 sm:bottom-3 sm:right-3" size="sm" />

            {/* Card content */}
            <div className="relative z-10">
              {/* A. Main Wedding Announcement & Heartfelt Message */}
              <WeddingAnnouncement />

              {/* B. Family Introduction: Groom & Bride Parents */}
              <CoupleFamilyIntroduction />

              {/* C, D, E. Brothers, Sisters & Family Elders */}
              <FamilyDetailsSection />
            </div>
          </div>
        </div>
      </main>

      {/* ═══════ CLOSING & FOOTER ═══════ */}
      <WeddingFooter />
    </div>
  );
};

export default App;

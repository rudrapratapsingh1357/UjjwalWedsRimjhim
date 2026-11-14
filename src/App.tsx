import React, { useState } from 'react';
import { LanguageProvider } from './hooks/useLanguage';
import { InvitationEnvelope } from './components/InvitationEnvelope';
import { Navigation } from './components/Navigation';
import { WeddingHero } from './components/WeddingHero';
import { WeddingCountdown } from './components/WeddingCountdown';
import { WeddingInvitation } from './components/WeddingInvitation';
import { WeddingAnnouncement } from './components/WeddingAnnouncement';
import { CoupleFamilyIntroduction } from './components/CoupleFamilyIntroduction';
import { FamilyDetailsSection } from './components/FamilyDetailsSection';
import { EventTimeline } from './components/EventTimeline';
import { VenueSection } from './components/VenueSection';
import { RSVPSection } from './components/RSVPSection';
import { ContactSection } from './components/ContactSection';
import { WeddingFooter } from './components/WeddingFooter';
import { CornerBotanical } from './components/FloralDecoration';

export const WeddingApp: React.FC = () => {
  const [envelopeOpened, setEnvelopeOpened] = useState(false);

  return (
    <div className="min-h-screen w-full bg-ivory text-espresso flex flex-col font-serif selection:bg-gold/20 selection:text-espresso overflow-x-hidden">
      {/* ═══════ PHASE A: INVITATION ENVELOPE ═══════ */}
      {!envelopeOpened && (
        <InvitationEnvelope onOpen={() => setEnvelopeOpened(true)} />
      )}

      {/* ═══════ PHASE B: MAIN WEDDING WEBSITE ═══════ */}
      {/* Sticky Header Navigation */}
      <Navigation />

      {/* Section 1: Hero */}
      <WeddingHero />

      {/* Section 2: Live Wedding Countdown */}
      <WeddingCountdown />

      {/* Section 3: The Traditional Wedding Card Experience */}
      <main id="invitation-section" className="relative z-10 w-full flex-grow bg-ivory">
        <div className="max-w-4xl mx-auto my-8 sm:my-14 px-3 sm:px-6">
          <div className="relative bg-ivory border border-gold/25 rounded-2xl sm:rounded-3xl overflow-hidden py-6 sm:py-10 shadow-card">
            {/* Inner double-border accent */}
            <div className="absolute inset-2 sm:inset-3 border border-gold/15 rounded-xl sm:rounded-2xl pointer-events-none" />

            {/* Corner botanical decorations */}
            <CornerBotanical position="top-left" className="top-1 left-1 sm:top-3 sm:left-3" size="sm" />
            <CornerBotanical position="top-right" className="top-1 right-1 sm:top-3 sm:right-3" size="sm" />
            <CornerBotanical position="bottom-left" className="bottom-1 left-1 sm:bottom-3 sm:left-3" size="sm" />
            <CornerBotanical position="bottom-right" className="bottom-1 right-1 sm:bottom-3 sm:right-3" size="sm" />

            {/* Traditional Invocations & Sacred Vows */}
            <WeddingInvitation />

            {/* Couple Announcement & Names Centerpiece */}
            <WeddingAnnouncement />

            {/* Family Introduction: Parents & Residences */}
            <CoupleFamilyIntroduction />

            {/* Siblings, Elders Pairs, Darshanabhilashi, Vinīt, Children Poems */}
            <FamilyDetailsSection />
          </div>
        </div>
      </main>

      {/* Section 4: 3-Day Ceremony Schedule & Itinerary */}
      <EventTimeline />

      {/* Section 5: Venue & Directions */}
      <VenueSection />

      {/* Section 6: RSVP Form */}
      <RSVPSection />

      {/* Section 7: Family Contacts */}
      <ContactSection />

      {/* Section 8: Closing & Footer */}
      <WeddingFooter />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <WeddingApp />
    </LanguageProvider>
  );
};

export default App;

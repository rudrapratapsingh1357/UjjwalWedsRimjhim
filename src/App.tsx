import React, { useState } from 'react';
import { LanguageProvider } from './hooks/useLanguage';
import { AudioProvider, useAudio } from './context/AudioContext';
import { InvitationEnvelope } from './components/InvitationEnvelope';
import { WeddingBook } from './components/WeddingBook';

const WeddingAppContent: React.FC = () => {
  const [envelopeOpened, setEnvelopeOpened] = useState(false);
  const { playMusic } = useAudio();

  const handleOpenEnvelope = () => {
    // Start background instrumental music upon the user's envelope opening interaction
    playMusic();
    setEnvelopeOpened(true);
  };

  return (
    <div className="min-h-screen w-full bg-ivory text-espresso flex flex-col font-serif selection:bg-gold/20 selection:text-espresso overflow-x-hidden">
      {/* ═══════ SCREEN 1: THE INVITATION ENVELOPE ═══════ */}
      {!envelopeOpened && (
        <InvitationEnvelope onOpen={handleOpenEnvelope} />
      )}

      {/* ═══════ SCREEN 2: MULTI-PAGE DIGITAL WEDDING INVITATION BOOK ═══════ */}
      <WeddingBook />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AudioProvider>
        <WeddingAppContent />
      </AudioProvider>
    </LanguageProvider>
  );
};

export default App;

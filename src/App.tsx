import React, { useState } from 'react';
import { LanguageProvider } from './hooks/useLanguage';
import { InvitationEnvelope } from './components/InvitationEnvelope';
import { WeddingBook } from './components/WeddingBook';

export const WeddingApp: React.FC = () => {
  const [envelopeOpened, setEnvelopeOpened] = useState(false);

  return (
    <div className="min-h-screen w-full bg-ivory text-espresso flex flex-col font-serif selection:bg-gold/20 selection:text-espresso overflow-x-hidden">
      {/* ═══════ SCREEN 1: THE INVITATION ENVELOPE ═══════ */}
      {!envelopeOpened && (
        <InvitationEnvelope onOpen={() => setEnvelopeOpened(true)} />
      )}

      {/* ═══════ SCREEN 2: MULTI-PAGE DIGITAL WEDDING INVITATION BOOK ═══════ */}
      <WeddingBook />
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

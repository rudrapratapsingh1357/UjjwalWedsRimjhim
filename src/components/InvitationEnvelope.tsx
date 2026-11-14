import React, { useState, useEffect, useCallback } from 'react';
import { MonogramLogo } from './MonogramLogo';

interface InvitationEnvelopeProps {
  onOpen: () => void;
}

export const InvitationEnvelope: React.FC<InvitationEnvelopeProps> = ({ onOpen }) => {
  const [phase, setPhase] = useState<'sealed' | 'opening' | 'revealing' | 'done'>('sealed');
  const prefersReduced = typeof window !== 'undefined'
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const handleOpen = useCallback(() => {
    if (phase !== 'sealed') return;
    if (prefersReduced) {
      setPhase('done');
      setTimeout(onOpen, 100);
      return;
    }
    setPhase('opening');
    setTimeout(() => setPhase('revealing'), 900);
    setTimeout(() => {
      setPhase('done');
      onOpen();
    }, 2200);
  }, [phase, prefersReduced, onOpen]);

  const handleSkip = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setPhase('done');
    onOpen();
  }, [onOpen]);

  // Keyboard support
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        if (phase === 'sealed') handleOpen();
        else if (phase === 'opening' || phase === 'revealing') {
          setPhase('done');
          onOpen();
        }
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [phase, handleOpen, onOpen]);

  if (phase === 'done') return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#F8F4EB] transition-opacity duration-700 ${
        phase === 'revealing' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      onClick={handleOpen}
      role="button"
      tabIndex={0}
      aria-label="Open wedding invitation"
      style={{ cursor: phase === 'sealed' ? 'pointer' : 'default' }}
    >
      {/* Subtle paper texture pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.65' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E")`,
      }} />

      {/* Gold corner decorations */}
      <svg className="absolute top-6 left-6 w-16 h-16 sm:w-24 sm:h-24 text-gold opacity-30" viewBox="0 0 100 100" fill="none">
        <path d="M0 0 L0 60 Q0 40 20 30 Q40 20 60 0 Z" stroke="currentColor" strokeWidth="0.5" fill="none" />
        <path d="M0 0 L0 40 Q5 25 15 18 Q25 10 40 0 Z" stroke="currentColor" strokeWidth="0.3" fill="none" />
      </svg>
      <svg className="absolute top-6 right-6 w-16 h-16 sm:w-24 sm:h-24 text-gold opacity-30 scale-x-[-1]" viewBox="0 0 100 100" fill="none">
        <path d="M0 0 L0 60 Q0 40 20 30 Q40 20 60 0 Z" stroke="currentColor" strokeWidth="0.5" fill="none" />
        <path d="M0 0 L0 40 Q5 25 15 18 Q25 10 40 0 Z" stroke="currentColor" strokeWidth="0.3" fill="none" />
      </svg>
      <svg className="absolute bottom-6 left-6 w-16 h-16 sm:w-24 sm:h-24 text-gold opacity-30 scale-y-[-1]" viewBox="0 0 100 100" fill="none">
        <path d="M0 0 L0 60 Q0 40 20 30 Q40 20 60 0 Z" stroke="currentColor" strokeWidth="0.5" fill="none" />
        <path d="M0 0 L0 40 Q5 25 15 18 Q25 10 40 0 Z" stroke="currentColor" strokeWidth="0.3" fill="none" />
      </svg>
      <svg className="absolute bottom-6 right-6 w-16 h-16 sm:w-24 sm:h-24 text-gold opacity-30 scale-[-1]" viewBox="0 0 100 100" fill="none">
        <path d="M0 0 L0 60 Q0 40 20 30 Q40 20 60 0 Z" stroke="currentColor" strokeWidth="0.5" fill="none" />
        <path d="M0 0 L0 40 Q5 25 15 18 Q25 10 40 0 Z" stroke="currentColor" strokeWidth="0.3" fill="none" />
      </svg>

      {/* Main content */}
      <div className="relative flex flex-col items-center text-center px-6 max-w-lg mx-auto">
        {/* Small Ganesh Ji */}
        <div className="mb-4 text-gold opacity-70">
          <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
            <text x="20" y="28" textAnchor="middle" fontSize="28" fill="currentColor" fontFamily="serif">ॐ</text>
          </svg>
        </div>

        {/* Wax Seal / Monogram */}
        <div className={`relative mb-6 transition-transform duration-700 ${
          phase === 'opening' ? 'scale-125 rotate-[15deg]' : ''
        }`}>
          {/* Wax seal circle */}
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full flex items-center justify-center"
            style={{
              background: 'radial-gradient(circle at 40% 35%, #c9a058 0%, #B69558 30%, #93733A 70%, #7a5f2e 100%)',
              boxShadow: '0 4px 20px rgba(182,149,88,0.4), inset 0 2px 10px rgba(255,255,255,0.15)',
            }}
          >
            {/* Inner ring */}
            <div className="absolute inset-2 rounded-full border border-white/20" />
            <div className="absolute inset-3 rounded-full border border-white/10" />
            <MonogramLogo size="md" theme="light" />
          </div>
        </div>

        {/* Traditional Ganesh invocation */}
        <p className="font-serif text-sm sm:text-base text-gold-dark tracking-wider mb-2 opacity-80"
          style={{ fontFamily: "'Noto Serif Devanagari', 'Cormorant Garamond', serif" }}>
          || श्री गणेशाय नमः ||
        </p>

        {/* Couple Names */}
        <h1 className="font-display text-3xl sm:text-5xl text-espresso font-normal tracking-wide mb-2">
          Ujjwal <span className="font-script text-2xl sm:text-4xl text-gold mx-1">&amp;</span> Rimjhim
        </h1>

        {/* Hindi invitation */}
        <p className="text-base sm:text-lg text-espresso/80 mb-1 tracking-wide"
          style={{ fontFamily: "'Noto Serif Devanagari', serif" }}>
          आप सादर आमंत्रित हैं
        </p>

        <p className="font-serif italic text-sm sm:text-base text-espresso/60 tracking-wide mb-8">
          An Invitation to Celebrate Love
        </p>

        {/* Thin gold line */}
        <div className="w-16 h-px bg-gold/40 mb-8" />

        {/* Tap to Open */}
        <div className={`flex flex-col items-center gap-3 ${
          phase === 'opening' ? 'opacity-0 transition-opacity duration-300' : ''
        }`}>
          <p className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold font-medium">
            Tap to Open Your Invitation
          </p>
          {/* Animated pulse indicator */}
          <div className="relative flex items-center justify-center">
            <div className="w-8 h-8 rounded-full border border-gold/40 flex items-center justify-center envelope-pulse">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-gold">
                <path d="M7 2 L7 12 M3 8 L7 12 L11 8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Skip button */}
      <button
        onClick={handleSkip}
        className="absolute bottom-8 right-8 font-sans text-[10px] uppercase tracking-widest text-espresso/40 hover:text-espresso/70 transition-colors"
      >
        Skip →
      </button>
    </div>
  );
};


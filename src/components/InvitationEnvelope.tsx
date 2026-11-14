import React, { useState, useEffect, useCallback } from 'react';

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
    setTimeout(() => setPhase('revealing'), 800);
    setTimeout(() => {
      setPhase('done');
      onOpen();
    }, 1800);
  }, [phase, prefersReduced, onOpen]);

  const handleSkip = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setPhase('done');
    onOpen();
  }, [onOpen]);

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
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.65' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Gold corner filigree */}
      <svg className="absolute top-6 left-6 w-16 h-16 sm:w-24 sm:h-24 text-gold opacity-30 pointer-events-none" viewBox="0 0 100 100" fill="none">
        <path d="M0 0 L0 60 Q0 40 20 30 Q40 20 60 0 Z" stroke="currentColor" strokeWidth="0.5" fill="none" />
        <path d="M0 0 L0 40 Q5 25 15 18 Q25 10 40 0 Z" stroke="currentColor" strokeWidth="0.3" fill="none" />
      </svg>
      <svg className="absolute top-6 right-6 w-16 h-16 sm:w-24 sm:h-24 text-gold opacity-30 scale-x-[-1] pointer-events-none" viewBox="0 0 100 100" fill="none">
        <path d="M0 0 L0 60 Q0 40 20 30 Q40 20 60 0 Z" stroke="currentColor" strokeWidth="0.5" fill="none" />
        <path d="M0 0 L0 40 Q5 25 15 18 Q25 10 40 0 Z" stroke="currentColor" strokeWidth="0.3" fill="none" />
      </svg>
      <svg className="absolute bottom-6 left-6 w-16 h-16 sm:w-24 sm:h-24 text-gold opacity-30 scale-y-[-1] pointer-events-none" viewBox="0 0 100 100" fill="none">
        <path d="M0 0 L0 60 Q0 40 20 30 Q40 20 60 0 Z" stroke="currentColor" strokeWidth="0.5" fill="none" />
        <path d="M0 0 L0 40 Q5 25 15 18 Q25 10 40 0 Z" stroke="currentColor" strokeWidth="0.3" fill="none" />
      </svg>
      <svg className="absolute bottom-6 right-6 w-16 h-16 sm:w-24 sm:h-24 text-gold opacity-30 scale-[-1] pointer-events-none" viewBox="0 0 100 100" fill="none">
        <path d="M0 0 L0 60 Q0 40 20 30 Q40 20 60 0 Z" stroke="currentColor" strokeWidth="0.5" fill="none" />
        <path d="M0 0 L0 40 Q5 25 15 18 Q25 10 40 0 Z" stroke="currentColor" strokeWidth="0.3" fill="none" />
      </svg>

      {/* Main Envelope Card Content */}
      <div className="relative flex flex-col items-center text-center px-6 max-w-md mx-auto my-auto">
        {/* Subtle Om symbol at very top */}
        <div className="mb-4 text-gold/70 select-none">
          <span className="font-serif text-3xl">ॐ</span>
        </div>

        {/* Traditional Ganesh invocation */}
        <p
          className="font-serif text-sm sm:text-base text-gold-dark font-medium tracking-widest mb-3"
          style={{ fontFamily: "'Noto Serif Devanagari', 'Cormorant Garamond', serif" }}
        >
          ॥ श्री गणेशाय नमः ॥
        </p>

        {/* Couple Names */}
        <h1 className="font-display text-3xl sm:text-5xl text-espresso font-normal tracking-wide mb-2 leading-tight">
          Ujjwal <span className="font-script text-2xl sm:text-4xl text-gold mx-1.5">&amp;</span> Rimjhim
        </h1>

        {/* Hindi invitation subtitle */}
        <p
          className="text-base sm:text-lg text-espresso/80 mb-1 tracking-wide"
          style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
        >
          आप सादर आमंत्रित हैं
        </p>

        <p className="font-serif italic text-sm text-espresso/60 tracking-wider mb-8">
          An Invitation to Celebrate Love
        </p>

        {/* Thin gold accent divider */}
        <div className="w-16 h-px bg-gold/40 mb-8" />

        {/* Clear, elegant TAP TO OPEN Button / Prompt (Replaced circular seal) */}
        <div
          className={`flex flex-col items-center gap-3 transition-all duration-300 ${
            phase === 'opening' ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
          }`}
        >
          <div className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full border border-gold/60 bg-white/70 shadow-sm backdrop-blur-xs text-gold-dark hover:bg-gold hover:text-white transition-all duration-300 envelope-pulse">
            <span className="font-sans text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase">
              Tap to Open
            </span>
          </div>
          <span className="font-serif italic text-xs text-espresso/50">
            (click anywhere to open invitation)
          </span>
        </div>
      </div>

      {/* Skip button for quick access */}
      <button
        onClick={handleSkip}
        className="absolute bottom-8 right-8 font-sans text-[11px] uppercase tracking-widest text-espresso/40 hover:text-espresso/70 transition-colors"
      >
        Skip →
      </button>
    </div>
  );
};

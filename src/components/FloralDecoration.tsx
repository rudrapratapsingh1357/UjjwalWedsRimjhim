import React from 'react';

/* ───────────────────────────────────────────────
   FloralDivider – three visual weights
   ─────────────────────────────────────────────── */

interface FloralDividerProps {
  className?: string;
  variant?: 'simple' | 'ornate' | 'minimal';
}

export const FloralDivider: React.FC<FloralDividerProps> = ({
  className = '',
  variant = 'simple',
}) => {
  if (variant === 'minimal') {
    return (
      <div className={`flex items-center justify-center my-5 ${className}`} aria-hidden="true">
        <div className="h-px w-10 bg-gradient-to-r from-transparent to-gold/50" />
        <svg width="16" height="16" viewBox="0 0 16 16" className="mx-2 text-gold opacity-60">
          <path d="M8 1 L10 6 L15 8 L10 10 L8 15 L6 10 L1 8 L6 6Z" fill="currentColor" />
        </svg>
        <div className="h-px w-10 bg-gradient-to-l from-transparent to-gold/50" />
      </div>
    );
  }

  if (variant === 'ornate') {
    return (
      <div className={`flex items-center justify-center my-8 select-none ${className}`} aria-hidden="true">
        {/* Left decorative arm */}
        <div className="flex items-center">
          <div className="h-px w-8 sm:w-16 bg-gradient-to-r from-transparent to-gold/30" />
          <svg width="24" height="18" viewBox="0 0 24 18" fill="none" className="opacity-60 -scale-x-100 -mr-1">
            <path d="M22 9 C18 4, 12 2, 8 5 C4 8, 6 14, 10 12 C14 10, 12 6, 8 5" stroke="#B69558" strokeWidth="0.8" fill="none" />
            <path d="M2 15 C4 11, 6 9, 8 5" stroke="#8A947B" strokeWidth="0.6" fill="none" />
            <ellipse cx="3" cy="15" rx="2.5" ry="2" fill="#DDA9A6" opacity="0.7" />
          </svg>
        </div>

        {/* Center floral motif */}
        <div className="mx-2 relative flex items-center justify-center">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            {/* Petals */}
            <ellipse cx="16" cy="8" rx="3" ry="5" fill="#DDA9A6" opacity="0.5" />
            <ellipse cx="16" cy="24" rx="3" ry="5" fill="#DDA9A6" opacity="0.5" />
            <ellipse cx="8" cy="16" rx="5" ry="3" fill="#DDA9A6" opacity="0.4" />
            <ellipse cx="24" cy="16" rx="5" ry="3" fill="#DDA9A6" opacity="0.4" />
            {/* Center */}
            <circle cx="16" cy="16" r="3.5" fill="#B69558" opacity="0.7" />
            <circle cx="16" cy="16" r="2" fill="#F8F4EB" opacity="0.9" />
            {/* Tiny leaves */}
            <path d="M10 10 C8 8, 6 10, 8 12 C10 12, 11 10, 10 10Z" fill="#8A947B" opacity="0.6" />
            <path d="M22 10 C24 8, 26 10, 24 12 C22 12, 21 10, 22 10Z" fill="#8A947B" opacity="0.6" />
          </svg>
        </div>

        {/* Right decorative arm */}
        <div className="flex items-center">
          <svg width="24" height="18" viewBox="0 0 24 18" fill="none" className="opacity-60 -ml-1">
            <path d="M22 9 C18 4, 12 2, 8 5 C4 8, 6 14, 10 12 C14 10, 12 6, 8 5" stroke="#B69558" strokeWidth="0.8" fill="none" />
            <path d="M2 15 C4 11, 6 9, 8 5" stroke="#8A947B" strokeWidth="0.6" fill="none" />
            <ellipse cx="3" cy="15" rx="2.5" ry="2" fill="#DDA9A6" opacity="0.7" />
          </svg>
          <div className="h-px w-8 sm:w-16 bg-gradient-to-l from-transparent to-gold/30" />
        </div>
      </div>
    );
  }

  /* variant === 'simple' (default) */
  return (
    <div className={`flex items-center justify-center my-6 select-none ${className}`} aria-hidden="true">
      <div className="h-px w-12 sm:w-24 bg-gradient-to-r from-transparent via-gold/40 to-gold/60" />
      <div className="mx-3 flex items-center gap-1.5">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="opacity-60">
          <path d="M12 7 C9 3, 5 2, 3 5 C5 2, 9 3, 12 7Z" fill="#8A947B" opacity="0.7" />
          <path d="M7 1 Q8 4 7 7" stroke="#B69558" strokeWidth="0.5" fill="none" />
        </svg>
        <div className="w-1.5 h-1.5 rotate-45 bg-gold/60" />
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="opacity-60 -scale-x-100">
          <path d="M12 7 C9 3, 5 2, 3 5 C5 2, 9 3, 12 7Z" fill="#8A947B" opacity="0.7" />
          <path d="M7 1 Q8 4 7 7" stroke="#B69558" strokeWidth="0.5" fill="none" />
        </svg>
      </div>
      <div className="h-px w-12 sm:w-24 bg-gradient-to-l from-transparent via-gold/40 to-gold/60" />
    </div>
  );
};

/* ───────────────────────────────────────────────
   CornerBotanical – richer floral corner decoration
   ─────────────────────────────────────────────── */

export const CornerBotanical: React.FC<{
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
  size?: 'sm' | 'md';
}> = ({ position, className = '', size = 'md' }) => {
  const rotationClass = {
    'top-left': '',
    'top-right': 'scale-x-[-1]',
    'bottom-left': 'scale-y-[-1]',
    'bottom-right': 'scale-[-1]',
  }[position];

  const dim = size === 'sm' ? 70 : 110;

  return (
    <div
      className={`absolute pointer-events-none select-none ${rotationClass} ${className}`}
      aria-hidden="true"
    >
      <svg width={dim} height={dim} viewBox="0 0 120 120" fill="none" className="opacity-50 sm:opacity-65">
        {/* Main vine curves */}
        <path
          d="M4 4 C20 4 40 12 52 28 C62 42 68 62 68 80"
          stroke="#B69558"
          strokeWidth="0.7"
          opacity="0.5"
          fill="none"
        />
        <path
          d="M4 4 C4 20 12 40 28 52 C42 62 62 68 80 68"
          stroke="#B69558"
          strokeWidth="0.7"
          opacity="0.5"
          fill="none"
        />

        {/* Branch leaves along curve 1 */}
        <path d="M18 10 C14 6, 10 8, 12 14 C16 16, 20 12, 18 10Z" fill="#8A947B" opacity="0.6" />
        <path d="M32 18 C28 12, 24 14, 26 20 C30 24, 34 20, 32 18Z" fill="#8A947B" opacity="0.5" />
        <path d="M46 34 C42 28, 38 30, 40 36 C44 40, 48 36, 46 34Z" fill="#8A947B" opacity="0.45" />

        {/* Branch leaves along curve 2 */}
        <path d="M10 18 C6 14, 8 10, 14 12 C16 16, 12 20, 10 18Z" fill="#8A947B" opacity="0.6" />
        <path d="M18 32 C12 28, 14 24, 20 26 C24 30, 20 34, 18 32Z" fill="#8A947B" opacity="0.5" />
        <path d="M34 46 C28 42, 30 38, 36 40 C40 44, 36 48, 34 46Z" fill="#8A947B" opacity="0.45" />

        {/* Primary bloom */}
        <ellipse cx="24" cy="24" rx="7" ry="6.5" fill="#DDA9A6" opacity="0.45" />
        <ellipse cx="24" cy="24" rx="4" ry="3.5" fill="#DDA9A6" opacity="0.65" />
        <circle cx="24" cy="24" r="2" fill="#B69558" opacity="0.75" />

        {/* Secondary small bloom */}
        <ellipse cx="44" cy="14" rx="3.5" ry="3" fill="#DDA9A6" opacity="0.4" />
        <circle cx="44" cy="14" r="1.5" fill="#B69558" opacity="0.6" />

        {/* Tertiary bud */}
        <ellipse cx="14" cy="44" rx="3" ry="2.5" fill="#DDA9A6" opacity="0.35" />
        <circle cx="14" cy="44" r="1.2" fill="#B69558" opacity="0.55" />

        {/* Gold corner accent line */}
        <path
          d="M4 4 L4 16 M4 4 L16 4"
          stroke="#B69558"
          strokeWidth="1"
          opacity="0.35"
        />
      </svg>
    </div>
  );
};

import React from 'react';

interface MonogramLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  theme?: 'dark' | 'gold' | 'light';
}

export const MonogramLogo: React.FC<MonogramLogoProps> = ({
  className = '',
  size = 'md',
  theme = 'gold',
}) => {
  const sizeMap = {
    sm: { width: 56, height: 64 },
    md: { width: 80, height: 90 },
    lg: { width: 110, height: 124 },
    hero: { width: 140, height: 158 },
  };

  const currentSize = sizeMap[size];

  const goldPrimary = '#B69558';
  const goldDark = '#93733A';
  const goldLight = '#D4B87C';
  const blush = '#DDA9A6';
  const sage = '#8A947B';

  const textColor =
    theme === 'dark' ? '#38291F' : theme === 'light' ? '#F8F4EB' : goldDark;
  const accentColor =
    theme === 'dark' ? '#5A4638' : theme === 'light' ? '#D4B87C' : goldPrimary;

  return (
    <div
      className={`inline-flex items-center justify-center relative ${className}`}
      role="img"
      aria-label="U and R Wedding Monogram"
    >
      <svg
        width={currentSize.width}
        height={currentSize.height}
        viewBox="0 0 140 158"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* ─── Outer ornamental frame (vertical oval) ─── */}
        <ellipse
          cx="70"
          cy="79"
          rx="62"
          ry="72"
          stroke={accentColor}
          strokeWidth="0.6"
          opacity="0.35"
        />
        {/* Inner frame */}
        <ellipse
          cx="70"
          cy="79"
          rx="56"
          ry="65"
          stroke={accentColor}
          strokeWidth="0.4"
          opacity="0.25"
        />

        {/* ─── Top botanical crest ─── */}
        {/* Center bloom */}
        <ellipse cx="70" cy="12" rx="5" ry="4.5" fill={blush} opacity="0.7" />
        <ellipse cx="70" cy="12" rx="2.5" ry="2" fill={goldLight} opacity="0.9" />
        {/* Left petals */}
        <path d="M58 18 C54 14, 52 8, 56 6 C60 5, 62 10, 60 14Z" fill={sage} opacity="0.55" />
        <path d="M55 20 C50 18, 46 12, 50 9 C54 7, 56 13, 54 17Z" fill={sage} opacity="0.4" />
        {/* Right petals (mirrored) */}
        <path d="M82 18 C86 14, 88 8, 84 6 C80 5, 78 10, 80 14Z" fill={sage} opacity="0.55" />
        <path d="M85 20 C90 18, 94 12, 90 9 C86 7, 84 13, 86 17Z" fill={sage} opacity="0.4" />
        {/* Small buds */}
        <circle cx="52" cy="14" r="2.5" fill={blush} opacity="0.5" />
        <circle cx="88" cy="14" r="2.5" fill={blush} opacity="0.5" />
        {/* Delicate stem lines */}
        <path d="M60 16 Q65 20 70 18" stroke={goldPrimary} strokeWidth="0.5" opacity="0.5" fill="none" />
        <path d="M80 16 Q75 20 70 18" stroke={goldPrimary} strokeWidth="0.5" opacity="0.5" fill="none" />

        {/* ─── Bottom botanical mirror ─── */}
        <ellipse cx="70" cy="146" rx="4" ry="3.5" fill={blush} opacity="0.55" />
        <path d="M60 140 C56 144, 54 149, 58 151 C62 152, 63 147, 61 143Z" fill={sage} opacity="0.45" />
        <path d="M80 140 C84 144, 86 149, 82 151 C78 152, 77 147, 79 143Z" fill={sage} opacity="0.45" />
        <path d="M62 142 Q66 138 70 140" stroke={goldPrimary} strokeWidth="0.5" opacity="0.4" fill="none" />
        <path d="M78 142 Q74 138 70 140" stroke={goldPrimary} strokeWidth="0.5" opacity="0.4" fill="none" />

        {/* ─── Side filigree swirls ─── */}
        <path
          d="M14 79 Q20 65 28 62 Q22 70 24 79 Q22 88 28 96 Q20 93 14 79Z"
          fill={goldPrimary}
          opacity="0.12"
        />
        <path
          d="M126 79 Q120 65 112 62 Q118 70 116 79 Q118 88 112 96 Q120 93 126 79Z"
          fill={goldPrimary}
          opacity="0.12"
        />

        {/* ─── Central content area ─── */}
        {/* Thin horizontal rule above letters */}
        <line x1="38" y1="55" x2="102" y2="55" stroke={accentColor} strokeWidth="0.5" opacity="0.4" />
        {/* Thin horizontal rule below letters */}
        <line x1="38" y1="103" x2="102" y2="103" stroke={accentColor} strokeWidth="0.5" opacity="0.4" />

        {/* Small ornamental diamond at center top rule */}
        <rect x="68" y="53" width="4" height="4" rx="0.5" fill={goldPrimary} opacity="0.6" transform="rotate(45 70 55)" />
        {/* Small ornamental diamond at center bottom rule */}
        <rect x="68" y="101" width="4" height="4" rx="0.5" fill={goldPrimary} opacity="0.6" transform="rotate(45 70 103)" />

        {/* ─── The Letter U ─── */}
        <text
          x="48"
          y="90"
          fontFamily="'Cormorant Garamond', 'Playfair Display', Georgia, serif"
          fontSize="44"
          fontWeight="600"
          fontStyle="italic"
          fill={textColor}
          textAnchor="middle"
          letterSpacing="-0.02em"
        >
          U
        </text>

        {/* ─── Script ampersand ─── */}
        <text
          x="70"
          y="86"
          fontFamily="'Great Vibes', cursive"
          fontSize="26"
          fill={goldPrimary}
          textAnchor="middle"
          opacity="0.85"
        >
          &amp;
        </text>

        {/* ─── The Letter R ─── */}
        <text
          x="92"
          y="90"
          fontFamily="'Cormorant Garamond', 'Playfair Display', Georgia, serif"
          fontSize="44"
          fontWeight="600"
          fontStyle="italic"
          fill={textColor}
          textAnchor="middle"
          letterSpacing="-0.02em"
        >
          R
        </text>
      </svg>
    </div>
  );
};

import React from 'react';
import { CornerBotanical } from './FloralDecoration';

interface BookPageProps {
  pageNumber: number;
  children: React.ReactNode;
  className?: string;
  isCover?: boolean;
}

export const BookPage = React.forwardRef<HTMLDivElement, BookPageProps>(
  ({ pageNumber, children, className = '', isCover = false }, ref) => {
    return (
      <div
        ref={ref}
        data-density={isCover ? 'hard' : 'soft'}
        className={`relative w-full h-full bg-[#F8F4EB] text-espresso select-none overflow-hidden flex flex-col justify-between shadow-sm ${className}`}
        style={{
          boxSizing: 'border-box',
          backgroundColor: '#F8F4EB',
        }}
      >
        {/* Subtle physical paper texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.035] mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Double gold foil border on every page */}
        <div className="absolute inset-2 sm:inset-3 border border-gold/30 rounded-xl pointer-events-none" />
        <div className="absolute inset-3.5 sm:inset-5 border border-gold/15 rounded-lg pointer-events-none" />

        {/* Inner spine shadow gradient (gives depth when book is open) */}
        <div className="absolute inset-y-0 left-0 w-8 pointer-events-none bg-gradient-to-r from-espresso/8 via-transparent to-transparent hidden md:block" />
        <div className="absolute inset-y-0 right-0 w-8 pointer-events-none bg-gradient-to-l from-espresso/8 via-transparent to-transparent hidden md:block" />

        {/* Corner Botanicals */}
        <CornerBotanical position="top-left" className="top-2 left-2 sm:top-4 sm:left-4 z-10" size="sm" />
        <CornerBotanical position="top-right" className="top-2 right-2 sm:top-4 sm:right-4 z-10" size="sm" />
        <CornerBotanical position="bottom-left" className="bottom-2 left-2 sm:bottom-4 sm:left-4 z-10" size="sm" />
        <CornerBotanical position="bottom-right" className="bottom-2 right-2 sm:bottom-4 sm:right-4 z-10" size="sm" />

        {/* Main Page Content */}
        <div className="relative z-10 flex-1 flex flex-col px-5 sm:px-8 py-5 sm:py-7 overflow-y-auto overflow-x-hidden scrollbar-none">
          {children}
        </div>

        {/* Page Footer / Number */}
        {!isCover && (
          <div className="relative z-10 pb-2.5 text-center pointer-events-none">
            <span className="font-serif italic text-xs text-gold-dark/80 tracking-widest">
              — {pageNumber} —
            </span>
          </div>
        )}
      </div>
    );
  }
);

BookPage.displayName = 'BookPage';

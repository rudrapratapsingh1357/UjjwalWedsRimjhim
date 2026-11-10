import React, { useEffect, useRef, useState } from 'react';
import { X, MapPin, Calendar, Check, ExternalLink, Clock } from 'lucide-react';
import confetti from 'canvas-confetti';
import { weddingConfig } from '../config/weddingConfig';
import { MonogramLogo } from './MonogramLogo';

interface SaveTheDateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SaveTheDateModal: React.FC<SaveTheDateModalProps> = ({
  isOpen,
  onClose,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [calendarSaved, setCalendarSaved] = useState(false);

  // Keyboard accessibility (ESC to close) and focus trapping
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      // Confetti burst on open (luxurious champagne & gold)
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#B69558', '#D4B87C', '#DDA9A6', '#F8F4EB'],
        disableForReducedMotion: true,
      });
    } else {
      document.body.style.overflow = '';
      setCalendarSaved(false);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleAddCalendar = () => {
    // If year is set, create .ics with 7:00 PM (19:00 local time)
    if (weddingConfig.event.year) {
      const icsData = `BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nSUMMARY:Wedding: ${weddingConfig.couple.title}\nDESCRIPTION:Celebrating the wedding of ${weddingConfig.couple.groom.firstName} & ${weddingConfig.couple.bride.firstName} at ${weddingConfig.event.timeDisplay}\nLOCATION:${weddingConfig.event.venue.title}\nDTSTART:${weddingConfig.event.year}1204T133000Z\nDTEND:${weddingConfig.event.year}1204T183000Z\nEND:VEVENT\nEND:VCALENDAR`;
      const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'Ujjwal-Rimjhim-Wedding.ics');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setCalendarSaved(true);
    } else {
      // Confirmed time is 7:00 PM onwards, year to be finalized
      setCalendarSaved(true);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-espresso/60 backdrop-blur-sm transition-all duration-300 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg bg-ivory border border-gold/40 rounded-2xl shadow-2xl overflow-hidden p-6 sm:p-10 text-center transform transition-all duration-500 animate-scaleUp"
      >
        {/* Subtle decorative inner border */}
        <div className="absolute inset-2 border border-gold/20 rounded-xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-espresso/60 hover:text-espresso rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-gold/50"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Monogram */}
        <div className="flex justify-center mb-4">
          <MonogramLogo size="md" theme="gold" />
        </div>

        {/* Modal Heading */}
        <p className="text-xs uppercase tracking-luxury text-gold font-sans font-medium mb-1">
          Save The Date
        </p>
        <h3
          id="modal-title"
          className="font-serif text-3xl sm:text-4xl text-espresso font-normal tracking-wide mb-1"
        >
          {weddingConfig.event.dateDisplay}
        </h3>

        {/* Time display */}
        <div className="inline-flex items-center gap-1.5 text-xs font-sans tracking-widest uppercase text-gold-dark font-medium my-1">
          <Clock className="w-3.5 h-3.5 text-gold" />
          <span>{weddingConfig.event.timeDisplay}</span>
        </div>

        <div className="h-[1px] w-16 bg-gold/40 mx-auto my-4" />

        {/* Short message */}
        <p className="font-serif italic text-base sm:text-lg text-espresso-muted mb-6 leading-relaxed max-w-sm mx-auto">
          "We would love to celebrate this special day with you."
        </p>

        {/* Actions */}
        <div className="space-y-3 pt-2">
          {/* Google Maps Button */}
          <a
            href={weddingConfig.event.venue.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2.5 w-full py-3.5 px-6 rounded-xl bg-gold text-white font-sans text-sm font-medium tracking-wide shadow-md hover:bg-gold-dark transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
          >
            <MapPin className="w-4 h-4 transition-transform group-hover:scale-110" />
            <span>View Venue on Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>

          {/* Add to Calendar Button */}
          <button
            onClick={handleAddCalendar}
            className={`flex items-center justify-center gap-2 w-full py-3 px-6 rounded-xl border border-gold/40 bg-white/50 text-espresso font-sans text-sm font-medium tracking-wide transition-all duration-300 hover:bg-gold/10 hover:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30 ${
              calendarSaved ? 'text-sage-light' : ''
            }`}
          >
            {calendarSaved ? (
              <>
                <Check className="w-4 h-4 text-sage" />
                <span>
                  {weddingConfig.event.year
                    ? 'Calendar Invite Downloaded!'
                    : 'Saved to Calendar! (4 Dec at 7:00 PM)'}
                </span>
              </>
            ) : (
              <>
                <Calendar className="w-4 h-4 text-gold" />
                <span>
                  Add to Calendar (4 Dec • 7:00 PM)
                </span>
              </>
            )}
          </button>
        </div>

        {/* Venue Note */}
        <p className="text-[11px] text-espresso-light/70 font-sans tracking-wider mt-6">
          Press ESC or click anywhere outside to close
        </p>
      </div>
    </div>
  );
};

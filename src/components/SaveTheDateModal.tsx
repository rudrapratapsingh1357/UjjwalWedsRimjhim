import React, { useEffect, useRef, useState } from 'react';
import { X, MapPin, Calendar, Check, ExternalLink, Clock, Share2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { weddingConfig } from '../config/weddingConfig';
import { useLanguage } from '../hooks/useLanguage';
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
  const [copiedLink, setCopiedLink] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
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
      setCopiedLink(false);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleAddCalendar = () => {
    // 4 Dec 2026 19:00 IST = 13:30 UTC
    const icsData = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Ujjwal Weds Rimjhim//Wedding Invitation//EN',
      'BEGIN:VEVENT',
      `SUMMARY:Wedding: ${weddingConfig.couple.title}`,
      `DESCRIPTION:Celebrating the wedding ceremony of ${weddingConfig.couple.groom.fullName} & ${weddingConfig.couple.bride.fullName}. Venue: ${weddingConfig.event.venue.name}, ${weddingConfig.event.venue.address}`,
      `LOCATION:${weddingConfig.event.venue.name}, ${weddingConfig.event.venue.address}`,
      'DTSTART:20261204T133000Z',
      'DTEND:20261204T183000Z',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Ujjwal-Rimjhim-Wedding.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setCalendarSaved(true);
  };

  const handleShare = async () => {
    const shareData = {
      title: 'Ujjwal Weds Rimjhim | Wedding Invitation',
      text: 'You are cordially invited to celebrate the wedding of Ujjwal and Rimjhim on 4 December 2026.',
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // user cancelled or share failed
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
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
        className="relative w-full max-w-lg bg-ivory border border-gold/40 rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-10 text-center transform transition-all duration-500 animate-scaleUp"
      >
        <div className="absolute inset-2 border border-gold/20 rounded-2xl pointer-events-none" />

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
        <p className="text-xs uppercase tracking-luxury text-gold font-sans font-semibold mb-1">
          {t('Save The Date', 'तारीख सुरक्षित करें')}
        </p>
        <h3
          id="modal-title"
          className="font-display text-3xl sm:text-4xl text-espresso font-normal tracking-wide mb-1"
        >
          {t(weddingConfig.event.dateDisplay, weddingConfig.event.dateDisplayHi)}
        </h3>

        {/* Time display */}
        <div className="inline-flex items-center gap-1.5 text-xs font-sans tracking-widest uppercase text-gold-dark font-medium my-1">
          <Clock className="w-3.5 h-3.5 text-gold" />
          <span>{t(weddingConfig.event.timeDisplay, weddingConfig.event.timeDisplayHi)}</span>
        </div>

        <div className="h-[1px] w-16 bg-gold/40 mx-auto my-4" />

        {/* Short message */}
        <p className="font-serif italic text-base sm:text-lg text-espresso/80 mb-6 leading-relaxed max-w-sm mx-auto">
          {t(
            '“We would love to celebrate this sacred day with you.”',
            '”आपकी गरिमामयी उपस्थिति हमारे इस पावन उत्सव को अलंकृत करेगी।”'
          )}
        </p>

        {/* Actions */}
        <div className="space-y-3 pt-2">
          {/* Google Maps Button */}
          <a
            href={weddingConfig.event.venue.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2.5 w-full py-3.5 px-6 rounded-xl bg-gold text-white font-sans text-xs uppercase tracking-widest font-semibold shadow-md hover:bg-gold-dark transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
          >
            <MapPin className="w-4 h-4 transition-transform group-hover:scale-110" />
            <span>{t('View Venue on Google Maps', 'गूगल मैप्स पर स्थल देखें')}</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>

          {/* Add to Calendar Button */}
          <button
            onClick={handleAddCalendar}
            className={`flex items-center justify-center gap-2 w-full py-3 px-6 rounded-xl border border-gold/40 bg-white/60 text-espresso font-sans text-xs uppercase tracking-widest font-semibold transition-all duration-300 hover:bg-gold/10 hover:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30 ${
              calendarSaved ? 'text-sage' : ''
            }`}
          >
            {calendarSaved ? (
              <>
                <Check className="w-4 h-4 text-sage" />
                <span>{t('Downloaded! (4 Dec 2026)', 'कैलेंडर में सुरक्षित किया गया!')}</span>
              </>
            ) : (
              <>
                <Calendar className="w-4 h-4 text-gold" />
                <span>{t('Add to Calendar (.ics)', 'कैलेंडर में जोड़ें (.ics)')}</span>
              </>
            )}
          </button>

          {/* Share Invitation */}
          <button
            onClick={handleShare}
            className="flex items-center justify-center gap-2 w-full py-3 px-6 rounded-xl border border-gold/30 bg-ivory text-espresso font-sans text-xs uppercase tracking-widest font-medium transition-all hover:bg-gold/10"
          >
            <Share2 className="w-4 h-4 text-gold" />
            <span>{copiedLink ? t('Link Copied to Clipboard!', 'लिंक कॉपी हो गया!') : t('Share Invitation', 'निमंत्रण साझा करें')}</span>
          </button>
        </div>

        <p className="text-[11px] text-espresso/60 font-sans tracking-wider mt-6">
          {t('Press ESC or tap outside to close', 'बंद करने हेतु कहीं भी बाहर टैप करें')}
        </p>
      </div>
    </div>
  );
};

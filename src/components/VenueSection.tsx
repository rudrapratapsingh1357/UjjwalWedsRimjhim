import React from 'react';
import { MapPin, Navigation as NavIcon, Calendar, Clock, ExternalLink } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { weddingConfig } from '../config/weddingConfig';
import { FloralDivider } from './FloralDecoration';

export const VenueSection: React.FC = () => {
  const { isHindi, t } = useLanguage();
  const { venue, dateDisplay, dateDisplayHi, timeDisplay, timeDisplayHi } = weddingConfig.event;

  return (
    <section id="venue-section" className="relative w-full py-16 px-4 bg-ivory text-espresso">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-sans text-[11px] sm:text-xs uppercase tracking-luxury text-gold font-semibold mb-2">
          {t('Location & Directions', 'विवाह स्थल एवं दिशा निर्देश')}
        </p>
        <h2 className="font-display text-3xl sm:text-5xl text-espresso font-normal tracking-wide mb-4">
          {t('Wedding Venue', 'विवाह स्थल')}
        </h2>
        <div className="w-16 h-px bg-gold/50 mx-auto mb-8" />

        <div className="p-8 sm:p-10 rounded-3xl bg-beige/25 border border-gold/30 shadow-card relative overflow-hidden">
          {/* Inner accent ring */}
          <div className="absolute inset-2 border border-gold/15 rounded-2xl pointer-events-none" />

          {/* Location icon badge */}
          <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center text-gold">
            <MapPin className="w-7 h-7" />
          </div>

          <h3 className="font-display text-2xl sm:text-3xl font-medium text-espresso mb-2">
            {isHindi ? venue.nameHi : venue.name}
          </h3>

          <p className="font-serif text-lg text-espresso/80 max-w-md mx-auto mb-6">
            {isHindi ? venue.addressHi : venue.address}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-sans uppercase tracking-widest text-gold-dark mb-8">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/60 border border-gold/20">
              <Calendar className="w-4 h-4 text-gold" />
              <span>{t(dateDisplay, dateDisplayHi)}</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/60 border border-gold/20">
              <Clock className="w-4 h-4 text-gold" />
              <span>{t(timeDisplay, timeDisplayHi)}</span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={venue.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gold text-white font-sans text-xs uppercase tracking-widest font-semibold shadow-md hover:bg-gold-dark transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-gold"
            >
              <NavIcon className="w-4 h-4" />
              <span>{t('Open in Google Maps', 'गूगल मैप्स पर देखें')}</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>
        </div>

        <FloralDivider variant="simple" className="mt-12" />
      </div>
    </section>
  );
};

import React from 'react';
import { BookPage } from './BookPage';
import { MapPin, Phone, MessageCircle, ExternalLink, CalendarHeart } from 'lucide-react';
import { weddingConfig } from '../config/weddingConfig';
import { useLanguage } from '../hooks/useLanguage';
import { FloralDivider } from './FloralDecoration';

interface VenueClosingPageProps {
  pageNumber: number;
  onSaveCalendar: () => void;
}

export const VenueClosingPage = React.forwardRef<HTMLDivElement, VenueClosingPageProps>(
  ({ pageNumber, onSaveCalendar }, ref) => {
    const { isHindi, t } = useLanguage();
    const { venue } = weddingConfig.event;
    const { contacts, traditional } = weddingConfig;

    return (
      <BookPage ref={ref} pageNumber={pageNumber} isCover={true}>
        <div className="flex flex-col items-center justify-between text-center h-full py-1">
          {/* Header */}
          <div className="pt-1">
            <h2 className="font-display text-2xl sm:text-3xl text-espresso font-normal tracking-wide">
              {t('Venue & Contact', 'स्थल एवं संपर्क सूत्र')}
            </h2>
            <div className="w-14 h-px bg-gold/50 mx-auto mt-1 mb-2" />
          </div>

          {/* Venue Card */}
          <div className="w-full max-w-sm p-3.5 rounded-2xl bg-beige/25 border border-gold/30 text-center shadow-subtle">
            <h3 className="font-display text-lg sm:text-xl font-medium text-espresso">
              {isHindi ? venue.nameHi : venue.name}
            </h3>
            <p className="font-serif text-xs text-espresso/80 mt-0.5">
              {isHindi ? venue.addressHi : venue.address}
            </p>

            <div className="flex items-center justify-center gap-2.5 mt-2.5">
              <a
                href={venue.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gold text-white font-sans text-[11px] font-semibold tracking-wider hover:bg-gold-dark transition-colors shadow-xs"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>{t('Get Directions', 'गूगल मैप्स')}</span>
                <ExternalLink className="w-3 h-3 opacity-80" />
              </a>

              <button
                onClick={onSaveCalendar}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-gold/40 bg-white/70 text-espresso font-sans text-[11px] font-medium tracking-wider hover:bg-gold/10 transition-colors shadow-xs"
              >
                <CalendarHeart className="w-3.5 h-3.5 text-gold" />
                <span>{t('Add to Calendar', 'कैलेंडर')}</span>
              </button>
            </div>
          </div>

          {/* Contacts Section */}
          <div className="w-full max-w-sm my-1 py-2.5 px-3.5 rounded-2xl bg-white/75 border border-gold/30 shadow-subtle">
            <span className="font-sans text-[10px] uppercase tracking-widest text-gold-dark font-semibold mb-1.5 block">
              {t('Awaiting Your Arrival (Contacts)', 'आपकी प्रतीक्षा में (संपर्क सूत्र)')}
            </span>

            <div className="space-y-1.5 text-left">
              {contacts.map((c, i) => (
                <div key={i} className="flex items-center justify-between py-1 border-b border-gold/15 last:border-b-0 text-xs">
                  <div>
                    <span className="font-serif font-medium text-espresso text-sm">
                      {isHindi ? c.nameHi : c.name}
                    </span>
                    <span className="text-[11px] text-espresso/65 block font-sans">
                      {c.phone}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={`tel:+91${c.phone}`}
                      className="p-1.5 rounded-lg bg-gold/15 text-gold-dark hover:bg-gold hover:text-white transition-colors"
                      title={`Call ${c.name}`}
                    >
                      <Phone className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={`https://wa.me/91${c.phone}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-sage/20 text-sage hover:bg-sage hover:text-white transition-colors"
                      title={`WhatsApp ${c.name}`}
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Traditional Closing Note */}
          <div className="max-w-xs text-center px-2 my-2">
            <p className="text-espresso/90 font-serif italic text-xs sm:text-[13px] leading-relaxed">
              "{traditional.closingNote}"
            </p>
            {traditional.closingAttribution && (
              <p className="font-display text-gold-dark text-[11px] sm:text-xs font-semibold tracking-wider mt-1.5 uppercase">
                — {traditional.closingAttribution}
              </p>
            )}
          </div>

          <FloralDivider variant="minimal" className="my-0 scale-75" />
        </div>
      </BookPage>
    );
  }
);

VenueClosingPage.displayName = 'VenueClosingPage';

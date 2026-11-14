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

    const handleSendWishes = () => {
      const primaryPhone = contacts[0].phone;
      const text = encodeURIComponent(
        `*Ujjwal Weds Rimjhim — Best Wishes & Blessings*\n\n` +
        `Warmest congratulations and best wishes to Ujjwal & Rimjhim for a lifetime of love, joy, and togetherness! ✨💐`
      );
      window.open(`https://wa.me/91${primaryPhone}?text=${text}`, '_blank');
    };

    return (
      <BookPage ref={ref} pageNumber={pageNumber} isCover={true}>
        <div className="flex flex-col items-center justify-between text-center h-full py-1">
          {/* Header */}
          <div>
            <p className="font-sans text-[10px] uppercase tracking-luxury text-gold font-semibold mb-0.5">
              {t('Venue & Contact', 'स्थल एवं संपर्क')}
            </p>
            <h2 className="font-display text-2xl sm:text-3xl text-espresso font-normal tracking-wide">
              {t('Celebration Venue', 'विवाह स्थल')}
            </h2>
            <div className="w-12 h-px bg-gold/50 mx-auto mt-1 mb-2" />
          </div>

          {/* Venue Card */}
          <div className="w-full max-w-sm p-3 rounded-xl bg-beige/25 border border-gold/30 text-center">
            <h3 className="font-display text-lg sm:text-xl font-medium text-espresso">
              {isHindi ? venue.nameHi : venue.name}
            </h3>
            <p className="font-serif text-xs text-espresso/80 mt-0.5">
              {isHindi ? venue.addressHi : venue.address}
            </p>

            <div className="flex items-center justify-center gap-2 mt-2">
              <a
                href={venue.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gold text-white font-sans text-[11px] font-semibold tracking-wider hover:bg-gold-dark transition-colors shadow-xs"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>{t('Google Maps', 'गूगल मैप्स')}</span>
                <ExternalLink className="w-3 h-3 opacity-80" />
              </a>

              <button
                onClick={onSaveCalendar}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full border border-gold/40 bg-white/70 text-espresso font-sans text-[11px] font-medium tracking-wider hover:bg-gold/10"
              >
                <CalendarHeart className="w-3.5 h-3.5 text-gold" />
                <span>{t('Calendar', 'कैलेंडर')}</span>
              </button>
            </div>
          </div>

          {/* Contacts Section */}
          <div className="w-full max-w-sm my-1 py-2 px-3 rounded-xl bg-white/70 border border-gold/30">
            <span className="font-sans text-[9px] uppercase tracking-widest text-gold-dark font-semibold mb-1 block">
              {t('Awaiting Your Arrival (Contacts)', 'आपकी प्रतीक्षा में (संपर्क सूत्र)')}
            </span>

            <div className="space-y-1 text-left">
              {contacts.map((c, i) => (
                <div key={i} className="flex items-center justify-between py-0.5 border-b border-gold/15 last:border-b-0 text-xs">
                  <div>
                    <span className="font-serif font-medium text-espresso text-xs">
                      {isHindi ? c.nameHi : c.name}
                    </span>
                    <span className="text-[10px] text-espresso/60 block font-sans">
                      {c.phone}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <a
                      href={`tel:+91${c.phone}`}
                      className="p-1 rounded bg-gold/15 text-gold-dark hover:bg-gold hover:text-white transition-colors"
                      title={`Call ${c.name}`}
                    >
                      <Phone className="w-3 h-3" />
                    </a>
                    <a
                      href={`https://wa.me/91${c.phone}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 rounded bg-sage/20 text-sage hover:bg-sage hover:text-white transition-colors"
                      title={`WhatsApp ${c.name}`}
                    >
                      <MessageCircle className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Send Blessings via WhatsApp */}
          <div className="my-1">
            <button
              onClick={handleSendWishes}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gold/15 border border-gold text-gold-dark hover:bg-gold hover:text-white font-sans text-xs font-semibold tracking-wider uppercase transition-all shadow-xs"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>{t('Send Blessings via WhatsApp', 'व्हाट्सएप पर शुभकामना भेजें')}</span>
            </button>
          </div>

          {/* Traditional Closing Note */}
          <div className="max-w-xs text-center text-espresso/80 font-serif italic text-[11px] leading-snug px-2">
            "{traditional.closingNote}"
          </div>

          <FloralDivider variant="minimal" className="my-0 scale-75" />
        </div>
      </BookPage>
    );
  }
);

VenueClosingPage.displayName = 'VenueClosingPage';

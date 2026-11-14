import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { weddingConfig } from '../config/weddingConfig';
import { FloralDivider } from './FloralDecoration';

export const EventTimeline: React.FC = () => {
  const { t } = useLanguage();
  const { schedule } = weddingConfig.event;

  return (
    <section id="events-section" className="relative w-full py-14 sm:py-20 px-4 bg-beige/20 text-espresso">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="font-sans text-[11px] sm:text-xs uppercase tracking-luxury text-gold font-semibold mb-2">
            {t('Ceremonies & Celebrations', weddingConfig.traditional.mangalikKaryakram)}
          </p>
          <h2 className="font-display text-3xl sm:text-5xl text-espresso font-normal tracking-wide">
            {t('Wedding Itinerary', 'मांगलिक कार्यक्रम विवरण')}
          </h2>
          <div className="w-16 h-px bg-gold/50 mx-auto mt-4" />
        </div>

        {/* Schedule cards */}
        <div className="space-y-8">
          {schedule.map((dayPlan, dayIdx) => (
            <div
              key={dayIdx}
              className="bg-ivory border border-gold/30 rounded-2xl p-6 sm:p-8 shadow-subtle relative overflow-hidden"
            >
              {/* Day header badge */}
              <div className="flex flex-wrap items-center justify-between border-b border-gold/20 pb-4 mb-6 gap-2">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-gold" />
                  <span className="font-display text-xl sm:text-2xl text-espresso font-medium">
                    {t(dayPlan.day, dayPlan.dayHi)}
                  </span>
                </div>
                <span className="font-sans text-xs sm:text-sm font-semibold tracking-wider text-gold-dark px-3 py-1 bg-gold/10 rounded-full">
                  {t(dayPlan.date, dayPlan.dateHi)}
                </span>
              </div>

              {/* Day events grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {dayPlan.events.map((evt, evtIdx) => (
                  <div
                    key={evtIdx}
                    className="flex items-start gap-4 p-4 rounded-xl bg-beige/15 border border-gold/15 hover:border-gold/40 transition-colors"
                  >
                    <div className="text-2xl select-none pt-0.5">{evt.icon || '✨'}</div>
                    <div className="flex-1">
                      <h4 className="font-serif text-lg sm:text-xl font-medium text-espresso">
                        {t(evt.name, evt.nameHi)}
                      </h4>
                      <div className="flex items-center gap-1.5 text-xs text-gold-dark font-sans tracking-wider mt-1">
                        <Clock className="w-3.5 h-3.5 text-gold" />
                        <span>{t(evt.time, evt.timeHi)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <FloralDivider variant="simple" className="mt-12" />
      </div>
    </section>
  );
};

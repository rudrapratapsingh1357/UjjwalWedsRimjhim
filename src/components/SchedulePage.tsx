import React from 'react';
import { BookPage } from './BookPage';
import { Calendar, Clock } from 'lucide-react';
import { weddingConfig } from '../config/weddingConfig';
import { useLanguage } from '../hooks/useLanguage';
import { FloralDivider } from './FloralDecoration';

export const SchedulePage = React.forwardRef<HTMLDivElement, { pageNumber: number }>(
  ({ pageNumber }, ref) => {
    const { t } = useLanguage();
    const { schedule } = weddingConfig.event;

    return (
      <BookPage ref={ref} pageNumber={pageNumber}>
        <div className="flex flex-col items-center justify-between text-center h-full py-1">
          {/* Header */}
          <div>
            <p className="font-sans text-[10px] uppercase tracking-luxury text-gold font-semibold mb-0.5">
              {weddingConfig.traditional.mangalikKaryakram}
            </p>
            <h2 className="font-display text-2xl sm:text-3xl text-espresso font-normal tracking-wide">
              {t('Auspicious Schedule', 'मांगलिक कार्यक्रम')}
            </h2>
            <div className="w-12 h-px bg-gold/50 mx-auto mt-1 mb-2" />
          </div>

          {/* Schedule list */}
          <div className="w-full space-y-2.5 max-w-sm my-auto">
            {schedule.map((dayPlan, idx) => (
              <div
                key={idx}
                className="p-2 sm:p-2.5 rounded-xl bg-beige/25 border border-gold/30 text-left"
              >
                {/* Day Header */}
                <div className="flex items-center justify-between border-b border-gold/20 pb-1 mb-1.5">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-gold" />
                    <span className="font-display text-sm font-semibold text-espresso">
                      {t(dayPlan.day, dayPlan.dayHi)}
                    </span>
                  </div>
                  <span className="font-sans text-[10px] text-gold-dark font-medium px-2 py-0.5 bg-gold/10 rounded-full">
                    {t(dayPlan.date, dayPlan.dateHi)}
                  </span>
                </div>

                {/* Day ceremonies */}
                <div className="grid grid-cols-1 gap-1">
                  {dayPlan.events.map((evt, eIdx) => (
                    <div
                      key={eIdx}
                      className="flex items-center justify-between py-1 px-1.5 rounded-lg bg-white/60 text-xs"
                    >
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm select-none">{evt.icon || '✨'}</span>
                        <span className="font-serif font-medium text-espresso text-xs sm:text-[13px]">
                          {t(evt.name, evt.nameHi)}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-[11px] text-gold-dark font-sans font-medium">
                        <Clock className="w-3 h-3 text-gold" />
                        <span>{t(evt.time, evt.timeHi)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <FloralDivider variant="minimal" className="my-0 scale-75" />
        </div>
      </BookPage>
    );
  }
);

SchedulePage.displayName = 'SchedulePage';


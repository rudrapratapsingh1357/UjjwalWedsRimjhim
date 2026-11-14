import React, { useState, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isCompleted: boolean;
}

export const WeddingCountdown: React.FC = () => {
  const { t } = useLanguage();

  const calculateTimeLeft = (): TimeLeft => {
    // 4 December 2026, 19:00 IST (UTC+05:30)
    const targetDate = new Date('2026-12-04T19:00:00+05:30').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isCompleted: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isCompleted: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { value: timeLeft.days, labelEn: 'Days', labelHi: 'दिन' },
    { value: timeLeft.hours, labelEn: 'Hours', labelHi: 'घंटे' },
    { value: timeLeft.minutes, labelEn: 'Minutes', labelHi: 'मिनट' },
    { value: timeLeft.seconds, labelEn: 'Seconds', labelHi: 'सेकंड' },
  ];

  return (
    <section className="relative w-full py-10 px-4 bg-beige/30 text-center select-none">
      <div className="max-w-3xl mx-auto">
        <p className="font-sans text-[11px] sm:text-xs uppercase tracking-luxury text-gold font-semibold mb-2">
          {t('Counting Down To The Auspicious Moment', 'शुभ मुहूर्त की प्रतीक्षा')}
        </p>
        <h3 className="font-display text-2xl sm:text-3xl text-espresso font-normal tracking-wide mb-6">
          {timeLeft.isCompleted
            ? t('The Celebrations Have Begun!', 'शुभ विवाह महोत्सव प्रारम्भ!')
            : t('Together in Love & Harmony', 'दाम्पत्य जीवन की ओर अग्रसर')}
        </h3>

        {!timeLeft.isCompleted ? (
          <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-md mx-auto">
            {timeUnits.map((unit, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-2.5 sm:p-4 rounded-xl bg-ivory border border-gold/30 shadow-subtle"
              >
                <span className="font-display text-2xl sm:text-4xl font-medium text-gold-dark">
                  {String(unit.value).padStart(2, '0')}
                </span>
                <span className="font-sans text-[10px] sm:text-xs uppercase tracking-wider text-espresso/70 mt-1">
                  {t(unit.labelEn, unit.labelHi)}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <p className="font-serif italic text-lg text-gold-dark">
            {t(
              'Thank you for blessing the couple with your love and presence!',
              'नव-दम्पति को शुभाशीर्वाद प्रदान करने हेतु हार्दिक धन्यवाद!'
            )}
          </p>
        )}
      </div>
    </section>
  );
};

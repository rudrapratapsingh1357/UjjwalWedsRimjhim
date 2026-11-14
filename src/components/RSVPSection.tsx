import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { weddingConfig } from '../config/weddingConfig';
import { FloralDivider } from './FloralDecoration';

export const RSVPSection: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    guests: '1',
    attending: 'yes',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    // Direct WhatsApp share format
    const primaryPhone = weddingConfig.contacts[0].phone;
    const whatsappText = encodeURIComponent(
      `*Wedding RSVP — Ujjwal Weds Rimjhim*\n\n` +
      `Name: ${formData.name}\n` +
      `Attending: ${formData.attending === 'yes' ? 'Joyfully Accept (हाँ, उपस्थित रहूँगा/रहूँगी)' : 'Regretfully Decline (उपस्थित नहीं हो सकूँगा/सकूँगी)'}\n` +
      `Number of Guests: ${formData.guests}\n` +
      (formData.message ? `Blessings/Message: ${formData.message}\n` : '')
    );

    // Prompt user to send via WhatsApp or record confirmation
    setSubmitted(true);
    window.open(`https://wa.me/91${primaryPhone}?text=${whatsappText}`, '_blank');
  };

  return (
    <section id="rsvp-section" className="relative w-full py-16 px-4 bg-beige/25 text-espresso">
      <div className="max-w-xl mx-auto text-center">
        <p className="font-sans text-[11px] sm:text-xs uppercase tracking-luxury text-gold font-semibold mb-2">
          {t('Kindly Respond', 'उपस्थिति पुष्टि')}
        </p>
        <h2 className="font-display text-3xl sm:text-5xl text-espresso font-normal tracking-wide mb-4">
          {t('RSVP', 'शुभ संदेश एवं स्वीकृति')}
        </h2>
        <div className="w-16 h-px bg-gold/50 mx-auto mb-8" />

        <div className="p-6 sm:p-10 rounded-3xl bg-ivory border border-gold/30 shadow-card text-left relative">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <CheckCircle className="w-12 h-12 text-sage mx-auto" />
              <h3 className="font-display text-2xl text-espresso font-medium">
                {t('Thank You So Much!', 'हार्दिक धन्यवाद!')}
              </h3>
              <p className="font-serif text-espresso/80 text-base max-w-sm mx-auto">
                {t(
                  'Your blessing and response have been noted with great warmth and gratitude.',
                  'आपकी मंगलकामनाएं एवं उपस्थिति पुष्टि हमारे लिए अत्यंत अमूल्य हैं।'
                )}
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2 rounded-full border border-gold/40 text-gold-dark font-sans text-xs uppercase tracking-wider hover:bg-gold/10"
              >
                {t('Send Another Response', 'अन्य संदेश भेजें')}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block font-sans text-xs uppercase tracking-wider text-espresso/80 font-semibold mb-1.5">
                  {t('Your Full Name *', 'आपका शुभ नाम *')}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={t('Enter your full name', 'अपना नाम यहाँ लिखें')}
                  className="w-full px-4 py-3 rounded-xl border border-gold/30 bg-white/70 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold font-serif text-espresso text-base"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-sans text-xs uppercase tracking-wider text-espresso/80 font-semibold mb-1.5">
                    {t('Will you attend?', 'क्या आप उपस्थित रहेंगे?')}
                  </label>
                  <select
                    value={formData.attending}
                    onChange={(e) => setFormData({ ...formData, attending: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gold/30 bg-white/70 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold font-serif text-espresso text-base"
                  >
                    <option value="yes">{t('Joyfully Accept (हाँ)', 'सहर्ष स्वीकार (हाँ)')}</option>
                    <option value="no">{t('Regretfully Decline (नहीं)', 'असमर्थ (नहीं)')}</option>
                  </select>
                </div>

                <div>
                  <label className="block font-sans text-xs uppercase tracking-wider text-espresso/80 font-semibold mb-1.5">
                    {t('Number of Guests', 'अतिथियों की संख्या')}
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gold/30 bg-white/70 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold font-serif text-espresso text-base"
                  >
                    {[1, 2, 3, 4, 5, '5+'].map((num) => (
                      <option key={num} value={num}>
                        {num} {t('Person(s)', 'सदस्य')}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-sans text-xs uppercase tracking-wider text-espresso/80 font-semibold mb-1.5">
                  {t('Warm Wishes / Message', 'नव-युगल हेतु शुभाशीर्वाद / संदेश')}
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t('Share your blessing for the couple...', 'अपनी शुभकामनाएं लिखें...')}
                  className="w-full px-4 py-3 rounded-xl border border-gold/30 bg-white/70 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold font-serif text-espresso text-base resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gold text-white font-sans text-xs uppercase tracking-widest font-semibold shadow-md hover:bg-gold-dark transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-gold"
              >
                <Send className="w-4 h-4" />
                <span>{t('Send RSVP via WhatsApp', 'व्हाट्सएप द्वारा पुष्टि भेजें')}</span>
              </button>
            </form>
          )}
        </div>

        <FloralDivider variant="simple" className="mt-12" />
      </div>
    </section>
  );
};

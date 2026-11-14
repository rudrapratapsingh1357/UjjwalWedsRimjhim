import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { weddingConfig } from '../config/weddingConfig';
import { FloralDivider } from './FloralDecoration';

export const WeddingInvitation: React.FC = () => {
  const { isHindi, t } = useLanguage();
  const { traditional, couple, grandparents } = weddingConfig;

  return (
    <section id="traditional-invitation" className="relative w-full py-12 sm:py-16 px-4 bg-ivory text-center">
      <div className="max-w-3xl mx-auto">
        {/* Top Invocations */}
        <p className="font-serif text-sm sm:text-base text-gold font-semibold tracking-widest mb-2">
          {traditional.jayShriRam}
        </p>

        {/* Ganesh Shloka */}
        <div className="my-4 px-4 py-3 rounded-2xl bg-beige/20 border border-gold/20 inline-block max-w-xl mx-auto">
          <p className="text-xs sm:text-sm md:text-base text-espresso/90 whitespace-pre-line leading-relaxed font-serif"
             style={{ fontFamily: "'Noto Serif Devanagari', 'Cormorant Garamond', serif" }}>
            {traditional.ganeshShloka}
          </p>
        </div>

        <FloralDivider variant="ornate" className="my-6" />

        {/* Salutation */}
        <p className="font-serif italic text-lg sm:text-xl text-gold-dark mb-3">
          {t('Dear Family & Esteemed Friends,', 'परम स्नेही स्वजन,')}
        </p>

        <p className="font-serif text-base sm:text-lg text-espresso/80 max-w-xl mx-auto mb-6">
          {t(
            'By the boundless grace of the Almighty Lord,',
            '”परम पिता परमेश्वर की असीम अनुकम्पा से”'
          )}
        </p>

        {/* Grandparents Blessing */}
        <div className="my-4 space-y-1">
          <p className="font-serif text-lg sm:text-xl text-espresso font-medium">
            {isHindi ? grandparents.grandfatherHi : grandparents.grandfather}
            <span className="font-serif text-gold-dark mx-2">&amp;</span>
            {isHindi ? grandparents.grandmotherHi : grandparents.grandmother}
          </p>
          <p className="font-sans text-[11px] sm:text-xs uppercase tracking-widest text-gold font-semibold">
            {t('Bless their beloved grandson', 'अपने प्रिय सुपौत्र')}
          </p>
        </div>

        {/* Couple highlight */}
        <div className="my-6 py-4 px-6 rounded-2xl bg-white/60 border border-gold/30 shadow-subtle max-w-lg mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl text-espresso font-normal">
            {isHindi ? couple.groom.fullNameHi : couple.groom.fullName}
          </h2>
          <p className="font-sans text-[11px] text-espresso/70 mt-1">
            {isHindi ? couple.groom.motherHi : couple.groom.mother} एवं {isHindi ? couple.groom.fatherHi : couple.groom.father}
          </p>
          <p className="font-sans text-[10px] text-espresso/60 tracking-wider">
            {isHindi ? couple.groom.residenceHi : couple.groom.residence}
          </p>

          <div className="my-3 flex items-center justify-center gap-3">
            <div className="h-px w-10 bg-gold/40" />
            <span className="font-script text-2xl sm:text-3xl text-gold">
              {t('with', 'संग')}
            </span>
            <div className="h-px w-10 bg-gold/40" />
          </div>

          <h2 className="font-display text-3xl sm:text-4xl text-espresso font-normal">
            {isHindi ? couple.bride.fullNameHi : couple.bride.fullName}
          </h2>
          <p className="font-sans text-[11px] text-espresso/70 mt-1">
            {isHindi ? couple.bride.motherHi : couple.bride.mother} एवं {isHindi ? couple.bride.fatherHi : couple.bride.father}
          </p>
          <p className="font-sans text-[10px] text-espresso/60 tracking-wider">
            {isHindi ? couple.bride.residenceHi : couple.bride.residence}
          </p>
        </div>

        {/* Dampatya Sutra Bandhan badge */}
        <div className="inline-block my-4 px-6 py-2 rounded-full bg-gold/15 border border-gold/40">
          <span className="font-serif text-base sm:text-lg font-semibold text-gold-dark tracking-wider">
            {t('Sacred Matrimonial Alliance', traditional.dampatySutraBandhan)}
          </span>
        </div>

        {/* Vedic Sacred Vows description */}
        <div className="max-w-xl mx-auto my-4 text-espresso/85 leading-relaxed font-serif text-base sm:text-lg">
          {isHindi ? (
            <p style={{ fontFamily: "'Noto Serif Devanagari', serif" }}>
              वैदिक मंत्रोच्चार सहित पवित्र अग्नि देव के समक्ष सात फेरों के वैवाहिक बन्धन में बँधने जा रहे हैं।
              आप इस मंगल क्षण के साक्षी बन नव-युगल को अपना शुभाशीर्वाद प्रदान कर अनुगृहित करें।
            </p>
          ) : (
            <p>
              Are tying the sacred knot with Vedic chants before the holy Agni Dev taking the seven sacred vows.
              We cordially invite you to witness these auspicious moments and grace the newly wedded couple with your warm blessings.
            </p>
          )}
        </div>

        <FloralDivider variant="simple" className="mt-8 mb-2" />
      </div>
    </section>
  );
};


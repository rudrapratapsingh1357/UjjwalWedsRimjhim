import React from 'react';
import { BookPage } from './BookPage';
import { weddingConfig } from '../config/weddingConfig';
import { useLanguage } from '../hooks/useLanguage';
import { FloralDivider } from './FloralDecoration';

export const AnnouncementPage = React.forwardRef<HTMLDivElement, { pageNumber: number }>(
  ({ pageNumber }, ref) => {
    const { isHindi, t } = useLanguage();
    const { couple, grandparents, traditional } = weddingConfig;

    return (
      <BookPage ref={ref} pageNumber={pageNumber}>
        <div className="flex flex-col items-center justify-between text-center h-full py-1">
          {/* Top Invocations */}
          <div className="space-y-1">
            <p className="font-serif text-xs text-gold font-semibold tracking-widest">
              {traditional.jayShriRam}
            </p>
            <div className="p-2 rounded-xl bg-beige/30 border border-gold/20 inline-block max-w-xs mx-auto">
              <p className="text-[11px] sm:text-xs text-espresso/90 whitespace-pre-line leading-relaxed font-serif"
                 style={{ fontFamily: "'Noto Serif Devanagari', 'Cormorant Garamond', serif" }}>
                {traditional.ganeshShloka}
              </p>
            </div>
          </div>

          {/* Salutation */}
          <div className="my-1">
            <p className="font-serif italic text-sm text-gold-dark font-medium">
              {t('Dear Family & Esteemed Friends,', 'परम स्नेही स्वजन,')}
            </p>
            <p className="font-serif text-xs text-espresso/80">
              {t('By the boundless grace of the Almighty Lord', '”परम पिता परमेश्वर की असीम अनुकम्पा से”')}
            </p>
          </div>

          {/* Grandparents Blessing */}
          <div className="my-1 py-1 px-3 rounded-lg bg-gold/10 border border-gold/20 max-w-xs">
            <p className="font-serif text-xs sm:text-sm text-espresso font-medium">
              {isHindi ? grandparents.grandfatherHi : grandparents.grandfather}
              <span className="font-serif text-gold-dark mx-1">&amp;</span>
              {isHindi ? grandparents.grandmotherHi : grandparents.grandmother}
            </p>
            <p className="font-sans text-[9px] uppercase tracking-widest text-gold-dark font-semibold">
              {t('Bless their beloved grandson', 'अपने प्रिय सुपौत्र')}
            </p>
          </div>

          {/* Couple Announcement Centerpiece */}
          <div className="w-full max-w-sm my-1 py-2 px-3 rounded-xl bg-white/70 border border-gold/30 shadow-subtle">
            {/* Groom */}
            <h3 className="font-display text-xl sm:text-2xl text-espresso font-medium">
              {isHindi ? couple.groom.fullNameHi : couple.groom.fullName}
            </h3>
            <p className="font-serif text-[11px] text-espresso/80">
              {t('Son of: ', 'सुपुत्र: ')}
              {isHindi ? couple.groom.motherHi : couple.groom.mother} & {isHindi ? couple.groom.fatherHi : couple.groom.father}
            </p>
            <p className="font-sans text-[9px] text-espresso/60 tracking-wider">
              {isHindi ? couple.groom.residenceHi : couple.groom.residence}
            </p>

            {/* Weds Divider */}
            <div className="flex items-center justify-center gap-2 my-1">
              <div className="h-px w-8 bg-gold/40" />
              <span className="font-script text-xl text-gold font-normal">
                {isHindi ? 'संग' : 'Weds'}
              </span>
              <div className="h-px w-8 bg-gold/40" />
            </div>

            {/* Bride */}
            <h3 className="font-display text-xl sm:text-2xl text-espresso font-medium">
              {isHindi ? couple.bride.fullNameHi : couple.bride.fullName}
            </h3>
            <p className="font-serif text-[11px] text-espresso/80">
              {t('Daughter of: ', 'सुपुत्री: ')}
              {isHindi ? couple.bride.motherHi : couple.bride.mother} & {isHindi ? couple.bride.fatherHi : couple.bride.father}
            </p>
            <p className="font-sans text-[9px] text-espresso/60 tracking-wider">
              {isHindi ? couple.bride.residenceHi : couple.bride.residence}
            </p>
          </div>

          {/* Dampatya Sutra Bandhan Badge */}
          <div className="inline-block px-4 py-1 rounded-full bg-gold/15 border border-gold/40 my-1">
            <span className="font-serif text-xs font-semibold text-gold-dark tracking-wider">
              {t('Sacred Matrimonial Alliance', traditional.dampatySutraBandhan)}
            </span>
          </div>

          {/* Sacred Vows Text */}
          <div className="max-w-xs text-center text-espresso/85 font-serif text-[11px] sm:text-xs leading-relaxed my-1">
            {isHindi ? (
              <p style={{ fontFamily: "'Noto Serif Devanagari', serif" }}>
                वैदिक मंत्रोच्चार सहित पवित्र अग्नि देव के समक्ष सात फेरों के वैवाहिक बन्धन में बँधने जा रहे हैं।
                आप इस मंगल क्षण के साक्षी बन नव-युगल को अपना शुभाशीर्वाद प्रदान कर अनुगृहित करें।
              </p>
            ) : (
              <p>
                Are taking the sacred seven vows with Vedic chants before the holy Agni Dev.
                We cordially invite you to witness this auspicious occasion and bless the couple.
              </p>
            )}
          </div>

          <FloralDivider variant="minimal" className="my-0 scale-75" />
        </div>
      </BookPage>
    );
  }
);

AnnouncementPage.displayName = 'AnnouncementPage';

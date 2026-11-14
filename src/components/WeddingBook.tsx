import React, { useRef, useState, useCallback, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { ChevronLeft, ChevronRight, Globe, BookOpen, Share2 } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { CoverPage } from './CoverPage';
import { AnnouncementPage } from './AnnouncementPage';
import { SchedulePage } from './SchedulePage';
import { FamilyPage } from './FamilyPage';
import { BlessingsPage } from './BlessingsPage';
import { VenueClosingPage } from './VenueClosingPage';
import { SaveTheDateModal } from './SaveTheDateModal';
import { BackgroundMusic } from './BackgroundMusic';

interface WeddingBookProps {
  onReopenEnvelope?: () => void;
}

export const WeddingBook: React.FC<WeddingBookProps> = () => {
  const flipBookRef = useRef<any>(null);
  const { isHindi, toggleLanguage, t } = useLanguage();
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(6);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect viewport size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 860);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleFlip = useCallback((e: any) => {
    setCurrentPage(e.data);
    if (flipBookRef.current?.pageFlip()) {
      setTotalPages(flipBookRef.current.pageFlip().getPageCount());
    }
  }, []);

  const goToNextPage = useCallback(() => {
    if (flipBookRef.current?.pageFlip()) {
      flipBookRef.current.pageFlip().flipNext();
    }
  }, []);

  const goToPrevPage = useCallback(() => {
    if (flipBookRef.current?.pageFlip()) {
      flipBookRef.current.pageFlip().flipPrev();
    }
  }, []);

  const jumpToPage = useCallback((pageNum: number) => {
    if (flipBookRef.current?.pageFlip()) {
      flipBookRef.current.pageFlip().flip(pageNum);
    }
  }, []);

  // Keyboard navigation (Arrow keys)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        goToNextPage();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        goToPrevPage();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNextPage, goToPrevPage]);

  const handleShare = async () => {
    const shareData = {
      title: 'Ujjwal Weds Rimjhim | Wedding Invitation',
      text: 'You are cordially invited to celebrate the wedding of Ujjwal and Rimjhim on 4 December 2026.',
      url: window.location.href,
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {}
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const navChapters = [
    { page: 0, titleEn: 'Cover', titleHi: 'मुखपृष्ठ' },
    { page: 1, titleEn: 'Invite', titleHi: 'निमंत्रण' },
    { page: 2, titleEn: 'Events', titleHi: 'कार्यक्रम' },
    { page: 3, titleEn: 'Family', titleHi: 'परिवार' },
    { page: 4, titleEn: 'Blessings', titleHi: 'आशीर्वाद' },
    { page: 5, titleEn: 'Venue', titleHi: 'स्थल' },
  ];

  return (
    <div className="relative min-h-[100svh] w-full bg-[#EFE6D7]/60 flex flex-col items-center justify-between py-2 sm:py-4 px-2 select-none overflow-x-hidden">
      {/* Background ambient lighting & soft wallpaper texture */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(#B69558_0.6px,transparent_0.6px)] [background-size:20px_20px] opacity-15" />

      {/* ════════════════════════════════════════════════════════
          TOP CONTROL BAR: Title, Chapters, Music Toggle, Language & Share
          ════════════════════════════════════════════════════════ */}
      <header className="relative z-30 w-full max-w-4xl flex items-center justify-between px-2 sm:px-4 py-1.5 sm:py-2 bg-ivory/90 backdrop-blur-md rounded-2xl border border-gold/30 shadow-subtle mb-2">
        {/* Book Title */}
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-gold" />
          <span className="font-display text-sm sm:text-base text-espresso font-medium tracking-wide">
            {isHindi ? 'उज्जवल संग रिमझिम' : 'Ujjwal & Rimjhim'}
          </span>
        </div>

        {/* Chapter quick jump pills (hidden on very small screens, visible on tablet+) */}
        <div className="hidden md:flex items-center gap-1">
          {navChapters.map((ch) => (
            <button
              key={ch.page}
              onClick={() => jumpToPage(ch.page)}
              className={`px-2.5 py-1 rounded-full text-xs font-sans font-medium transition-all ${
                currentPage === ch.page
                  ? 'bg-gold text-white shadow-xs'
                  : 'text-espresso/70 hover:text-espresso hover:bg-gold/10'
              }`}
            >
              {t(ch.titleEn, ch.titleHi)}
            </button>
          ))}
        </div>

        {/* Right actions: Background Music, Language toggle & Share */}
        <div className="flex items-center gap-2">
          {/* Background Instrumental Music Controller */}
          <BackgroundMusic />

          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-3 py-1 rounded-full border border-gold/40 bg-white/70 text-espresso text-xs font-sans font-semibold tracking-wide hover:bg-gold/15 transition-colors"
            title={isHindi ? 'Switch to English' : 'हिंदी में देखें'}
            aria-label="Toggle language"
          >
            <Globe className="w-3.5 h-3.5 text-gold" />
            <span>{isHindi ? 'English' : 'हिंदी'}</span>
          </button>

          {/* Share Button */}
          <button
            onClick={handleShare}
            className="p-1.5 rounded-full border border-gold/30 bg-white/60 text-espresso hover:text-gold hover:bg-gold/10 transition-colors"
            title="Share invitation"
            aria-label="Share invitation"
          >
            <Share2 className="w-3.5 h-3.5 text-gold" />
          </button>
        </div>
      </header>

      {/* ════════════════════════════════════════════════════════
          CENTRAL INVITATION BOOK SPREAD
          - Surrounded by left and right floating page-turn arrows
          ════════════════════════════════════════════════════════ */}
      <div className="relative z-20 flex-1 flex items-center justify-center w-full max-w-6xl my-auto">
        {/* Left Page Turn Button */}
        <button
          onClick={goToPrevPage}
          disabled={currentPage <= 0}
          className={`absolute left-0 sm:left-2 z-40 p-2 sm:p-3 rounded-full bg-ivory/95 border border-gold/40 shadow-lg text-espresso hover:bg-gold hover:text-white transition-all transform hover:scale-105 active:scale-95 disabled:opacity-20 disabled:pointer-events-none focus:outline-none`}
          aria-label="Previous Page"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Physical Book Container with Shadow */}
        <div className="book-shadow-wrapper relative flex items-center justify-center p-1 sm:p-2 rounded-2xl">
          {/* HTMLFlipBook Core Component */}
          {/* @ts-ignore */}
          <HTMLFlipBook
            ref={flipBookRef}
            width={isMobile ? 360 : 440}
            height={isMobile ? 580 : 640}
            size="fixed"
            minWidth={320}
            maxWidth={500}
            minHeight={520}
            maxHeight={720}
            maxShadowOpacity={0.4}
            showCover={true}
            mobileScrollSupport={true}
            clickEventForward={true}
            useMouseEvents={true}
            swipeDistance={30}
            showPageCorners={true}
            disableFlipByClick={false}
            flippingTime={800}
            usePortrait={true}
            startPage={0}
            drawShadow={true}
            startZIndex={0}
            autoSize={true}
            className="wedding-flip-book shadow-2xl rounded-xl"
            style={{ margin: '0 auto' }}
            onFlip={handleFlip}
          >
            {/* Page 1: Cover with couple photograph */}
            <CoverPage
              onSaveDate={() => setIsModalOpen(true)}
              onTurnPage={goToNextPage}
            />

            {/* Page 2: Wedding Announcement & Sacred Invocations */}
            <AnnouncementPage pageNumber={2} />

            {/* Page 3: Auspicious 3-Day Schedule */}
            <SchedulePage pageNumber={3} />

            {/* Page 4: Our Families (Brothers, Sisters, Elders) */}
            <FamilyPage pageNumber={4} />

            {/* Page 5: Blessings, Darshanabhilashi, Vinīt & Poems */}
            <BlessingsPage pageNumber={5} />

            {/* Page 6: Venue, Directions, Contacts & Closing */}
            <VenueClosingPage
              pageNumber={6}
              onSaveCalendar={() => setIsModalOpen(true)}
            />
          </HTMLFlipBook>
        </div>

        {/* Right Page Turn Button */}
        <button
          onClick={goToNextPage}
          disabled={currentPage >= totalPages - 1}
          className={`absolute right-0 sm:right-2 z-40 p-2 sm:p-3 rounded-full bg-ivory/95 border border-gold/40 shadow-lg text-espresso hover:bg-gold hover:text-white transition-all transform hover:scale-105 active:scale-95 disabled:opacity-20 disabled:pointer-events-none focus:outline-none`}
          aria-label="Next Page"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* ════════════════════════════════════════════════════════
          BOTTOM CONTROL BAR: Page indicator & Hint
          ════════════════════════════════════════════════════════ */}
      <footer className="relative z-30 flex flex-col items-center gap-1 mt-2 text-center">
        {/* Page numbers indicator */}
        <div className="flex items-center gap-3 px-4 py-1.5 rounded-full bg-ivory/80 backdrop-blur-xs border border-gold/30 shadow-xs">
          <button
            onClick={goToPrevPage}
            disabled={currentPage <= 0}
            className="text-xs font-sans uppercase tracking-wider text-gold-dark font-medium hover:underline disabled:opacity-30 disabled:no-underline"
          >
            {t('← Prev', '← पिछला')}
          </button>

          <span className="font-serif italic text-xs sm:text-sm text-espresso font-medium px-2 border-x border-gold/30">
            {t(`Page ${currentPage + 1} of ${totalPages}`, `पृष्ठ ${currentPage + 1} / ${totalPages}`)}
          </span>

          <button
            onClick={goToNextPage}
            disabled={currentPage >= totalPages - 1}
            className="text-xs font-sans uppercase tracking-wider text-gold-dark font-medium hover:underline disabled:opacity-30 disabled:no-underline"
          >
            {t('Next →', 'अगला →')}
          </button>
        </div>

        {/* Subtle touch hint */}
        <p className="font-sans text-[10px] sm:text-[11px] text-espresso/60 tracking-wider">
          {t('Tap corners, swipe, or use arrows to flip pages', 'पेज पलटने के लिए कोने छुएं, स्वाइप करें अथवा तीरों का प्रयोग करें')}
        </p>
      </footer>

      {/* Save the Date / Venue / Calendar Modal */}
      <SaveTheDateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

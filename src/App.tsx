import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Language, Room } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BookingBar } from './components/BookingBar';
import { AdvantagesStrip } from './components/AdvantagesStrip';
import { IntroSection } from './components/IntroSection';
import { RoomsCarousel } from './components/RoomsCarousel';
import { ExperiencesSection } from './components/ExperiencesSection';
import { InstagramWall } from './components/InstagramWall';
import { LiveSunsetSection } from './components/LiveSunsetSection';
import { LocationSection } from './components/LocationSection';
import { NewsletterAndAwards } from './components/NewsletterAndAwards';
import { Footer } from './components/Footer';
import { MenuFlyout } from './components/MenuFlyout';
import { BookingModal } from './components/BookingModal';
import { PromoModal } from './components/PromoModal';
import { Calendar, MessageCircle } from 'lucide-react';
import { hotelContent } from './data/hotelData';

gsap.registerPlugin(ScrollTrigger);

export function App() {
  const [lang, setLang] = useState<Language>('fr');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [bookingParams, setBookingParams] = useState<{
    checkIn?: string;
    checkOut?: string;
    guests?: number;
    promo?: string;
  }>({ promo: 'GABRIEL' });
  const [isPromoModalOpen, setIsPromoModalOpen] = useState(false);
  const [showFloatingBookBtn, setShowFloatingBookBtn] = useState(false);

  const t = hotelContent[lang];

  // Initialize Lenis smooth scroll and connect with GSAP ScrollTrigger
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    const handleScroll = () => {
      setShowFloatingBookBtn(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      lenis.destroy();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Dynamically update document title and lang attribute on language switch
  useEffect(() => {
    document.title = t.meta.title;
    document.documentElement.lang = lang;
  }, [lang, t.meta.title]);

  const handleOpenBooking = (params?: { checkIn?: string; checkOut?: string; guests?: number; promo?: string }) => {
    if (params) {
      setBookingParams(prev => ({ ...prev, ...params }));
    }
    setIsBookingModalOpen(true);
  };

  const handleSelectRoomToBook = (room: Room) => {
    setSelectedRoom(room);
    setIsBookingModalOpen(true);
  };

  const handleApplyPromo = (code: string) => {
    setBookingParams(prev => ({ ...prev, promo: code }));
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-riad-bg text-neutral-800 font-sans selection:bg-riad-terracotta selection:text-white relative">
      {/* Navigation Header */}
      <Header
        lang={lang}
        onLanguageChange={setLang}
        onOpenBooking={() => handleOpenBooking()}
        onOpenMenu={() => setIsMenuOpen(true)}
      />

      {/* Main Content */}
      <main>
        {/* Fullscreen Hero with Parallax */}
        <Hero lang={lang} />

        {/* Integrated Floating Booking Bar */}
        <BookingBar
          lang={lang}
          onOpenBookingModal={handleOpenBooking}
        />

        {/* Key Advantages Infinite Ribbon Marquee */}
        <AdvantagesStrip lang={lang} />

        {/* Poetic Intro Statement with Scroll Reveal */}
        <IntroSection lang={lang} />

        {/* Interactive Rooms & Suites Carousel */}
        <RoomsCarousel
          lang={lang}
          onSelectRoomToBook={handleSelectRoomToBook}
        />

        {/* Spaces & Experiences Split Showcase with Pinned Feel */}
        <ExperiencesSection
          lang={lang}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Instagram Lifestyle Wall */}
        <InstagramWall lang={lang} />

        {/* Live Sunset Panoramic View */}
        <LiveSunsetSection lang={lang} />

        {/* Illustrated Watercolor Medina Map & Location Details */}
        <LocationSection lang={lang} />

        {/* Newsletter Subscription & Luxury Partner Badges */}
        <NewsletterAndAwards lang={lang} />
      </main>

      {/* Luxury Footer */}
      <Footer
        lang={lang}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Floating Sticky Booking CTA (Appears when scrolling down) */}
      <div 
        className={`fixed bottom-6 right-6 z-40 transition-all duration-500 transform ${
          showFloatingBookBtn ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'
        }`}
      >
        <button
          onClick={() => handleOpenBooking()}
          className="bg-riad-terracotta hover:bg-riad-terracotta-hover text-white text-xs uppercase tracking-[0.2em] font-medium py-3 px-6 rounded-full shadow-2xl flex items-center space-x-2.5 transition-all hover:scale-105 active:scale-95 border border-white/20"
        >
          <Calendar size={15} />
          <span>{t.nav.reserve}</span>
        </button>
      </div>

      {/* Flyout Fullscreen Menu */}
      <MenuFlyout
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        lang={lang}
        onSelectLanguage={setLang}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Booking Reservation Flow */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        lang={lang}
        initialRoom={selectedRoom}
        initialParams={bookingParams}
      />

      {/* Seasonal Promo Popup */}
      <PromoModal
        isOpen={isPromoModalOpen}
        onClose={() => setIsPromoModalOpen(false)}
        lang={lang}
        onApplyPromo={handleApplyPromo}
      />
    </div>
  );
}

export default App;

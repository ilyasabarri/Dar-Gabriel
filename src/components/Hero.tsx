import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown, Star } from 'lucide-react';
import { Language } from '../types';
import { hotelContent } from '../data/hotelData';

interface HeroProps {
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = hotelContent[lang];
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax scroll on hero background image
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          yPercent: 25,
          scale: 1.15,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true
          }
        });
      }

      // Staggered luxury fade-in on mount
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            stagger: 0.15,
            ease: 'power3.out',
            delay: 0.2
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative h-screen min-h-[740px] w-full flex flex-col justify-between items-center text-white overflow-hidden"
    >
      {/* Background Media with Parallax Scrub */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          ref={imageRef}
          src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Chefchaouen-the-blue-city-of-morocco-with-palm-trees-and-the-mountain-view-in-the-backrgound.jpg"
          alt="Dar Gabriel Chefchaouen & Montagnes du Rif"
          className="w-full h-[125%] -top-[12%] absolute object-cover object-center will-change-transform"
        />
        {/* Soft Vignette and Luxury Dark Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
        <div className="absolute inset-0 bg-[#16201e]/30 mix-blend-multiply" />
      </div>

      {/* Floating Right Side Rating Badge (Matches Booking.com 8.8 Superbe) */}
      <a 
        href="https://www.booking.com/hotel/ma/dar-gabriel.html" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed right-0 top-1/2 -translate-y-1/2 z-30 hidden sm:flex flex-col items-center bg-white text-black shadow-2xl py-3 px-2 rounded-l-md border-y border-l border-black/10 select-none hover:bg-neutral-50 transition-colors group cursor-pointer"
        title={t.hero.ratingTitle}
      >
        <span className="font-serif font-bold text-sm tracking-tighter text-[#003580] group-hover:scale-110 transition-transform">
          8.8
        </span>
        <div className="h-5 w-[1px] bg-black/15 my-1" />
        <span className="text-[9px] tracking-widest uppercase font-semibold [writing-mode:vertical-rl] text-neutral-800 py-1">
          {t.hero.ratingText}
        </span>
      </a>

      {/* Spacer for Floating Luxury Navbar */}
      <div className="pt-24 sm:pt-28" />

      {/* Center Hero Insignia & Brand Identity */}
      <div 
        ref={contentRef}
        className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center"
      >
        {/* Location & Accessibility Kicker */}
        <p className="text-[11px] md:text-xs uppercase tracking-[0.35em] text-[#e3ded8] font-light mb-4 drop-shadow">
          CHEFCHAOUEN • BAB SOUK
        </p>

        {/* Handcrafted Andalusian Insignia Crest */}
        <div className="mb-5 relative flex items-center justify-center">
          <svg viewBox="0 0 100 85" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-14 md:w-20 md:h-16 text-white drop-shadow-md">
            <path d="M50 4L54 18L68 18L57 26L61 40L50 31L39 40L43 26L32 18L46 18L50 4Z" stroke="currentColor" strokeWidth="1.2" fill="none" />
            <path d="M20 70C20 45 50 38 50 38C50 38 80 45 80 70" stroke="currentColor" strokeWidth="1.2" />
            <path d="M30 70C30 52 50 47 50 47C50 47 70 52 70 70" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 2" />
            <circle cx="50" cy="58" r="3" fill="#c29d59" />
            <path d="M12 76H88" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>

        {/* Hero Title */}
        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-[0.16em] uppercase font-light text-white mb-2 leading-none drop-shadow-lg">
          DAR GABRIEL
        </h1>

        {/* Ring & Subtitle */}
        <div className="relative inline-flex items-center justify-center mt-2">
          <div className="px-5 py-1.5 rounded-full border border-white/40 flex items-center justify-center backdrop-blur-[3px] bg-black/20">
            <span className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-white/95 font-light">
              {t.hero.category}
            </span>
          </div>
        </div>

        <p className="mt-6 text-sm md:text-base font-serif italic text-white/90 max-w-xl mx-auto drop-shadow">
          {t.hero.tagline}
        </p>
      </div>

      {/* Bottom Scroll Indicator with Smooth Scroll Link */}
      <a 
        href="#le-riad"
        className="relative z-10 pb-24 md:pb-28 text-center text-white/60 hover:text-white transition-colors cursor-pointer flex flex-col items-center group"
      >
        <span className="text-[9px] uppercase tracking-[0.25em] mb-1 group-hover:text-riad-gold transition-colors">{t.hero.discover}</span>
        <ChevronDown size={18} className="animate-bounce" />
      </a>
    </section>
  );
};

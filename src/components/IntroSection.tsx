import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Language } from '../types';
import { hotelContent } from '../data/hotelData';

interface IntroSectionProps {
  lang: Language;
}

export const IntroSection: React.FC<IntroSectionProps> = ({ lang }) => {
  const t = hotelContent[lang];
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const bgImageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax on the architectural background
      if (bgImageRef.current) {
        gsap.to(bgImageRef.current, {
          yPercent: 20,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        });
      }

      // Scroll-driven text lighting / reveal
      if (textRef.current) {
        const words = textRef.current.querySelectorAll('.reveal-word');
        gsap.fromTo(
          words,
          { opacity: 0.25, y: 10 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.05,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: textRef.current,
              start: 'top 80%',
              end: 'bottom 45%',
              scrub: 0.8
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [lang]);

  // Split sentence into words for scrub animation
  const sentenceWords = t.meta.heroSubtitle.split(' ');

  return (
    <section 
      id="le-riad" 
      ref={sectionRef}
      className="relative py-32 md:py-44 px-4 bg-[#1b2422] text-white overflow-hidden"
    >
      {/* Background Architectural Texture with Parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-30 pointer-events-none">
        <img
          ref={bgImageRef}
          src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Blue_Alley_at_Chefchaouen_-_panoramio.jpg"
          alt="Chefchaouen Blue Alley Architecture"
          className="w-full h-[130%] -top-[15%] absolute object-cover object-center filter saturate-75 will-change-transform"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1b2422] via-transparent to-[#1b2422]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Kicker badge matching Lasala Plaza */}
        <div className="inline-block bg-black/40 backdrop-blur-sm border border-white/15 px-4 py-1.5 rounded-sm mb-10 shadow-lg">
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-[#e3ded8] font-medium">
            {t.meta.heroTitle}
          </span>
        </div>

        {/* Large Editorial Serif Statement with Word-by-Word Scroll Scrub */}
        <h2 
          ref={textRef}
          className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-relaxed md:leading-[1.4] text-[#fbfaf8] tracking-normal max-w-3xl"
        >
          {sentenceWords.map((word, idx) => (
            <span key={idx} className="reveal-word inline-block mr-[0.28em] transition-colors duration-300">
              {word}
            </span>
          ))}
        </h2>

        {/* Delicate divider line */}
        <div className="w-16 h-[1px] bg-riad-gold/70 mt-12 mb-4" />

        <span className="text-xs uppercase tracking-[0.25em] text-riad-gold font-light">
          CHEFCHAOUEN • MOROCCO
        </span>
      </div>
    </section>
  );
};

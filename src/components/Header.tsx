import React, { useState, useEffect, useRef } from 'react';
import { Phone, Menu, Globe, ChevronDown } from 'lucide-react';
import { Language } from '../types';
import { hotelContent } from '../data/hotelData';

interface HeaderProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenBooking: () => void;
  onOpenMenu: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  onLanguageChange,
  onOpenBooking,
  onOpenMenu
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const lastScrollY = useRef(0);
  const t = hotelContent[lang];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 40);

      // Smart header show/hide on scroll direction
      if (currentScrollY > 250) {
        if (currentScrollY > lastScrollY.current && currentScrollY - lastScrollY.current > 10) {
          setIsVisible(false);
          setShowLangDropdown(false);
        } else if (lastScrollY.current - currentScrollY > 10) {
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible ? 'translate-y-0' : '-translate-y-full pointer-events-none'
      }`}
    >
      <nav 
        className={`w-full px-5 md:px-10 transition-all duration-500 flex items-center justify-between ${
          isScrolled 
            ? 'bg-[#151e1c]/95 backdrop-blur-md shadow-2xl py-3 border-b border-white/10' 
            : 'bg-gradient-to-b from-black/75 via-black/35 to-transparent text-white py-5 md:py-6'
        }`}
      >
        {/* Left: Brand Insignia for Dar Gabriel */}
        <a href="#" className="flex items-center space-x-3.5 group">
          <div className="w-10 h-10 border border-riad-gold/70 flex items-center justify-center rounded-sm text-riad-gold transition-all duration-300 group-hover:border-riad-gold group-hover:scale-105 group-hover:bg-riad-gold/10">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
              <path d="M12 2L4 7v10l8 5 8-5V7L12 2z" stroke="currentColor" fill="none" />
              <path d="M12 6l-5 3.5v5l5 3.5 5-3.5v-5L12 6z" stroke="#c29d59" />
              <circle cx="12" cy="12" r="1.5" fill="#c29d59" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl md:text-2xl tracking-[0.2em] uppercase text-white font-medium leading-none">
              DAR GABRIEL
            </span>
            <span className="text-[9px] uppercase tracking-[0.3em] text-[#c29d59] font-light mt-1">
              CHEFCHAOUEN • BAB SOUK
            </span>
          </div>
        </a>

        {/* Center: Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-9 text-xs font-light tracking-[0.2em] uppercase text-[#ede8e1]">
          <a href="#chambres" className="hover-underline-animation hover:text-white transition-colors">{t.nav.rooms}</a>
          <a href="#le-riad" className="hover-underline-animation hover:text-white transition-colors">{t.nav.hotel}</a>
          <a href="#experiences" className="hover-underline-animation hover:text-white transition-colors">{t.nav.rooftop}</a>
          <a href="#galerie" className="hover-underline-animation hover:text-white transition-colors">{t.nav.gallery}</a>
          <a href="#acces-contact" className="hover-underline-animation hover:text-white transition-colors">{t.nav.contact}</a>
        </div>

        {/* Right: Phone, Language Selector, Reserve CTA & Menu */}
        <div className="flex items-center space-x-3 md:space-x-5">
          {/* Direct Phone */}
          <a
            href="tel:+212539984210"
            className="hidden md:flex items-center space-x-1.5 text-xs text-white/80 hover:text-white tracking-wider font-light transition-colors py-1 px-2"
            title="Appeler Dar Gabriel"
          >
            <Phone size={13} className="text-riad-gold" />
            <span className="hidden 2xl:inline">+212 539 98 42 10</span>
          </a>

          {/* Language Selector Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setShowLangDropdown(!showLangDropdown)}
              className="flex items-center space-x-1.5 text-xs uppercase font-medium tracking-wider text-white/90 hover:text-white py-1.5 px-2.5 rounded border border-white/20 transition-all hover:border-white/50 bg-white/5 hover:bg-white/10"
              aria-label="Sélectionner la langue"
            >
              <Globe size={13} className="text-riad-gold" />
              <span>{lang.toUpperCase()}</span>
              <ChevronDown size={12} className={`opacity-70 transition-transform duration-200 ${showLangDropdown ? 'rotate-180' : ''}`} />
            </button>

            {showLangDropdown && (
              <div className="absolute right-0 mt-2 w-36 bg-[#1a2321] border border-white/15 rounded shadow-2xl py-1 text-xs z-50 animate-fade-in backdrop-blur-xl">
                <button 
                  onClick={() => { onLanguageChange('fr'); setShowLangDropdown(false); }}
                  className={`w-full text-left px-3.5 py-2 transition-colors flex items-center justify-between ${lang === 'fr' ? 'text-riad-gold font-semibold bg-white/5' : 'text-white/80 hover:bg-white/10'}`}
                >
                  <span>Français</span>
                  <span className="text-[10px] opacity-60">FR</span>
                </button>
                <button 
                  onClick={() => { onLanguageChange('es'); setShowLangDropdown(false); }}
                  className={`w-full text-left px-3.5 py-2 transition-colors flex items-center justify-between ${lang === 'es' ? 'text-riad-gold font-semibold bg-white/5' : 'text-white/80 hover:bg-white/10'}`}
                >
                  <span>Español</span>
                  <span className="text-[10px] opacity-60">ES</span>
                </button>
                <button 
                  onClick={() => { onLanguageChange('en'); setShowLangDropdown(false); }}
                  className={`w-full text-left px-3.5 py-2 transition-colors flex items-center justify-between ${lang === 'en' ? 'text-riad-gold font-semibold bg-white/5' : 'text-white/80 hover:bg-white/10'}`}
                >
                  <span>English</span>
                  <span className="text-[10px] opacity-60">EN</span>
                </button>
              </div>
            )}
          </div>

          {/* Reserve CTA Button */}
          <button
            onClick={onOpenBooking}
            className="hidden sm:inline-flex items-center justify-center bg-riad-terracotta hover:bg-riad-terracotta-hover text-white text-xs uppercase tracking-[0.2em] font-medium px-5 py-2.5 rounded shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 border border-white/10"
          >
            {t.nav.reserve}
          </button>

          {/* Hamburger Menu Trigger (Mobile & Tablet only, hidden on laptop/desktop) */}
          <button 
            onClick={onOpenMenu}
            className="flex lg:hidden items-center space-x-2 text-white/90 hover:text-white group p-1.5 focus:outline-none"
            aria-label="Ouvrir le menu"
          >
            <span className="hidden md:inline text-xs uppercase tracking-[0.22em] font-light group-hover:text-riad-gold transition-colors">
              {t.nav.menu}
            </span>
            <Menu size={22} className="text-white group-hover:text-riad-gold transition-colors" />
          </button>
        </div>
      </nav>
    </header>
  );
};

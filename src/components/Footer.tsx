import React from 'react';
import { Language } from '../types';
import { hotelContent } from '../data/hotelData';

interface FooterProps {
  lang: Language;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onOpenBooking }) => {
  const t = hotelContent[lang];

  return (
    <footer className="bg-[#1b2522] text-[#d6d0c7] py-16 px-4 sm:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left: Brand Emblem Logo */}
        <div className="md:col-span-4 flex flex-col items-start space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 border border-riad-gold/60 flex items-center justify-center rounded-sm text-riad-gold font-bold">
              DG
            </div>
            <div>
              <span className="font-serif tracking-[0.2em] text-xl uppercase font-light text-white block">
                DAR GABRIEL
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-riad-gold font-light">
                MAISON D'HÔTES • CHEFCHAOUEN
              </span>
            </div>
          </div>

          <p className="text-xs text-white/60 font-serif leading-relaxed max-w-sm pt-2">
            {t.footer.about}
          </p>
        </div>

        {/* Center: Columns of Navigation Links */}
        <div className="md:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-6 text-xs uppercase tracking-[0.16em] font-medium text-white/80">
          <div className="space-y-3">
            <a href="#chambres" className="block hover:text-riad-gold transition-colors">{t.footer.links.rooms}</a>
            <a href="#le-riad" className="block hover:text-riad-gold transition-colors">{t.footer.links.hotel}</a>
            <a href="#experiences" className="block hover:text-riad-gold transition-colors">{t.footer.links.rooftop}</a>
          </div>

          <div className="space-y-3">
            <a href="#experiences" className="block hover:text-riad-gold transition-colors">{t.footer.links.dinner}</a>
            <a href="#galerie" className="block hover:text-riad-gold transition-colors">{t.footer.links.gallery}</a>
            <button onClick={onOpenBooking} className="block text-left text-riad-gold hover:underline">
              {t.footer.links.reserveDirect}
            </button>
          </div>

          <div className="space-y-3">
            <a href="#acces-contact" className="block hover:text-riad-gold transition-colors">{t.footer.links.babSouk}</a>
            <a href="#acces-contact" className="block hover:text-riad-gold transition-colors">{t.footer.links.contact}</a>
            <a href="tel:+212539984210" className="block text-riad-gold hover:underline">
              +212 539 98 42 10
            </a>
          </div>
        </div>

        {/* Right: Copyright & Official Regulatory Info */}
        <div className="md:col-span-3 text-[11px] text-white/50 space-y-2 md:text-right border-t md:border-t-0 pt-6 md:pt-0 border-white/10">
          <p className="font-medium text-white/80">
            Copyright © {new Date().getFullYear()} Dar Gabriel Chefchaouen.
          </p>
          <p>{t.footer.copyright}</p>
          <p className="text-[10px] text-white/40">
            {t.footer.classified}
          </p>
          <div className="pt-2 flex flex-wrap md:justify-end gap-x-3 gap-y-1 text-white/40">
            <a href="#" className="hover:text-white">{t.footer.legal}</a>
            <span>•</span>
            <a href="#" className="hover:text-white">{t.footer.privacy}</a>
            <span>•</span>
            <a href="#" className="hover:text-white">{t.footer.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

import React from 'react';
import { X, Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import { Language } from '../types';
import { hotelContent } from '../data/hotelData';

interface MenuFlyoutProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  onSelectLanguage: (lang: Language) => void;
  onOpenBooking: () => void;
}

export const MenuFlyout: React.FC<MenuFlyoutProps> = ({
  isOpen,
  onClose,
  lang,
  onSelectLanguage,
  onOpenBooking
}) => {
  if (!isOpen) return null;
  const t = hotelContent[lang];

  return (
    <div className="fixed inset-0 z-50 bg-[#16201e]/98 text-white flex flex-col justify-between overflow-y-auto backdrop-blur-xl animate-fade-in">
      {/* Top Bar inside Menu */}
      <div className="px-6 md:px-12 py-6 flex justify-between items-center border-b border-white/10">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 border border-riad-gold/60 flex items-center justify-center rounded-sm text-riad-gold font-bold">
            DG
          </div>
          <span className="font-serif tracking-[0.2em] text-lg uppercase font-light">
            DAR GABRIEL CHEFCHAOUEN
          </span>
        </div>

        <button 
          onClick={onClose}
          className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors group p-2"
        >
          <span className="text-xs uppercase tracking-widest font-light hidden sm:inline">Fermer</span>
          <X size={26} className="text-white group-hover:rotate-90 transition-transform duration-300" />
        </button>
      </div>

      {/* Main Content Area */}
      <div className="px-6 md:px-16 py-12 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Navigation Links */}
        <div className="lg:col-span-7 space-y-5">
          {[
            { href: "#chambres", label: t.nav.rooms, subtitle: "Les 7 chambres d'hôtes privatives avec SDB" },
            { href: "#le-riad", label: t.nav.hotel, subtitle: "Maison d'hôtes traditionnelle restaurée" },
            { href: "#experiences", label: t.nav.rooftop, subtitle: "Toit-terrasse panoramique sur le Rif & table d'hôtes" },
            { href: "#galerie", label: t.nav.gallery, subtitle: "Ambiance bleue et cour intérieure" },
            { href: "#acces-contact", label: t.nav.contact, subtitle: "Accès facile Bab Souk • Kasbah ~100 m" },
          ].map((item, index) => (
            <div key={index} className="group">
              <a 
                href={item.href} 
                onClick={onClose}
                className="block text-2xl sm:text-4xl md:text-5xl font-serif tracking-wide text-[#f4efe8] hover:text-riad-gold transition-colors duration-200"
              >
                {item.label}
              </a>
              <span className="text-xs text-white/40 tracking-wider font-light group-hover:text-white/70 transition-colors">
                {item.subtitle}
              </span>
            </div>
          ))}

          <div className="pt-6">
            <button
              onClick={() => { onClose(); onOpenBooking(); }}
              className="bg-riad-terracotta hover:bg-riad-terracotta-hover text-white text-sm uppercase tracking-[0.2em] font-medium px-8 py-3.5 rounded shadow-xl transition-all inline-block hover:scale-105 active:scale-95"
            >
              {t.nav.reserve}
            </button>
          </div>
        </div>

        {/* Right Column: Hotel Details & Atmosphere */}
        <div className="lg:col-span-5 bg-white/5 border border-white/10 p-8 rounded-lg space-y-6">
          <div>
            <div className="inline-block bg-riad-gold/20 text-riad-gold text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 rounded mb-2">
              Note 8.8 / 10 • Superbe (Booking.com)
            </div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-riad-gold font-medium mb-1">
              Dar Gabriel
            </h4>
            <p className="text-sm text-white/70 font-serif leading-relaxed">
              "Une maison d'hôtes intimiste et chaleureuse à deux pas de la porte Bab Souk. Arrivée simple en taxi, rooftop avec vue sur le Rif et petit-déjeuner copieux inclus."
            </p>
          </div>

          <div className="space-y-3 pt-3 border-t border-white/10 text-xs text-white/80">
            <div className="flex items-start space-x-3">
              <MapPin size={16} className="text-riad-gold shrink-0 mt-0.5" />
              <span>Quartier Bab Souk, Médina de Chefchaouen, 91000, Maroc</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone size={16} className="text-riad-gold shrink-0" />
              <span>+212 539 98 42 10</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail size={16} className="text-riad-gold shrink-0" />
              <span>contact@dargabriel-chaouen.com</span>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <span className="text-xs text-white/50 uppercase tracking-widest">Langue :</span>
            <div className="flex space-x-2 text-xs">
              {(['fr', 'es', 'en'] as Language[]).map(l => (
                <button
                  key={l}
                  onClick={() => onSelectLanguage(l)}
                  className={`px-3 py-1 rounded border transition-colors uppercase ${
                    lang === l ? 'bg-riad-gold text-black border-riad-gold font-bold' : 'border-white/20 text-white hover:border-white'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer inside Menu */}
      <div className="px-6 md:px-12 py-5 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-xs text-white/50 gap-4">
        <span>© {new Date().getFullYear()} Dar Gabriel Chefchaouen. Tous droits réservés.</span>
        <div className="flex items-center space-x-5 text-white/70">
          <a href="#" className="hover:text-riad-gold"><Instagram size={17} /></a>
          <a href="#" className="hover:text-riad-gold"><Facebook size={17} /></a>
        </div>
      </div>
    </div>
  );
};

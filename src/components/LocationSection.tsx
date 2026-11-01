import React from 'react';
import { Phone, Mail, ExternalLink, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { hotelContent } from '../data/hotelData';

interface LocationSectionProps {
  lang: Language;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ lang }) => {
  const t = hotelContent[lang];

  return (
    <section id="acces-contact" className="py-0 bg-[#222e2b] text-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[600px]">
        {/* Left Column: Interactive Google Maps Location */}
        <div className="lg:col-span-7 relative min-h-[480px] lg:min-h-[600px] w-full bg-[#1c2623] overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.4526066222243!2d-5.267121724772911!3d35.170270157874214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b266118549cf1%3A0xf8399b3845cb7c58!2sDar%20Gabriel!5e0!3m2!1sen!2sma!4v1793565430244!5m2!1sen!2sma"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Localisation Google Maps - Dar Gabriel Chefchaouen"
            className="w-full h-full min-h-[480px] lg:min-h-[600px] border-0"
          />

          {/* Key Access Highlight Badge at Bottom Left (non-obstructive) */}
          <div className="absolute bottom-4 left-4 z-10 pointer-events-none hidden sm:flex items-center space-x-2 bg-[#1c2623]/90 text-white/90 backdrop-blur-md py-2 px-3.5 rounded-md shadow-lg border border-white/10 text-[11px] font-light">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Accès immédiat taxi / dépose minute à la porte Bab Souk</span>
          </div>
        </div>

        {/* Right Column: Contact & Booking Info */}
        <div className="lg:col-span-5 p-8 sm:p-14 lg:p-16 flex flex-col justify-center space-y-7 bg-[#1c2623] border-t lg:border-t-0 lg:border-l border-white/10">
          <div>
            <div className="inline-flex items-center space-x-2 bg-riad-gold/20 text-riad-gold px-3 py-1 rounded text-[10px] uppercase tracking-widest font-bold mb-3">
              <span>Note Emplacement : 9.5 / 10</span>
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl text-white font-light mb-3">
              Dar Gabriel
            </h3>
            <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed">
              Quartier Bab Souk, Médina de Chefchaouen, 91000, Maroc
            </p>
          </div>

          <div className="space-y-2 text-xs text-white/70 border-y border-white/10 py-4">
            <div className="flex items-center space-x-2">
              <CheckCircle2 size={14} className="text-[#4ade80] shrink-0" />
              <span>À 100 m de la Kasbah historique</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 size={14} className="text-[#4ade80] shrink-0" />
              <span>À 300 m de la place animée Outa el-Hammam</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 size={14} className="text-[#4ade80] shrink-0" />
              <span>À 5 min à pied des cascades de Ras El Maa</span>
            </div>
          </div>

          <div>
            <a
              href="https://maps.google.com/?q=Dar+Gabriel+Chefchaouen+Morocco"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2.5 px-6 py-3 rounded border border-white/30 text-white hover:bg-white hover:text-black text-xs uppercase tracking-[0.2em] font-medium transition-all group"
            >
              <span>{t.locationSection.openMaps}</span>
              <ExternalLink size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          <div className="pt-2 space-y-2 text-xs sm:text-sm text-white/80">
            <p className="flex items-center space-x-2.5">
              <Mail size={15} className="text-riad-gold" />
              <a href="mailto:contact@dargabriel-chaouen.com" className="hover:text-white transition-colors">
                contact@dargabriel-chaouen.com
              </a>
            </p>
            <p className="flex items-center space-x-2.5">
              <Phone size={15} className="text-riad-gold" />
              <a href="tel:+212539984210" className="hover:text-white transition-colors">
                +212 539 98 42 10
              </a>
            </p>
          </div>

          <div>
            <a
              href="mailto:contact@dargabriel-chaouen.com?subject=Demande%20de%20R%C3%A9servation%20-%20Dar%20Gabriel"
              className="inline-flex items-center space-x-2.5 px-6 py-3 rounded border border-riad-gold/60 text-riad-gold hover:bg-riad-gold hover:text-black text-xs uppercase tracking-[0.2em] font-medium transition-all"
            >
              <Mail size={15} />
              <span>{t.locationSection.contactDirect}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

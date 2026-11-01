import React from 'react';
import { ShieldCheck, Clock, Coffee, Sparkles, MapPin } from 'lucide-react';
import { Language } from '../types';
import { hotelContent } from '../data/hotelData';

interface AdvantagesStripProps {
  lang: Language;
}

export const AdvantagesStrip: React.FC<AdvantagesStripProps> = ({ lang }) => {
  const t = hotelContent[lang];

  const icons = [
    <ShieldCheck size={15} className="text-riad-terracotta" />,
    <Clock size={15} className="text-riad-terracotta" />,
    <Sparkles size={15} className="text-riad-terracotta" />,
    <Coffee size={15} className="text-riad-terracotta" />,
    <MapPin size={15} className="text-riad-terracotta" />
  ];

  // We duplicate the list twice for seamless infinite scrolling loop
  const duplicatedList = [...t.advantages, ...t.advantages, ...t.advantages];

  return (
    <section className="w-full bg-[#f6f3ee] border-b border-neutral-200/70 py-4 pt-16 md:pt-14 overflow-hidden relative select-none">
      {/* Subtle fade masks on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#f6f3ee] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#f6f3ee] to-transparent z-10 pointer-events-none" />

      {/* Infinite Marquee Container (matching Lasala Plaza's scrollVentajas) */}
      <div className="animate-marquee flex items-center space-x-12">
        {duplicatedList.map((adv, idx) => (
          <div 
            key={idx}
            className="flex items-center space-x-3 shrink-0 text-xs tracking-wider uppercase font-light"
          >
            <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0 border border-neutral-200/50">
              {icons[idx % icons.length]}
            </div>
            <span className="text-[#3b3632] font-medium whitespace-nowrap">{adv.text}</span>
            <span className="text-neutral-400 pl-4">•</span>
          </div>
        ))}
      </div>
    </section>
  );
};

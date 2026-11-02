import React from 'react';
import { Language } from '../types';
import { hotelContent, getGalleryImages } from '../data/hotelData';

interface InstagramWallProps {
  lang: Language;
}

export const InstagramWall: React.FC<InstagramWallProps> = ({ lang }) => {
  const t = hotelContent[lang];
  const gallery = getGalleryImages(lang);

  return (
    <section id="galerie" className="py-24 md:py-32 bg-[#222e2b] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center mb-12 sm:mb-16">
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-[#f6f2ec] max-w-3xl mx-auto leading-snug">
          {t.instagramSection.title}
        </h2>
      </div>

      {/* Gallery Strip with Natural Moroccan / Chefchaouen Atmosphere */}
      <div className="max-w-[1600px] mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {gallery.map((img, idx) => (
            <div
              key={idx}
              className="group relative h-64 sm:h-72 rounded overflow-hidden shadow-lg bg-black/40 cursor-pointer"
            >
              <img
                src={img.url}
                alt={img.caption}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition-colors flex items-end p-4">
                <span className="text-[11px] text-white/90 font-serif italic opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-snug">
                  {img.caption}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


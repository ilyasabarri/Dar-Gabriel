import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Check, Maximize2, Users, BedDouble, Eye } from 'lucide-react';
import { Language, Room } from '../types';
import { hotelContent, roomsData } from '../data/hotelData';

interface RoomsCarouselProps {
  lang: Language;
  onSelectRoomToBook: (room: Room) => void;
}

export const RoomsCarousel: React.FC<RoomsCarouselProps> = ({
  lang,
  onSelectRoomToBook
}) => {
  const t = hotelContent[lang];
  const [activeIndex, setActiveIndex] = useState(0);

  const currentRoom = roomsData[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % roomsData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + roomsData.length) % roomsData.length);
  };

  // Display MAD price from data or fallback calculation
  const madPrice = currentRoom.priceMad || Math.round(currentRoom.priceFrom * 10.8 / 10) * 10;

  return (
    <section id="chambres" className="py-20 md:py-28 bg-[#faf8f5] border-b border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-[#ad8566] font-semibold block mb-3">
            {t.roomsSection.tag}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#2a2421] mb-4 leading-tight">
            {t.roomsSection.title}
          </h2>
          <p className="text-sm md:text-base text-neutral-600 font-light max-w-2xl mx-auto leading-relaxed">
            {t.roomsSection.subtitle}
          </p>
        </div>

        {/* Tab Navigation Pill Bar (Safe Scroll with Never-Clipped Start) */}
        <div className="w-full overflow-x-auto no-scrollbar mb-10 pb-3 border-b border-neutral-200/80">
          <div className="flex items-center gap-2 sm:gap-2.5 px-2 w-max min-w-full justify-start xl:justify-center">
            {roomsData.map((room, idx) => (
              <button
                key={room.id}
                onClick={() => setActiveIndex(idx)}
                className={`whitespace-nowrap px-3.5 sm:px-4 py-2 rounded-full text-xs tracking-wider uppercase font-medium transition-all cursor-pointer shrink-0 ${
                  activeIndex === idx
                    ? 'bg-riad-terracotta text-white shadow-md scale-[1.02]'
                    : 'bg-white text-neutral-600 hover:text-black hover:bg-neutral-100 border border-neutral-200/80'
                }`}
              >
                {room.shortName || room.name}
              </button>
            ))}
          </div>
        </div>

        {/* Room Showcase Card (Split Layout with Authentic Dar Gabriel Photography) */}
        <div className="bg-white rounded-lg shadow-xl border border-neutral-200/80 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 transition-all duration-300">
          {/* Left Column: Authentic Room Photo Container */}
          <div className="lg:col-span-6 relative h-80 sm:h-[460px] lg:h-[540px] overflow-hidden group bg-[#161f1d]">
            {/* Ambient Blurred Background for 3:4 portrait photo */}
            <div 
              className="absolute inset-0 bg-cover bg-center blur-xl opacity-35 scale-110"
              style={{ backgroundImage: `url(${currentRoom.image})` }}
            />

            {/* Main Authentic Photo */}
            <img
              src={currentRoom.image}
              alt={currentRoom.name}
              className="relative z-10 w-full h-full object-cover sm:object-contain object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
            
            {/* Vignette Overlay */}
            <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/70 via-transparent to-black/20 pointer-events-none" />

            {/* Price Badge with EUR and MAD */}
            <div className="absolute bottom-6 left-6 z-30 bg-black/80 backdrop-blur-md text-white py-2.5 px-5 rounded border border-white/20 shadow-xl">
              <span className="text-[10px] uppercase tracking-widest text-[#ad8566] block font-semibold">
                {t.roomsSection.pricePrefix}
              </span>
              <div className="flex items-baseline space-x-2">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  {currentRoom.priceFrom} €
                </span>
                <span className="text-xs text-white/70">
                  {t.roomsSection.night}
                </span>
                <span className="text-xs text-riad-gold pl-2 border-l border-white/20 font-medium">
                  {currentRoom.priceMad ? `${currentRoom.priceMad} MAD` : `~${madPrice} MAD`}
                </span>
              </div>
            </div>

            {/* Slider Navigation Arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 z-30 flex justify-between pointer-events-none">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-white/90 hover:bg-white text-black flex items-center justify-center shadow-lg transition-all pointer-events-auto hover:scale-110 active:scale-95"
                aria-label="Chambre précédente"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-white/90 hover:bg-white text-black flex items-center justify-center shadow-lg transition-all pointer-events-auto hover:scale-110 active:scale-95"
                aria-label="Chambre suivante"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Right Column: Room Details, Specs & Features */}
          <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between bg-white">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#ad8566] font-bold block mb-1.5">
                {currentRoom.subtitle}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-neutral-900 font-medium mb-4 leading-snug">
                {currentRoom.name}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6 font-light">
                {currentRoom.description}
              </p>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-3 py-4 border-y border-neutral-100 mb-6 text-xs text-neutral-700">
                <div className="flex items-center space-x-2">
                  <Maximize2 size={15} className="text-riad-bronze shrink-0" />
                  <span>Superficie : <strong>{currentRoom.size}</strong></span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users size={15} className="text-riad-bronze shrink-0" />
                  <span>Capacité : <strong>{currentRoom.capacity}</strong></span>
                </div>
                <div className="flex items-center space-x-2">
                  <BedDouble size={15} className="text-riad-bronze shrink-0" />
                  <span>Literie : <strong>{currentRoom.bed}</strong></span>
                </div>
                <div className="flex items-center space-x-2">
                  <Eye size={15} className="text-riad-bronze shrink-0" />
                  <span className="truncate">Vue : <strong>{currentRoom.view}</strong></span>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-2.5 mb-8">
                {currentRoom.features.map((feat, i) => (
                  <div key={i} className="flex items-center space-x-2 text-xs text-neutral-600">
                    <Check size={14} className="text-riad-sage shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <button
                onClick={() => onSelectRoomToBook(currentRoom)}
                className="w-full bg-riad-terracotta hover:bg-riad-terracotta-hover text-white text-xs uppercase tracking-[0.2em] font-medium py-4 px-6 rounded shadow-md transition-all text-center hover:scale-[1.01] active:scale-[0.99]"
              >
                {t.roomsSection.bookRoom}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

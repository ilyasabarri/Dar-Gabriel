import React, { useState } from 'react';
import { Calendar, Users, Tag, ChevronDown } from 'lucide-react';
import { Language } from '../types';
import { hotelContent } from '../data/hotelData';

interface BookingBarProps {
  lang: Language;
  onOpenBookingModal: (params?: { checkIn?: string; checkOut?: string; guests?: number; promo?: string }) => void;
}

export const BookingBar: React.FC<BookingBarProps> = ({
  lang,
  onOpenBookingModal
}) => {
  const t = hotelContent[lang];
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);
  const [promoCode, setPromoCode] = useState('GABRIEL');
  const [showGuestsDropdown, setShowGuestsDropdown] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenBookingModal({ checkIn, checkOut, guests, promo: promoCode });
  };

  return (
    <div className="w-full relative z-30 -mt-16 md:-mt-12 px-4 max-w-6xl mx-auto">
      <form 
        onSubmit={handleSubmit}
        className="bg-white rounded-md shadow-2xl border border-black/5 overflow-visible flex flex-col md:flex-row items-stretch"
      >
        {/* Input 1: Check In */}
        <div className="flex-1 p-3.5 sm:p-4 border-b md:border-b-0 md:border-r border-neutral-200/80 hover:bg-neutral-50/60 transition-colors">
          <label className="block text-[10px] uppercase tracking-[0.22em] text-[#8e857c] font-medium mb-1">
            {t.bookingBar.checkIn}
          </label>
          <div className="flex items-center space-x-2">
            <Calendar size={15} className="text-riad-bronze shrink-0" />
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full text-xs sm:text-sm font-medium text-neutral-800 bg-transparent focus:outline-none cursor-pointer"
              placeholder={t.bookingBar.checkInPlaceholder}
            />
          </div>
        </div>

        {/* Input 2: Check Out */}
        <div className="flex-1 p-3.5 sm:p-4 border-b md:border-b-0 md:border-r border-neutral-200/80 hover:bg-neutral-50/60 transition-colors">
          <label className="block text-[10px] uppercase tracking-[0.22em] text-[#8e857c] font-medium mb-1">
            {t.bookingBar.checkOut}
          </label>
          <div className="flex items-center space-x-2">
            <Calendar size={15} className="text-riad-bronze shrink-0" />
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full text-xs sm:text-sm font-medium text-neutral-800 bg-transparent focus:outline-none cursor-pointer"
              placeholder={t.bookingBar.checkOutPlaceholder}
            />
          </div>
        </div>

        {/* Input 3: Guests Selector */}
        <div className="flex-1 p-3.5 sm:p-4 border-b md:border-b-0 md:border-r border-neutral-200/80 hover:bg-neutral-50/60 transition-colors relative">
          <label className="block text-[10px] uppercase tracking-[0.22em] text-[#8e857c] font-medium mb-1">
            {t.bookingBar.guests}
          </label>
          <div 
            onClick={() => setShowGuestsDropdown(!showGuestsDropdown)}
            className="flex items-center justify-between cursor-pointer text-xs sm:text-sm font-medium text-neutral-800"
          >
            <div className="flex items-center space-x-2">
              <Users size={15} className="text-riad-bronze shrink-0" />
              <span>{guests} {guests === 1 ? t.bookingBar.personSingle : t.bookingBar.personPlural}</span>
            </div>
            <ChevronDown size={14} className="text-neutral-400" />
          </div>

          {showGuestsDropdown && (
            <div className="absolute left-0 right-0 top-full mt-1 bg-white border border-neutral-200 rounded shadow-xl p-3 z-50 animate-fade-in">
              <div className="flex justify-between items-center py-1">
                <span className="text-xs text-neutral-700 font-medium">{t.bookingBar.guestsDropdownTitle}</span>
                <div className="flex items-center space-x-2">
                  <button 
                    type="button"
                    onClick={() => setGuests(Math.max(1, guests - 1))}
                    className="w-6 h-6 rounded border border-neutral-300 flex items-center justify-center text-xs hover:bg-neutral-100 font-bold"
                  >
                    -
                  </button>
                  <span className="text-xs font-semibold w-4 text-center">{guests}</span>
                  <button 
                    type="button"
                    onClick={() => setGuests(Math.min(4, guests + 1))}
                    className="w-6 h-6 rounded border border-neutral-300 flex items-center justify-center text-xs hover:bg-neutral-100 font-bold"
                  >
                    +
                  </button>
                </div>
              </div>
              <button 
                type="button"
                onClick={() => setShowGuestsDropdown(false)}
                className="w-full mt-2 bg-neutral-900 text-white text-[11px] py-1 rounded tracking-wider uppercase"
              >
                Appliquer
              </button>
            </div>
          )}
        </div>

        {/* Input 4: Promo Code */}
        <div className="hidden lg:block w-36 p-3.5 sm:p-4 border-r border-neutral-200/80 hover:bg-neutral-50/60 transition-colors">
          <label className="block text-[10px] uppercase tracking-[0.22em] text-[#8e857c] font-medium mb-1">
            {t.bookingBar.promoCode}
          </label>
          <div className="flex items-center space-x-1.5">
            <Tag size={13} className="text-riad-bronze shrink-0" />
            <input
              type="text"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
              className="w-full text-xs font-semibold text-riad-terracotta bg-transparent focus:outline-none uppercase"
              placeholder="GABRIEL"
            />
          </div>
        </div>

        {/* Action Button: VÉRIFIER DISPONIBILITÉ */}
        <div className="relative flex items-stretch">
          <button
            type="submit"
            className="w-full md:w-56 bg-riad-terracotta hover:bg-riad-terracotta-hover text-white font-medium text-xs sm:text-sm uppercase tracking-[0.2em] py-4 md:py-0 px-6 transition-colors flex items-center justify-center shadow-inner group"
          >
            <span>{t.bookingBar.button}</span>
          </button>

          {/* Circular Stamp Badge on Right Edge */}
          <div className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#ad8566] text-white text-[7px] font-bold tracking-widest flex-col items-center justify-center border-2 border-white shadow-lg uppercase select-none transform rotate-12 pointer-events-none">
            <span className="leading-tight text-center">DAR<br/>GABRIEL</span>
          </div>
        </div>
      </form>
    </div>
  );
};

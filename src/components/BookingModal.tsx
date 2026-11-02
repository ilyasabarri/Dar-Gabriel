import React, { useState, useEffect } from 'react';
import { X, Calendar, Users, Check, Mail, Clock, Phone } from 'lucide-react';
import { Language, Room } from '../types';
import { hotelContent, getRoomsData } from '../data/hotelData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  initialRoom?: Room | null;
  initialParams?: { checkIn?: string; checkOut?: string; guests?: number; promo?: string };
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  lang,
  initialRoom,
  initialParams
}) => {
  if (!isOpen) return null;
  const t = hotelContent[lang];
  const bm = t.bookingModal;
  const rooms = getRoomsData(lang);

  // Default dates: tomorrow and 3 days later
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const defaultCheckIn = tomorrow.toISOString().split('T')[0];
  
  const checkoutDate = new Date();
  checkoutDate.setDate(checkoutDate.getDate() + 4);
  const defaultCheckOut = checkoutDate.toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(initialParams?.checkIn || defaultCheckIn);
  const [checkOut, setCheckOut] = useState(initialParams?.checkOut || defaultCheckOut);
  const [guests, setGuests] = useState(initialParams?.guests || 2);
  const [selectedRoomId, setSelectedRoomId] = useState<string>(initialRoom?.id || rooms[0].id);
  const [promoCode, setPromoCode] = useState(initialParams?.promo || 'GABRIEL');
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (initialRoom) {
      setSelectedRoomId(initialRoom.id);
    }
  }, [initialRoom]);

  // Lock body scroll and listen for Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const selectedRoom = rooms.find(r => r.id === selectedRoomId) || rooms[0];

  // Calculate nights
  const d1 = new Date(checkIn);
  const d2 = new Date(checkOut);
  const nights = Math.max(1, Math.round((d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24)) || 1);

  // Discount
  const hasDiscount = promoCode.trim().toUpperCase() === 'GABRIEL';
  const baseTotal = selectedRoom.priceFrom * nights;
  const discountAmount = hasDiscount ? Math.round(baseTotal * 0.15) : 0;
  const finalTotal = baseTotal - discountAmount;
  const madTotal = selectedRoom.priceMad
    ? Math.round((selectedRoom.priceMad * nights) * (hasDiscount ? 0.85 : 1))
    : Math.round(finalTotal * 10.8 / 10) * 10;

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const subjectPrefix = lang === 'es' ? 'Solicitud de Reserva Directa' : lang === 'en' ? 'Direct Booking Request' : 'Demande de Réservation Directe';
    const subject = encodeURIComponent(`${subjectPrefix} - ${selectedRoom.name} (${guestName || 'Client'})`);
    
    let body = '';
    if (lang === 'es') {
      body = encodeURIComponent(
        `SOLICITUD DE RESERVA DIRECTA — DAR GABRIEL (CHEFCHAOUEN)\n` +
        `===================================================\n\n` +
        `• Nombre del huésped: ${guestName || 'No especificado'}\n` +
        `• Teléfono: ${guestPhone}\n` +
        `• Email: ${guestEmail}\n` +
        `• Habitación elegida: ${selectedRoom.name} (${selectedRoom.size})\n` +
        `• Llegada (Check-in): ${checkIn} (12:00 - 19:00)\n` +
        `• Salida (Check-out): ${checkOut} (06:30 - 12:00)\n` +
        `• Estancia: ${nights} ${nights === 1 ? 'noche' : 'noches'}\n` +
        `• Número de huéspedes: ${guests} persona(s)\n` +
        `• Código Promo: ${promoCode} ${hasDiscount ? '(-15% Descuento Directo)' : ''}\n` +
        `• Tarifa estimada: ${finalTotal} € (~${madTotal} MAD) con desayuno incluido\n` +
        `• Peticiones especiales: ${specialRequests || 'Ninguna'}\n\n` +
        `Por favor, confirmen disponibilidad y acceso por Bab Souk.`
      );
    } else if (lang === 'en') {
      body = encodeURIComponent(
        `DIRECT BOOKING REQUEST — DAR GABRIEL (CHEFCHAOUEN)\n` +
        `===================================================\n\n` +
        `• Guest Name: ${guestName || 'Not specified'}\n` +
        `• Phone: ${guestPhone}\n` +
        `• Email: ${guestEmail}\n` +
        `• Selected Room: ${selectedRoom.name} (${selectedRoom.size})\n` +
        `• Check-in: ${checkIn} (12:00 - 19:00)\n` +
        `• Check-out: ${checkOut} (06:30 - 12:00)\n` +
        `• Length of stay: ${nights} ${nights === 1 ? 'night' : 'nights'}\n` +
        `• Number of guests: ${guests} guest(s)\n` +
        `• Promo Code: ${promoCode} ${hasDiscount ? '(-15% Direct Discount)' : ''}\n` +
        `• Estimated Total: ${finalTotal} € (~${madTotal} MAD) with breakfast included\n` +
        `• Special requests: ${specialRequests || 'None'}\n\n` +
        `Kindly confirm availability and arrival instructions at Bab Souk.`
      );
    } else {
      body = encodeURIComponent(
        `DEMANDE DE RÉSERVATION DIRECTE — DAR GABRIEL (CHEFCHAOUEN)\n` +
        `===================================================\n\n` +
        `• Nom du client : ${guestName || 'Non spécifié'}\n` +
        `• Téléphone : ${guestPhone}\n` +
        `• Email : ${guestEmail}\n` +
        `• Chambre choisie : ${selectedRoom.name} (${selectedRoom.size})\n` +
        `• Arrivée (Check-in) : ${checkIn} (12:00 - 19:00)\n` +
        `• Départ (Check-out) : ${checkOut} (06:30 - 12:00)\n` +
        `• Durée : ${nights} nuit(s)\n` +
        `• Nombre de voyageurs : ${guests} personne(s)\n` +
        `• Code Promo : ${promoCode} ${hasDiscount ? '(-15% Réduction Directe)' : ''}\n` +
        `• Tarif estimé : ${finalTotal} € (~${madTotal} MAD) avec petit-déjeuner inclus\n` +
        `• Demandes particulières : ${specialRequests || 'Aucune'}\n\n` +
        `Merci de confirmer la disponibilité et les modalités d'accès à Bab Souk.`
      );
    }
    
    window.open(`mailto:contact@dargabriel-chaouen.com?subject=${subject}&body=${body}`, '_blank');
    setIsSuccess(true);
  };

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 md:p-6 animate-fade-in"
      onClick={onClose}
      data-lenis-prevent="true"
    >
      <div
        className="relative w-full max-w-3xl max-h-[92vh] bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden border border-neutral-200"
        onClick={(e) => e.stopPropagation()}
        data-lenis-prevent="true"
      >
        {/* Pinned Sticky Header Bar */}
        <div className="bg-[#1e2725] text-white p-4 sm:p-5 flex justify-between items-center border-b border-white/10 shrink-0 z-20">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded border border-riad-gold flex items-center justify-center text-riad-gold font-bold text-xs shrink-0">
              DG
            </div>
            <div>
              <h3 className="font-serif text-base sm:text-xl font-medium tracking-wide">
                {bm.title}
              </h3>
              <p className="text-[10px] uppercase tracking-widest text-riad-gold font-medium">
                {bm.subtitle}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95 shrink-0"
            aria-label={bm.closeAria}
            title={bm.closeAria}
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Content Container */}
        <div className="flex-1 overflow-y-auto overscroll-contain p-5 sm:p-8 bg-[#faf8f5]" data-lenis-prevent="true">
          {isSuccess ? (
            <div className="p-6 sm:p-12 text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                <Check size={32} />
              </div>
              <h4 className="font-serif text-2xl text-neutral-800 font-medium mb-2">
                {bm.successTitle}
              </h4>
              <p className="text-sm text-neutral-600 max-w-md mx-auto mb-6 font-light">
                {bm.successMessage}
              </p>
              <button
                type="button"
                onClick={() => { setIsSuccess(false); onClose(); }}
                className="bg-riad-terracotta hover:bg-riad-terracotta-hover text-white text-xs uppercase tracking-widest py-3 px-8 rounded shadow transition-all cursor-pointer"
              >
                {bm.successClose}
              </button>
            </div>
          ) : (
            <div>
              {/* Step 1: Stay Details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 bg-white p-4 rounded-lg border border-neutral-200 shadow-sm">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-neutral-500 font-semibold mb-1">
                    {bm.checkIn}
                  </label>
                  <div className="flex items-center space-x-1.5 text-xs text-neutral-800">
                    <Calendar size={14} className="text-riad-bronze" />
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full bg-transparent font-medium focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-neutral-500 font-semibold mb-1">
                    {bm.checkOut}
                  </label>
                  <div className="flex items-center space-x-1.5 text-xs text-neutral-800">
                    <Calendar size={14} className="text-riad-bronze" />
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full bg-transparent font-medium focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-neutral-500 font-semibold mb-1">
                    {bm.guests}
                  </label>
                  <div className="flex items-center space-x-1.5 text-xs text-neutral-800">
                    <Users size={14} className="text-riad-bronze" />
                    <select
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="w-full bg-transparent font-medium focus:outline-none cursor-pointer"
                    >
                      <option value={1}>{bm.guestOptions[0]}</option>
                      <option value={2}>{bm.guestOptions[1]}</option>
                      <option value={3}>{bm.guestOptions[2]}</option>
                      <option value={4}>{bm.guestOptions[3]}</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Step 2: Room Selection */}
              <div className="mb-6">
                <label className="block text-xs uppercase tracking-wider text-neutral-700 font-semibold mb-2">
                  {bm.selectRoom}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-56 overflow-y-auto pr-1">
                  {rooms.map((room) => {
                    const isSelected = room.id === selectedRoomId;
                    return (
                      <div
                        key={room.id}
                        onClick={() => setSelectedRoomId(room.id)}
                        className={`p-3 rounded border text-left cursor-pointer transition-all flex items-center space-x-3 ${
                          isSelected 
                            ? 'border-riad-terracotta bg-riad-cream/20 shadow-sm' 
                            : 'border-neutral-200 bg-white hover:border-neutral-300'
                        }`}
                      >
                        <img
                          src={room.image}
                          alt={room.name}
                          className="w-14 h-14 rounded object-cover shrink-0"
                        />
                        <div className="overflow-hidden">
                          <h5 className="font-serif text-sm font-semibold text-neutral-900 truncate">
                            {room.name}
                          </h5>
                          <span className="text-[11px] text-neutral-500 block truncate">
                            {room.size} • {room.capacity}
                          </span>
                          <div className="flex items-baseline space-x-1.5">
                            <span className="text-xs font-bold text-riad-terracotta">
                              {room.priceFrom} € <span className="text-[10px] font-normal text-neutral-500">{bm.perNight}</span>
                            </span>
                            <span className="text-[10px] text-neutral-500 font-normal">
                              ({room.priceMad ? `${room.priceMad} MAD` : `~${Math.round(room.priceFrom * 10.8)} MAD`})
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Guest Details & Pricing */}
              <form onSubmit={handleSubmitBooking} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-neutral-600 font-semibold mb-1">
                      {bm.nameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      placeholder={bm.namePlaceholder}
                      className="w-full text-xs p-2.5 bg-white border border-neutral-300 rounded focus:outline-none focus:border-riad-terracotta"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-neutral-600 font-semibold mb-1">
                      {bm.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      required
                      value={guestPhone}
                      onChange={(e) => setGuestPhone(e.target.value)}
                      placeholder={bm.phonePlaceholder}
                      className="w-full text-xs p-2.5 bg-white border border-neutral-300 rounded focus:outline-none focus:border-riad-terracotta"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-neutral-600 font-semibold mb-1">
                      {bm.promoLabel}
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                        placeholder="GABRIEL"
                        className="w-full text-xs p-2.5 bg-white border border-neutral-300 rounded uppercase font-bold text-riad-terracotta focus:outline-none"
                      />
                      {hasDiscount && (
                        <span className="absolute right-2 top-2 text-[9px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.5 rounded">
                          -15%
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-neutral-600 font-semibold mb-1">
                    {bm.emailLabel}
                  </label>
                  <input
                    type="email"
                    required
                    value={guestEmail}
                    onChange={(e) => setGuestEmail(e.target.value)}
                    placeholder={bm.emailPlaceholder}
                    className="w-full text-xs p-2.5 bg-white border border-neutral-300 rounded focus:outline-none focus:border-riad-terracotta"
                  />
                </div>

                {/* Policies Reminder Bar */}
                <div className="bg-amber-50/70 border border-amber-200/80 p-2.5 rounded text-[11px] text-amber-900 flex items-center space-x-2">
                  <Clock size={14} className="text-amber-700 shrink-0" />
                  <span>{bm.policies}</span>
                </div>

                {/* Price Calculation Summary */}
                <div className="bg-white p-4 rounded border border-neutral-200 text-xs text-neutral-700 space-y-1.5">
                  <div className="flex justify-between">
                    <span>{bm.stay} {nights} {nights === 1 ? bm.nightSingle : bm.nightPlural} × {selectedRoom.priceFrom} €</span>
                    <span>{baseTotal} €</span>
                  </div>
                  {hasDiscount && (
                    <div className="flex justify-between text-emerald-700 font-medium">
                      <span>{bm.discountLabel}</span>
                      <span>- {discountAmount} €</span>
                    </div>
                  )}
                  <div className="flex justify-between text-sm font-bold text-neutral-900 pt-2 border-t border-neutral-100">
                    <span>{bm.totalGuaranteed}</span>
                    <div className="text-right">
                      <span className="text-riad-terracotta text-base block leading-none">{finalTotal} €</span>
                      <span className="text-[11px] text-neutral-500 font-normal">~ {madTotal} MAD</span>
                    </div>
                  </div>
                </div>

                {/* Action Submit */}
                <div className="pt-2 space-y-2">
                  <button
                    type="submit"
                    className="w-full bg-riad-terracotta hover:bg-riad-terracotta-hover text-white text-xs uppercase tracking-[0.2em] font-semibold py-4 px-6 rounded shadow-lg flex items-center justify-center space-x-2.5 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                  >
                    <Mail size={16} />
                    <span>{bm.submitBtn}</span>
                  </button>
                  <div className="text-center text-[11px] text-neutral-500 pt-1 flex items-center justify-center space-x-2">
                    <Phone size={12} className="text-riad-gold" />
                    <span>{bm.receptionHelp}</span>
                    <a href="tel:+212539984210" className="text-riad-terracotta font-medium hover:underline">+212 539 98 42 10</a>
                  </div>

                  <div className="pt-2 text-center">
                    <button
                      type="button"
                      onClick={onClose}
                      className="text-xs text-neutral-500 hover:text-neutral-800 underline decoration-neutral-300 underline-offset-4 py-1 transition-colors cursor-pointer"
                    >
                      {bm.cancelBtn}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

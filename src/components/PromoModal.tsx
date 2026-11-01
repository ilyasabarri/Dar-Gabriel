import React, { useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { hotelContent } from '../data/hotelData';

interface PromoModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  onApplyPromo: (code: string) => void;
}

export const PromoModal: React.FC<PromoModalProps> = ({
  isOpen,
  onClose,
  lang,
  onApplyPromo
}) => {
  const t = hotelContent[lang].promoPopup;

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

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
      data-lenis-prevent="true"
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-lg overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-12 border border-neutral-200"
        onClick={(e) => e.stopPropagation()}
        data-lenis-prevent="true"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-neutral-800 flex items-center justify-center shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Fermer la fenêtre (Échap)"
          title="Fermer (Échap)"
        >
          <X size={18} />
        </button>

        {/* Left: Romantic Riad Bedroom Photo */}
        <div className="md:col-span-5 relative h-52 md:h-auto overflow-hidden bg-neutral-900">
          <img
            src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80"
            alt="Suite Chaouen Promo"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Right: Promotion Details & CTA */}
        <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between bg-white text-neutral-800">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#ad8566] font-bold block mb-1">
              {t.tag}
            </span>

            <h3 className="font-serif text-2xl sm:text-3xl text-neutral-900 font-medium leading-snug mb-2">
              {t.title}
            </h3>

            <p className="text-[10px] uppercase tracking-wider text-neutral-500 font-semibold mb-4">
              {t.dates}
            </p>

            <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed mb-6">
              {t.description}
            </p>
          </div>

          <div>
            <button
              onClick={() => {
                onApplyPromo('CHAOUEN');
                onClose();
              }}
              className="w-full bg-riad-terracotta hover:bg-riad-terracotta-hover text-white text-xs uppercase tracking-[0.2em] font-medium py-3.5 px-6 rounded transition-all shadow-md flex items-center justify-center space-x-2 group"
            >
              <span>{t.buttonText}</span>
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


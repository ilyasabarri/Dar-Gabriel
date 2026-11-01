import React, { useState } from 'react';
import { Video, X } from 'lucide-react';
import { Language } from '../types';
import { hotelContent } from '../data/hotelData';

interface LiveSunsetSectionProps {
  lang: Language;
}

export const LiveSunsetSection: React.FC<LiveSunsetSectionProps> = ({ lang }) => {
  const t = hotelContent[lang];
  const [showLiveModal, setShowLiveModal] = useState(false);

  return (
    <section className="relative py-32 md:py-44 px-4 text-white overflow-hidden flex items-center justify-center">
      {/* Background High-res Panoramic Mountain Sunset of Chefchaouen */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/9c/Chefchaouen_%2855312834484%29.jpg"
          alt="Chefchaouen Panoramic Sunset View"
          className="w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/45" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
        <span className="text-[10px] md:text-[11px] uppercase tracking-[0.35em] text-[#e8dfd5] font-light mb-4">
          {t.liveSunsetSection.tag}
        </span>

        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white leading-relaxed mb-4 max-w-2xl">
          {t.liveSunsetSection.quote}
        </h2>

        <p className="font-serif italic text-lg text-white/80 mb-8">
          Descubre el pulso tranquilo del Rif
        </p>

        <button
          onClick={() => setShowLiveModal(true)}
          className="inline-flex items-center space-x-2.5 px-7 py-3 rounded-full border border-white/60 bg-white/10 hover:bg-white/20 backdrop-blur-md text-xs uppercase tracking-[0.2em] font-medium transition-all hover:scale-105 shadow-xl"
        >
          <span>{t.liveSunsetSection.button}</span>
          <Video size={16} />
        </button>
      </div>

      {/* Live View Modal */}
      {showLiveModal && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-[#1a2321] rounded-lg overflow-hidden border border-white/20 shadow-2xl">
            <div className="p-4 bg-black/40 flex justify-between items-center border-b border-white/10">
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                <span className="text-xs uppercase tracking-widest text-white/90 font-medium">
                  Cámara en Directo • Terraza Riad Chaouen
                </span>
              </div>
              <button 
                onClick={() => setShowLiveModal(false)}
                className="text-white/60 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            <div className="relative aspect-video bg-black">
              <img
                src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1600&q=85"
                alt="Live Webcam"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-black/60 px-3 py-1 rounded text-[11px] font-mono text-white/90">
                CHEFCHAOUEN • {new Date().toLocaleTimeString()} • 24°C Despejado
              </div>
            </div>

            <div className="p-4 bg-[#141b19] text-xs text-white/70 flex justify-between items-center">
              <span>Orientación: Este hacia las fuentes de Ras El-Maa y la Mezquita Española</span>
              <span className="text-riad-gold font-medium">Señal en Tiempo Real</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};


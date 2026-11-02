import React, { useState } from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Language } from '../types';
import { hotelContent, getExperiencesData } from '../data/hotelData';

interface ExperiencesSectionProps {
  lang: Language;
  onOpenBooking: () => void;
}

export const ExperiencesSection: React.FC<ExperiencesSectionProps> = ({
  lang,
  onOpenBooking
}) => {
  const t = hotelContent[lang];
  const [activeExpIndex, setActiveExpIndex] = useState(0);

  const experiences = getExperiencesData(lang);
  const activeExp = experiences[activeExpIndex] || experiences[0];

  return (
    <section id="experiences" className="py-24 md:py-36 bg-[#fdfcfb] overflow-hidden border-b border-neutral-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Dynamic Photography Display with Smooth Transition */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-[420px] sm:h-[560px] rounded-lg overflow-hidden shadow-2xl border border-neutral-200 bg-neutral-900">
              {experiences.map((exp, idx) => (
                <img
                  key={exp.id}
                  src={exp.image}
                  alt={exp.title}
                  className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-1000 ease-out ${
                    activeExpIndex === idx 
                      ? 'opacity-100 scale-100' 
                      : 'opacity-0 scale-105 pointer-events-none'
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              
              {/* Badge overlay */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md py-1.5 px-4 rounded text-[10px] uppercase tracking-[0.25em] font-semibold text-neutral-800 border border-black/5 shadow-md">
                {activeExp.badge}
              </div>
            </div>

            {/* Decorative Moroccan Pattern Frame Accent */}
            <div className="absolute -bottom-4 -right-4 w-48 h-48 border border-riad-terracotta/25 rounded-lg -z-10 hidden sm:block" />
          </div>

          {/* Right Column: Editorial Text & Interactive Tabs (Exact Lasala Plaza Structure) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-[#ad8566] font-semibold block mb-4">
              {t.experiencesSection.tag}
            </span>

            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#2a2421] font-light leading-snug mb-10">
              {t.experiencesSection.title}
            </h2>

            {/* Interactive Experience Items List */}
            <div className="space-y-4 mb-10">
              {experiences.map((exp, idx) => {
                const isSelected = activeExpIndex === idx;
                return (
                  <div
                    key={exp.id}
                    onClick={() => setActiveExpIndex(idx)}
                    className={`cursor-pointer border-b border-neutral-200/90 pb-4 transition-all duration-300 ${
                      isSelected ? 'pl-2 border-riad-terracotta' : 'hover:pl-1'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className={`text-base sm:text-lg font-serif transition-colors ${
                        isSelected ? 'text-riad-terracotta font-semibold' : 'text-neutral-800 hover:text-black font-normal'
                      }`}>
                        {exp.title}
                      </h3>
                      <ChevronRight 
                        size={16} 
                        className={`transition-transform duration-300 ${
                          isSelected ? 'rotate-90 text-riad-terracotta' : 'text-neutral-400'
                        }`} 
                      />
                    </div>

                    {isSelected && (
                      <div className="mt-3 text-xs sm:text-sm text-neutral-600 font-light leading-relaxed animate-fade-in pr-4">
                        <p>{exp.fullDesc}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Pill Button Matching Lasala Plaza */}
            <div>
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center space-x-3 bg-riad-terracotta hover:bg-riad-terracotta-hover text-white text-xs uppercase tracking-[0.2em] font-medium py-3.5 px-8 rounded-full shadow-lg transition-all hover:shadow-xl hover:scale-105 active:scale-95 group"
              >
                <span>{t.experiencesSection.cta}</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

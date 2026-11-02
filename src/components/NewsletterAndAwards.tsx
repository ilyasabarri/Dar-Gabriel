import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Language } from '../types';
import { hotelContent, getAwardsLogos } from '../data/hotelData';

interface NewsletterAndAwardsProps {
  lang: Language;
}

export const NewsletterAndAwards: React.FC<NewsletterAndAwardsProps> = ({ lang }) => {
  const t = hotelContent[lang];
  const awards = getAwardsLogos(lang);
  const [email, setEmail] = useState('');
  const [accepted, setAccepted] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && accepted) {
      setSubmitted(true);
    }
  };

  return (
    <section className="bg-[#faf8f5] border-b border-neutral-200/80">
      {/* Newsletter Container */}
      <div className="py-20 md:py-24 px-4 max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-3xl sm:text-4xl text-[#2a2421] font-light mb-8">
          {t.newsletter.title}
        </h2>

        {submitted ? (
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded max-w-md mx-auto text-sm flex items-center justify-center space-x-2">
            <Check size={18} className="text-emerald-600" />
            <span>{t.newsletter.thankYou}</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row items-stretch gap-3 mb-4">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.newsletter.placeholder}
                className="flex-1 px-5 py-3.5 bg-white border border-neutral-300 rounded text-sm text-neutral-800 focus:outline-none focus:border-riad-terracotta"
              />
              <button
                type="submit"
                className="bg-riad-terracotta hover:bg-riad-terracotta-hover text-white text-xs uppercase tracking-[0.2em] font-medium px-8 py-3.5 rounded transition-all shadow-md flex items-center justify-center space-x-2"
              >
                <span>{t.newsletter.button}</span>
                <ArrowRight size={14} />
              </button>
            </div>

            <div className="flex items-center justify-center space-x-2 text-xs text-neutral-500">
              <input
                type="checkbox"
                id="terms-check"
                required
                checked={accepted}
                onChange={(e) => setAccepted(e.target.checked)}
                className="rounded border-neutral-300 text-riad-terracotta focus:ring-0 cursor-pointer"
              />
              <label htmlFor="terms-check" className="cursor-pointer">
                {t.newsletter.terms}
              </label>
            </div>
          </form>
        )}
      </div>

      {/* Awards & Accreditation Badges (Matches Lasala Plaza logo band) */}
      <div className="bg-[#ede8e1] border-t border-neutral-300/70 py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-around gap-6 text-neutral-700">
          {awards.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center px-4 py-2 opacity-85 hover:opacity-100 transition-opacity">
              <span className="font-serif font-bold text-sm sm:text-base tracking-widest text-[#3a322c]">
                {item.label}
              </span>
              <span className="text-[10px] tracking-wider uppercase text-neutral-500 font-medium">
                {item.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


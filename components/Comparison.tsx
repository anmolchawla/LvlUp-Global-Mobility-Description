
import React from 'react';
import BookingButton from './BookingButton';

const Comparison: React.FC = () => {
  const beforeItems = [
    "Weak passport restricting spontaneous global travel",
    "High domestic taxes and aggressive regulation",
    "Wealth concentrated in a single, volatile currency (INR)",
    "No Plan B for political or economic instability",
    "Frustrating visa paperwork for every business trip"
  ];

  const afterItems = [
    "Strong Tier-A residency or second citizenship",
    "Legal offshore tax optimization (1% to 15%)",
    "Wealth diversified in USD, EUR, and hard assets",
    "Full mobility and family safety guaranteed",
    "Visa-free access to major financial hubs"
  ];

  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">SIMPLIFY YOUR GLOBAL FUTURE</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            See the transformative difference of a holistic LvlUp mobility strategy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-slate-800 rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
          <div className="bg-slate-900 p-12">
            <h3 className="text-2xl font-bold mb-8 text-slate-400">BEFORE LVLUP:</h3>
            <ul className="space-y-6">
              {beforeItems.map((item, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 flex-shrink-0 mt-1"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-900/50 p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/10 blur-[100px] -mr-32 -mt-32"></div>
            <h3 className="text-2xl font-bold mb-8 text-emerald-500">WITH LVLUP:</h3>
            <ul className="space-y-6">
              {afterItems.map((item, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500 flex-shrink-0 mt-1"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  <span className="text-white font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
           <BookingButton 
             label="RESERVE YOUR CONSULTATION" 
             className="scale-110"
           />
        </div>
      </div>
    </section>
  );
};

export default Comparison;


import React from 'react';
import BookingButton from './BookingButton';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden min-h-screen flex items-center justify-center">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-emerald-400 uppercase bg-emerald-950/60 rounded-full backdrop-blur-sm">
          Specialized for Indian Entrepreneurs & Investors
        </div>
        <h1 className="text-5xl md:text-7xl font-serif font-black text-white leading-tight mb-8 drop-shadow-lg">
          BECOME A CUSTOMER <br />
          OF THE <span className="italic text-emerald-400">WORLD</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-100 mb-12 leading-relaxed drop-shadow-md">
          We implement bespoke, holistic strategies for successful Indian founders to 
          legally optimize their tax, diversify wealth beyond LRS limits, and 
          secure global mobility through strategic residencies and citizenships.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <BookingButton 
            label="BECOME A CLIENT NOW" 
            className="w-full sm:w-auto"
          />
          <button className="px-10 py-5 bg-white/90 border border-white text-slate-900 font-bold rounded-full hover:bg-white transition-all h-[64px] flex items-center justify-center min-w-[200px] backdrop-blur-sm">
            VIEW CASE STUDIES
          </button>
        </div>

        <div className="mt-24 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40 grayscale">
            <img src="https://picsum.photos/seed/mumbai/400/300" className="rounded-xl object-cover h-48 w-full" alt="City" />
            <img src="https://picsum.photos/seed/dubai/400/300" className="rounded-xl object-cover h-48 w-full" alt="City" />
            <img src="https://picsum.photos/seed/singapore/400/300" className="rounded-xl object-cover h-48 w-full" alt="City" />
            <img src="https://picsum.photos/seed/london/400/300" className="rounded-xl object-cover h-48 w-full" alt="City" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

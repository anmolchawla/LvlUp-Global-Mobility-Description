
import React from 'react';
import BookingButton from './BookingButton';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-100 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <a href="/" className="flex items-center gap-2 group">
              <div className="bg-slate-900 text-white font-black text-2xl w-10 h-10 flex items-center justify-center rounded-lg group-hover:bg-emerald-600 transition-colors">L</div>
              <span className="text-2xl font-black tracking-tighter text-slate-900">LvlUp</span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#process" className="text-[11px] font-bold tracking-[0.15em] text-slate-500 hover:text-slate-900 uppercase transition-colors">Process</a>
            <a href="#story" className="text-[11px] font-bold tracking-[0.15em] text-slate-500 hover:text-slate-900 uppercase transition-colors">My Story</a>
            <a href="#contact" className="text-[11px] font-bold tracking-[0.15em] text-slate-500 hover:text-slate-900 uppercase transition-colors">Talk To Us</a>
            <div className="h-6 w-px bg-slate-200 mx-2"></div>
            <BookingButton label="BECOME A CLIENT" />
          </div>

          <div className="md:hidden p-2 text-slate-900">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
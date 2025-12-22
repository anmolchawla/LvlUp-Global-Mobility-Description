
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 pt-24 pb-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
             <div className="flex items-center gap-2 mb-6">
              <div className="bg-slate-900 text-white font-black text-xl w-8 h-8 flex items-center justify-center rounded-lg">L</div>
              <span className="text-xl font-black tracking-tighter text-slate-900">LvlUp</span>
            </div>
            <p className="text-slate-500 leading-relaxed mb-6">
              Bespoke mobility strategies for India's high-net-worth entrepreneurs and investors. 
              Legally diversify your life and your wealth.
            </p>
            <div className="flex space-x-4">
               <a href="https://www.instagram.com/lvlupanmol/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:text-emerald-600 hover:border-emerald-200 hover:shadow-lg transition-all" aria-label="Instagram">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
               </a>
               <a href="https://x.com/lvlupanmol" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:text-emerald-600 hover:border-emerald-200 hover:shadow-lg transition-all" aria-label="X (Twitter)">
                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>
               </a>
               <a href="https://www.youtube.com/channel/UCihrSEYUGVM63m67j6a_IsA" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:text-emerald-600 hover:border-emerald-200 hover:shadow-lg transition-all" aria-label="YouTube">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 2-2h15a2 2 0 0 1 2 2 24.12 24.12 0 0 1 0 10 2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2Z"/><path d="m10 15 5-3-5-3z"/></svg>
               </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-sm tracking-widest">Company</h4>
            <ul className="space-y-4 text-slate-600">
              <li><a href="#story" className="hover:text-emerald-600 transition-colors">Our Story</a></li>
              <li><a href="#process" className="hover:text-emerald-600 transition-colors">The Process</a></li>
              <li><a href="#blog" className="hover:text-emerald-600 transition-colors">Insights</a></li>
              <li><a href="#contact" className="hover:text-emerald-600 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-sm tracking-widest">Services</h4>
            <ul className="space-y-4 text-slate-600">
              <li><a href="#" className="hover:text-emerald-600 transition-colors">Tax Optimization</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors">Golden Visas</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors">Offshore Banking</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors">Portfolio Diversification</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-sm tracking-widest">Stay Informed</h4>
            <p className="text-slate-500 mb-6 text-sm">Join 5,000+ Indian HNWIs receiving our weekly global mobility intelligence.</p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white border border-slate-200 px-4 py-3 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
              />
              <button className="bg-slate-900 text-white font-bold py-3 rounded-xl hover:bg-emerald-600 transition-colors">
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-xs">
          <p>© 2024 LvlUp Global Limited. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-600 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-600 transition-colors">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

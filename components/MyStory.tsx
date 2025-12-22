
import React from 'react';

const MyStory: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-stretch gap-16">
          {/* Founder's Image Container - Luxury Gallery Aesthetic */}
          <div className="lg:w-5/12 relative">
            {/* Wood-panel backdrop effect to match the photo's wall */}
            <div className="absolute inset-0 bg-[#f4f1ee] rounded-[40px] translate-x-4 translate-y-4 -z-10 border border-slate-100"></div>
            
            <div className="relative h-full overflow-hidden rounded-[32px] shadow-2xl group border border-slate-200">
              {/* This image placeholder represents the portrait orientation and high-end vibe of your provided photo */}
              <img
                src="/img_2948.jpg"
                alt="Anmol - Global Mobility Architect"
                className="w-full h-full object-cover min-h-[700px] transition-all duration-1000 group-hover:scale-105"
              />
              
              {/* Overlay Caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/10 to-transparent flex flex-col justify-end p-10">
                <div className="backdrop-blur-md bg-white/10 p-6 rounded-2xl border border-white/20">
                   <p className="text-white font-serif italic text-xl leading-relaxed">
                    "Freedom isn't found—it's engineered. I build for those who refuse to be defined by a passport."
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="w-10 h-0.5 bg-emerald-500"></div>
                    <span className="text-emerald-400 font-bold tracking-[0.2em] text-[10px] uppercase">Anmol • LvlUp Founder</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Narrative Content */}
          <div className="lg:w-7/12 flex flex-col justify-center">
            <div className="mb-12">
              <h2 className="text-sm font-bold tracking-[0.3em] text-emerald-600 uppercase mb-4">Founder's Note</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-black text-slate-900 leading-tight">
                FROM THE VALLEY <br />
                <span className="italic text-emerald-600 underline decoration-slate-200 underline-offset-8">TO THE WORLD</span>
              </h3>
            </div>
            
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                My journey began with a frustration many of you know well. I left India to pursue higher education in the US and then worked in <span className="text-slate-900 font-bold">Silicon Valley</span>. Despite the growth, I hit a ceiling I couldn't control: the friction of the global visa situation.
              </p>
              
              <p>
                I left the Valley for <span className="text-slate-900 font-bold">Dubai</span> to start my own tech company. After a successful exit, I wanted a life that allowed me to be closer to my family in India without being tethered to high taxes and outdated infrastructure.
              </p>
              
              <p className="bg-slate-50 p-8 rounded-3xl border-l-4 border-emerald-600 font-medium text-slate-800 italic shadow-sm">
                "I became my own first client, constructing a life that works for me, not the other way around. Now, I help others do the same."
              </p>
              
              <p>
                Since then, I have personally explored over <span className="text-slate-900 font-bold">30 countries</span>, built a global real estate portfolio, and secured multiple <span className="text-slate-900 font-bold">Golden Visas</span>. 
              </p>
              
              <p>
                At <span className="text-slate-900 font-bold">LvlUp</span>, we don't just provide services—we help you construct your own dream setup, using the exact blueprint I live by every day.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-8 items-center border-t border-slate-100 pt-10">
              <div className="flex flex-col">
                <span className="text-3xl font-black text-slate-900 mb-1">30+</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Nations Visited</span>
              </div>
              <div className="w-px h-10 bg-slate-200 hidden sm:block"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-black text-slate-900 mb-1">Multiple</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Golden Visas</span>
              </div>
              <div className="w-px h-10 bg-slate-200 hidden sm:block"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-black text-slate-900 mb-1">∞</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Global Mobility</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyStory;

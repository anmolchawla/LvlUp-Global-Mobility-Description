
import React from 'react';

const WhoWeServe: React.FC = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-8 leading-tight">WHO WE SERVE</h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              We work exclusively with high-net-worth Indian entrepreneurs and professional investors 
              who have outgrown local opportunities and are ready for a global stage.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-slate-900 text-white flex items-center justify-center rounded-xl font-bold">01</div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">ENTREPRENEURS</h4>
                  <p className="text-slate-600">
                    Founders with a net worth of ₹12 Cr ($1.5M) or annual income of ₹4 Cr+ ($500k). 
                    Running SAAS, E-commerce, or Consulting businesses that are location independent.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-slate-900 text-white flex items-center justify-center rounded-xl font-bold">02</div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">INVESTORS</h4>
                  <p className="text-slate-600">
                    Portfolio managers and traders with $1M+ capital looking to diversify 
                    beyond Indian equities into global real estate, crypto, and VC.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
             <div className="absolute -inset-4 bg-emerald-600/5 rounded-[40px] -rotate-2"></div>
             <img 
               src="https://picsum.photos/seed/founders/800/1000" 
               className="rounded-[32px] shadow-2xl relative z-10 w-full object-cover aspect-[4/5]" 
               alt="Successful Team" 
             />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;

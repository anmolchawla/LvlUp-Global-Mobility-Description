
import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Rajesh K.",
      role: "SaaS Founder",
      text: "LvlUp helped me move my headquarters to Dubai while staying compliant with Indian tax laws. My global tax rate went from 35% to 0% legally.",
      rating: 5
    },
    {
      name: "Amit S.",
      role: "Crypto Investor",
      text: "The team handled my Golden Visa for Portugal from start to finish. Now my kids have European residency and world-class education options.",
      rating: 5
    },
    {
      name: "Neha M.",
      role: "E-commerce Founder",
      text: "I used to spend months on visas. Now I have a second passport and the freedom to grow my business across 3 continents without limits.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-center text-slate-900 mb-16">WHAT OUR CLIENTS SAY</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="border border-slate-100 p-8 rounded-3xl hover:border-emerald-200 hover:bg-emerald-50/30 transition-all">
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, j) => (
                  <svg key={j} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-amber-400"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                ))}
              </div>
              <p className="text-slate-600 mb-8 italic text-lg leading-relaxed">"{t.text}"</p>
              <div>
                <div className="font-bold text-slate-900">{t.name}</div>
                <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

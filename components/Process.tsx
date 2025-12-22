
import React from 'react';

const Process: React.FC = () => {
  const steps = [
    {
      title: "Wealth Optimization",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-600"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
      ),
      description: "Navigate FEMA, LRS, and domestic tax regulations while establishing offshore structures that accelerate growth legally."
    },
    {
      title: "Citizenship Planning",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-600"><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 0 20M12 2a15.3 15.3 0 0 0 0 20"/></svg>
      ),
      description: "Secure a Plan B with residency visas or citizenships. Upgrade your passport to access visa-free travel to 150+ countries."
    },
    {
      title: "Global Investment",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-600"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>
      ),
      description: "Deploy capital in high-yield global real estate, stocks, and private equity to safeguard your family's future."
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">MORE FREEDOM IN 3 SIMPLE STEPS</h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all group">
              <div className="mb-8 p-4 bg-emerald-50 w-fit rounded-2xl group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;

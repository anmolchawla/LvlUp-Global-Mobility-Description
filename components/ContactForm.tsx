
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    goal: 'Tax Optimization',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      
      if (result.success) {
        setSubmitted(true);
      } else {
        setError('Failed to submit inquiry. Please try again.');
      }
    } catch (err) {
      setError('Failed to submit inquiry. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-4xl md:text-5xl font-serif font-black text-slate-900 mb-6 leading-tight uppercase tracking-tighter">
              TALK <br />TO US
            </h2>
            <div className="w-16 h-1.5 bg-emerald-600 mb-8"></div>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Have a specific question about FEMA compliance, Golden Visas, or global tax structuring?
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-slate-900 font-bold group cursor-pointer" onClick={() => window.location.href = 'mailto:help@lvlup.click'}>
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all">
                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
                </div>
                help@lvlup.click
              </div>
              
              <div className="pt-6 border-t border-slate-100">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Follow My Journey</p>
                <div className="flex gap-4">
                  <a href="https://www.instagram.com/lvlupanmol/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-600 transition-colors">Instagram</a>
                  <a href="https://x.com/lvlupanmol" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-600 transition-colors">X</a>
                  <a href="https://www.youtube.com/channel/UCihrSEYUGVM63m67j6a_IsA" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-600 transition-colors">YouTube</a>
                </div>
              </div>

              <p className="text-sm text-slate-400 italic">Response time: Usually within 4 business hours.</p>
            </div>
          </div>

          <div className="lg:w-2/3">
            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-100 p-12 rounded-3xl text-center">
                <div className="w-20 h-20 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Inquiry Initialized</h3>
                <p className="text-slate-600">Your inquiry has been received. We'll get back to you within 4 business hours.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-emerald-600 font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Full Name</label>
                  <input 
                    required
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="John Doe"
                    className="w-full bg-slate-50 border border-slate-200 px-5 py-4 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Address</label>
                  <input 
                    required
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="john@company.com"
                    className="w-full bg-slate-50 border border-slate-200 px-5 py-4 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">WhatsApp Number</label>
                  <input 
                    required
                    type="tel" 
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full bg-slate-50 border border-slate-200 px-5 py-4 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Primary Goal</label>
                  <select 
                    value={formData.goal}
                    onChange={(e) => setFormData({...formData, goal: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 px-5 py-4 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all appearance-none"
                  >
                    <option>Tax Optimization</option>
                    <option>Second Citizenship</option>
                    <option>Global Real Estate</option>
                    <option>Family Mobility</option>
                  </select>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Your Message</label>
                  <textarea 
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell us about your current situation..."
                    className="w-full bg-slate-50 border border-slate-200 px-5 py-4 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all resize-none"
                  />
                </div>
                <div className="md:col-span-2 pt-4">
                  {error && (
                    <p className="text-center mb-4 text-sm text-red-500">{error}</p>
                  )}
                  <button 
                    type="submit"
                    disabled={loading}
                    className="w-full bg-slate-900 text-white font-bold py-5 rounded-2xl hover:bg-emerald-600 transition-all shadow-xl hover:shadow-emerald-600/20 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'SENDING...' : 'SEND'}
                  </button>
                  <p className="text-center mt-4 text-xs text-slate-400">
                    Your information is strictly confidential and protected by NDA.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

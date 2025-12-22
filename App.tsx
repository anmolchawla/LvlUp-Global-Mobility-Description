
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Process from './components/Process';
import WhoWeServe from './components/WhoWeServe';
import MyStory from './components/MyStory';
import Comparison from './components/Comparison';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import MobilityAdvisor from './components/MobilityAdvisor';

const App: React.FC = () => {
  const [showAdvisor, setShowAdvisor] = useState(false);

  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <section id="process">
          <Process />
        </section>
        <section id="serve">
          <WhoWeServe />
        </section>
        <section id="story">
          <MyStory />
        </section>
        <section id="benefits">
          <Comparison />
        </section>
        <Testimonials />
        <section id="blog">
          <Blog />
        </section>
        <section id="contact">
          <ContactForm />
        </section>
      </main>
      <Footer />

      {/* Floating Advisor Toggle */}
      <button 
        onClick={() => setShowAdvisor(!showAdvisor)}
        className="fixed bottom-8 right-8 bg-slate-900 text-white p-4 rounded-full shadow-2xl hover:bg-emerald-600 transition-all z-50 flex items-center gap-2 group"
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap px-0 group-hover:px-2">
          Ask Mobility Advisor
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>
      </button>

      {showAdvisor && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl relative overflow-hidden h-[80vh] flex flex-col">
            <button 
              onClick={() => setShowAdvisor(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
            <MobilityAdvisor />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;

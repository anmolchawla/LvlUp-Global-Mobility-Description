
import React from 'react';
import { Analytics } from '@vercel/analytics/react';
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

const App: React.FC = () => {
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
      <Analytics />
    </div>
  );
};

export default App;

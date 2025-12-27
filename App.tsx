
import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga4';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Process from './components/Process';
import WhoWeServe from './components/WhoWeServe';
import MyStory from './components/MyStory';
import Comparison from './components/Comparison';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App: React.FC = () => {

  // Initialize GA4 and track visitor location and source on component mount
  useEffect(() => {
    // Initialize GA4
    const measurementId = import.meta.env.VITE_GA4_MEASUREMENT_ID || '';
    if (measurementId) {
      ReactGA.initialize(measurementId);
      
      // Track UTM parameters and referrer source
      const params = new URLSearchParams(window.location.search);
      const source = params.get('utm_source') || document.referrer || 'direct';
      const medium = params.get('utm_medium') || 'organic';
      const campaign = params.get('utm_campaign') || 'none';

      // Send custom event with source and medium
      ReactGA.event('page_view_with_source', {
        source: source,
        medium: medium,
        campaign: campaign,
        timestamp: new Date().toISOString(),
      });

      // Attempt to get location (requires geolocation API permission)
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            ReactGA.event('location_captured', {
              latitude: position.coords.latitude.toFixed(4),
              longitude: position.coords.longitude.toFixed(4),
              accuracy: position.coords.accuracy.toFixed(0),
            });
          },
          (error) => {
            // Location permission denied or unavailable - silently continue
            console.debug('Location access not available');
          }
        );
      }
    }
  }, []);

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
        <section id="contact">
          <ContactForm />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;

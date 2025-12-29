
import React, { useEffect, useRef } from 'react';

const WhoWeServe: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch((err) => {
          console.error('Video play error:', err);
        });
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const containerStyle: React.CSSProperties = {
    position: 'relative',
    borderRadius: '24px',
    overflow: 'hidden',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    width: '100%',
    aspectRatio: '9 / 16',
    maxHeight: '550px',
    backgroundColor: '#000'
  };

  const videoStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block'
  };

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
          
          <div className="lg:w-1/2">
            <div style={containerStyle}>
              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                style={videoStyle}
              >
                <source src="/who-we-serve.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;

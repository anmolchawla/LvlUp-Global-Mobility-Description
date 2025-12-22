
import React, { useEffect, useRef } from 'react';

interface BookingButtonProps {
  label: string;
  className?: string;
  color?: string;
}

declare global {
  interface Window {
    calendar: any;
  }
}

const BookingButton: React.FC<BookingButtonProps> = ({ 
  label, 
  className = "", 
  color = "#059669" // LvlUp Emerald
}) => {
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initBooking = () => {
      if (window.calendar && window.calendar.schedulingButton && targetRef.current) {
        // Clear previous instances if React re-renders
        targetRef.current.innerHTML = '';
        
        window.calendar.schedulingButton.load({
          url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ3Lh-85HmhneOmBilUQsCa0lW82LXmP2wuCuXgG0wM1sxOMP4-u38sm0biL-FAohvLyT1B88pVV?gv=true',
          color: color,
          label: label,
          target: targetRef.current,
        });
      }
    };

    // Try immediately if script is loaded, or wait for window load
    if (document.readyState === 'complete') {
      initBooking();
    } else {
      window.addEventListener('load', initBooking);
      return () => window.removeEventListener('load', initBooking);
    }
  }, [label, color]);

  return (
    <div ref={targetRef} className={`inline-block ${className}`}>
      {/* Fallback button styled to match while loading script */}
      <button className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-emerald-600 transition-colors animate-pulse">
        {label}
      </button>
    </div>
  );
};

export default BookingButton;

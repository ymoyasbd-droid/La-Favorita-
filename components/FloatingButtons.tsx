'use client';

import { Phone, ChevronUp } from 'lucide-react';
// import { MessageCircle } from 'lucide-react'; // Placeholder for whatsapp if needed.
import { useState, useEffect } from 'react';

export default function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling past hero section
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`fixed bottom-6 right-6 z-50 flex flex-col gap-3 transition-opacity duration-300 ${isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
      <button
        onClick={scrollToTop}
        className="w-14 h-14 bg-warm-card text-warm-ink border border-warm-border rounded-full flex items-center justify-center shadow-lg hover:border-warm-primary hover:text-warm-primary hover:scale-105 transition-all duration-300"
        aria-label="Volver arriba"
      >
        <ChevronUp className="w-6 h-6" />
      </button>
      <a
        href="tel:+34937121577"
        className="w-14 h-14 bg-warm-ink text-white rounded-full flex items-center justify-center shadow-lg hover:bg-warm-primary hover:scale-105 transition-all duration-300"
        aria-label="Llamar a La Favorita"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
}

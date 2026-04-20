'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Sobre nosotras', href: '#sobre-nosotras' },
    { name: 'Ubicación', href: '#ubicacion' },
    { name: 'Contacto', href: '#ubicacion' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-warm-bg/95 backdrop-blur-md border-b border-warm-border transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[60px]">
          <Link href="#inicio" className="serif text-[24px] font-bold text-warm-ink">
            La Favorita
          </Link>
          
          <div className="hidden md:flex items-center space-x-[30px]">
            {links.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-[12px] uppercase tracking-[1px] font-medium text-warm-ink hover:text-warm-primary transition-colors"
                style={{ textDecoration: 'none' }}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="#reserva"
              className="inline-block px-[20px] py-[10px] bg-warm-primary text-white rounded-[4px] text-[13px] font-semibold hover:bg-warm-primary/90 transition-colors shadow-sm"
              style={{ textDecoration: 'none' }}
            >
              Reservar cita
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-warm-ink hover:text-warm-primary transition-colors p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-warm-bg border-b border-warm-border overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 shadow-lg">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-[12px] uppercase tracking-[1px] font-medium text-warm-ink hover:bg-warm-tag hover:text-warm-primary rounded-[4px] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 px-3">
                <Link
                  href="#reserva"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-warm-primary text-white px-[20px] py-[10px] rounded-[4px] text-[13px] font-semibold hover:bg-warm-primary/90 transition-colors shadow-sm"
                >
                  Reservar cita
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

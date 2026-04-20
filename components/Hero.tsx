'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center pt-16 overflow-hidden bg-warm-bg border-b border-warm-border">
      <div className="absolute inset-0 z-0 lg:w-[60%] lg:left-auto lg:right-0">
        <Image
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1024"
          alt="Salón de belleza elegante La Favorita"
          fill
          priority
          referrerPolicy="no-referrer"
          className="object-cover object-center lg:opacity-100 opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-warm-bg via-warm-bg/90 lg:via-warm-bg/50 to-transparent"></div>
        <div className="absolute inset-0 bg-warm-bg/80 lg:bg-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-10 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-[400px]"
        >
          <span className="inline-block bg-warm-pill text-white px-[12px] py-[4px] rounded-[20px] text-[10px] uppercase tracking-[1px] font-bold mb-[12px]">
            Peluquería y belleza
          </span>
          <h1 className="serif text-[64px] text-warm-ink leading-[0.9] mb-[16px]">
            Estilo y cuidado<br/>en Sabadell
          </h1>
          <p className="text-[15px] text-warm-ink leading-[1.6] mb-[30px] font-sans">
            Cuida tu imagen en un espacio pensado para que te sientas bien, con atención cercana y profesional en Avinguda Barberà 280.
          </p>

          <div className="flex flex-row gap-[12px] mb-[24px]">
            <Link
              href="#reserva"
              className="inline-block px-[20px] py-[10px] bg-warm-primary text-white rounded-[4px] text-[13px] font-semibold hover:bg-warm-primary/90 transition-colors"
              style={{ textDecoration: 'none' }}
            >
              Quiero reservar
            </Link>
            <Link
              href="#ubicacion"
              className="inline-block px-[20px] py-[10px] border border-warm-primary text-warm-primary bg-transparent rounded-[4px] text-[13px] font-semibold hover:bg-warm-primary/10 transition-colors"
              style={{ textDecoration: 'none' }}
            >
              Cómo llegar
            </Link>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="flex gap-[16px] mt-[24px]"
          >
            <div className="flex items-center gap-[8px] text-[11px] opacity-80 text-warm-ink">
              <span>●</span> Martes-Viernes 9:00-19:00
            </div>
            <div className="flex items-center gap-[8px] text-[11px] opacity-80 text-warm-ink">
              <span>●</span> Sábados 8:00-14:00
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

export default function CTA() {
  return (
    <section id="reserva" className="py-24 bg-warm-ink text-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-warm-primary blur-[100px]"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-warm-primary blur-[100px]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="serif text-[40px] md:text-[48px] lg:text-[56px] font-bold mb-[24px]"
        >
          Reserva tu cita en La Favorita
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[16px] md:text-[18px] text-white/80 max-w-2xl mx-auto mb-[48px] leading-[1.6]"
        >
          Si buscas una peluquería en Sabadell donde sentirte bien atendida y cuidar tu imagen con confianza, te esperamos en La Favorita.
        </motion.p>
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.2 }}
           className="flex flex-col sm:flex-row justify-center items-center gap-[16px]"
        >
          <a
            href="tel:+34937121577"
            className="inline-block px-[24px] py-[12px] bg-warm-primary text-white rounded-[4px] text-[14px] font-semibold hover:bg-warm-primary/90 transition-colors shadow-sm"
            style={{ textDecoration: 'none' }}
          >
            Quiero reservar
          </a>
          <Link
            href="#ubicacion"
            className="inline-block px-[24px] py-[12px] border border-white/40 text-white bg-transparent rounded-[4px] text-[14px] font-semibold hover:bg-white/10 transition-colors shadow-sm"
            style={{ textDecoration: 'none' }}
          >
            Cómo llegar
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

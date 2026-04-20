'use client';

import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    text: "Muy profesionales y un trato excelente. Sales encantada.",
    name: "Cliente de prueba 1"
  },
  {
    text: "Un salón acogedor y con mucha atención al detalle.",
    name: "Cliente de prueba 2"
  },
  {
    text: "Mi peluquería de confianza en Sabadell.",
    name: "Cliente de prueba 3"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-warm-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="serif text-[32px] md:text-[40px] text-warm-ink mb-[16px]"
          >
            Lo que dicen de nosotras
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[15px] text-warm-ink/80 leading-[1.6]"
          >
            {/* Nota interna: Estas reseñas deben reemplazarse por reseñas reales verificadas antes de publicar. */}
            Testimonios de muestra
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-[24px]">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-warm-card p-[32px] rounded-[8px] shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-warm-border-light flex flex-col"
            >
              <div className="flex gap-1 mb-[16px] text-warm-primary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-[14px] text-warm-ink/90 italic mb-[24px] leading-[1.6] flex-grow">
                &quot;{testimonial.text}&quot;
              </p>
              <span className="text-[11px] font-medium text-warm-ink/60 uppercase tracking-[1px]">
                — {testimonial.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

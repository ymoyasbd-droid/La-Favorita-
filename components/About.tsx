'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function About() {
  return (
    <section id="sobre-nosotras" className="py-24 bg-warm-tag relative border-t border-b border-warm-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-[64px] items-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
             <div className="aspect-[4/5] rounded-[8px] overflow-hidden relative shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-warm-border">
               <Image
                  src="https://picsum.photos/seed/teambeauty/1000/1200"
                  alt="Equipo de La Favorita"
                  fill
                  referrerPolicy="no-referrer"
                  className="object-cover"
                />
             </div>
             
             {/* Floating highlight block */}
             <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.3 }}
               className="absolute -bottom-[32px] -right-[16px] lg:-right-[48px] bg-white text-warm-ink p-[32px] rounded-[8px] max-w-sm shadow-[0_4px_30px_rgba(0,0,0,0.08)] border border-warm-border-light"
             >
               <h4 className="serif text-[24px] font-medium leading-[1.2]">
                 Tu momento de cuidado, estilo y bienestar en Sabadell
               </h4>
               <div className="mt-[24px] w-[48px] h-[2px] bg-warm-primary"></div>
             </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:pl-[32px] pt-[48px] lg:pt-0"
          >
            <span className="inline-block bg-warm-pill text-white px-[12px] py-[4px] rounded-[20px] text-[10px] uppercase tracking-[1px] font-bold mb-[16px]">
              Nuestra esencia
            </span>
            <h2 className="serif text-[32px] md:text-[40px] text-warm-ink mb-[32px] leading-[1.1]">
              Más que una peluquería
            </h2>
            <div className="space-y-[24px] text-warm-ink/80 font-sans leading-[1.6] text-[15px]">
              <p>
                La Favorita es un salón de Sabadell vinculado a la actividad de peluquería y otros tratamientos de belleza, con enfoque también en productos especializados. 
              </p>
              <p>
                Queremos reflejar una marca cercana, profesional y actual, donde el cuidado personal y la confianza sean protagonistas. Nos dedicamos a escuchar tus necesidades para ofrecerte los mejores resultados, siempre respetando la salud y la belleza natural de tu cabello.
              </p>
            </div>
            
            <div className="mt-[40px]">
               <a href="#contacto" className="inline-block px-[20px] py-[10px] border border-warm-primary text-warm-primary bg-transparent rounded-[4px] text-[13px] font-semibold hover:bg-warm-primary/10 transition-colors" style={{ textDecoration: 'none' }}>
                 Conócenos en persona
               </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

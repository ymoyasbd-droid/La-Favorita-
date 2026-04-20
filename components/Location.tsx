'use client';

import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Globe } from 'lucide-react';
import Image from 'next/image';

export default function Location() {
  return (
    <section id="ubicacion" className="py-24 bg-warm-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 item-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="serif text-[32px] md:text-[40px] text-warm-ink mb-[48px]">
              Ven a visitarnos
            </h2>

            <div className="bg-warm-tag rounded-[8px] p-8 md:p-12 border border-warm-border shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
              <h3 className="serif text-[24px] font-medium text-warm-ink mb-8">La Favorita</h3>
              
              <ul className="space-y-[24px] mb-[40px]">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-warm-primary mt-1 shrink-0" />
                  <span className="ml-[16px] text-[15px] text-warm-ink font-sans leading-[1.6]">Avinguda Barberà 280, local J,<br/>08203 Sabadell, Barcelona</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 text-warm-primary shrink-0" />
                  <span className="ml-[16px] text-[15px] text-warm-ink font-sans">937 12 15 77</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 text-warm-primary shrink-0" />
                  <span className="ml-[16px] text-[15px] text-warm-ink font-sans">lafavorita.estilistas@hotmail.com</span>
                </li>
                <li className="flex items-start">
                  <Clock className="w-5 h-5 text-warm-primary mt-1 shrink-0" />
                  <span className="ml-[16px] text-[15px] text-warm-ink font-sans leading-[1.6]">martes a viernes de 9:00 a 19:00<br/>sábado de 8:00 a 14:00</span>
                </li>
                <li className="flex items-center">
                  <Globe className="w-5 h-5 text-warm-primary shrink-0" />
                  <span className="ml-[16px] text-[15px] text-warm-ink font-sans">peluquerialafavorita.com</span>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-[16px]">
                <a href="tel:+34937121577" className="inline-block px-[20px] py-[10px] bg-warm-primary text-white rounded-[4px] text-[13px] font-semibold hover:bg-warm-primary/90 transition-colors text-center" style={{ textDecoration: 'none' }}>
                  Llamar ahora
                </a>
                <a href="https://maps.google.com/?q=Avinguda+Barberà+280,+08203+Sabadell" target="_blank" rel="noopener noreferrer" className="inline-block px-[20px] py-[10px] border border-warm-primary text-warm-primary bg-transparent rounded-[4px] text-[13px] font-semibold hover:bg-warm-primary/10 transition-colors text-center" style={{ textDecoration: 'none' }}>
                  Google Maps
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full h-full min-h-[400px] rounded-[8px] overflow-hidden relative shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-warm-border"
          >
            <Image
              src="https://picsum.photos/seed/maplocation/1000/1000"
              alt="Ubicación de La Favorita en Avinguda Barberà 280, Sabadell"
              fill
              referrerPolicy="no-referrer"
              className="object-cover"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const services = [
  {
    title: 'Corte y peinado',
    image: 'https://picsum.photos/seed/haircut/600/800',
  },
  {
    title: 'Color y cambio de look',
    image: 'https://picsum.photos/seed/haircolor/600/800',
  },
  {
    title: 'Tratamientos capilares',
    image: 'https://picsum.photos/seed/haircare/600/800',
  },
  {
    title: 'Peinados ocasiones especiales',
    image: 'https://picsum.photos/seed/hairstyle/600/800',
  },
  {
    title: 'Belleza y cuidado personal',
    image: 'https://picsum.photos/seed/beautycare/600/800',
  },
  {
    title: 'Asesoramiento en productos',
    image: 'https://picsum.photos/seed/hairproducts/600/800',
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-[10px] bg-warm-bg" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <h2 className="serif text-[32px] md:text-[40px] text-warm-ink mb-6">
              Servicios para tu imagen y bienestar
            </h2>
            <p className="text-[15px] text-warm-ink/80 leading-[1.6] mb-[24px]">
              Ofrecemos servicios de peluquería y belleza en un entorno pensado para cuidarte, ayudarte a verte mejor y acompañarte en tu estilo personal.
            </p>
            <div className="flex flex-wrap gap-[12px]">
              {services.map((service, idx) => (
                 <div key={idx} className="text-[11px] bg-warm-tag px-[8px] py-[6px] rounded-[4px] border border-warm-border text-center text-warm-ink">
                    {service.title}
                 </div>
              ))}
            </div>
          </motion.div>
          
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-[16px]">
            {services.slice(0, 3).map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative aspect-[3/4] rounded-[8px] overflow-hidden cursor-pointer box-border border-2 border-transparent hover:border-warm-primary hover:shadow-lg hover:shadow-warm-primary/20 transition-all duration-300"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  referrerPolicy="no-referrer"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-[16px] opacity-80 group-hover:opacity-100 transition-opacity">
                  <h3 className="text-white font-medium text-[13px] leading-tight">
                    {service.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-[16px] lg:w-3/4 ml-auto">
            {services.slice(3, 6).map((service, index) => (
              <motion.div
                key={index + 3}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
                className="group relative aspect-[3/4] rounded-[8px] overflow-hidden cursor-pointer box-border border-2 border-transparent hover:border-warm-primary hover:shadow-lg hover:shadow-warm-primary/20 transition-all duration-300"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  referrerPolicy="no-referrer"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-[16px] opacity-80 group-hover:opacity-100 transition-opacity">
                  <h3 className="text-white font-medium text-[13px] leading-tight">
                    {service.title}
                  </h3>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}

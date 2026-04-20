'use client';

import { motion } from 'motion/react';
import { Heart, Sparkles, MapPin, CalendarCheck } from 'lucide-react';

const props = [
  {
    icon: <Heart className="w-5 h-5 stroke-[2] mb-2 text-warm-primary" />,
    title: 'Atención cercana',
    description: 'Trato personalizado en un ambiente donde te sentirás como en casa.',
  },
  {
    icon: <Sparkles className="w-5 h-5 stroke-[2] mb-2 text-warm-primary" />,
    title: 'Imagen cuidada',
    description: 'Profesionales actualizados para realzar tu estilo y belleza natural.',
  },
  {
    icon: <MapPin className="w-5 h-5 stroke-[2] mb-2 text-warm-primary" />,
    title: 'Ubicación cómoda',
    description: 'En pleno Merca Barberà, un entorno céntrico y accesible en Sabadell.',
  },
  {
    icon: <CalendarCheck className="w-5 h-5 stroke-[2] mb-2 text-warm-primary" />,
    title: 'Reserva fácil',
    description: 'Contacta y agenda tu cita de forma rápida y sencilla.',
  },
];

export default function ValueProps() {
  return (
    <section className="py-24 bg-warm-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="serif text-[32px] md:text-[40px] text-warm-ink mb-6"
          >
            Tu salón de confianza en Sabadell
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[15px] text-warm-ink/80 leading-[1.6]"
          >
            En La Favorita encontrarás un espacio dedicado a la peluquería y la belleza donde cada visita está pensada para que te veas bien y te sientas mejor. Ubicados en Avinguda Barberà 280, trabajamos para ofrecer una experiencia cercana, cuidada y profesional en pleno Sabadell.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
          {props.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-warm-card rounded-[8px] p-[16px] border border-warm-border-light shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:-translate-y-1 transition-transform duration-300"
            >
              {item.icon}
              <h3 className="serif text-[18px] text-warm-ink mb-[10px]">{item.title}</h3>
              <p className="text-warm-ink/80 text-[12px] leading-[1.4] m-0">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

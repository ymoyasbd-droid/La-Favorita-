'use client';

import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Globe, Send, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function Location() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1200);
  };

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

              <div className="flex flex-col sm:flex-row gap-[16px] mb-8">
                <a href="tel:+34937121577" className="inline-block px-[20px] py-[10px] bg-warm-primary text-white rounded-[4px] text-[13px] font-semibold hover:bg-warm-primary/90 transition-colors text-center" style={{ textDecoration: 'none' }}>
                  Llamar ahora
                </a>
                <a href="https://maps.google.com/?q=Avinguda+Barberà+280,+08203+Sabadell" target="_blank" rel="noopener noreferrer" className="inline-block px-[20px] py-[10px] border border-warm-primary text-warm-primary bg-transparent rounded-[4px] text-[13px] font-semibold hover:bg-warm-primary/10 transition-colors text-center" style={{ textDecoration: 'none' }}>
                  Google Maps
                </a>
              </div>

              {/* Form Section */}
              <div className="border-t border-warm-border/50 pt-8">
                <h4 className="serif text-[20px] font-medium text-warm-ink mb-6">Envíanos un mensaje</h4>
                
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-[#E8F5E9] border border-[#C8E6C9] py-4 px-5 rounded-[4px] flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#2E7D32] mt-0.5 shrink-0" />
                    <span className="text-[14px] text-[#1B5E20] leading-[1.5]">
                      ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo lo antes posible.
                    </span>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="name" className="text-[12px] font-medium text-warm-ink/80">Nombre</label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="bg-white border border-warm-border rounded-[4px] px-3 py-2.5 text-[14px] text-warm-ink outline-none focus:border-warm-primary focus:ring-1 focus:ring-warm-primary transition-all"
                          placeholder="Tu nombre"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="text-[12px] font-medium text-warm-ink/80">Email</label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="bg-white border border-warm-border rounded-[4px] px-3 py-2.5 text-[14px] text-warm-ink outline-none focus:border-warm-primary focus:ring-1 focus:ring-warm-primary transition-all"
                          placeholder="tu@email.com"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="message" className="text-[12px] font-medium text-warm-ink/80">Mensaje</label>
                      <textarea
                        id="message"
                        required
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="bg-white border border-warm-border rounded-[4px] px-3 py-2.5 text-[14px] text-warm-ink outline-none focus:border-warm-primary focus:ring-1 focus:ring-warm-primary transition-all resize-none"
                        placeholder="¿En qué podemos ayudarte?"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="mt-2 inline-flex items-center justify-center gap-2 px-[20px] py-[12px] bg-warm-ink text-white rounded-[4px] text-[13px] font-semibold hover:bg-warm-primary transition-colors disabled:opacity-70 disabled:cursor-not-allowed group w-full sm:w-auto"
                    >
                      {isSubmitting ? 'Enviando...' : (
                        <>
                          Enviar mensaje
                          <Send className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                )}
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

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../atoms/SectionTitle';
import { GlowButton } from '../atoms/GlowButton';
import { FaEnvelope, FaLinkedinIn, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';

interface ContactSlideProps {
  isActive?: boolean;
}

const contactInfo = [
  { icon: FaEnvelope, label: 'Correo', value: 'hello@devcraft.pro', href: 'mailto:hello@devcraft.pro' },
  { icon: FaLinkedinIn, label: 'LinkedIn', value: '/in/devcraft-pro', href: 'https://linkedin.com' },
  { icon: FaGithub, label: 'GitHub', value: '@devcraft-pro', href: 'https://github.com' },
  { icon: FaMapMarkerAlt, label: 'Ubicación', value: 'México, MX', href: '#' },
];

export const ContactSlide: React.FC<ContactSlideProps> = ({ isActive = true }) => {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '', subject: '', message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', form);
  };

  const inputClasses = `
    w-full px-4 py-3 rounded-xl
    bg-white/5 border border-border
    text-text-primary text-sm placeholder:text-text-secondary/50
    outline-none transition-all duration-300
    focus:border-accent/50 focus:bg-white/8 focus:ring-1 focus:ring-accent/20
  `;

  return (
    <div className="w-full h-full flex items-center justify-center px-3 sm:px-6 md:px-10 lg:px-14 xl:px-16 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/3 w-[150px] h-[150px] sm:w-[220px] sm:h-[220px] md:w-[300px] md:h-[300px] rounded-full bg-accent/4 blur-[60px] sm:blur-[80px] max-w-[60vw]" />
      </div>

      <div className="w-full max-w-3xl sm:max-w-4xl md:max-w-5xl mx-auto relative z-10 overflow-y-auto overflow-x-hidden py-3 sm:py-4">
        <SectionTitle title="Ponte en Contacto" subtitle="El Último Slide" />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {/* Left — Info + Avatar */}
          <motion.div
            className="lg:col-span-2 flex flex-col gap-3 sm:gap-4"
            initial={{ opacity: 0, x: -30 }}
            animate={isActive ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 sm:gap-4">
              <img
                src="/assets/contact-avatar.png"
                alt="Contact avatar"
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
              />
              <div>
                <h3 className="text-sm sm:text-base font-bold text-text-primary">¡Colaboremos!</h3>
                <p className="text-text-secondary text-xs sm:text-sm">Siempre abierto a nuevas ideas.</p>
              </div>
            </div>

            <div className="flex flex-col gap-2 sm:gap-2.5">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="
                    glass rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-2.5
                    flex items-center gap-2 sm:gap-3
                    text-text-secondary text-xs sm:text-sm
                    transition-all duration-300
                    hover:border-accent/30 hover:text-text-primary
                    group touch-target
                  "
                >
                  <Icon className="w-4 h-4 text-accent group-hover:scale-110 transition-transform flex-shrink-0" />
                  <span className="font-medium truncate">{value}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="lg:col-span-3 glass rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 flex flex-col gap-3 sm:gap-3.5"
            initial={{ opacity: 0, x: 30 }}
            animate={isActive ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <input name="firstName" placeholder="Nombre" value={form.firstName} onChange={handleChange} className={inputClasses} />
              <input name="lastName" placeholder="Apellidos" value={form.lastName} onChange={handleChange} className={inputClasses} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <input name="email" type="email" placeholder="Correo Electrónico" value={form.email} onChange={handleChange} className={inputClasses} />
              <input name="phone" type="tel" placeholder="Teléfono" value={form.phone} onChange={handleChange} className={inputClasses} />
            </div>
            <select name="subject" value={form.subject} onChange={handleChange} className={`${inputClasses} cursor-pointer`}>
              <option value="">Seleccionar Asunto</option>
              <option value="project">Nuevo Proyecto</option>
              <option value="collab">Colaboración</option>
              <option value="hire">Contratación</option>
              <option value="other">Otro</option>
            </select>
            <textarea
              name="message"
              placeholder="Tu Mensaje"
              rows={3}
              value={form.message}
              onChange={handleChange}
              className={`${inputClasses} resize-none`}
            />
            <GlowButton id="btn-send-message" className="w-full mt-1 touch-target">
              Enviar Mensaje
            </GlowButton>
          </motion.form>
        </div>

        {/* Footer */}
        <motion.footer
          className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 text-text-secondary text-[10px] sm:text-xs"
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <p>Portfolio &copy; {new Date().getFullYear()} Ramiro Mota. Todos los derechos reservados.</p>
          <p className="font-mono opacity-60">Construido con Astro + React + TailwindCSS</p>
        </motion.footer>
      </div>
    </div>
  );
};

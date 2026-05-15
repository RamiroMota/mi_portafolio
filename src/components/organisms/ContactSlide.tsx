import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../atoms/SectionTitle';
import { GlowButton } from '../atoms/GlowButton';
import { FaEnvelope, FaLinkedinIn, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';

interface ContactSlideProps {
  isActive?: boolean;
}

const contactInfo = [
  { icon: FaEnvelope, label: 'Correo', value: 'ramiro.mota.tb@gmail.com', href: 'mailto:ramiro.mota.tb@gmail.com' },
  { icon: FaLinkedinIn, label: 'LinkedIn', value: '/in/devcraft-pro', href: 'https://linkedin.com' },
  { icon: FaGithub, label: 'GitHub', value: '@RamiroMota', href: 'https://github.com/RamiroMota' },
  { icon: FaMapMarkerAlt, label: 'Ubicación', value: 'México, MX', href: '#' },
];

export const ContactSlide: React.FC<ContactSlideProps> = ({ isActive = true }) => {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '', subject: '', message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Construct the email body
    const subject = `Contacto Web: ${form.subject || 'Sin Asunto'} - ${form.firstName} ${form.lastName}`;
    const body = `
Nombre: ${form.firstName} ${form.lastName}
Email: ${form.email}
Teléfono: ${form.phone}
Asunto: ${form.subject}

Mensaje:
${form.message}
    `.trim();

    // Generate mailto link
    const mailtoLink = `mailto:ramiro.mota.tb@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open the email client
    window.location.href = mailtoLink;

    // Show success state
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => setStatus('idle'), 3000);
    }, 500);
  };

  const inputClasses = `
    w-full px-4 py-3 rounded-xl
    bg-white/5 border border-border
    text-text-primary text-sm placeholder:text-text-secondary/50
    outline-none transition-all duration-300
    focus:border-accent/50 focus:bg-white/8 focus:ring-1 focus:ring-accent/20
    [&>option]:bg-[#1a2333] [&>option]:text-text-primary
  `;

  return (
    <div className="w-full h-full flex items-center justify-center px-3 sm:px-6 md:px-10 lg:px-14 xl:px-16 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/3 w-[150px] h-[150px] sm:w-[220px] sm:h-[220px] md:w-[300px] md:h-[300px] rounded-full bg-accent/4 blur-[60px] sm:blur-[80px] max-w-[60vw]" />
      </div>

      <div className="w-full max-w-3xl sm:max-w-4xl md:max-w-5xl mx-auto relative z-10 overflow-y-auto overflow-x-hidden py-3 sm:py-4">
        <SectionTitle title="Ponte en Contacto" subtitle="El Último Slide" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-stretch">
          {/* Column 1 — Intro & Avatar */}
          <motion.div
            className="lg:col-span-4 flex"
            initial={{ opacity: 0, x: -30 }}
            animate={isActive ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="glass rounded-xl sm:rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center gap-3 sm:gap-4 w-full">
              <img
                src="/assets/avatar-contac.png"
                alt="Contact avatar"
                className="w-20 h-20 xs:w-24 xs:h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 object-contain mb-1 lg:mb-2"
              />
              <div className="space-y-1 sm:space-y-2">
                <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-text-primary">¡Colaboremos!</h3>
                <p className="text-text-secondary text-[11px] xs:text-xs sm:text-sm sm:text-base leading-relaxed">
                  Siempre abierto a nuevas ideas y proyectos innovadores.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Column 2 — Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="lg:col-span-8 glass rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 flex flex-col gap-3 sm:gap-4 h-full"
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
              rows={4}
              value={form.message}
              onChange={handleChange}
              className={`${inputClasses} resize-none`}
            />
            <GlowButton 
              id="btn-send-message" 
              className={`w-full mt-1 sm:mt-2 py-3 sm:py-4 text-sm sm:text-base font-bold transition-all duration-300 ${
                status === 'success' ? '!bg-green-500 !shadow-green-500/50' : ''
              }`}
              disabled={status === 'sending'}
            >
              {status === 'idle' && 'Enviar Mensaje'}
              {status === 'sending' && 'Preparando Correo...'}
              {status === 'success' && '¡Correo Generado! ✓'}
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
          <p className="font-mono opacity-60">Hecho con ❤️ por Ramiro Mota</p>
        </motion.footer>
      </div>
    </div>
  );
};

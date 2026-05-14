import React from 'react';
import { motion } from 'framer-motion';
import { GradientText } from '../atoms/GradientText';
import { GlowButton } from '../atoms/GlowButton';
import { OutlineButton } from '../atoms/OutlineButton';
import { SocialIcon } from '../atoms/SocialIcon';
import { socialLinks } from '../../data/socialLinks';
import { techStack } from '../../data/techStack';

interface HeroSlideProps {
  onNavigate?: (index: number) => void;
}

const roles = [
  'Desarrollador Full-Stack',
  'Entusiasta UI/UX',
  'Especialista en React',
  'Programador Creativo',
];

export const HeroSlide: React.FC<HeroSlideProps> = ({ onNavigate }) => {
  const [roleIndex, setRoleIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

return (
    <div className="w-full h-full flex items-center justify-center px-3 sm:px-6 md:px-10 lg:px-14 xl:px-16 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Radial gradient */}
        <div className="absolute top-1/4 -right-16 sm:-right-20 md:-right-8 lg:right-0 w-[180px] h-[180px] sm:w-[250px] sm:h-[250px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] rounded-full bg-accent/5 blur-[80px] sm:blur-[100px] max-w-[80vw]" />
        <div className="absolute bottom-1/4 -left-16 sm:-left-20 md:-left-8 lg:left-0 w-[160px] h-[160px] sm:w-[220px] sm:h-[220px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full bg-cyan/5 blur-[60px] sm:blur-[80px] max-w-[80vw]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="w-full max-w-5xl lg:max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center relative z-10 overflow-hidden">
        {/* Left Column — Text */}
        <motion.div
          className="flex flex-col gap-2 sm:gap-3 order-2 lg:order-1"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.p
            className="text-text-secondary text-[10px] xs:text-xs sm:text-sm font-mono tracking-widest uppercase"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            &lt;Hola Mundo /&gt;
          </motion.p>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.1]">
            Hola, soy{' '}
            <GradientText className="block mt-0.5">
              Ramiro Mota,
            </GradientText>
            <span className="block text-text-primary mt-0.5">
              un entusiasta del
            </span>
            <span className="block text-text-primary">
              Código y diseño web.
            </span>
          </h1>

          <div className="h-6 sm:h-8 md:h-10 flex items-center overflow-hidden">
            <motion.p
              key={roleIndex}
              className="text-xs sm:text-sm md:text-base text-text-secondary font-light"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              Desarrollador Senior apasionado por la{' '}
              <span className="text-accent font-medium">{roles[roleIndex]}</span>
              {' '}creación de aplicaciones web innovadoras y de alto rendimiento.
            </motion.p>
          </div>

          {/* Social Icons */}
          <motion.div
            className="flex items-center gap-2 sm:gap-3 mt-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {socialLinks.map((link) => (
              <SocialIcon key={link.name} {...link} />
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap items-center gap-2 sm:gap-3 mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <GlowButton
              id="btn-explore-work"
              onClick={() => onNavigate?.(3)}
            >
              Ver mi Trabajo
            </GlowButton>
            <OutlineButton
              id="btn-contact-me"
              onClick={() => onNavigate?.(4)}
            >
              Contáctame
            </OutlineButton>
          </motion.div>
        </motion.div>

        {/* Right Column — Avatar + Floating Icons */}
        <motion.div
          className="relative flex items-center justify-center order-1 lg:order-2 mb-3 lg:mb-0 min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px]"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Glow behind avatar */}
          <div className="absolute w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] rounded-full bg-accent/10 blur-[60px] sm:blur-[100px] animate-pulse-glow" />

          {/* Avatar */}
          <motion.img
            src="/assets/avatar.png"
            alt="Ramiro Mota — Avatar 3D"
            className="relative z-10 w-44 h-44 xs:w-56 xs:h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] xl:w-[520px] xl:h-[520px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />

          {/* Floating Tech Icons - Dynamically positioned around avatar */}
          {techStack.map((tech, index) => {
            // Position icons in a circle-like pattern around the avatar
            const angles = [210, 330, 45, 150, 280, 10]; // Distribute them
            const distances = ['45%', '42%', '48%', '46%', '44%', '47%'];
            const angle = angles[index % angles.length];
            const distance = distances[index % distances.length];
            
            return (
              <motion.div
                key={tech.id}
                className="absolute z-20 hidden sm:block"
                style={{
                  top: `${50 + Math.sin((angle * Math.PI) / 180) * parseInt(distance)}%`,
                  left: `${50 + Math.cos((angle * Math.PI) / 180) * parseInt(distance)}%`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  y: [0, index % 2 === 0 ? -15 : 15, 0],
                  x: [0, index % 3 === 0 ? 10 : -10, 0]
                }}
                transition={{ 
                  delay: 0.8 + (index * 0.1),
                  duration: 0.5,
                  y: {
                    duration: 3 + (index * 0.5),
                    repeat: Infinity,
                    ease: "easeInOut"
                  },
                  x: {
                    duration: 4 + (index * 0.3),
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                <motion.div 
                  className="glass rounded-xl p-2 sm:p-3 shadow-xl border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-md"
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 12,
                    backgroundColor: "rgba(255, 255, 255, 0.15)",
                    borderColor: tech.color + '44'
                  }}
                >
                  <img
                    src={tech.logoUrl}
                    alt={tech.name}
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 object-contain"
                    style={{ filter: `drop-shadow(0 0 8px ${tech.color}44)` }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GradientText } from '../atoms/GradientText';
import { GlowButton } from '../atoms/GlowButton';
import { OutlineButton } from '../atoms/OutlineButton';
import { SocialIcon } from '../atoms/SocialIcon';
import { socialLinks } from '../../data/socialLinks';
import { techStack } from '../../data/techStack';

interface HeroSlideProps {
  onNavigate?: (index: number) => void;
}

const TypewriterIntro: React.FC<{ onComplete?: () => void }> = ({ onComplete }) => {
  const segments = [
    { text: 'Hola, soy ', type: 'normal', line: 0 },
    { text: 'Ramiro Mota,', type: 'gradient', line: 0 },
    { text: 'un entusiasta del', type: 'normal', line: 1 },
    { text: 'Código y diseño web.', type: 'normal', line: 2 }
  ];

  const [visibleChars, setVisibleChars] = React.useState(0);
  const totalChars = segments.reduce((acc, s) => acc + s.text.length, 0);

  React.useEffect(() => {
    let current = 0;
    const timer = setInterval(() => {
      current++;
      setVisibleChars(current);
      if (current >= totalChars) {
        clearInterval(timer);
        onComplete?.();
      }
    }, 50);
    return () => clearInterval(timer);
  }, [totalChars]);

  let charCount = 0;

  return (
    <div className="relative">
      {[0, 1, 2].map((lineIdx) => {
        const lineSegments = segments.filter(s => s.line === lineIdx);
        const isLastVisibleLine = lineIdx === segments.findIndex((s, i) => {
          const start = segments.slice(0, i).reduce((acc, curr) => acc + curr.text.length, 0);
          const end = start + s.text.length;
          return visibleChars > start && visibleChars <= end;
        }) || (visibleChars >= totalChars && lineIdx === 2);

        // Calculate if any characters in this line are visible
        const lineStart = segments.filter(s => s.line < lineIdx).reduce((acc, s) => acc + s.text.length, 0);
        if (visibleChars < lineStart && lineIdx !== 0) return null;

        return (
          <div key={lineIdx} className={`${lineIdx > 0 ? 'block mt-1 lg:mt-0.5' : 'inline-block'}`}>
            {lineSegments.map((seg, segIdx) => {
              const segStart = segments.slice(0, segments.indexOf(seg)).reduce((acc, curr) => acc + curr.text.length, 0);
              const visibleInSeg = Math.max(0, Math.min(seg.text.length, visibleChars - segStart));
              
              if (visibleInSeg === 0 && visibleChars < segStart) return null;

              const content = seg.text.slice(0, visibleInSeg);
              const isActiveSegment = visibleChars > segStart && visibleChars <= segStart + seg.text.length;

              return (
                <React.Fragment key={segIdx}>
                  {seg.type === 'gradient' ? (
                    <GradientText className="!bg-gradient-to-r !from-fuchsia-500 !to-cyan-500">
                      {content}
                    </GradientText>
                  ) : (
                    <span>{content}</span>
                  )}
                  {isActiveSegment && (
                    <motion.span
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity, ease: (p) => (p < 0.5 ? 0 : 1) }}
                      className="inline-block w-[4px] h-[0.9em] bg-accent ml-1 translate-y-1 shadow-[0_0_8px_var(--color-accent)]"
                    />
                  )}
                </React.Fragment>
              );
            })}
            {visibleChars >= totalChars && lineIdx === 2 && (
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: (p) => (p < 0.5 ? 0 : 1) }}
                className="inline-block w-[4px] h-[0.9em] bg-accent ml-1 translate-y-1 shadow-[0_0_8px_var(--color-accent)]"
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

const roles = [
  'Desarrollador Full-Stack',
  'Entusiasta UI/UX',
  'Especialista en React',
  'Programador Creativo',
];

export const HeroSlide: React.FC<HeroSlideProps> = ({ onNavigate }) => {
  const [roleIndex, setRoleIndex] = React.useState(0);
  const [techIndex, setTechIndex] = React.useState(0);

  React.useEffect(() => {
    const roleInterval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);

    const techInterval = setInterval(() => {
      setTechIndex((prev) => (prev + 6) % techStack.length);
    }, 4500);

    return () => {
      clearInterval(roleInterval);
      clearInterval(techInterval);
    };
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

      <div className="w-full max-w-5xl lg:max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center relative z-10">
        {/* Left Column — Text */}
        <motion.div
          className="flex flex-col gap-2 sm:gap-4 order-2 lg:order-1 text-center lg:text-left items-center lg:items-start"
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

          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.1] min-h-[4.5em] xs:min-h-[4.5em] sm:min-h-[4.5em]">
            <TypewriterIntro 
              onComplete={() => {
                // You can add logic here if needed
              }} 
            />
          </h1>

          <div className="h-10 sm:h-12 md:h-14 flex items-center overflow-hidden max-w-[90%] lg:max-w-full mt-4">
            <motion.p
              key={roleIndex}
              className="text-[11px] xs:text-xs sm:text-sm md:text-base text-text-secondary font-light leading-relaxed"
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
            className="flex items-center gap-3 sm:gap-4 mt-2"
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
            className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mt-4 sm:mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <GlowButton
              id="btn-explore-work"
              onClick={() => onNavigate?.(3)}
              className="px-6 py-3 sm:px-8 sm:py-4 text-xs sm:text-sm"
            >
              Ver mi Trabajo
            </GlowButton>
            <OutlineButton
              id="btn-contact-me"
              onClick={() => onNavigate?.(4)}
              className="px-6 py-3 sm:px-8 sm:py-4 text-xs sm:text-sm"
            >
              Contáctame
            </OutlineButton>
          </motion.div>
        </motion.div>

        {/* Right Column — Avatar + Floating Icons */}
        <motion.div
          className="relative flex items-center justify-center order-1 lg:order-2 mb-4 lg:mb-0 min-h-[280px] xs:min-h-[340px] sm:min-h-[440px] md:min-h-[520px] lg:min-h-[600px] w-full max-w-[280px] xs:max-w-[340px] sm:max-w-[440px] md:max-w-[520px] lg:max-w-full mx-auto"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Glow behind avatar */}
          <div className="absolute w-40 h-40 xs:w-56 xs:h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] rounded-full bg-accent/10 blur-[60px] sm:blur-[100px] animate-pulse-glow" />

          {/* Avatar */}
          <motion.img
            src="/assets/avatar.png"
            alt="Ramiro Mota — Avatar 3D"
            className="relative z-10 w-40 h-40 xs:w-52 xs:h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] xl:w-[520px] xl:h-[520px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />

          {/* Floating Tech Icons - Dynamically positioned around avatar */}
          <AnimatePresence mode="popLayout">
            {[0, 1, 2, 3, 4, 5].map((slotIndex) => {
              const tech = techStack[(techIndex + slotIndex) % techStack.length];
              
              // Fixed positions for the 6 slots
              const angles = [210, 330, 45, 150, 280, 10];
              const angle = angles[slotIndex];
              
              return (
                <motion.div
                  key={`${tech.id}-${slotIndex}`}
                  className="absolute z-20"
                  style={{
                    top: `${50 + Math.sin((angle * Math.PI) / 180) * 42}%`,
                    left: `${50 + Math.cos((angle * Math.PI) / 180) * 42}%`,
                  }}
                  initial={{ opacity: 0, scale: 0, rotate: -20 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    rotate: 0,
                    y: [0, slotIndex % 2 === 0 ? -8 : 8, 0],
                    x: [0, slotIndex % 3 === 0 ? 5 : -5, 0]
                  }}
                  exit={{ opacity: 0, scale: 0, rotate: 20 }}
                  transition={{ 
                    opacity: { duration: 0.6 },
                    scale: { duration: 0.6 },
                    rotate: { duration: 0.6 },
                    y: {
                      duration: 3 + (slotIndex * 0.5),
                      repeat: Infinity,
                      ease: "easeInOut"
                    },
                    x: {
                      duration: 4 + (slotIndex * 0.3),
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                >
                  <motion.div 
                    className="glass rounded-lg sm:rounded-xl w-9 h-9 xs:w-11 h-11 sm:w-13 h-13 md:w-16 h-16 shadow-xl border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-md"
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
                      className="w-5 h-5 xs:w-6 h-6 sm:w-7 h-7 md:w-9 h-9 object-contain"
                      style={{ filter: `drop-shadow(0 0 8px ${tech.color}44)` }}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

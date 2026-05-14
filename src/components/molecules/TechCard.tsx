import React from 'react';
import { motion } from 'framer-motion';
import type { TechItem } from '../../types/portfolio';

interface TechCardProps extends TechItem {
  index: number;
  isActive?: boolean;
}

export const TechCard: React.FC<TechCardProps> = ({
  name,
  description,
  logoUrl,
  proficiency,
  color,
  index,
  isActive = true,
}) => {
  const circumference = 2 * Math.PI * 36;
  const strokeDashoffset = circumference - (proficiency / 100) * circumference;

  return (
    <motion.div
      className="
        glass rounded-2xl p-3 sm:p-4 md:p-6
        flex flex-col items-center gap-2 sm:gap-3 md:gap-4
        text-center
        transition-all duration-400
        hover:border-[--card-color]/40
        hover:shadow-[0_0_30px_var(--card-glow)]
        hover:scale-[1.04]
        group cursor-default
      "
      style={{
        '--card-color': color,
        '--card-glow': `${color}25`,
      } as React.CSSProperties}
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={isActive ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Proficiency Ring */}
      <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center">
        <svg className="absolute inset-0 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 -rotate-90" viewBox="0 0 80 80">
          <circle
            cx="40"
            cy="40"
            r="36"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            className="text-white/5"
          />
          <motion.circle
            cx="40"
            cy="40"
            r="36"
            fill="none"
            stroke={color}
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={isActive ? { strokeDashoffset } : { strokeDashoffset: circumference }}
            transition={{ duration: 1.2, delay: index * 0.1 + 0.3, ease: [0.22, 1, 0.36, 1] }}
          />
        </svg>
        <img
          src={logoUrl}
          alt={name}
          className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 object-contain group-hover:scale-110 transition-transform duration-300"
          loading="lazy"
        />
      </div>

      {/* Info */}
      <div>
        <h3 className="text-sm sm:text-base md:text-lg font-bold text-text-primary mb-0.5">{name}</h3>
        <p className="text-[10px] sm:text-xs text-text-secondary font-medium">{description}</p>
      </div>

      {/* Percentage */}
      <span
        className="text-[10px] sm:text-xs font-mono font-medium opacity-60 group-hover:opacity-100 transition-opacity"
        style={{ color }}
      >
        {proficiency}%
      </span>
    </motion.div>
  );
};

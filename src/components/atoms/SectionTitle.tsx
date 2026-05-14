import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  align = 'center',
  className = '',
}) => {
  return (
    <motion.div
      className={`
        mb-6 sm:mb-8 md:mb-14
        ${align === 'center' ? 'text-center' : 'text-left'}
        ${className}
      `}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-2 sm:mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-secondary text-xs sm:text-base md:text-lg font-light tracking-wide uppercase">
          {subtitle}
        </p>
      )}
      <div
        className={`
          mt-3 sm:mt-4 h-0.5 sm:h-1 w-12 sm:w-16 rounded-full bg-gradient-to-r from-accent to-cyan
          ${align === 'center' ? 'mx-auto' : ''}
        `}
      />
    </motion.div>
  );
};

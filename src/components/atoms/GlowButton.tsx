import React from 'react';
import { motion } from 'framer-motion';

interface GlowButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  id?: string;
  disabled?: boolean;
}

export const GlowButton: React.FC<GlowButtonProps> = ({
  children,
  onClick,
  href,
  className = '',
  id,
  disabled = false,
}) => {
  const baseClasses = `
    relative inline-flex items-center justify-center gap-2
    px-7 py-3.5 rounded-xl
    ${disabled ? 'bg-accent/40 cursor-not-allowed grayscale-[0.5] opacity-70' : 'bg-accent hover:bg-accent-hover hover:glow-accent hover:scale-[1.03] active:scale-[0.98] cursor-pointer'}
    text-white font-semibold text-sm
    tracking-wide uppercase
    transition-all duration-300
    focus-visible:outline-2 focus-visible:outline-accent
    ${className}
  `;

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {!disabled && (
        <span className="absolute inset-0 rounded-xl bg-accent opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-40" />
      )}
    </>
  );

  if (href && !disabled) {
    return (
      <motion.a
        href={href}
        id={id}
        className={`group ${baseClasses}`}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={!disabled ? onClick : undefined}
      id={id}
      disabled={disabled}
      className={`group ${baseClasses}`}
      whileHover={disabled ? {} : { scale: 1.03 }}
      whileTap={disabled ? {} : { scale: 0.97 }}
    >
      {content}
    </motion.button>
  );
};

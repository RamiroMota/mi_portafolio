import React from 'react';
import { motion } from 'framer-motion';

interface OutlineButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  id?: string;
  disabled?: boolean;
}

export const OutlineButton: React.FC<OutlineButtonProps> = ({
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
    bg-transparent
    ${disabled ? 'border-border/50 text-text-secondary/50 cursor-not-allowed opacity-60' : 'border-border-hover text-text-primary hover:border-accent hover:text-accent hover:bg-accent/5 active:scale-[0.98] cursor-pointer'}
    font-semibold text-sm tracking-wide uppercase
    transition-all duration-300
    ${className}
  `;

  if (href && !disabled) {
    return (
      <motion.a
        href={href}
        id={id}
        className={baseClasses}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={!disabled ? onClick : undefined}
      id={id}
      disabled={disabled}
      className={baseClasses}
      whileHover={disabled ? {} : { scale: 1.03 }}
      whileTap={disabled ? {} : { scale: 0.97 }}
    >
      {children}
    </motion.button>
  );
};

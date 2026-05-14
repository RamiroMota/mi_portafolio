import React from 'react';
import { motion } from 'framer-motion';

interface OutlineButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  id?: string;
}

export const OutlineButton: React.FC<OutlineButtonProps> = ({
  children,
  onClick,
  href,
  className = '',
  id,
}) => {
  const baseClasses = `
    relative inline-flex items-center justify-center gap-2
    px-7 py-3.5 rounded-xl
    bg-transparent
    border border-border-hover text-text-primary
    font-semibold text-sm tracking-wide uppercase
    transition-all duration-300
    hover:border-accent hover:text-accent hover:bg-accent/5
    active:scale-[0.98]
    cursor-pointer
    ${className}
  `;

  if (href) {
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
      onClick={onClick}
      id={id}
      className={baseClasses}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.button>
  );
};

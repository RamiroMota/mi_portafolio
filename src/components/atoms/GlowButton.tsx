import React from 'react';
import { motion } from 'framer-motion';

interface GlowButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  id?: string;
}

export const GlowButton: React.FC<GlowButtonProps> = ({
  children,
  onClick,
  href,
  className = '',
  id,
}) => {
  const baseClasses = `
    relative inline-flex items-center justify-center gap-2
    px-7 py-3.5 rounded-xl
    bg-accent text-white font-semibold text-sm
    tracking-wide uppercase
    transition-all duration-300
    hover:bg-accent-hover hover:glow-accent hover:scale-[1.03]
    active:scale-[0.98]
    focus-visible:outline-2 focus-visible:outline-accent
    cursor-pointer
    ${className}
  `;

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <span className="absolute inset-0 rounded-xl bg-accent opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-40" />
    </>
  );

  if (href) {
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
      onClick={onClick}
      id={id}
      className={`group ${baseClasses}`}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {content}
    </motion.button>
  );
};

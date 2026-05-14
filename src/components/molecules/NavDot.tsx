import React from 'react';
import { motion } from 'framer-motion';

interface NavDotProps {
  index: number;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export const NavDot: React.FC<NavDotProps> = ({
  index,
  label,
  isActive,
  onClick,
}) => {
  return (
    <motion.button
      onClick={onClick}
      aria-label={`Go to ${label}`}
      className={`
        group relative flex items-center
        w-3 h-3 rounded-full
        transition-all duration-400
        cursor-pointer
        ${
          isActive
            ? 'bg-accent scale-125 shadow-[0_0_12px_rgba(255,107,53,0.5)]'
            : 'bg-white/20 hover:bg-white/40 hover:scale-110'
        }
      `}
      whileHover={{ scale: isActive ? 1.25 : 1.3 }}
      whileTap={{ scale: 0.9 }}
    >
      {/* Tooltip */}
      <span
        className="
          absolute right-6 px-3 py-1.5
          rounded-lg text-xs font-medium whitespace-nowrap
          bg-bg-card-solid text-text-primary
          border border-border
          opacity-0 translate-x-2
          group-hover:opacity-100 group-hover:translate-x-0
          transition-all duration-300
          pointer-events-none
        "
      >
        {label}
      </span>
    </motion.button>
  );
};

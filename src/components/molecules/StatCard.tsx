import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface StatCardProps {
  value: number;
  suffix: string;
  label: string;
  icon: string;
  delay?: number;
  isActive?: boolean;
}

export const StatCard: React.FC<StatCardProps> = ({
  value,
  suffix,
  label,
  icon,
  delay = 0,
  isActive = true,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) {
      setCount(0);
      return;
    }

    let start = 0;
    const duration = 1800;
    const steps = 60;
    const increment = value / steps;
    const stepDuration = duration / steps;

    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(interval);
        } else {
          setCount(Math.floor(start));
        }
      }, stepDuration);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay, isActive]);

  return (
    <motion.div
      className="
        glass rounded-2xl p-3 sm:p-4 md:p-5
        flex flex-col items-center justify-center gap-1 sm:gap-1.5 md:gap-2
        text-center
        transition-all duration-300
        hover:border-accent/30 hover:glow-accent
        group
      "
      initial={{ opacity: 0, y: 30 }}
      animate={isActive ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: delay / 1000, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="text-lg sm:text-xl md:text-2xl mb-0.5 sm:mb-1 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </span>
      <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-text-primary font-[var(--font-display)]">
        {count}
        <span className="text-accent">{suffix}</span>
      </div>
      <p className="text-[10px] xs:text-xs sm:text-sm text-text-secondary font-medium">{label}</p>
    </motion.div>
  );
};

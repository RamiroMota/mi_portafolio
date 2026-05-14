import React from 'react';
import { NavDot } from '../molecules/NavDot';

const slideLabels = ['Inicio', 'Sobre Mí', 'Tech Stack', 'Proyectos', 'Contacto'];

interface SlideNavProps {
  current: number;
  total: number;
  onNavigate: (index: number) => void;
}

export const SlideNav: React.FC<SlideNavProps> = ({
  current,
  total,
  onNavigate,
}) => {
  return (
    <nav
      className="
        fixed right-3 sm:right-4 md:right-6 lg:right-8 xl:right-10
        top-1/2 -translate-y-1/2
        z-50
        flex flex-col items-center gap-2 sm:gap-3 md:gap-4
        hidden md:flex
      "
      aria-label="Slide navigation"
    >
      {Array.from({ length: total }, (_, i) => (
        <NavDot
          key={i}
          index={i}
          label={slideLabels[i] || `Slide ${i + 1}`}
          isActive={i === current}
          onClick={() => onNavigate(i)}
        />
      ))}
    </nav>
  );
};

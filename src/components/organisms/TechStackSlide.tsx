import React from 'react';
import { SectionTitle } from '../atoms/SectionTitle';
import { TechCard } from '../molecules/TechCard';
import { techStack } from '../../data/techStack';

interface TechStackSlideProps {
  isActive?: boolean;
}

export const TechStackSlide: React.FC<TechStackSlideProps> = ({ isActive = true }) => {
  return (
    <div className="w-full h-full flex items-center justify-center px-3 sm:px-6 md:px-10 lg:px-14 xl:px-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full bg-cyan/3 blur-[80px] sm:blur-[100px] max-w-[80vw]" />
        {/* Hex grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      <div className="w-full max-w-3xl sm:max-w-4xl md:max-w-5xl lg:max-w-6xl mx-auto relative z-10 overflow-y-auto overflow-x-hidden py-3 sm:py-4">
        <SectionTitle
          title="Tecnologías Principales"
          subtitle="El Cuarto de Máquinas"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-5">
          {techStack.map((tech, i) => (
            <TechCard
              key={tech.id}
              {...tech}
              index={i}
              isActive={isActive}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

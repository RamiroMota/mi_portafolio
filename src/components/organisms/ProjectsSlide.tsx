import React from 'react';
import { SectionTitle } from '../atoms/SectionTitle';
import { ProjectCard } from '../molecules/ProjectCard';
import { projects } from '../../data/projects';

interface ProjectsSlideProps {
  isActive?: boolean;
}

export const ProjectsSlide: React.FC<ProjectsSlideProps> = ({ isActive = true }) => {
  return (
    <div className="w-full h-full flex items-center justify-center px-3 sm:px-6 md:px-10 lg:px-14 xl:px-16 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-[150px] h-[150px] sm:w-[220px] sm:h-[220px] md:w-[300px] md:h-[300px] rounded-full bg-accent/4 blur-[60px] sm:blur-[80px] max-w-[60vw]" />
      </div>
      <div className="w-full max-w-3xl sm:max-w-4xl md:max-w-5xl lg:max-w-6xl mx-auto relative z-10 overflow-y-auto overflow-x-hidden py-3 sm:py-4">
        <SectionTitle title="Proyectos Destacados" subtitle="Pruebas de Concepto" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} {...project} index={i} isActive={isActive} />
          ))}
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { SectionTitle } from '../atoms/SectionTitle';
import { ProjectCard } from '../molecules/ProjectCard';
import { projects } from '../../data/projects';

interface ProjectsSlideProps {
  isActive?: boolean;
}

export const ProjectsSlide: React.FC<ProjectsSlideProps> = ({ isActive = true }) => {
  const [currentPage, setCurrentPage] = React.useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const paginatedProjects = projects.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className="w-full h-full flex items-center justify-center px-3 sm:px-6 md:px-10 lg:px-14 xl:px-16 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-[150px] h-[150px] sm:w-[220px] sm:h-[220px] md:w-[300px] md:h-[300px] rounded-full bg-accent/4 blur-[60px] sm:blur-[80px] max-w-[60vw]" />
      </div>
      <div className="w-full max-w-3xl sm:max-w-4xl md:max-w-5xl lg:max-w-6xl mx-auto relative z-10 py-3 sm:py-4">
        <SectionTitle 
          title="Proyectos Destacados" 
          subtitle={`Explora mis soluciones (Página ${currentPage + 1} de ${totalPages})`} 
        />
        
        <div className="relative min-h-[400px] sm:min-h-[450px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
            {paginatedProjects.map((project, i) => (
              <ProjectCard key={project.id} {...project} index={i} isActive={isActive} />
            ))}
          </div>
        </div>

        {/* Pagination Controls */}
        <div className="flex items-center justify-center gap-4 mt-6 sm:mt-8">
          <button
            onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
            disabled={currentPage === 0}
            className="p-2 rounded-full glass border border-white/10 text-text-secondary disabled:opacity-30 disabled:cursor-not-allowed hover:text-accent hover:border-accent/30 transition-all"
          >
            ←
          </button>
          
          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentPage === i ? 'bg-accent w-6' : 'bg-white/20'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => setCurrentPage(prev => Math.min(totalPages - 1, prev + 1))}
            disabled={currentPage === totalPages - 1}
            className="p-2 rounded-full glass border border-white/10 text-text-secondary disabled:opacity-30 disabled:cursor-not-allowed hover:text-accent hover:border-accent/30 transition-all"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};

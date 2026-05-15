import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionTitle } from '../atoms/SectionTitle';
import { ProjectCard } from '../molecules/ProjectCard';
import { projects } from '../../data/projects';

interface ProjectsSlideProps {
  isActive?: boolean;
}

export const ProjectsSlide: React.FC<ProjectsSlideProps> = ({ isActive = true }) => {
  const [currentPage, setCurrentPage] = React.useState(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(3);
  const [isSmallMobile, setIsSmallMobile] = React.useState(false);

  React.useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;
      setIsSmallMobile(width < 480);
      
      if (width < 640) setItemsPerPage(1);
      else if (width < 1024) setItemsPerPage(2);
      else setItemsPerPage(3);
    };
    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const totalPages = Math.ceil(projects.length / itemsPerPage);

  React.useEffect(() => {
    if (currentPage >= totalPages) {
      setCurrentPage(0);
    }
  }, [totalPages]);

  const paginatedProjects = projects.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className={`w-full h-full flex items-center justify-center relative overflow-hidden ${isSmallMobile ? 'px-2' : 'px-4 sm:px-8 md:px-12 lg:px-16'}`}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] md:w-[350px] md:h-[350px] rounded-full bg-accent/5 blur-[60px] sm:blur-[100px] max-w-[60vw]" />
      </div>
      
      <div className={`w-full max-w-7xl mx-auto relative z-10 ${isSmallMobile ? 'py-2' : 'py-4 sm:py-6 md:py-8'}`}>
        <div className={isSmallMobile ? 'scale-90 origin-top mb-2' : ''}>
          <SectionTitle 
            title="Proyectos" 
            subtitle={`Página ${currentPage + 1} / ${totalPages}`} 
            className={isSmallMobile ? '!mb-2' : ''}
          />
        </div>
        
        <div className={`relative ${isSmallMobile ? 'min-h-[280px]' : 'min-h-[300px] sm:min-h-[400px] lg:min-h-[450px]'}`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={`${currentPage}-${itemsPerPage}`}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 md:gap-8 lg:gap-10"
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {paginatedProjects.map((project, i) => (
                <div key={project.id} className="h-full flex flex-col items-center">
                  <div className={isSmallMobile ? 'w-[95%] mx-auto scale-95' : 'w-full'}>
                    <ProjectCard {...project} index={i} isActive={isActive} />
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Controls */}
        <div className={`flex items-center justify-center relative z-20 ${isSmallMobile ? 'gap-2 mt-2' : 'gap-5 mt-6 sm:mt-10 md:mt-14'}`}>
          <button
            onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
            disabled={currentPage === 0}
            className={`group rounded-full glass border border-white/10 text-text-secondary disabled:opacity-20 disabled:cursor-not-allowed hover:text-accent hover:border-accent/40 transition-all shadow-lg active:scale-90 ${isSmallMobile ? 'p-1.5' : 'p-3'}`}
          >
            <span className={`${isSmallMobile ? 'text-sm' : 'text-xl sm:text-2xl'} group-hover:-translate-x-1 transition-transform inline-block`}>←</span>
          </button>
          
          <div className={`flex ${isSmallMobile ? 'gap-1.5' : 'gap-3'}`}>
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`transition-all duration-500 ease-out rounded-full ${
                  currentPage === i 
                    ? `${isSmallMobile ? 'w-4 h-1' : 'w-8 sm:w-12 h-2 sm:h-2.5'} bg-accent shadow-[0_0_10px_var(--color-accent)]` 
                    : `${isSmallMobile ? 'w-1 h-1' : 'w-2 sm:w-2.5 h-2 sm:h-2.5'} bg-white/10 hover:bg-white/25`
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => setCurrentPage(prev => Math.min(totalPages - 1, prev + 1))}
            disabled={currentPage === totalPages - 1}
            className={`group rounded-full glass border border-white/10 text-text-secondary disabled:opacity-20 disabled:cursor-not-allowed hover:text-accent hover:border-accent/40 transition-all shadow-lg active:scale-90 ${isSmallMobile ? 'p-1.5' : 'p-3'}`}
          >
            <span className={`${isSmallMobile ? 'text-sm' : 'text-xl sm:text-2xl'} group-hover:translate-x-1 transition-transform inline-block`}>→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

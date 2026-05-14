import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionTitle } from '../atoms/SectionTitle';
import { TechCard } from '../molecules/TechCard';
import { techStack } from '../../data/techStack';

interface TechStackSlideProps {
  isActive?: boolean;
}

export const TechStackSlide: React.FC<TechStackSlideProps> = ({ isActive = true }) => {
  const [currentPage, setCurrentPage] = React.useState(0);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(techStack.length / itemsPerPage);

  const paginatedStack = techStack.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

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

      <div className="w-full max-w-3xl sm:max-w-4xl md:max-w-5xl lg:max-w-6xl mx-auto relative z-10 py-3 sm:py-4">
        <SectionTitle
          title="Tecnologías Principales"
          subtitle={`Página ${currentPage + 1} de ${totalPages}`}
        />

        <div className="relative min-h-[400px] sm:min-h-[450px] md:min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentPage}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-5"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {paginatedStack.map((tech, i) => (
                <TechCard
                  key={tech.id}
                  {...tech}
                  index={i}
                  isActive={isActive}
                />
              ))}
            </motion.div>
          </AnimatePresence>
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

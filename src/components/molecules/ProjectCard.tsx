import React from 'react';
import { motion } from 'framer-motion';
import type { Project } from '../../types/portfolio';
import { SkillBadge } from '../atoms/SkillBadge';

interface ProjectCardProps extends Project {
  index: number;
  isActive?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  technologies,
  caseStudyUrl,
  liveDemoUrl,
  index,
  isActive = true,
}) => {
  return (
    <motion.div
      className="
        glass rounded-2xl overflow-hidden
        flex flex-col
        transition-all duration-400
        hover:border-accent/30
        hover:shadow-[0_8px_40px_rgba(255,107,53,0.12)]
        hover:scale-[1.02]
        group
      "
      initial={{ opacity: 0, y: 40 }}
      animate={isActive ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-36 sm:h-40 md:h-44 md:h-48">
        <img
          src={imageUrl}
          alt={title}
          className="
            w-full h-full object-cover
            transition-transform duration-500
            group-hover:scale-110
          "
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/90 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 gap-2 sm:gap-3">
        <h3 className="text-base sm:text-lg font-bold text-text-primary leading-tight">
          {title}
        </h3>
        <p className="text-text-secondary text-xs sm:text-sm leading-relaxed line-clamp-2 flex-1">
          {description}
        </p>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1 sm:gap-1.5 mt-1">
          {technologies.slice(0, 4).map((tech) => (
            <SkillBadge key={tech} label={tech} color="#94a3b8" />
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-2 sm:gap-2.5 mt-1 sm:mt-2">
          {caseStudyUrl && (
            <a
              href={caseStudyUrl}
              className="
                flex-1 text-center px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl
                bg-accent/10 text-accent
                text-[10px] sm:text-xs font-semibold uppercase tracking-wider
                border border-accent/20
                transition-all duration-300
                hover:bg-accent hover:text-white
              "
            >
              Case Study
            </a>
          )}
          {liveDemoUrl && (
            <a
              href={liveDemoUrl}
              className="
                flex-1 text-center px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl
                bg-cyan/10 text-cyan
                text-[10px] sm:text-xs font-semibold uppercase tracking-wider
                border border-cyan/20
                transition-all duration-300
                hover:bg-cyan hover:text-bg-primary
              "
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

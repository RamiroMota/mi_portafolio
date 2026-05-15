import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../atoms/SectionTitle';
import { StatCard } from '../molecules/StatCard';

const stats = [
  { id: 'experience', value: 5, suffix: '+', label: 'Años de Experiencia', icon: '⚡' },
  { id: 'projects', value: 50, suffix: '+', label: 'Proyectos Terminados', icon: '🚀' },
  { id: 'commits', value: 10, suffix: 'K+', label: 'Commits en GitHub', icon: '💻' },
  { id: 'clients', value: 30, suffix: '+', label: 'Clientes Satisfechos', icon: '🤝' },
];

interface AboutSlideProps {
  isActive?: boolean;
}

export const AboutSlide: React.FC<AboutSlideProps> = ({ isActive = true }) => {
  return (
    <div className="w-full h-full flex items-center justify-center px-3 sm:px-6 md:px-10 lg:px-14 xl:px-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-[180px] h-[180px] sm:w-[250px] sm:h-[250px] md:w-[350px] md:h-[350px] rounded-full bg-fuchsia-500/5 blur-[60px] sm:blur-[80px] max-w-[60vw]" />
        <div className="absolute bottom-1/3 right-1/4 w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[280px] md:h-[280px] rounded-full bg-accent/4 blur-[50px] sm:blur-[70px] max-w-[60vw]" />
      </div>

      <div className="w-full max-w-4xl md:max-w-5xl lg:max-w-6xl mx-auto relative z-10 overflow-y-auto overflow-x-hidden py-3 sm:py-4">
        <SectionTitle
          title="Filosofía de Diseño y Código"
          subtitle="La Síntesis"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-start">
          {/* Left — Philosophy Text */}
          <motion.div
            className="flex flex-col gap-3 sm:gap-4"
            initial={{ opacity: 0, x: -40 }}
            animate={isActive ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* UI Design Card */}
            <div className="glass rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5">
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg sm:rounded-xl bg-accent/15 flex items-center justify-center text-accent text-sm sm:text-base">
                  🎨
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-text-primary">Pensamiento de Diseño UI</h3>
              </div>
              <ul className="space-y-1 sm:space-y-1.5 text-text-secondary text-xs sm:text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Wireframes y Prototipado
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Arquitectura de Flujo de Usuario
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Sistemas de Diseño de Componentes
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Diseño Accesible e Inclusivo
                </li>
              </ul>
            </div>

            {/* Engineering Card */}
            <div className="glass rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5">
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg sm:rounded-xl bg-amber-400/15 flex items-center justify-center text-amber-400 text-sm sm:text-base">
                  ⚙️
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-text-primary">Rigor en la Ingeniería</h3>
              </div>
              <ul className="space-y-1 sm:space-y-1.5 text-text-secondary text-xs sm:text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  Arquitectura de Código Limpio
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  Optimización de Rendimiento
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  Tipado Seguro y Pruebas
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  CI/CD y DevOps
                </li>
              </ul>
            </div>

            {/* AI & Automation Card */}
            <div className="glass rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5">
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg sm:rounded-xl bg-cyan-400/15 flex items-center justify-center text-cyan-400 text-sm sm:text-base">
                  🤖
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-text-primary">IA & Automatización</h3>
              </div>
              <ul className="space-y-1 sm:space-y-1.5 text-text-secondary text-xs sm:text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  Agentes MCP & Orquestación
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  Automatización de Workflows
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  Integración de LLMs en Apps
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  Optimización con Agentes IA
                </li>
              </ul>
            </div>

            {/* Tool Icons Row */}
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
              {['Figma', 'AstroJS', 'React', 'TypeScript', 'MCP', 'Claude', 'OpenAI'].map((tool) => (
                <div
                  key={tool}
                  className="glass rounded-lg sm:rounded-xl px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-mono text-text-secondary"
                >
                  {tool}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Stats Grid */}
          <motion.div
            className="flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-col gap-3 sm:gap-4 lg:h-full"
            initial={{ opacity: 0, x: 40 }}
            animate={isActive ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* First two stats */}
            <StatCard {...stats[0]} delay={500} isActive={isActive} className="sm:col-span-1 lg:flex-1" />
            <StatCard {...stats[1]} delay={700} isActive={isActive} className="sm:col-span-1 lg:flex-1" />
            
            {/* Last two stats */}
            <StatCard {...stats[2]} delay={900} isActive={isActive} className="sm:col-span-1 lg:flex-1" />
            <StatCard {...stats[3]} delay={1100} isActive={isActive} className="sm:col-span-1 lg:flex-1" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

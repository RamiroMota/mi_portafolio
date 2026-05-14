import type { Project } from '../types/portfolio';

export const projects: Project[] = [
  {
    id: 'ecommerce',
    title: 'E-Commerce con Astro y React',
    description: 'Sitio de e-commerce de alto rendimiento construido con Astro para SSG y React para componentes interactivos. Incluye carrito dinámico, búsqueda y filtrado.',
    imageUrl: '/assets/project-1.png',
    technologies: ['AstroJS', 'React', 'TailwindCSS', 'Stripe'],
    caseStudyUrl: '#',
    liveDemoUrl: '#',
  },
  {
    id: 'dashboard',
    title: 'Panel de Administración en Tiempo Real',
    description: 'Panel de administración en tiempo real con visualización de datos avanzada, autenticación, roles de usuario y reportes automatizados.',
    imageUrl: '/assets/project-2.png',
    technologies: ['React', 'NodeJS', 'PostgreSQL', 'Redis'],
    caseStudyUrl: '#',
    liveDemoUrl: '#',
  },
  {
    id: 'components',
    title: 'Librería de Componentes UI',
    description: 'Biblioteca de componentes reutilizables con sistema de diseño completo, documentación interactiva y testing automatizado.',
    imageUrl: '/assets/project-3.png',
    technologies: ['React', 'TypeScript', 'Storybook', 'Vitest'],
    caseStudyUrl: '#',
    liveDemoUrl: '#',
  },
];

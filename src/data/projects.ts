import type { Project } from '../types/portfolio';

export const projects: Project[] = [
  {
    id: 'secuencia-didactica',
    title: 'Secuencia Didáctica Posgrados',
    description: 'Secuencia Didáctica para el Análisis y desarrollo de la estructura de una clase de estudio de la Universidad Pablo Guardado Chávez.',
    imageUrl: '/assets/project-1.png',
    technologies: ['NextJS', 'TypeScript', 'React', 'TailwindCSS', 'Shadcn UI', 'API word', 'API Gmail', 'nodemailer'],
    caseStudyUrl: 'https://github.com/RamiroMota/secuencia-didactica',
    liveDemoUrl: 'https://secuencia-posgrado.netlify.app/',
  },
  {
    id: 'evaluación-personal',
    title: 'Evaluación del personal',
    description: 'Aplicación web para la evaluación del personal con base a los indicadores de  desempeño de la Universidad Pablo Guardado Chávez .',
    imageUrl: '/assets/project-2.png',
    technologies: ['NextJS', 'TypeScript', 'React', 'TailwindCSS', 'Shadcn UI', 'react-pdf', 'react-hook-form'],
    caseStudyUrl: 'https://github.com/RamiroMota/evaluacion-personal',
    liveDemoUrl: 'https://portal-academico-test.netlify.app/',
  },
  {
    id: 'Script-Extraer-URL',
    title: 'Script para Extraer URLs de constancias PDF',
    description: 'Se realizo un script para extraer las URLs de las constancias con la intension de automatizar el proceso de extracción en el proceso de entrega de constancias de la Universidad Pablo Guardado Chávez.',
    imageUrl: '/assets/project-3.png',
    technologies: ['JavaScript', 'Google Apps Script', 'Gmail API', 'Google Drive API'],
    caseStudyUrl: 'https://github.com/RamiroMota/Script-automaticos/blob/main/Script-Automatizaci%C3%B3n/Extraer-URL/extraer-URL.gs',
  },
  {
    id: 'Script-automatizar-entrega-constancias',
    title: 'Script para Automatizar la Entrega de Constancias',
    description: 'Script para automatizar el proceso de entrega de constancias de la Universidad Pablo Guardado Chávez.',
    imageUrl: '/assets/project-1.png',
    technologies: ['JavaScript', 'Google Apps Script', 'Gmail API', 'Google Drive API', 'nodemailer'],
    caseStudyUrl: 'https://github.com/RamiroMota/Script-automaticos/tree/main/Script-Automatizaci%C3%B3n/Colaboradores%20Aprobados',
  },
  {
    id: 'Script-automatizar-minutas',
    title: 'Script para Automatizar el Formato de Minutas',
    description: 'Script para automatizar el proceso de generación de minutas para el Comité para el Desarrollo Docente de la Universidad Pablo Guardado Chávez.',
    imageUrl: '/assets/project-2.png',
    technologies: ['JavaScript', 'Google Apps Script', 'Gmail API', 'Google Drive API', 'nodemailer'],
    caseStudyUrl: 'https://github.com/RamiroMota/Script-automaticos/tree/main/Script-Automatizaci%C3%B3n/Formato%20Minutas%20-%20Comit%C3%A9%20Para%20El%20Desarrollo%20Docente',
  },
  {
    id: 'Data-studio-CES',
    title: 'Data Studio CES Altas',
    description: 'Dashboard de análisis de datos para medir el las altas a los cursos a la plataforma de Partners In Healt ONG asociada a Jhonson & Jhonson.',
    imageUrl: '/assets/project-2.png',
    technologies: ['Google Data Studio', 'Google Sheets', 'Google Apps Script'],
    liveDemoUrl: 'https://datastudio.google.com/s/vZ1qjmIQdUw',
  },
];

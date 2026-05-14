// ─── Portfolio Type Definitions ───

export interface SocialLink {
  name: string;
  url: string;
  icon: string; // react-icons identifier
}

export interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

export interface TechItem {
  id: string;
  name: string;
  description: string;
  logoUrl: string;
  proficiency: number; // 0-100
  color: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  caseStudyUrl?: string;
  liveDemoUrl?: string;
  githubUrl?: string;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export type SlideDirection = 'up' | 'down';

export interface SlideProps {
  isActive: boolean;
  direction: SlideDirection;
}

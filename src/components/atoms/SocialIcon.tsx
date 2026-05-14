import React from 'react';
import { motion } from 'framer-motion';
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from 'react-icons/fa';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaTiktok,
};

interface SocialIconProps {
  name: string;
  url: string;
  icon: string;
}

export const SocialIcon: React.FC<SocialIconProps> = ({ name, url, icon }) => {
  const IconComponent = iconMap[icon];

  if (!IconComponent) return null;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={name}
      className="
        flex items-center justify-center
        w-10 h-10 rounded-xl
        bg-white/5 border border-border
        text-text-secondary
        transition-all duration-300
        hover:text-accent hover:border-accent/40 hover:bg-accent/10
        hover:scale-110
      "
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.92 }}
    >
      <IconComponent className="w-4 h-4" />
    </motion.a>
  );
};

import React, { memo } from 'react';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  gradient?: 'accent' | 'cool';
}

const gradientMap = {
  accent: 'bg-gradient-to-r from-[#ff6b35] via-[#ff9f6b] to-[#22d3ee]',
  cool: 'bg-gradient-to-r from-[#22d3ee] to-[#8b5cf6]',
};

export const GradientText: React.FC<GradientTextProps> = memo(({
  children,
  className = '',
  as: Tag = 'span',
  gradient = 'accent',
}) => {
  return (
    <Tag
      className={`bg-clip-text text-transparent ${gradientMap[gradient]} ${className}`}
    >
      {children}
    </Tag>
  );
});

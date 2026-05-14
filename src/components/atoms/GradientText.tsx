import React, { memo } from 'react';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  gradient?: 'accent' | 'cool';
}

const gradientMap = {
  accent: 'bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500',
  cool: 'bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-500',
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

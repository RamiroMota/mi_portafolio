import React, { memo } from 'react';

interface SkillBadgeProps {
  label: string;
  color?: string;
  className?: string;
}

export const SkillBadge: React.FC<SkillBadgeProps> = memo(({
  label,
  color = '#d946ef',
  className = '',
}) => {
  return (
    <span
      className={`
        inline-flex items-center gap-1.5 px-3 py-1
        rounded-full text-xs font-medium
        border transition-all duration-200
        hover:scale-105
        ${className}
      `}
      style={{
        color,
        borderColor: `${color}33`,
        backgroundColor: `${color}12`,
      }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full"
        style={{ backgroundColor: color }}
      />
      {label}
    </span>
  );
});

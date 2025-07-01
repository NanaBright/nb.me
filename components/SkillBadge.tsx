// components/SkillBadge.tsx
import React from "react";

interface SkillBadgeProps {
  icon: string; // URL to the icon or name of a local image
  name: string;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({ icon, name }) => {
  return (
    <div className="flex items-center gap-2 px-3 py-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg shadow-sm">
      <img src={icon} alt={name} className="w-5 h-5" />
      <span className="text-sm font-medium text-zinc-800 dark:text-white">{name}</span>
    </div>
  );
};
import React from 'react';

interface SkillBadgeProps {
  children: React.ReactNode;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ children }) => {
  return (
    <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors">
      {children}
    </span>
  );
};

export default SkillBadge;
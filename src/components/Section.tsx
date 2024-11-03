import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children, icon }) => {
  return (
    <section id={id} className="mb-16">
      <div className="flex items-center mb-8">
        {icon && <span className="text-purple-600 mr-3">{icon}</span>}
        <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
      </div>
      {children}
    </section>
  );
};

export default Section;
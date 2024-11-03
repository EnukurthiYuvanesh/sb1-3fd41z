import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

interface CertificationCardProps {
  title: string;
  link: string;
}

const CertificationCard: React.FC<CertificationCardProps> = ({ title, link }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300">
      <div className="flex items-start">
        <Award className="text-purple-600 mr-3 flex-shrink-0" size={24} />
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
          {link !== "#" && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-purple-600 hover:text-purple-700 transition-colors text-sm"
            >
              View Certificate <ExternalLink size={14} className="ml-1" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default CertificationCard;
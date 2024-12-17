import React from 'react';
import { Experience } from '../../types';
import { Building2 } from 'lucide-react';

interface ExperienceListProps {
  experiences: Experience[];
}

export const ExperienceList: React.FC<ExperienceListProps> = ({ experiences }) => (
  <div className="mb-6">
    <h3 className="text-lg font-semibold mb-2 flex items-center">
      <Building2 className="w-5 h-5 mr-2" />
      Experience
    </h3>
    {experiences.map((exp) => (
      <div key={exp.id} className="mb-4">
        <h4 className="font-medium">{exp.position}</h4>
        <p className="text-gray-600">{exp.company}</p>
        <p className="text-sm text-gray-500">
          {exp.startDate} - {exp.endDate}
        </p>
        <p className="text-gray-700 mt-1">{exp.description}</p>
      </div>
    ))}
  </div>
);
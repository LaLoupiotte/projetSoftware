import React from 'react';
import { Education } from '../../types';
import { GraduationCap } from 'lucide-react';

interface EducationListProps {
  education: Education[];
}

export const EducationList: React.FC<EducationListProps> = ({ education }) => (
  <div className="mb-6">
    <h3 className="text-lg font-semibold mb-2 flex items-center">
      <GraduationCap className="w-5 h-5 mr-2" />
      Education
    </h3>
    {education.map((edu) => (
      <div key={edu.id} className="mb-4">
        <h4 className="font-medium">{edu.school}</h4>
        <p className="text-gray-600">
          {edu.degree} in {edu.field}
        </p>
        <p className="text-sm text-gray-500">
          {edu.startDate} - {edu.endDate}
        </p>
      </div>
    ))}
  </div>
);
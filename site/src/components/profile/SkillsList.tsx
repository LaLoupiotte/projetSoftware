import React from 'react';
import { Skill } from '../../types';

interface SkillsListProps {
  skills: Skill[];
}

export const SkillsList: React.FC<SkillsListProps> = ({ skills }) => (
  <div className="mb-6">
    <h3 className="text-lg font-semibold mb-2">Skills</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill.id}
          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
        >
          {skill.name}
        </span>
      ))}
    </div>
  </div>
);
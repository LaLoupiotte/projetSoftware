import React from 'react';
import { Skill } from '../../../types';
import { PlusCircle, Trash2 } from 'lucide-react';

interface SkillsFormProps {
  skills: Skill[];
  onChange: (skills: Skill[]) => void;
}

export const SkillsForm: React.FC<SkillsFormProps> = ({ skills, onChange }) => {
  const addSkill = () => {
    onChange([...skills, { id: Date.now().toString(), name: '' }]);
  };

  const removeSkill = (id: string) => {
    onChange(skills.filter(skill => skill.id !== id));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <label className="block text-sm font-medium text-gray-700">Skills</label>
        <button
          type="button"
          onClick={addSkill}
          className="text-blue-600 hover:text-blue-800 flex items-center"
        >
          <PlusCircle className="w-4 h-4 mr-1" /> Add Skill
        </button>
      </div>
      {skills.map((skill, index) => (
        <div key={skill.id} className="flex gap-2 mb-2">
          <input
            type="text"
            value={skill.name}
            onChange={e => {
              const newSkills = [...skills];
              newSkills[index] = { ...skill, name: e.target.value };
              onChange(newSkills);
            }}
            className="flex-1 rounded-md border border-gray-300 px-3 py-2"
            placeholder="Skill name"
          />
          <button
            type="button"
            onClick={() => removeSkill(skill.id)}
            className="text-red-600 hover:text-red-800"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      ))}
    </div>
  );
};
import React from 'react';
import { Experience } from '../../../types';
import { PlusCircle, Trash2 } from 'lucide-react';

interface ExperienceFormProps {
  experiences: Experience[];
  onChange: (experiences: Experience[]) => void;
}

export const ExperienceForm: React.FC<ExperienceFormProps> = ({ experiences, onChange }) => {
  const addExperience = () => {
    onChange([...experiences, {
      id: Date.now().toString(),
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      description: ''
    }]);
  };

  const removeExperience = (id: string) => {
    onChange(experiences.filter(exp => exp.id !== id));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <label className="block text-sm font-medium text-gray-700">Experience</label>
        <button
          type="button"
          onClick={addExperience}
          className="text-blue-600 hover:text-blue-800 flex items-center"
        >
          <PlusCircle className="w-4 h-4 mr-1" /> Add Experience
        </button>
      </div>
      {experiences.map((exp, index) => (
        <div key={exp.id} className="border rounded-md p-4 mb-4">
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => removeExperience(exp.id)}
              className="text-red-600 hover:text-red-800"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              value={exp.company}
              onChange={e => {
                const newExp = [...experiences];
                newExp[index] = { ...exp, company: e.target.value };
                onChange(newExp);
              }}
              className="rounded-md border border-gray-300 px-3 py-2"
              placeholder="Company"
            />
            <input
              type="text"
              value={exp.position}
              onChange={e => {
                const newExp = [...experiences];
                newExp[index] = { ...exp, position: e.target.value };
                onChange(newExp);
              }}
              className="rounded-md border border-gray-300 px-3 py-2"
              placeholder="Position"
            />
            <input
              type="text"
              value={exp.startDate}
              onChange={e => {
                const newExp = [...experiences];
                newExp[index] = { ...exp, startDate: e.target.value };
                onChange(newExp);
              }}
              className="rounded-md border border-gray-300 px-3 py-2"
              placeholder="Start Date (YYYY-MM)"
            />
            <input
              type="text"
              value={exp.endDate}
              onChange={e => {
                const newExp = [...experiences];
                newExp[index] = { ...exp, endDate: e.target.value };
                onChange(newExp);
              }}
              className="rounded-md border border-gray-300 px-3 py-2"
              placeholder="End Date (YYYY-MM or present)"
            />
            <textarea
              value={exp.description}
              onChange={e => {
                const newExp = [...experiences];
                newExp[index] = { ...exp, description: e.target.value };
                onChange(newExp);
              }}
              className="col-span-2 rounded-md border border-gray-300 px-3 py-2"
              placeholder="Description"
              rows={2}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
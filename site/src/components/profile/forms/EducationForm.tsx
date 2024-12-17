import React from 'react';
import { Education } from '../../../types';
import { PlusCircle, Trash2 } from 'lucide-react';

interface EducationFormProps {
  education: Education[];
  onChange: (education: Education[]) => void;
}

export const EducationForm: React.FC<EducationFormProps> = ({ education, onChange }) => {
  const addEducation = () => {
    onChange([...education, {
      id: Date.now().toString(),
      school: '',
      degree: '',
      field: '',
      startDate: '',
      endDate: ''
    }]);
  };

  const removeEducation = (id: string) => {
    onChange(education.filter(edu => edu.id !== id));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <label className="block text-sm font-medium text-gray-700">Education</label>
        <button
          type="button"
          onClick={addEducation}
          className="text-blue-600 hover:text-blue-800 flex items-center"
        >
          <PlusCircle className="w-4 h-4 mr-1" /> Add Education
        </button>
      </div>
      {education.map((edu, index) => (
        <div key={edu.id} className="border rounded-md p-4 mb-4">
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => removeEducation(edu.id)}
              className="text-red-600 hover:text-red-800"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              value={edu.school}
              onChange={e => {
                const newEdu = [...education];
                newEdu[index] = { ...edu, school: e.target.value };
                onChange(newEdu);
              }}
              className="rounded-md border border-gray-300 px-3 py-2"
              placeholder="School"
            />
            <input
              type="text"
              value={edu.degree}
              onChange={e => {
                const newEdu = [...education];
                newEdu[index] = { ...edu, degree: e.target.value };
                onChange(newEdu);
              }}
              className="rounded-md border border-gray-300 px-3 py-2"
              placeholder="Degree"
            />
            <input
              type="text"
              value={edu.field}
              onChange={e => {
                const newEdu = [...education];
                newEdu[index] = { ...edu, field: e.target.value };
                onChange(newEdu);
              }}
              className="rounded-md border border-gray-300 px-3 py-2"
              placeholder="Field of Study"
            />
            <div className="col-span-2 grid grid-cols-2 gap-4">
              <input
                type="text"
                value={edu.startDate}
                onChange={e => {
                  const newEdu = [...education];
                  newEdu[index] = { ...edu, startDate: e.target.value };
                  onChange(newEdu);
                }}
                className="rounded-md border border-gray-300 px-3 py-2"
                placeholder="Start Year"
              />
              <input
                type="text"
                value={edu.endDate}
                onChange={e => {
                  const newEdu = [...education];
                  newEdu[index] = { ...edu, endDate: e.target.value };
                  onChange(newEdu);
                }}
                className="rounded-md border border-gray-300 px-3 py-2"
                placeholder="End Year"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
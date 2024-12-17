import React from 'react';
import { CandidateProfile } from '../types';
import { useAuth } from '../contexts/AuthContext';
import { PlusCircle, Trash2 } from 'lucide-react';

interface EditProfileFormProps {
  profile: CandidateProfile;
  onCancel: () => void;
}

export const EditProfileForm: React.FC<EditProfileFormProps> = ({ profile, onCancel }) => {
  const { updateProfile } = useAuth();
  const [formData, setFormData] = React.useState({
    name: profile.name,
    email: profile.email,
    bio: profile.bio,
    skills: [...profile.skills],
    experiences: [...profile.experiences],
    education: [...profile.education]
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile(formData);
    onCancel();
  };

  const addSkill = () => {
    setFormData(prev => ({
      ...prev,
      skills: [...prev.skills, { id: Date.now().toString(), name: '' }]
    }));
  };

  const removeSkill = (id: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill.id !== id)
    }));
  };

  const addExperience = () => {
    setFormData(prev => ({
      ...prev,
      experiences: [...prev.experiences, {
        id: Date.now().toString(),
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        description: ''
      }]
    }));
  };

  const removeExperience = (id: string) => {
    setFormData(prev => ({
      ...prev,
      experiences: prev.experiences.filter(exp => exp.id !== id)
    }));
  };

  const addEducation = () => {
    setFormData(prev => ({
      ...prev,
      education: [...prev.education, {
        id: Date.now().toString(),
        school: '',
        degree: '',
        field: '',
        startDate: '',
        endDate: ''
      }]
    }));
  };

  const removeEducation = (id: string) => {
    setFormData(prev => ({
      ...prev,
      education: prev.education.filter(edu => edu.id !== id)
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Bio</label>
        <textarea
          value={formData.bio}
          onChange={e => setFormData(prev => ({ ...prev, bio: e.target.value }))}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
          rows={3}
        />
      </div>

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
        {formData.skills.map((skill, index) => (
          <div key={skill.id} className="flex gap-2 mb-2">
            <input
              type="text"
              value={skill.name}
              onChange={e => {
                const newSkills = [...formData.skills];
                newSkills[index] = { ...skill, name: e.target.value };
                setFormData(prev => ({ ...prev, skills: newSkills }));
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
        {formData.experiences.map((exp, index) => (
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
                  const newExp = [...formData.experiences];
                  newExp[index] = { ...exp, company: e.target.value };
                  setFormData(prev => ({ ...prev, experiences: newExp }));
                }}
                className="rounded-md border border-gray-300 px-3 py-2"
                placeholder="Company"
              />
              <input
                type="text"
                value={exp.position}
                onChange={e => {
                  const newExp = [...formData.experiences];
                  newExp[index] = { ...exp, position: e.target.value };
                  setFormData(prev => ({ ...prev, experiences: newExp }));
                }}
                className="rounded-md border border-gray-300 px-3 py-2"
                placeholder="Position"
              />
              <input
                type="text"
                value={exp.startDate}
                onChange={e => {
                  const newExp = [...formData.experiences];
                  newExp[index] = { ...exp, startDate: e.target.value };
                  setFormData(prev => ({ ...prev, experiences: newExp }));
                }}
                className="rounded-md border border-gray-300 px-3 py-2"
                placeholder="Start Date (YYYY-MM)"
              />
              <input
                type="text"
                value={exp.endDate}
                onChange={e => {
                  const newExp = [...formData.experiences];
                  newExp[index] = { ...exp, endDate: e.target.value };
                  setFormData(prev => ({ ...prev, experiences: newExp }));
                }}
                className="rounded-md border border-gray-300 px-3 py-2"
                placeholder="End Date (YYYY-MM or present)"
              />
              <textarea
                value={exp.description}
                onChange={e => {
                  const newExp = [...formData.experiences];
                  newExp[index] = { ...exp, description: e.target.value };
                  setFormData(prev => ({ ...prev, experiences: newExp }));
                }}
                className="col-span-2 rounded-md border border-gray-300 px-3 py-2"
                placeholder="Description"
                rows={2}
              />
            </div>
          </div>
        ))}
      </div>

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
        {formData.education.map((edu, index) => (
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
                  const newEdu = [...formData.education];
                  newEdu[index] = { ...edu, school: e.target.value };
                  setFormData(prev => ({ ...prev, education: newEdu }));
                }}
                className="rounded-md border border-gray-300 px-3 py-2"
                placeholder="School"
              />
              <input
                type="text"
                value={edu.degree}
                onChange={e => {
                  const newEdu = [...formData.education];
                  newEdu[index] = { ...edu, degree: e.target.value };
                  setFormData(prev => ({ ...prev, education: newEdu }));
                }}
                className="rounded-md border border-gray-300 px-3 py-2"
                placeholder="Degree"
              />
              <input
                type="text"
                value={edu.field}
                onChange={e => {
                  const newEdu = [...formData.education];
                  newEdu[index] = { ...edu, field: e.target.value };
                  setFormData(prev => ({ ...prev, education: newEdu }));
                }}
                className="rounded-md border border-gray-300 px-3 py-2"
                placeholder="Field of Study"
              />
              <div className="col-span-2 grid grid-cols-2 gap-4">
                <input
                  type="text"
                  value={edu.startDate}
                  onChange={e => {
                    const newEdu = [...formData.education];
                    newEdu[index] = { ...edu, startDate: e.target.value };
                    setFormData(prev => ({ ...prev, education: newEdu }));
                  }}
                  className="rounded-md border border-gray-300 px-3 py-2"
                  placeholder="Start Year"
                />
                <input
                  type="text"
                  value={edu.endDate}
                  onChange={e => {
                    const newEdu = [...formData.education];
                    newEdu[index] = { ...edu, endDate: e.target.value };
                    setFormData(prev => ({ ...prev, education: newEdu }));
                  }}
                  className="rounded-md border border-gray-300 px-3 py-2"
                  placeholder="End Year"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
};